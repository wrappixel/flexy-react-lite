import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import img1 from 'src/assets/images/backgrounds/rocket.png';

const Upgrade = () => {
    return (
        <Box
            display={'flex'}
            alignItems="center"
            gap={2} position='relative'
            sx={{ my: 3, p: 3, bgcolor: `${'primary.light'}`, borderRadius: '8px' }}
        >
            <>
                <Box>
                    <Typography variant="h6" mb={1}>Unlimited <br /> Access</Typography>
                    <Button color="primary" target="_blank" href="https://www.wrappixel.com/templates/flexy-react-admin-template/?ref=376" variant="contained" aria-label="logout" size="small">
                        Upgrade
                    </Button>
                </Box>
                <Box mt="-35px">
                    <img alt="Remy Sharp" src={img1} width={120} height={145} style={{
                        position: "absolute",
                        right: "-10px",
                        top: "-18px",
                    }} />
                </Box>
            </>
        </Box>
    );
};

export default Upgrade;