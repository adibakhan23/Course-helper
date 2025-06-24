// import React from 'react';
// import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';

// export default function LoginPage() {
//   return (
//     <Box
//       sx={{
//         width: '100vw',
//         height: '100vh',
//         backgroundImage: 'url(/bg.jpg)', 
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Box
//         sx={{
//           width: 320,
//           padding: 4,
//           borderRadius: 3,
//           backgroundColor: 'rgba(0, 0, 0, 0.2)', // Semi-transparent background
//           boxShadow: '0 8px 32px rgba(0, 0, 0, 0.76)', // Subtle shadow
//           backdropFilter: 'blur(0 px)', // Blur effect
//           color: '#fff',
//         }}
//       >
//         <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
//           Login
//         </Typography>
//         <TextField
//           fullWidth
//           label="Username"
//           margin="normal"
//           variant="outlined"
//           sx={{
//             '& .MuiOutlinedInput-root': {
//               '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
//               '&:hover fieldset': { borderColor: '#fff' },
//               '&.Mui-focused fieldset': { borderColor: '#fff' },
//             },
//             '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' }, // Label color
//             '& .MuiInputBase-input': { color: '#fff' }, // Input text color
//           }}
//         />
//         <TextField
//           fullWidth
//           label="Password"
//           margin="normal"
//           variant="outlined"
//           type="password"
//           sx={{
//             '& .MuiOutlinedInput-root': {
//               '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
//               '&:hover fieldset': { borderColor: '#fff' },
//               '&.Mui-focused fieldset': { borderColor: '#fff' },
//             },
//             '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
//             '& .MuiInputBase-input': { color: '#fff' },
//           }}
//         />
//         <FormControlLabel
//           control={<Checkbox sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />}
//           label="Remember me"
//           sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
//         />
//         <Button
//           fullWidth
//           variant="contained"
//           sx={{
//             mt: 2,
//             backgroundColor: 'rgba(255, 69, 123, 0.8)', // Gradient-like button color
//             color: '#fff',
//             '&:hover': { backgroundColor: 'rgba(255, 69, 123, 1)' },
//           }}
//         >
//           Login
//         </Button>
//       </Box>
//     </Box>
//   );
// }

"use client";
import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LogInSide() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const loginDetails = {
      username: data.get("username"),
      password: data.get("password"),
    };

    try {
      const response = await axios.post(
        "https://course-helper-two.vercel.app/auth/login",
        loginDetails
      );

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("jwtToken", token);

        alert("Login successful! Redirecting...");
        router.push("/");
      }
    } catch (error) {
      console.error("Error during login:", error.response?.data || error.message);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: "url(/bg.jpg)", // Make sure this image exists in /public
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: 320,
          padding: 4,
          borderRadius: 3,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.76)",
          backdropFilter: "blur(8px)",
          color: "#fff",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
          Login
        </Typography>
        <TextField
          fullWidth
          label="Username"
          name="username"
          margin="normal"
          variant="outlined"
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
              '&:hover fieldset': { borderColor: '#fff' },
              '&.Mui-focused fieldset': { borderColor: '#fff' },
            },
            '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
            '& .MuiInputBase-input': { color: '#fff' },
          }}
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          margin="normal"
          variant="outlined"
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
              '&:hover fieldset': { borderColor: '#fff' },
              '&.Mui-focused fieldset': { borderColor: '#fff' },
            },
            '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
            '& .MuiInputBase-input': { color: '#fff' },
          }}
        />
        <FormControlLabel
          control={<Checkbox sx={{ color: "rgba(255, 255, 255, 0.7)" }} />}
          label="Remember me"
          sx={{ color: "rgba(255, 255, 255, 0.7)" }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "rgba(255, 69, 123, 0.8)",
            color: "#fff",
            "&:hover": { backgroundColor: "rgba(255, 69, 123, 1)" },
          }}
        >
          Log In
        </Button>
        <Typography align="center" sx={{ mt: 2 }}>
          <a href="/signup" style={{ color: "#fff", textDecoration: "underline" }}>
            Don’t have an account? Sign up
          </a>
        </Typography>
      </Box>
    </Box>
  );
}
