/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  IconButton,
  Image,
  Text,
  Link as ChakraLink,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { useRouter } from "next/navigation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "@fontsource/poppins";
import "@fontsource/public-sans";
import SubmitBtn from "../SubmitBtn";
import logo from "../../../../shoppers/src/assets/images/shopaisley-logo.png"
import "./index.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [isEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useNavigate();

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setEmailError(isValid ? "" : "Invalid email address");
    return isValid;
  };

  const validatePassword = () => {
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;
    const isValid = passRegex.test(password);
    // const errorStyle = isValid ? {} : { color: "red" };
    // setPasswordErrorStyle(errorStyle);
    const errorMessage = isValid
      ? ""
      : "Password should have at least 8 characters, one lowercase letter, one uppercase letter, one digit, and one special character";
    return { isValid, errorMessage };
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    toast.success("Login successful");
    router("/product-catalogue");

    // if (email.trim() === "" || password.trim() === "") {
    //     setError("All fields are required.");
    //     setLoading(false);
    //     return;
    // }

    // try {
    //     const res = await axios.post(
    //         `${server}/auth/login`,
    //         {
    //             "email": email,
    //             "password": password,
    //         },
    //         // { withCredentials: true }
    //     );

    //     // Assuming the backend returns a success message upon successful login
    //     if (res.status === 200) {
    //         toast.success("Login Success!");
    //         const token = res.data.data.token;
    //         const customerID = res.data.data.customerID
    //         // console.log(token);
    //         setAuthToken(token);
    //         setCustomerID(customerID);
    //         navigate("/home");
    //         console.log(customerID);
    //         console.log(sessionStorage.getItem('authToken'));
    //     }
    //     else {
    //         // console.log(res.status);
    //         // Handle other responses from the backend as needed
    //         // toast.error("Login failed. Please check your credentials.");
    //     }

    //     setLoading(false);
    // } catch (err: any) {
    //     console.log(err)
    //     // toast.error("Login failed. Please check your credentials.");
    //     setLoading(false);
    //     // toast.error(err.response.data.data.message);
    // }
    // setLoading(false);
  };
  return (
    <Flex w="100vw" h="100vh" direction="column" align="center" fontFamily={"Public Sans"} bg={"#008FCD"} flexDirection={"column"} justifyContent={"center"}>
      <Flex
        w="500px"
        h="600px"
        bg="#ffffff"
        // mt={"100px"}
        // mb={"25px"}
        py={"35px"}
        px={"30px"}
        flexDirection={"column"}
        boxShadow={"20px"}
        borderRadius={"10px"}
      >
        <Flex
          my={"10px"}
          mt={"50px"}
          flexDirection={"row"}
          // justifyItems={"center"}
          align={"center"}
          justifyContent={"center"}
          
        >
          <Image
            src={logo}
            alt="shopaisley-logo"
            width={"100px"}
            height={"100px"}
          />
          <Text
            color={"#000000"}
            fontFamily={"Public Sans"}
            fontWeight={700}
            fontSize={"28px"}
          >
            Shop<span style={{ color: "#054A91" }}>aisley</span>
          </Text>
        </Flex>
        <Text
          fontWeight={600}
          fontSize={"23px"}
          bg={"transparent"}
          mb={"10px"}
          color={"#008FCD"}
        >
          Log in
        </Text>
        <Flex
          mt={"5px"}
          fontSize={"14px"}
          color="#FFFFFF"
          lineHeight="12px"
          justifyContent={"center"}
        >
          <Text fontFamily={"Poppins"} fontWeight={500}>
            <ChakraLink
              href="/sign-up"
              textDecoration="none"
              color="#A9ABBD"
              transition="color 0.3s ease"
              _hover={{ color: "#B3B3B3" }}
            >
              Do not have an account?{" "}
              <span style={{ fontWeight: 700, color: "#008FCD" }}>Register</span>
            </ChakraLink>
          </Text>
        </Flex>
        <Flex bg={"transparent"}>
          <form>
            <FormControl isInvalid={emailError !== ""}>
              <FormLabel
                fontSize={"13px"}
                color={"#A9ABBD"}
                mb={"6px"}
                mt={"15px"}
              >
                Email
              </FormLabel>
              <Input
                type={isEmail ? "email" : "tel"}
                value={email}
                onChange={handleEmailChange}
                required
                autoComplete="email"
                p={"16px"}
                borderRadius={"5px"}
                bg={"#EDF2F7"}
                border={"0px solid #E2E8F0"}
                w={"470px"}
                onBlur={validateEmail}
                color={"#1A202C"}
                textAlign={"left"}
              />
              <FormErrorMessage color={"red"} fontSize={"12px"}>
                {emailError}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={passwordError !== ""}>
              <FormLabel
                fontSize={"13px"}
                color={"#A9ABBD"}
                mb={"6px"}
                mt={"15px"}
              >
                Password
              </FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  onBlur={validatePassword}
                  autoComplete="new-password"
                  required
                  p={"16px"}
                  borderRadius={"5px"}
                  bg={"#EDF2F7"}
                  border={"0px solid #E2E8F0"}
                  w={"470px"}
                  color={"#1A202C"}
                  textAlign={"left"}
                />
                <InputRightElement>
                  <IconButton
                    icon={
                      showPassword ? (
                        <FontAwesomeIcon icon={faEyeSlash} />
                      ) : (
                        <FontAwesomeIcon icon={faEye} />
                      )
                    } // Display appropriate icon based on showPassword state
                    onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state on click
                    color="#000000"
                    h={"100%"}
                    _hover={{ color: "#718096" }}
                    aria-label={"show-password"}
                    my={"15px"}
                    mr={"10px"}
                    border={"0px"}
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage lineHeight={"16px"} color={"red"} fontSize={10}>
                {passwordError}
              </FormErrorMessage>
            </FormControl>

            {error && (
              <Text color="red" fontSize="12" mt={"4px"} mb={"2px"}>
                {error}
              </Text>
            )}
            <Flex
              color={"#979797"}
              justifyContent={"space-between"}
              mt={"20px"}
              mb={"20px"}
              fontSize={"14.5px"}
              
            >
              <ChakraLink
                fontWeight={700}
                href="forgot-password"
                textDecoration="none"
                _hover={{ textDecor: "none" }}
                color={"#008FCD"}
                mb={"-20px"}
              >
                Forgot your Password?
              </ChakraLink>
            </Flex>
            <SubmitBtn
              loadingText={"Signing-in"}
              btntitle={"LOG IN"}
              onClick={handleSubmit}
              isLoading={loading}
            />
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoginForm;
