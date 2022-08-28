import {
  Box,
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const useDataObj = { name, email, password };
  const value = useContext(AuthContext);
  const { handlePostSignupData } = value;
  //console.log("value: ", value);
  const handleSubmit = () => {
    if (useDataObj.name === "") {
      return alert("Please fill name");
    }
    if (useDataObj.email === "") {
      return alert("Please Provide Email");
    }
    if (useDataObj.password.length <= 5) {
      return alert("Password should more than or equal to 8 characters");
    }
    handlePostSignupData(useDataObj);
    console.log("data pasweed to contex function");
    // return <Navigate to="/signin" />;
    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <Container>
      <Box mt="150px" p="30px" pt="50px" rounded="md" boxShadow="md">
        <Image
          w="150px"
          mb="30px"
          src="https://allhoursproductb0b1.blob.core.windows.net/static-files/myhours_logo_icon.svg"
          alt="company logo"
        />
        <Heading as="h3" size={"md"} mb="20px">
          Welcome to My Hours.
        </Heading>
        <FormControl>
          <FormLabel fontSize={"14px"}>FULL NAME</FormLabel>
          <FormHelperText mb="10px" fontSize={"15px"}>
            So we know what to call you in the app
          </FormHelperText>
          <Input
            value={name}
            type="Text"
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize={"14px"} mt="10px">
            EMAIL
          </FormLabel>
          <FormHelperText mb="10px" fontSize={"15px"}>
            You will use this email to login
          </FormHelperText>
          <Input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize={"14px"} mt="10px">
            PASSWORD
          </FormLabel>
          <Input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Set password"
            mt="5px"
          />
        </FormControl>
        <br />
        <Text>
          <Box as="u">
            <Link to="/signin">
              All ready have an
              <Box as="span" color="#3B8FC2">
                {" "}
                Account
              </Box>{" "}
              go back to Sign in{" "}
            </Link>
          </Box>
        </Text>
        <Button
          onClick={handleSubmit}
          display={"block"}
          m="auto"
          mt="20px"
          color="white"
          bg="#3B8FC2"
        >
          Sign up
        </Button>
      </Box>
    </Container>
  );
}
