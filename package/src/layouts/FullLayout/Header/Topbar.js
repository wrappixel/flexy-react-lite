import React from 'react';
import { Box, AppBar, Toolbar, styled, Stack, Button } from '@mui/material';
import wrappixelLogo from '../../../assets/images/logos/logo-wrappixel.svg';
import { IconLifebuoy, IconGift, IconBriefcase } from '@tabler/icons-react';
import { Typography} from '@mui/material';
import { Link } from 'react-router';
import LivePreviewDropdown from './LivePreviewDropdown';
import BuyNowDropdown from './BuyNowDropdown';


const Topbar = (props) => {


  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.dark,
    zIndex:"50",
    position:"fixed",
    padding:"0px 30px",

    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '61px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  const GhostButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.transparent,
    boxShadow:"none",
    borderRadius: "7px",
    fontWeight:600,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    "& .MuiButton-startIcon": {
      marginRight: "4px",
    }
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled sx={{flexWrap:"wrap" , width:"100%" , paddingX :"0px"}} >
              <Stack
                  spacing={{ xs: 1, sm: 8 }}
                  direction="row"
                  useFlexGap
                  sx={{ flexWrap: 'wrap', justifyContent:{xs:"center", lg:"between"}, paddingY:{xs:"8px" , lg:"0px"} , width:{xs:"100%" , lg:"auto"} }}
              >
                 <img src={wrappixelLogo} alt="logo" />
               <Stack spacing={1} direction="row" sx={{flexWrap:'wrap' , display : {xs:"none",lg:"flex"} }} >
               <Link to="https://support.wrappixel.com/" target='_blank' ><GhostButton startIcon={<IconLifebuoy size={18} />} variant="contained">Support</GhostButton></Link>
               <Link to="https://www.wrappixel.com/" target='_blank' ><GhostButton startIcon={<IconGift size={18} />} variant="contained">Templates</GhostButton></Link>
               <Link to="https://www.wrappixel.com/hire-us/" target='_blank' ><GhostButton startIcon={<IconBriefcase size={18} />} variant="contained">Hire Us</GhostButton></Link>
               </Stack>
                
              </Stack>
        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center" sx={{ flexWrap: 'wrap', justifyContent:"center" , gap:{xs:"10px" , lg:"0px"} , padding:{xs:"0px 0px 10px 0px" , lg:"0px 0px"} }}>
        <Typography variant="h5" sx={{ color: (theme) => theme.palette.primary.contrastText }} >Check Flexy Premium Version</Typography>
        <LivePreviewDropdown/>
        <BuyNowDropdown/>
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};


export default Topbar;
