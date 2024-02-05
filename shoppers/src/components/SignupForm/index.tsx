/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Flex, FormControl, FormLabel, Input, FormErrorMessage, InputGroup, InputRightElement, IconButton, Text} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { useRouter } from "next/navigation";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "@fontsource/poppins";
import "@fontsource/public-sans";
import SubmitBtn from "../SubmitBtn";
import axios from "axios";
import { server } from "../../services/server";

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
    const [phoneNumber, setPhoneNumber] = useState('');
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
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;
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
        return isValid
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const passwordValidationResult = validatePassword();
        setError(null);
        setLoading(true);

        if (fname.trim() === "" || lname.trim() === "" || email.trim() === "" || phoneNumber.trim() === "" || password.trim() === "") {
            setError("All fields are required.");
            setLoading(false);
            return;
        } else if (!passwordValidationResult.isValid) {
            setPasswordError(passwordValidationResult.errorMessage);
            setLoading(false)
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
                "firstName": fname,
                "lastName": lname,
                "phoneNo": phoneNumber,
                "email": email,
                "password": password,
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
            router("/login")
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
        <Flex
            w="100%"
            direction="column"
            align="center"
            fontFamily={"Public Sans"}
        >
            <Flex
                w="500px"
                h="660px"
                bg="#ffffff"
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
                <Text
                    fontWeight={600}
                    fontSize={"23px"}
                    color={"#000000"}
                    bg={"transparent"}
                    mb={"5px"}
                >
                    Hello!
                </Text>
                <Text
                    fontWeight={500}
                    fontSize={"16.5px"}
                    color={"#A9ABBD"}
                    bg={"transparent"}
                    mb={"20px"}
                >
                    Create an account to continue
                </Text>
                <Flex bg={"transparent"} >
                    <form >
                        <FormControl>
                            <FormLabel fontSize={"13px"} color={"#A9ABBD"} mb={"6px"} mt={"15px"}>First Name</FormLabel>
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
                                w={"440px"}
                                color={"#1A202C"}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel fontSize={"13px"} color={"#A9ABBD"} mb={"6px"} mt={"15px"}>Last Name</FormLabel>
                            <Input
                                type={"text"}
                                value={lname}
                                onChange={handleLastNameChange}
                                required
                                autoComplete="name"
                                p={"16px"}
                                borderRadius={"5px"}
                                bg={"#EDF2F7"}
                                border={"0px solid #E2E8F0"}
                                w={"440px"}
                                color={"#1A202C"}
                            />
                        </FormControl>
                        <FormControl isInvalid={emailError !== ''}>
                            <FormLabel fontSize={"13px"} color={"#A9ABBD"} mb={"6px"} mt={"15px"}>Email</FormLabel>
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
                                w={"440px"}
                                onBlur={validateEmail}
                                color={"#1A202C"}
                            />
                            <FormErrorMessage color={"red"} fontSize={"12px"}>{emailError}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={isValidPhoneNumber !== ""}>
                            <FormLabel fontSize={"13px"} color={"#A9ABBD"} mb={"6px"} mt={"15px"}>Phone Number</FormLabel>
                            <Input
                                type="tel"
                                value={phoneNumber}
                                onChange={handleNumberChange}
                                onBlur={validatePhoneNumber}
                                required
                                autoComplete="tel"
                                p={"16px"}
                                borderRadius={"5px"}
                                bg={"#EDF2F7"}
                                border={"0px solid #E2E8F0"}
                                w={"440px"}
                            />
                            <FormErrorMessage color={"red"} fontSize={"12px"}>{isValidPhoneNumber}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={passwordError !== ""}>
                            <FormLabel fontSize={"13px"} color={"#A9ABBD"} mb={"6px"} mt={"15px"}>Password</FormLabel>
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
                                        icon={showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />} // Display appropriate icon based on showPassword state
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
                            <FormErrorMessage lineHeight={"16px"} color={"red"} fontSize={10}>{passwordError}</FormErrorMessage>
                        </FormControl>

                        {error && (
                            <Text color="red" fontSize="12" mt={"4px"} mb={"2px"}>
                                {error}
                            </Text>
                        )}
                        <SubmitBtn loadingText={"Signing Up..."} btntitle={"SIGN UP"} onClick={handleSubmit} isLoading={loading} />
                    </form>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default SignupForm;