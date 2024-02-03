/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  FormErrorMessage,
  InputGroup,
  Link as ChakraLink,
  InputRightElement,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { useRouter } from "next/navigation";
import logo from "../../../../shoppers/src/assets/images/shopaisley-logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "@fontsource/poppins";
import "@fontsource/public-sans";
import SubmitBtn from "../SubmitBtn";
import axios from "axios";
import { server } from "../../../../shoppers/src/server";

const SignupForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState("");

  const handleFirstNameChange = (e: any) => {
    setFname(e.target.value);
  };

  const handleLastNameChange = (e: any) => {
    setLname(e.target.value);
  };

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

  const handleNumberChange = (e: any) => {
    setPhoneNumber(e.target.value);
    setIsValidPhoneNumber("");
  };

  const validatePhoneNumber = () => {
    const phoneNumberRegex = /^(\+234|0)([789]\d{9})$/;
    const isValid = phoneNumberRegex.test(phoneNumber);
    setIsValidPhoneNumber(isValid ? "" : "Invalid Phone Number");
    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const passwordValidationResult = validatePassword();
    setError(null);
    setLoading(true);

    if (
      fname.trim() === "" ||
      lname.trim() === "" ||
      email.trim() === "" ||
      phoneNumber.trim() === "" ||
      password.trim() === ""
    ) {
      setError("All fields are required.");
      setLoading(false);
      return;
    } else if (!passwordValidationResult.isValid) {
      setPasswordError(passwordValidationResult.errorMessage);
      setLoading(false);
      return;
    } else if (emailError !== "") {
      setLoading(false);
      return;
    } else if (isValidPhoneNumber !== "") {
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(`${server}/user/create`, {
        firstName: fname,
        lastName: lname,
        phoneNo: phoneNumber,
        email: email,
        password: password,
      });

      console.log(response.data);
      setFname("");
      setLname("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
      setError(null);

      // Redirect to the login page or perform any other necessary actions
      //   alert(res.message);
      // navigate("/login");
      // window.location.href = "/login"
      // toast.success(response.data.message);
      toast.success("Sign-up successful. \n\nPlease login to continue");
      router("/login");
    } catch (err: any) {
      console.log(err.response.data);
      //   setError(err.response.data.message); //
      toast.error(err.response.data.message);
    } finally {
      setLoading(false);
    }

    // alert(`${name},\n${email},\n${phoneNumber}\n\nUser Created Succesfully`)
  };
  return (
    <Flex w="100vw" h="100vh" direction="column" align="center" fontFamily={"Public Sans"} bgColor={"#008FCD"}>
      <Flex
        w="500px"
        h="600px"
        mt={"100px"}
        bg="#ffffff"
        borderRadius={"10px"}
        // border={"1px solid"}
        py={"35px"}
        px={"30px"}
        flexDirection={"column"}
        boxShadow={"20px"}
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "0px", // Set the width of the scrollbar
            borderRadius: "10px", // Match the borderRadius of the Box element
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#CBD5E0", // Scrollbar thumb color
            borderRadius: "10px", // Match the borderRadius of the Box element
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#A0AEC0", // Scrollbar thumb color on hover
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#F7FAFC", // Scrollbar track color
            borderRadius: "10px", // Match the borderRadius of the Box element
          },
        }}
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
          Sign Up
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
              Have an account?{" "}
              <span style={{ fontWeight: 700, color: "#008FCD" }}>Login</span>
            </ChakraLink>
          </Text>
        </Flex>
        <Flex bg={"transparent"}>
          <form>
            <FormControl>
              <FormLabel
                fontSize={"13px"}
                color={"#A9ABBD"}
                mb={"6px"}
                mt={"15px"}
              >
                Full Name
              </FormLabel>
              <Input
                type={"text"}
                value={fname}
                onChange={handleFirstNameChange}
                required
                autoComplete="name"
                p={"16px"}
                borderRadius={"5px"}
                bg={"#EDF2F7"}
                border={"0px solid #E2E8F0"}
                w={"470px"}
                color={"#1A202C"}
                textAlign={"left"}
              />
            </FormControl>
            <FormControl isInvalid={emailError !== ""}>
              <FormLabel
                fontSize={"13px"}
                color={"#A9ABBD"}
                mb={"6px"}
                mt={"15px"}
              >
                Your Email
              </FormLabel>
              <Input
                type={"email"}
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
            <SubmitBtn
              loadingText={"Signing Up..."}
              btntitle={"Next"}
              onClick={handleSubmit}
              isLoading={loading}
            />
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignupForm;
