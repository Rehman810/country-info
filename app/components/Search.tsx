"use client";

import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  CircularProgress,
  Alert,
  debounce,
} from "@mui/material";
import { useRouter } from "next/navigation";

const SearchForm = () => {
  const [countryInput, setCountryInput] =
    useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<
    string | null
  >(null);
  const router = useRouter();

  const handleSearch = debounce(() => {
    if (!countryInput.trim()) {
      setError(
        "Please enter a valid country name."
      );
      return;
    }

    setLoading(true);
    setError(null);

    setTimeout(() => {
      router.push(
        `/${countryInput.toLowerCase()}`
      );
      setLoading(false);
    }, 500);
  }, 500);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCountryInput(e.target.value);
    setError(null);
  };

  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "500px",
        margin: "0 auto",
        width: "100%",
        textAlign: "center",
      }}>
      <TextField
        label="Enter Country Name"
        variant="outlined"
        value={countryInput}
        onChange={handleInputChange}
        fullWidth
        error={!!error}
        helperText={
          error ? "Country name is required." : ""
        }
        sx={{ mb: 3 }}
      />

      {loading ? (
        <CircularProgress sx={{ mt: 2 }} />
      ) : (
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#34495e",
            color: "#fff",
          }}
          onClick={handleSearch}
          disabled={
            !countryInput.trim() || loading
          }
          fullWidth>
          Search Country
        </Button>
      )}

      {error && (
        <Alert
          severity="error"
          sx={{ mt: 2, width: "100%" }}>
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default SearchForm;
