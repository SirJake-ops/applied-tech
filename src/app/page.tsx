'use client'

import { useState } from "react";
import ContactUsModal from "./modals/ContactUsModal";
import { Button, Typography, Container, Box, Paper } from '@mui/material';
import { Phone, LocationOn, CheckCircle } from '@mui/icons-material';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <Container
      disableGutters
      sx={{
        maxWidth: "100% !important",
        p: 0,
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/assets/lightning.jpg)', // Corrected image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5, // Adjust the opacity to make the image more faded
          zIndex: -1,
        },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: 4,
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: "lg",
            py: 8,
            px: 4,
          }}
        >
          <Typography variant='h2' component='h1' align='center' sx={{ mb: 1 }}>
            Applied Tech, Heating & Cooling
          </Typography>

          <Typography
            variant='h4'
            component='h2'
            align='center'
            sx={{ mb: 0 }}
          >
            Rudy Avila
          </Typography>

          <Typography variant='h6' sx={{ mb: 2 }}>
            Field Engineer
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <Phone color='primary' />
            <Typography
              variant='h6'
              component='a'
              href='tel:+18478291800'
              sx={{
                textDecoration: "none",
                color: "primary.main",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              (847) 829-1800
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
            <LocationOn color='action' />
            <Typography variant='subtitle1'>
              Serving Chicago City and Suburbs
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircle color="success" />
              <Typography variant="body1">Trained Heating & Cooling Professionals</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircle color="success" />
              <Typography variant="body1">Locally owned and operated</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircle color="success" />
              <Typography variant="body1">24/7 Emergency Service</Typography>
            </Box>
          </Box>

          <Button
            variant='contained'
            size='large'
            onClick={() => setIsContactModalOpen(true)}
            sx={{ px: 4 }}
          >
            Contact Us
          </Button>
        </Box>
      </Paper>

      <ContactUsModal
        isOpen={isContactModalOpen}
        setIsOpen={setIsContactModalOpen}
      />
    </Container>
  );
}