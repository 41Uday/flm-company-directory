import React from "react";
import { Box, TextField, MenuItem, FormControl, InputLabel, Select } from "@mui/material";

export default function Filters({ search, setSearch, location, setLocation, industry, setIndustry, sortOrder, setSortOrder, locations, industries }) {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3, width: "100%" }}>
      <TextField
        label="Search by name"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ flex: "1 1 250px", minWidth: 200 }}
      />

      <TextField
        select
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        sx={{ flex: "1 1 200px", minWidth: 150 }}
      >
        <MenuItem value="">All Locations</MenuItem>
        {locations.map((loc) => (
          <MenuItem key={loc} value={loc}>{loc}</MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Industry"
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        sx={{ flex: "1 1 200px", minWidth: 150 }}
      >
        <MenuItem value="">All Industries</MenuItem>
        {industries.map((ind) => (
          <MenuItem key={ind} value={ind}>{ind}</MenuItem>
        ))}
      </TextField>

      <FormControl sx={{ flex: "1 1 150px", minWidth: 120 }}>
        <InputLabel>Sort by Name</InputLabel>
        <Select value={sortOrder} label="Sort by Name" onChange={(e) => setSortOrder(e.target.value)}>
          <MenuItem value="asc">A → Z</MenuItem>
          <MenuItem value="desc">Z → A</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
