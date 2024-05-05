import React from "react";
import {
  Card,
  Grid,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Box,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { BarChart, PieChart, Gauge, SparkLineChart } from "@mui/x-charts";
import CounterWidget from "../components/CounterWidget";
import SpeedIcon from "@mui/icons-material/Speed";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import NumbersIcon from "@mui/icons-material/Numbers";
import { useState } from "react";
import { BASE_URL } from "../constants";
import { useEffect } from "react";
import axios from "axios";
import { tidy, groupBy, summarize, deviation } from "@tidyjs/tidy";

// const BASE_URL = 'http://localhost:3000'

const counterData1 = {
  intentsity: {
    number: "N.A",
    title: "Total Intensity",
    backgroundColor: "#009688",
    icon: <SpeedIcon sx={{ fontSize: 55 }} />,
  },
  likelihood: {
    number: "N.A",
    title: "Total Likelihood",
    backgroundColor: "#ec407a",
    icon: <ThumbUpIcon sx={{ fontSize: 55 }} />,
  },
  relevance: {
    number: "N.A",
    title: "Total Relevance",
    backgroundColor: "#9c27b0",
    icon: <BorderColorIcon sx={{ fontSize: 55 }} />,
  },
  counter: {
    number: 20,
    title: "Counter",
    backgroundColor: "#03a9f4",
    icon: <NumbersIcon sx={{ fontSize: 55 }} />,
  },
};

function Home() {
  const [counterData, setCounterData] = useState(counterData1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/data`);
        // console.log(response.data);
        // console.log(
        //   tidy(response.data, summarize({ stdDev: deviation("intensity") }))
        // );

        // setCounterData({...counterData1,intentsity.})

        setCounterData((prevData) => ({
          ...prevData,
          intentsity: {
            ...prevData.intentsity,
            number: tidy(
              response.data,
              summarize({ stdDev: deviation("intensity") })
            )[0].stdDev.toFixed(3),
          },
          likelihood: {
            ...prevData.likelihood,
            number: tidy(
              response.data,
              summarize({ stdDev: deviation("likelihood") })
            )[0].stdDev.toFixed(3),
          },
          relevance: {
            ...prevData.relevance,
            number: tidy(
              response.data,
              summarize({ stdDev: deviation("relevance") })
            )[0].stdDev.toFixed(3),
          },
        }));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <Typography variant="h4">Overall Data</Typography>
      <Grid
        container
        direction="column"
        gap={2}
        // style={{ border: "1px solid" }}
      >
        <Grid container xs={6} item justifyContent="space-between">
          {Object.keys(counterData).map((key, index) => {
            const data = counterData[key];
            return (
              <Grid item xs={2.5} key={index}>
                <CounterWidget
                  number={data.number}
                  title={data.title}
                  backgroundcolor={data.backgroundColor}
                >
                  {data.icon}
                </CounterWidget>
              </Grid>
            );
          })}
        </Grid>

        <Box sx={{ maxWidth: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Grid container xs={6} item justifyContent="space-between">
          <Grid item xs={6.5}>
            <Card>
              <CardContent>Bar chart</CardContent>
              <CardMedia>
                <BarChart
                  series={[
                    { data: [35, 44, 24, 34] },
                    { data: [51, 6, 49, 30] },
                  ]}
                  height={290}
                  width={500}
                  xAxis={[
                    { data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" },
                  ]}
                  margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                />
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={5}>
            <Card
              style={{
                display: "flex",
                justifyContent: "space-around",
                padding: 20,
              }}
            >
              <CardContent>Pie Chart</CardContent>

              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: "series A" },
                      { id: 1, value: 15, label: "series B" },
                      { id: 2, value: 20, label: "series C" },
                    ],
                  },
                ]}
                width={400}
                height={290}
                // margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
              />
            </Card>
          </Grid>
        </Grid>

        <Grid container xs={6} item justifyContent="space-between">
          <Grid item xs={3}>
            <Card style={{ padding: 10 }}>
              <Stack
                alignItems="center"
                direction="row"
                justifyContent="space-between"
                spacing={3}
              >
                <Gauge width={100} height={100} value={60} />
                <Typography variant="h4">Tasks</Typography>
                <Typography variant="subtitle">Counts</Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Card style={{ padding: 10 }}>
              <Stack direction="row" sx={{ width: "100%" }} alignItems="center">
                <Box sx={{ flexGrow: 1 }}>
                  <SparkLineChart
                    data={[1, 4, 2, 5, 7, 2, 4, 6]}
                    height={100}
                    width={300}
                  />
                </Box>
                <Typography variant="subtitle">Growth</Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <SparkLineChart
                    plotType="bar"
                    data={[1, 4, 2, 5, 7, 2, 4, 6]}
                    height={100}
                    width={300}
                    // colors="#ac89af"
                  />
                </Box>
                <Typography variant="subtitle">Sales</Typography>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
