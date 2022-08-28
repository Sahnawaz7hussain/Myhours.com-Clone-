import {
  Input,
  FormControl,
  FormLabel,
  Container,
  Box,
  Button,
  Image,
  Heading,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
export default function Signinpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const value = useContext(AuthContext);
  const { handleSignin } = value;
  const signinDataObj = { email, password };
  const handleSigninClick = () => {
    if (email === "") {
      return alert("please provide email");
    }
    if (password.length < 8) {
      return alert("Please provide correct password");
    }
    handleSignin(signinDataObj);
  };
  return (
    <Container>
      <Box mt="150px" p="30px" pt="50px" rounded="md" boxShadow="lg">
        <Image
          align={"center"}
          m="auto"
          w="200px"
          src="https://app.myhours.com/assets/myhours_app_logo_icon.svg"
          alt="company logo"
        />
        <br />
        <Heading as="h3" size="lg" fontWeight={"600"}>
          Sign in
        </Heading>
        <br />
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <Flex alignItems="center" mt="15px" mb="20px">
          <Button color="white" bg="#3B8FC2" onClick={handleSigninClick}>
            Sign in
          </Button>
          <Spacer />
          <Text color="#3B8FC2">Reset Password</Text>
        </Flex>
        <hr />
        <Text fontSize={"14px"} color="#3B8FC2">
          <Link to="/signup"> New to My Hours? Sign up</Link>
        </Text>
      </Box>
    </Container>
  );
}
