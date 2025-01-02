import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import { Layout } from "@/components/Layout";
import { saveUserDetails } from "@/services/UserService";
import { UserDetailsForm } from "@/components/SaveDetailsForm";
import { checkQRCode } from "@/services/QrCodeService";

export default function SaveDetails() {
  const router = useRouter();
  const { productId, token } = router.query;
  const [qrDetails, setQrDetails] = useState<any>(null);

  useEffect(() => {
    if (token) {
      checkQRCode(token)
        .then((res) => {
          if (!res?.data)
            router.push(
              {
                pathname: "/error",
                query: res,
              },
              "/QRInvalid"
            );
          setQrDetails(res?.data);
        })
        .catch((err: any) => {
          if (err?.response?.data?.data)
            router.push(
              {
                pathname: "/error",
                query: { ...err?.response?.data, ...err?.response?.data?.data },
              },
              "/QRInvalid"
            );
          else
            router.push(
              {
                pathname: "/error",
                query: err?.response?.data || { message: err?.message },
              },
              "/QRInvalid"
            );
        });
    }
  }, [token]);

  const handleSubmit = async (formData: any) => {
    try {
      saveUserDetails({
        ...formData,
        qrId: qrDetails?.qrId,
        productId: qrDetails?.productId,
      })
        .then((res) => {
          if (!res?.data)
            router.push(
              {
                pathname: "/error",
                query: res,
              },
              "/SaveDetailsError"
            );

          router.push("/success");
        })
        .catch((err) => {
          router.push(
            {
              pathname: "/error",
              query: err?.response?.data || { message: err?.message },
            },
            "/SaveDetailsError"
          );
        });
    } catch (error) {
      console.error("Error saving details:", error);
      router.push("/error");
    }
  };

  return (
    <Layout title="Save Details">
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <Box sx={{ my: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Order Details
          </Typography>
          <UserDetailsForm onSubmit={handleSubmit} />
        </Box>
      </Container>
    </Layout>
  );
}
