import React, { useEffect, useState } from "react";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    Input,
    useColorModeValue,
    Center
} from "@chakra-ui/react";
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from "react-router-dom";
import { selectAllUsers } from "./../../redux/usersSlice";
import { useSelector } from "react-redux";
import { signInGoogle } from "../../authentication/google";
import { auth } from "../../../fireBase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signinUser } from "../../authentication/emailAndPassword";

const SiginIn = () => {
    const [userPassword, setUserPassword] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const isDisabled = [userPassword, userEmail].every(Boolean);
    const users = useSelector(selectAllUsers)
    const [checkUserPassword, setCheckUserPassword] = useState('')
    const [chackUser, setChackUser] = useState({})
    const [fireChack, setFireChack] = useState({})
    const [user, loading, error] = useAuthState(auth)

    const navigate = useNavigate()
    


    const handleClickGoogle = async (event) => {
        signInGoogle()
        event.preventDefault()
    }

    useEffect(() => {
        if (loading) {
            console.log('loading')
        }
        if (user) {
            console.log(user)
            navigate('/home')
        };
    }, [user, loading])
    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"}>Sign in to your account</Heading>
                    <Text fontSize={"lg"} color={"gray.600"}>
                        to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel aria-label="email">Email address</FormLabel>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                            />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel aria-label="password">Password</FormLabel>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                value={userPassword}
                                onChange={(e) => setUserPassword(e.target.value)}
                            />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: "column", sm: "row" }}
                                align={"start"}
                                justify={"space-between"}
                            >
                                <Checkbox>Remember me</Checkbox>
                                <Link color={"blue.400"} to="/retstarPassword">
                                    Forgot password?
                                </Link>
                                <Link color={"blue.400"} to="/signUp">
                                    Sign Up
                                </Link>
                            </Stack>
                            <Button
                                bg={"blue.400"}
                                color={"white"}
                                _hover={{
                                    bg: "blue.500",
                                }}
                                onClick={()=>signinUser(userEmail, userPassword)}
                                disabled={!isDisabled}
                            >
                                <Link>Sign in</Link>
                            </Button>
                            <Center>
                                <Button
                                    w={'full'}
                                    maxW={'md'}
                                    variant={'outline'}
                                    mt="-20px"
                                    leftIcon={<FcGoogle />}
                                    onClick={handleClickGoogle}
                                >
                                    <Center>
                                        <Text>Sign in with Google</Text>
                                    </Center>
                                </Button>
                            </Center>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};

export default SiginIn;
