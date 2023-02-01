import React, { useEffect, useState } from 'react'
import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {Link, useNavigate} from 'react-router-dom'
import { auth } from '../../../fireBase';
import { useAuthState } from "react-firebase-hooks/auth";
import { sendPasswordReset } from '../../authentication/emailAndPassword';

const ForgetPassword = () => {
  const [email,setEmail] = useState('')
  const [user,loading,error] = useAuthState(auth)
  const navigator = useNavigate()

  useEffect(() => {
    if(loading) return
    if(user) navigator('/home')
  },[user,loading])


    return (
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack
            spacing={4}
            w={'full'}
            maxW={'md'}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            boxShadow={'lg'}
            p={6}
            my={12}>
            <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
              Forgot your password?
            </Heading>
            <Text
              fontSize={{ base: 'sm', sm: 'md' }}
              color={useColorModeValue('gray.800', 'gray.400')}>
              You&apos;ll get an email with a reset link
            </Text>
            <FormControl id="email">
              <Input
                placeholder="your-email@example.com"
                _placeholder={{ color: 'gray.500' }}
                type="email"
                value={email}
                onChange={e=>setEmail(e.target.value)}
              />
            </FormControl>
            <Stack spacing={6}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={() => sendPasswordReset(email)}
                >
                <Link to="/"> Request Reset</Link> 
               
              </Button>
            </Stack>
          </Stack>
        </Flex>
      );
}

export default ForgetPassword