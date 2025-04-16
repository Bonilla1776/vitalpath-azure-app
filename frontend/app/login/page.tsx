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

export default function LoginPage() {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');

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
            <Input type="email" placeholder="you@example.com" focusBorderColor="purple.400" />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel color={textColor}>Password</FormLabel>
            <Input type="password" placeholder="••••••••" focusBorderColor="purple.400" />
          </FormControl>

          <Button
            colorScheme="purple"
            size="lg"
            mt={4}
            w="100%"
            _hover={{ transform: 'scale(1.02)', boxShadow: 'md' }}
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


