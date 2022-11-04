import React from "react";
import Container from "../../layout/Container/Container";
import { Box, Grid, Link } from '@mui/material';
import LinkTo from "../../components/LinkTo/LinkTo";

const Footer = () => {
  return (
    <Container fluid element="footer">
      <Box
        px={{ xs: 3, sm: 10 }}
        pt={{ xs: 5, sm: 10 }}       
        pb={{ xs: 5 }}   
        color="white"
        className="bg--black-middle"
      >
        <Container customClass="p-3">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}  mb={2}>Help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}  mb={2}>Account</Box>
              <Box>
                <LinkTo link="/login" customClass="text-color-white">
                  Login
                </LinkTo>
              </Box>
              <Box>
                <LinkTo link="/register" customClass="text-color-white">
                  Register
                </LinkTo>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} mb={2}>Default account for login</Box>
              <Box>
                <p href="/" color="inherit">
                  Login: test@test.com
                </p>
              </Box>
              <Box>
                <p href="/" color="inherit">
                  Password: qwert123
                </p>
              </Box>              
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            <LinkTo customClass="text-color-white" link="https://github.com/imicadio/e-shop"><i class="fa-brands fa-github"></i> Michał Jeszko</LinkTo>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Footer;
