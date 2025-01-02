import { Box, Typography, Button } from "@mui/material";
import { Phone, Mail } from "@mui/icons-material";

export const Support: React.FC = () => {
  return (
    <Box
      sx={{
        mt: 3,
        p: 3,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Typography variant="body1" gutterBottom>
        Need Help?
      </Typography>
      <Typography variant="body2" paragraph>
        Our support team is here to assist you. Feel free to reach out via phone
        or email.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button
          variant="contained"
          startIcon={<Phone />}
          href="tel:+1234567890"
          sx={{
            bgcolor: "success.main",
            "&:hover": { bgcolor: "success.dark" },
          }}
        >
          Call
        </Button>
        <Button
          variant="contained"
          startIcon={<Mail />}
          href="mailto:support@example.com"
          sx={{ bgcolor: "info.main", "&:hover": { bgcolor: "info.dark" } }}
        >
          Email
        </Button>
      </Box>
    </Box>
  );
};
