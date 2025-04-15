'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function Home() {
  const headingColor = useColorModeValue('purple.600', 'purple.300');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const bgGradient = useColorModeValue(
    'linear(to-br, white, pink.100, fuchsia.200)',
    'linear(to-br, gray.800, pink.300, purple.600)'
  );
  const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });

  return (
    <Box
      minH="100vh"
      bgGradient={bgGradient}
      color="gray.800"
      fontFamily="'Segoe UI', sans-serif"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 10 }}
      py={10}
    >
      <Flex direction={{ base: 'column', md: 'row' }} gap={6} align="center" mb={8}>
        <Image
          src="/ualr-logo.png"
          alt="UA Little Rock Logo"
          width={120}
          height={120}
          className="rounded-md shadow-lg"
        />
        <Image
          src="/vitalpath-logo.png"
          alt="VitalPath Logo"
          width={120}
          height={120}
          className="rounded-md shadow-lg"
        />
      </Flex>

      <Heading as="h1" size="2xl" textAlign="center" mb={4}>
        Welcome to{' '}
        <Text as="span" color={headingColor} display="inline-block">
          VitalPath
        </Text>{' '}
        🌿
      </Heading>

      <Heading as="h2" size="lg" textAlign="center" mb={6} color={textColor}>
        Begin Your 100-Day AI Coaching Journey
      </Heading>

      <Container maxW="3xl" textAlign="center" color={textColor} mb={8}>
        <Stack spacing={4} fontSize={{ base: 'md', md: 'lg' }}>
          <Text>
            Your personal AI Health Coach is here to listen, inspire, and support you in achieving
            sustainable well-being. This is more than an app — it’s a relationship.
          </Text>
          <Text>
            Through thoughtful conversation powered by cutting-edge motivational interviewing, you'll
            unlock deeper purpose, overcome roadblocks, and celebrate progress.
          </Text>
          <Text fontSize="lg" fontWeight="medium" color="gray.900">
            Ready to explore what’s possible when technology truly cares?
          </Text>
        </Stack>
      </Container>

      <Flex mt={8} gap={4} wrap="wrap" justify="center">
        <Button
          as={NextLink}
          href="/register"
          colorScheme="purple"
          px={8}
          py={6}
          size={buttonSize}
          rounded="full"
          fontWeight="semibold"
          transition="all 0.3s"
          _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
        >
          Join the Study → Sign Up
        </Button>

        <Button
          as={NextLink}
          href="/login"
          variant="outline"
          colorScheme="purple"
          px={8}
          py={6}
          size={buttonSize}
          rounded="full"
          fontWeight="semibold"
          transition="all 0.3s"
          _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
        >
          Return User → Log In
        </Button>
      </Flex>

      <Box mt={12} borderTopWidth="1px" pt={4}>
        <Text fontSize="sm" textAlign="center" color="gray.500">
          VitalPath Innovations, LLC • Research led by John-Eric Bonilla • UA Little Rock
        </Text>
      </Box>
    </Box>
  );
}








