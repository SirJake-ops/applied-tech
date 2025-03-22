'use client'

import { useState } from "react";
import ContactUsModal from "./modals/ContactUsModal";
import { Button, Typography, Container, Box, Paper } from '@mui/material';
import { Phone, LocationOn } from '@mui/icons-material';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <Container
      disableGutters
      sx={{
        maxWidth: "100% !important",
        p: 0,
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
          background:
            "linear-gradient(135deg, rgba(240, 248, 255, 0.95) 0%, rgba(176, 224, 230, 0.95) 100%)",
          backdropFilter: "blur(10px)",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(135, 206, 235, 0.1) 0%, rgba(0, 191, 255, 0.05) 100%)",
            pointerEvents: "none",
          },
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
            color='text.secondary'
            sx={{ mb: 0 }}
          >
            Rudy Avila
          </Typography>

          <Typography variant='h6' color='text.secondary' sx={{ mb: 2 }}>
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
            <Typography variant='subtitle1' color='text.secondary'>
              Serving Chicago City and Suburbs
            </Typography>
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