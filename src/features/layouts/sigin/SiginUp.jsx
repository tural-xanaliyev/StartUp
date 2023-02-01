import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import regexObject from "./../../../regex";
import { useAddUserMutation, selectAllUsers } from "../../redux/usersSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import styles from './sigin.module.css'
import { createUser } from "../../authentication/emailAndPassword";



const SiginUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false)
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false)
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false)
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false)
  const navigate = useNavigate();
  const [addNewUsers, { isLoding }] = useAddUserMutation();
  const [usersEmail, setUsersEmail] = useState([]);
  const isDisabled = [name, lastName, email, password].every(Boolean);
  const [isEmail, setIsEmail] = useState(false);
  const users = useSelector(selectAllUsers);


  useEffect(() => {
    if (email) {
      setIsEmail(users.find((item) => item.email === email));
    }
  }, [email]);


  const handleClick = async (e) => {
    // setIsEmail(users.find((item) => item.email === email));
    if (isEmail == undefined) {
      if (
        regexObject.passwordDataTesder(password) &&
        regexObject.emailDataTesder(email) &&
        name.length > 3 &&
        lastName.length > 5
      ) {
        if (isDisabled) {
          try {
            createUser(name,email,password)
          } catch (error) {
          }
        }
      }
    } else {
      alert("Bu emaildən istifadə olunub");
      setEmail("")
    }
    e.preventDefault();
  };

  const chackName = (data) => {
    setName(data);
        setNameError(false)

    setTimeout(() => {
      if (data.length > 3) {
        setNameError(false)
      } else {
        setNameError(true)
      }
    }, 2000)
  }

  const chackLastName = (data) => {
    setLastName(data);
    setLastNameError(false)

    setTimeout(() => {
      if (data.length > 5) {
        setLastNameError(false)
      } else {
        setLastNameError(true)
      }
    }, 2000)
  }

  const chackEmail = (data) => {
    setEmail(data);
    setEmailError(false)
    setTimeout(() => {
      if (regexObject.emailDataTesder(data)) {
        setEmailError(false)
      } else {
        setEmailError(true)
      }
    }, 2000);
  }

  const chackPassword = (data) => {
    setPassword(data);
    setPasswordError(false);
    setTimeout(() => {
      if(regexObject.passwordDataTesder(data)){
        setPasswordError(false)
      }else{
        setPasswordError(true)
      }
    }, 2000);
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    mb="10px"
                    type="text"
                    value={name}
                    className={nameError ? styles.errorInput : styles.input}
                    onChange={(e) => chackName(e.target.value)}
                  />
                  {nameError ? <div className={styles.error}>Keçərsiz ad</div> : null}
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    mb="10px"
                    type="text"
                    value={lastName}
                    onChange={(e) => chackLastName(e.target.value)}
                    className={lastNameError ? styles.errorInput : styles.input}
                  />
                  {lastNameError ? <div className={styles.error}>Keçərsiz Soyad</div> : null}
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                mb="10px"
                type="email"
                value={email}
                onChange={(e) => chackEmail(e.target.value)}
                className={emailError ? styles.errorInput : styles.input}
              />
              {emailError ? <div className={styles.error}>Keçərsiz Email</div> : null}
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  mb="10px"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => chackPassword(e.target.value)}
                  className={passwordError ? styles.errorInput : styles.input}
                />
                <InputRightElement h={"full"}>
                  <Button
                    mb="10px"
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleClick}
                disabled={!isDisabled}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"blue.400"} to="/">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SiginUp;
