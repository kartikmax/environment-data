import {
  Grid,
  Typography,
  Card,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Box,
  Stack,
} from "@mui/material";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { GeoJSONDataOfCountry, Countries } from "../constants";
import { useState } from "react";
// import { Countries } from "../constants";

function Country() {
  const [country, setCountry] = useState("India");

  function onCountryClick(event) {
    // console.log("Clicked Country:", event.target.feature.properties.name);
    setCountry(event.target.feature.properties.name);
  }

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", height: "70%" }}>
      <Grid container spacing={2} justifyContent="space-around">
        <Grid item xs={7} component={Card} style={{ padding: 10 }}>
          <MapContainer
            center={[0, 0]}
            zoom={1.5}
            style={{ height: "500px", width: "98%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <GeoJSON
              data={GeoJSONDataOfCountry}
              onEachFeature={(feature, layer) => {
                layer.on({
                  click: onCountryClick,
                });
              }}
            />
          </MapContainer>
        </Grid>
        <Grid item xs={3} component={Card}>
          <Stack spacing={3}>
            <Typography variant="h5">Current Country:</Typography>

            <Box>
              <InputLabel id="demo-select-small-label">Country </InputLabel>
              <FormControl fullWidth>
                <Select
                  value={country}
                  onChange={handleChangeCountry}
                  size="small"
                >
                  {Countries.map((country, index) => {
                    return (
                      <MenuItem value={country} key={index}>
                        {" "}
                        {country}{" "}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
            <Typography variant="body1">{country}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
export default Country;
