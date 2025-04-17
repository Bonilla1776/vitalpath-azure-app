'use client';

import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await signIn('azure-ad-b2c', { callbackUrl: '/' });
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bgGradient="linear(to-br, white, purple.100, pink.200)"
      px={4}
    >
      <Container
        maxW="md"
        bg={cardBg}
        boxShadow="2xl"
        rounded="lg"
        p={8}
        mt={-24}
        w="100%"
      >
        <Stack spacing={6}>
          <Heading fontSize="3xl" textAlign="center" color="purple.600">
            Login to <Text as="span" color="purple.800">VitalPath</Text>
          </Heading>

          <FormControl id="email" isRequired>
            <FormLabel color={textColor}>Email</FormLabel>
            <Input
              type="email"
              placeholder="you@example.com"
              focusBorderColor="purple.400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel color={textColor}>Password</FormLabel>
            <Input
              type="password"
              placeholder="••••••••"
              focusBorderColor="purple.400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button
            colorScheme="purple"
            size="lg"
            mt={4}
            w="100%"
            _hover={{ transform: 'scale(1.02)', boxShadow: 'md' }}
            onClick={handleLogin}
          >
            Log In
          </Button>

          <Text fontSize="sm" color="gray.500" textAlign="center">
            Forgot your password? Contact your study coordinator.
          </Text>
        </Stack>
      </Container>
    </Flex>
  );
}


