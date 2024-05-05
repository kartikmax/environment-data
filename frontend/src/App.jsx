import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
// import {MailIcon} from '@mui/icons-material'
import {
  Card,
  Grid,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import { BarChart, PieChart } from "@mui/x-charts";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Charts from "./pages/Charts";
import Data from "./pages/Data";
import Sidebar from "./components/Sidebar";

const drawerWidth = 240;

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Livlihood Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        {/* here is drawer means sidebar hurray  */}
        <Sidebar />
        <main
          style={{
            padding: 20,
            background: "#eee",
            width: "95vw",
            height: "120vh",
          }}
        >
          <Toolbar />

          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
