import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./navbar.css";
export const Navbar = () => {
  return (
    <Box
      className="container"
      boxShadow="md"
      pos={"fixed"}
      w="100%"
      zIndex="200"
      bg="white"
    >
      <Box>
        <Link to="/">
          <Image
            width="150px"
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd37c83dfa3ccb0d2d9836f_myhours-logo.svg"
            alt="Logo"
          />
        </Link>
      </Box>
      <Box className="rightside">
        <Box>
          <Link to="/how-it-works"> How it Works</Link>
        </Box>
        <Box>
          <Link to="/use-cases"> Use cases</Link>
        </Box>
        <Box>
          <Link to="/pricing">Pricing</Link>
        </Box>
        <Box>
          <Link to="/support">Support</Link>
        </Box>
        <Box>
          <Link to="/signin">Sign in</Link>
        </Box>
        <Box
          className="navbtn"
          as="button"
          borderRadius="md"
          bg="#3B8FC2"
          color="white"
          px={4}
          py={2}
        >
          Get My Hours Free
        </Box>
      </Box>
    </Box>
  );
};
