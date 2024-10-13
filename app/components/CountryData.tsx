import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
} from "@mui/material";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PeopleIcon from "@mui/icons-material/People";
import LanguageIcon from "@mui/icons-material/Language";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const CountryData = ({ country }: any) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f4f8",
        // padding: 3,
      }}>
      <Card
        elevation={4}
        sx={{
          maxWidth: 600,
          width: "100%",
          borderRadius: 8,
          backgroundColor: "#fff",
          boxShadow:
            "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}>
        <CardContent>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: "#2c3e50",
            }}>
            {country.name}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Box
                display="flex"
                alignItems="center">
                <LocationCityIcon
                  sx={{ color: "#3498db", mr: 1 }}
                />
                <Typography variant="h6">
                  Capital:
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ ml: 4 }}>
                {country.capital}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box
                display="flex"
                alignItems="center">
                <PeopleIcon
                  sx={{ color: "#e74c3c", mr: 1 }}
                />
                <Typography variant="h6">
                  Population:
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ ml: 4 }}>
                {country.population.toLocaleString()}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box
                display="flex"
                alignItems="center">
                <LanguageIcon
                  sx={{ color: "#2ecc71", mr: 1 }}
                />
                <Typography variant="h6">
                  Language:
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ ml: 4 }}>
                {country.language}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box
                display="flex"
                alignItems="center">
                <MonetizationOnIcon
                  sx={{ color: "#f1c40f", mr: 1 }}
                />
                <Typography variant="h6">
                  Currency:
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ ml: 4 }}>
                {country.currency}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CountryData;
