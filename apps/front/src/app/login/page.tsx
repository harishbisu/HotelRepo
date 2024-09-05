// src/pages/login.js

'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext'; // Adjust the path if needed
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

const LoginPage = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e : any) => {
    e.preventDefault();

    // Simulate login action
    if (email && password) {
      login({ email, name: 'John Doe' }); // Example user data
      router.push('/'); // Redirect to home or another page after login
    } else {
      setError('Please enter both email and password.');
    }
  };

  return (
    <Container maxW="md" centerContent>
      <Box
        p={6}
        borderWidth={1}
        borderRadius="md"
        boxShadow="md"
        w="100%"
        mt={8}
        mb={8}
      >
        <Heading mb={6} textAlign="center">Login</Heading>
        {error && <Text color="red.500" mb={4}>{error}</Text>}
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </FormControl>
            <Button colorScheme="teal" type="submit" width="full">
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
