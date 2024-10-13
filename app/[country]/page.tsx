"use client";

import { useEffect, useState } from "react";
import CountryData from "../components/CountryData";
import { countries } from "../data/country";
import {
  toast,
  ToastContainer,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Country {
  name: string;
  capital: string;
  population: number;
  language: string;
  currency: string;
}

const CountryPage = ({
  params,
}: {
  params: { country: string };
}) => {
  const { country } = params;
  const [countryData, setCountryData] =
    useState<Country | null>(null);
  const [error, setError] = useState<
    string | null
  >(null);

  useEffect(() => {
    if (country) {
      fetchCountryData(country);
    }
  }, [country]);

  const fetchCountryData = (
    countryName: string
  ) => {
    const foundCountry = countries.find(
      (c) =>
        c.name.toLowerCase() ===
        countryName.toLowerCase()
    );

    if (foundCountry) {
      setCountryData(foundCountry);
      setError(null);
    } else {
      setCountryData(null);
      setError("Country not found");
      toast.error("Country not found!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      {countryData && (
        <CountryData country={countryData} />
      )}
    </div>
  );
};

export default CountryPage;
