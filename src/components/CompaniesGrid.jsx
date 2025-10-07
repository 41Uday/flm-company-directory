import React from "react";
import { Box, Typography, Pagination } from "@mui/material";
import CompanyCard from "./CompanyCard";

export default function CompaniesGrid({ paginatedCompanies, totalPages, page, setPage }) {
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3 }}>
        {paginatedCompanies.length ? (
          paginatedCompanies.map((company) => (<CompanyCard key={company.id} company={company} />))
        ) : (
          <Typography variant="h6" sx={{ mt: 4, width: "100%", textAlign: "center" }}>
            No companies found.
          </Typography>
        )}
      </Box>

      {totalPages > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination count={totalPages} page={page} onChange={(e, value) => setPage(value)} color="primary" shape="rounded" />
        </Box>
      )}
    </>
  );
}
