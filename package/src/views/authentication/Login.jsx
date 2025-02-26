


import React from 'react';
import { Link } from 'react-router';
import { Grid, Box, Card, Stack, Typography } from '@mui/material';
import LogoIcon from '../../layouts/FullLayout/Logo/LogoIcon';
import AuthLogin from './auth/AuthLogin';

const Login = () => {
  return (
    <Box
    sx={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&:before': {
        content: '""',
        background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
        position: 'absolute',
        height: '100%',
        width: '100%',
        opacity: '0.3',
      },
    }}
  >

            <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' , mx:"auto" }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                {/* <Logo /> */}
                <LogoIcon/>
              </Box>
              <AuthLogin
                subtext={
                  <Typography variant="subtitle1" textAlign="center" color="textSecondary" mb={1}>
                    Your Social Campaigns
                  </Typography>
                }
                subtitle={
                  <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
                    <Typography color="textSecondary" variant="h6" fontWeight="500">
                      New to Modernize?
                    </Typography>
                    <Typography
                      component={Link}
                      to="/auth/register"
                      fontWeight="500"
                      sx={{
                        textDecoration: 'none',
                        color: 'primary.main',
                      }}
                    >
                      Create an account
                    </Typography>
                  </Stack>
                }
              />
            </Card>
  
    </Box>
  )
}

export default Login

