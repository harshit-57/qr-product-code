import { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import Image from "next/image";
import { Layout } from "@/components/Layout";
import { generateQRCode } from "@/services/QrCodeService";
import ButtonStack from "@/components/ButtonStack";

export default function Home() {
  const [qrCode, setQRCode] = useState("");
  const [product, setProduct] = useState("");
  const [showButtons, setShowButtons] = useState(false);

  const handleGenerateQR = async () => {
    try {
      const data = await generateQRCode(product);
      if (data?.data) setQRCode(data?.data?.qrImage);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const handleChange = (event: any) => {
    setProduct(event.target.value);
    setQRCode("");
  };

  const handleDownload = () => {
    if (!qrCode) return;
    try {
      fetch(qrCode)
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "qr-code.png";
          link.click();
          URL.revokeObjectURL(url);
        })
        .catch((error) => {
          console.error("Error downloading QR code:", error);
        });
    } catch (error) {
      console.error("Error during download:", error);
    }
  };

  const handlePrint = () => {
    if (!qrCode) return;

    try {
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.open();
        printWindow.document.write(`
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <title>Print QR Code</title>
              <style>
                @media print {
                  body {
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: #fff;
                  }
                  img {
                    max-width: 100%;
                    max-height: 100%;
                  }
                }
                body {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
                  margin: 0;
                  font-family: Arial, sans-serif;
                  background-color: #fff;
                }
                img {
                  max-width: 90%;
                  max-height: 90%;
                }
              </style>
            </head>
            <body>
              <img src="${qrCode}" alt="QR Code" />
            </body>
          </html>
        `);
        printWindow.document.close();

        // Trigger print once the content is loaded
        printWindow.onload = () => {
          printWindow.focus();
          printWindow.print();
          printWindow.close();
        };
      } else {
        console.error("Failed to open print window.");
      }
    } catch (error) {
      console.error("Error during print:", error);
    }
  };

  return (
    <Layout title="Products QR Code Generator">
      <Container maxWidth="sm" sx={{ height: "100vh" }}>
        <Box sx={{ mt: 10 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Products QR Code Generator
          </Typography>
          <Grid sx={{ my: 4 }}>
            <Typography variant="h6" component="label" gutterBottom>
              Product
            </Typography>
            <Select
              value={product}
              label="Product"
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value={""}>Select Product</MenuItem>
              <MenuItem value={1}>Candles</MenuItem>
            </Select>
          </Grid>
          {product && (
            <Grid sx={{ textAlign: "center" }}>
              <Button
                sx={{ height: "40px" }}
                variant="contained"
                onClick={handleGenerateQR}
              >
                {qrCode ? "Generate QR Again" : "Generate QR"}
              </Button>
            </Grid>
          )}
          {qrCode && (
            <Box
              sx={{
                mt: 2,
              }}
              flexDirection={"row"}
              display={"flex"}
              alignItems={"center"}
              textAlign={"center"}
              gap={"10px"}
              justifyContent={"center"}
              onMouseOver={() => {
                setShowButtons(true);
              }}
              onMouseOut={() => {
                setShowButtons(false);
              }}
            >
              <Image
                src={qrCode}
                alt="Generated QR Code"
                width={300}
                height={300}
              />
              {showButtons && (
                <ButtonStack
                  handleDownload={handleDownload}
                  handlePrint={handlePrint}
                />
              )}
            </Box>
          )}
        </Box>
      </Container>
    </Layout>
  );
}
