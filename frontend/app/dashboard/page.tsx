'use client';

import { useRouter } from 'next/navigation';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';

const metrics = [
  { name: 'Energy', color: 'yellow.400' },
  { name: 'Sleep Quality', color: 'blue.400' },
  { name: 'Stress', color: 'red.400' },
];

export default function DashboardPage() {
  const router = useRouter();
  const headingColor = useColorModeValue('purple.700', 'purple.300');
  const cardBg = useColorModeValue('white', 'gray.700');

  return (
    <Box minH="100vh" py={16} px={6} bgGradient="linear(to-br, purple.50, white)">
      <VStack spacing={8} align="start" maxW="5xl" mx="auto">
        <Heading size="2xl" color={headingColor}>
          Welcome to Your Dashboard
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Track your progress and connect with your AI Health Coach.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
          {metrics.map((metric) => (
            <Box
              key={metric.name}
              bg={cardBg}
              p={6}
              rounded="xl"
              boxShadow="lg"
              textAlign="center"
            >
              <Text fontSize="xl" fontWeight="semibold">
                {metric.name}
              </Text>
              <Text fontSize="3xl" fontWeight="bold" color={metric.color}>
                --
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        <Button
          mt={10}
          size="lg"
          colorScheme="green"
          px={10}
          py={6}
          rounded="full"
          onClick={() => router.push('/coach')}
        >
          Start AI Coaching Session
        </Button>
      </VStack>
    </Box>
  );
}

