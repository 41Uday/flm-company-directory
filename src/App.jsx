import React, { useState, useEffect, useMemo } from "react";
import { Container, Box, Typography, CircularProgress, Button, useTheme, useMediaQuery } from "@mui/material";
import Filters from "./components/Filters";
import CompaniesGrid from "./components/CompaniesGrid";

export default function App() {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));

  let itemsPerPage = 12;
  if (isSmall) itemsPerPage = 4;
  else if (isMedium) itemsPerPage = 6;

  const fetchCompanies = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/src/api/companies.json");
      if (!response.ok) {
        setError("Failed to fetch companies");
        setLoading(false);
        return;
      }
      await new Promise(res => setTimeout(res, 2000));
      const data = await response.json();
      setCompanies(data);
    } catch (err) {
      setError(err.message || "Failed to fetch companies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  useEffect(() => setPage(1), [search, location, industry, sortOrder]);

  const filteredCompanies = useMemo(() => {
    let data = companies.filter(
      (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) &&
        (location ? c.location === location : true) &&
        (industry ? c.industry === industry : true)
    );

    data.sort((a, b) => (sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
    return data;
  }, [companies, search, location, industry, sortOrder]);

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedCompanies = filteredCompanies.slice(startIndex, startIndex + itemsPerPage);

  const locations = [...new Set(companies.map((c) => c.location))];
  const industries = [...new Set(companies.map((c) => c.industry))];

  return (
    <Container maxWidth={false} sx={{ p: 2 }}>
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h4" fontWeight={700} mb={3}>
          Companies Directory
        </Typography>

        <Filters
          search={search} setSearch={setSearch}
          location={location} setLocation={setLocation}
          industry={industry} setIndustry={setIndustry}
          sortOrder={sortOrder} setSortOrder={setSortOrder}
          locations={locations} industries={industries}
        />

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Box sx={{ textAlign: "center", py: 10 }}>
            <Typography color="error" variant="h6">{error}</Typography>
            <Button variant="contained" onClick={fetchCompanies} sx={{ mt: 2 }}>Retry</Button>
          </Box>
        ) : (
          <CompaniesGrid
            paginatedCompanies={paginatedCompanies}
            totalPages={totalPages}
            page={page}
            setPage={setPage}
          />
        )}
      </Box>
    </Container>
  );
}
