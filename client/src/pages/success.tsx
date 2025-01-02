import { Container, Typography, Box } from "@mui/material";

export default function Success() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 25, textAlign: "center" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Success
        </Typography>
        <Typography variant="h6" component="h6" sx={{ mt: 5 }}>
          Your order details have been saved successfully.
        </Typography>
      </Box>
    </Container>
  );
}
