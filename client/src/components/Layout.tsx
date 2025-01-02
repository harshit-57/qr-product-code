import Head from "next/head";
import { Container } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} | QR Code Project</title>
        <meta
          name="description"
          content="QR Code generation and user details collection"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container component="main" maxWidth="lg">
        {children}
      </Container>
    </>
  );
};
