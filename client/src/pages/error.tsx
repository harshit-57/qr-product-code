import { Support } from "@/components/Support";
import { Container, Typography, Box } from "@mui/material";
import { useRouter } from "next/router";

export default function Error() {
  const router = useRouter();

  const { message, qrId }: any = router.query;

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 20, textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ textTransform: "capitalize" }}
        >
          {message || "Error"}
        </Typography>
        <Typography variant="body1" component="p" sx={{ mt: 3 }}>
          An error occurred while saving your order details. It might be because
          your QR Link is invalid or has been expired.
        </Typography>
      </Box>
      {qrId && (
        <Box sx={{ mt: 3 }} flexDirection={"row"}>
          <Typography
            variant="h6"
            component="h6"
            sx={{ mt: 5, textAlign: "center" }}
          >
            Your Order Id: {qrId}
          </Typography>
          <Support />
        </Box>
      )}
    </Container>
  );
}
