'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  useBreakpointValue,
  VStack,
  Highlight,
  Badge,
  Divider,
} from '@chakra-ui/react';

export default function Home() {
  const headingColor = useColorModeValue('purple.600', 'purple.300');
  const subtextColor = useColorModeValue('gray.600', 'gray.300');
  const cardBg = useColorModeValue('white', 'gray.900');
  const gradientBg = useColorModeValue(
    'linear(to-br, white, pink.100, fuchsia.200)',
    'linear(to-br, gray.800, pink.300, purple.600)'
  );
  const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });

  return (
    <Box
      minH="100vh"
      bgGradient={gradientBg}
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 10 }}
      py={{ base: 12, md: 20 }}
    >
      <VStack
        spacing={8}
        textAlign="center"
        maxW="4xl"
        w="full"
        bg={cardBg}
        boxShadow="xl"
        borderRadius="2xl"
        px={{ base: 6, md: 12 }}
        py={{ base: 10, md: 16 }}
        position="relative"
      >
        {/* Top badge */}
        <Badge
          colorScheme="green"
          fontSize="sm"
          px={3}
          py={1}
          borderRadius="full"
          position="absolute"
          top="-2"
          left="50%"
          transform="translateX(-50%)"
        >
          Official PhD Research Study
        </Badge>

        {/* Logos */}
        <Flex justify="center" gap={6} mb={4} wrap="wrap">
          <Image src="/ualr-logo.png" alt="UA Little Rock Logo" width={100} height={100} />
          <Image src="/vitalpath-logo.png" alt="VitalPath Logo" width={100} height={100} />
        </Flex>

        {/* Headline */}
        <Heading as="h1" size="2xl" fontWeight="bold">
          Welcome to <Text as="span" color={headingColor}>VitalPath</Text> 🌿
        </Heading>

        {/* Subheading */}
        <Text fontSize="xl" color={subtextColor} fontWeight="semibold">
          <Highlight
            query="100-Day Transformation Journey"
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'purple.100' }}
          >
            Begin Your 100-Day Transformation Journey
          </Highlight>
        </Text>

        {/* Value Proposition */}
        <Stack spacing={5} fontSize={{ base: 'md', md: 'lg' }} color={subtextColor}>
          <Text>
            Your personal AI Health Coach is ready to listen deeply, spark inspiration, and provide unwavering support as you create lasting well-being.
          </Text>
          <Text>
            This isn't just another app — it's your breakthrough companion. Our technology uses AI-powered motivational techniques to reflect your values, help you clarify goals, and build momentum step by step.
          </Text>
          <Text fontWeight="medium" color={headingColor}>
            This is more than a study — it’s your opportunity to discover what becomes possible when technology truly understands and supports your unique path to wellness.
          </Text>
        </Stack>

        <Divider my={4} />

        {/* Spot availability prompt */}
        <Box
          bg={useColorModeValue('green.50', 'green.900')}
          px={6}
          py={4}
          borderRadius="lg"
          borderWidth="1px"
          borderColor={useColorModeValue('green.200', 'green.600')}
        >
          <Text fontSize="md" fontWeight="medium" color="green.600">
            ⏳ Only 100 participant spots available. Join now and shape the future of AI health coaching.
          </Text>
        </Box>

        {/* Call-to-action buttons */}
        <Flex gap={4} flexWrap="wrap" justify="center" pt={4}>
          <Button
            as={NextLink}
            href="/register"
            size={buttonSize}
            colorScheme="purple"
            px={8}
            py={6}
            rounded="full"
            fontWeight="bold"
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          >
            💡 Join the Study → Sign Up
          </Button>
          <Button
            as={NextLink}
            href="/login"
            size={buttonSize}
            variant="outline"
            colorScheme="purple"
            px={8}
            py={6}
            rounded="full"
            fontWeight="bold"
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          >
            🔑 Return User → Log In
          </Button>
        </Flex>

        {/* Footer */}
        <Text fontSize="sm" pt={6} color="gray.500">
          VitalPath Innovations, LLC • Research led by John-Eric Bonilla • UA Little Rock
        </Text>
      </VStack>
    </Box>
  );
}
