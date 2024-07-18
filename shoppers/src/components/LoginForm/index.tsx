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
import "./index.css";
import { useSignInMutation } from "../../store/slices/appSlice";
import { server } from "../../services/server";
import { api } from "../../services/server";
import axios from "axios";
import {
  isAuthenticated,
  setAuthToken,
  setCustomerID,
} from "../../services/authService";

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

  const createCart = async () => {
    if (isAuthenticated()) {
        try {
            const token = localStorage.getItem('authToken');
            const cart = JSON.parse(localStorage.getItem('cart') || '[]');

            // if (cart.length > 0) {
                const res = await axios.post(
                    `${server}/order/cart`,
                    {
                        cart: cart,
                    },
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    }
                );
               const order_id = res.data.data.id;
               localStorage.setItem('order_id', order_id);
               console.log(res);
            // } else {
                // console.log('Cart is empty');
            // }
        } catch (err) {
            console.error('Error creating cart:', err);
        }
    } else {
        console.log('User is not authenticated');
    }
};

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    // toast.success('Login successful');
    // router("/product-catalogue")

    if (email.trim() === "" || password.trim() === "") {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        `${server}/auth/signin`,
        {
          "email": email,
          "password": password,
        }
        // { withCredentials: true }
      );

      // Assuming the backend returns a success message upon successful login
      if (res.status === 200) {
        const token = res.data.data.access_token;
        setAuthToken(token);
        createCart();
        toast.success('Login Successful')
        router("/product-catalogue/");
        console.log(localStorage.getItem("authToken"));
      } else {
        console.log(res.status);
      }

      setLoading(false);
    } catch (err: any) {
      console.log(err);
    }
    setLoading(false);
  };
  return (
    <Flex w="100%" direction="column" align="center" fontFamily={"Public Sans"}>
      <Flex
        w="500px"
        h="450px"
        bg="#ffffff"
        // mt={"100px"}
        // mb={"25px"}
        py={"35px"}
        px={"30px"}
        flexDirection={"column"}
        boxShadow={"20px"}
      >
        <Text
          fontWeight={600}
          fontSize={"23px"}
          color={"#000000"}
          bg={"transparent"}
          mb={"20px"}
        >
          Welcome Back,
        </Text>
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
                w={"440px"}
                onBlur={validateEmail}
                color={"#1A202C"}
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
                  w={"440px"}
                  color={"#1A202C"}
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
              mb={"40px"}
              fontSize={"14.5px"}
            >
              <CheckboxGroup>
                <Checkbox className="custom-checkbox">
                  <Text fontSize={"14.5px"}>Remember me</Text>
                </Checkbox>
              </CheckboxGroup>
              <ChakraLink
                fontWeight={700}
                href="forgot-password"
                textDecoration="none"
                _hover={{ textDecor: "none" }}
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
