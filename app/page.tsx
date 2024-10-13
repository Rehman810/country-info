import {
  Box,
  Typography,
  Container,
} from "@mui/material";
import SearchForm from "./components/Search";

const HomePage = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          mb: 4,
        }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#34495e",
          }}>
          Country Search
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "#7f8c8d" }}>
          Find information about any country by
          it's name.
        </Typography>
      </Box>
      <SearchForm />
    </Container>
  );
};

export default HomePage;
