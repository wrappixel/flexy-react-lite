import { useMediaQuery, Box, Drawer } from '@mui/material';
import SidebarItems from './SidebarItems';
import Buynow from "./Buynow.js"
import { Sidebar, Logo } from 'react-mui-sidebar';
import LogoIcon from "../Logo/LogoIcon";
import { Link } from 'react-router';

const NewSidebar = (props) => {

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const sidebarWidth = '270px';

  // Custom CSS for short scrollbar
  const scrollbarStyles = {
    '&::-webkit-scrollbar': {
      width: '7px',

    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#eff2f7',
      borderRadius: '15px',
    },
  };


  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        {/* ------------------------------------------- */}
        {/* Sidebar for desktop */}
        {/* ------------------------------------------- */}
        <Drawer
          anchor="left"
          open={props.isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              boxSizing: 'border-box',
              ...scrollbarStyles,
            },
          }}
        >
          {/* ------------------------------------------- */}
          {/* Sidebar Box */}
          {/* ------------------------------------------- */}
          <Box
            sx={{
              height: '100%',
            }}
          >

            <Sidebar
              width={'270px'}
              collapsewidth="80px"
              open={props.isSidebarOpen}
              themeColor="#1e4db7"
              themeSecondaryColor="#1e4db7"
              showProfile={false}
            >
              {/* ------------------------------------------- */}
              {/* Logo */}
              {/* ------------------------------------------- */}
                    <Link to="/">
                      <Box sx={{ display: "flex", alignItems: "Center" , padding: "20px" ,paddingBottom:"0px" }}>
                        <LogoIcon />
                      </Box>
                    </Link>
              <Box>
                {/* ------------------------------------------- */}
                {/* Sidebar Items */}
                {/* ------------------------------------------- */}
                <SidebarItems />
                 <Buynow/>
              </Box>
              <Box sx={{padding:"40px"}} ></Box>
            </Sidebar >
          </Box>
        </Drawer >
      </Box >
    );
  }
  return (
    <Drawer
      anchor="left"
      open={props.isMobileSidebarOpen}
      onClose={props.onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {

          boxShadow: (theme) => theme.shadows[8],
          ...scrollbarStyles,
        },
      }}
    >
      <Sidebar
        width={'270px'}
        collapsewidth="80px"
        isCollapse={false}
        mode="light"
        direction="ltr"
        themeColor="#5d87ff"
        themeSecondaryColor="#49beff"
        showProfile={false}
      >
        {/* ------------------------------------------- */}
        <Link to="/">
                      <Box sx={{ display: "flex", alignItems: "Center" , padding: "20px" ,paddingBottom:"0px" }}>
                        <LogoIcon />
                      </Box>
                    </Link>
        {/* ------------------------------------------- */}

        {/* <Logo img={logo} /> */}

        {/* ------------------------------------------- */}
        {/* Sidebar For Mobile */}
        {/* ------------------------------------------- */}
        <SidebarItems />
        <Buynow/>
      </Sidebar>
    </Drawer>
  );
};
export default NewSidebar;
