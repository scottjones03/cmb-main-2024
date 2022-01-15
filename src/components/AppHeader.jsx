import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import banner from "../assets/img/2022/banner.png";
import bg from "../assets/img/2022/background.png";

const pages = [
  // { name: "Committee", link: "" },
  { name: "Home", link: "/" },
  // { name: "Tickets", link: "" },
  // { name: "Sponsors", link: "" },
  { name: "Work for us", link: "/work-for-us" }
];

export default function AppHeader() {
  return (
    <Box
      pt={3}
      zIndex={100}
      sx={{
        position: "fixed",
        width: "100%",
        backgroundImage: `url(${bg})`,
        backgroundSize: "100% 50%",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Box
        mx="auto"
        sx={{
          maxWidth: 1300,
          position: "relative"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {pages.map(({ name, link }) => (
            <Button
              key={name}
              color="tertiary"
              size="large"
              disableElevation
              sx={{
                fontWeight: 600,
                fontSize: {
                  xs: 14,
                  sm: 20,
                  lg: 26
                },
                fontStyle: "italic"
              }}
              LinkComponent={Link}
              to={link}
            >
              {name}
            </Button>
          ))}
        </Box>
        <Box component="img" src={banner} alt="banner" sx={{ width: "100%" }} />
      </Box>
    </Box>
  );
}
