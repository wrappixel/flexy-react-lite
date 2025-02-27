import React, { useState } from "react";
import {
  experimentalStyled,
  useMediaQuery,
  Container,
  Box,
} from "@mui/material";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { TopbarHeight } from "../../assets/global/Theme-variable";
import { Outlet } from "react-router";
import NewSidebar from "./Sidebar/NewSidebar.js"
import Topbar from "./Header/Topbar.js";
import "../../App.css"
// import CustomSidebar from "./Sidebar/CustomSidebarLayout";


const MainWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  width: "100%",
}));
const PageWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",


  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("lg")]: {
    paddingTop: TopbarHeight,
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "64px",
  },
}));

const FullLayout = () => {
  //
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  return (
    <>
          {/* ------------------------------------------- */}
      {/* Topbar */}
      {/* ------------------------------------------- */}
      <Topbar/>
    <MainWrapper sx={{backgroundColor:"#000000"}}>
      <Header
        sx={{
          paddingLeft: isSidebarOpen && lgUp ? "265px" : "",
          backgroundColor: "#ffffff",
        }}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        toggleMobileSidebar={() => setMobileSidebarOpen(true)}
      />

      <NewSidebar isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={() => setMobileSidebarOpen(false)} />

      <PageWrapper>
        <Container
          maxWidth={true}
          sx={{
            paddingTop: "60px",
            maxWidth: "1200px",
          }}
        >
          <Box sx={{ minHeight: "calc(100vh - 170px)" , paddingTop:"30px"}} >
            <Outlet />
          </Box>
          <Footer />
        </Container>
      </PageWrapper>
    </MainWrapper>
    </>
  );
};

export default FullLayout;
