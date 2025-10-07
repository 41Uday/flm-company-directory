import { Card, Stack, Avatar, Typography, Chip, Tooltip } from "@mui/material";

export default function CompanyCard({ company }) {
  return (
    <Card
      sx={{
        minWidth: 250,
        width: "100%",
        maxWidth: 418,
        height: 180,
        borderRadius: 3,
        boxShadow: 3,
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
        flexShrink: 0,
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar src={company.logo} alt={company.name} sx={{ width: 56, height: 56, borderRadius: 2 }} />
        <Tooltip title={company.name}>
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
          >
            {company.name}
          </Typography>
        </Tooltip>
      </Stack>

      <Tooltip title={company.description}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
          textAlign='start'
        >
          {company.description}
        </Typography>
      </Tooltip>

      <Stack direction="row" spacing={1} mt={1}>
        <Chip label={company.location} color="primary" variant="outlined" size="small" />
        <Chip label={company.industry} color="secondary" variant="outlined" size="small" />
      </Stack>
    </Card>
  );
}
