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
  VStack,
  Badge,
  Divider,
} from '@chakra-ui/react';
import { chakra, shouldForwardProp } from '@chakra-ui/system';
import { isValidMotionProp, motion } from 'framer-motion';

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Home() {
  const headingColor = useColorModeValue('purple.700', 'purple.300');
  const subtextColor = useColorModeValue('gray.700', 'gray.300');
  const highlightColor = useColorModeValue('purple.50', 'purple.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const accentColor = useColorModeValue('green.500', 'green.300');

  const bgGradient = useColorModeValue(
    'linear(to-br, white, purple.50, purple.100)',
    'linear(to-br, gray.900, purple.900, purple.700)'
  );

  return (
    <Box
      minH="100vh"
      bgGradient={bgGradient}
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
        boxShadow="2xl"
        borderRadius="2xl"
        px={{ base: 6, md: 12 }}
        py={{ base: 10, md: 16 }}
        position="relative"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          h="4px"
          bgGradient={`linear(to-r, ${accentColor}, purple.500)`}
        />

        <Flex justify="center" gap={10} mb={2} wrap="wrap">
          <Image
            src="/ualr-logo.png"
            alt="UA Little Rock Logo"
            width={120}
            height={120}
            style={{ objectFit: 'contain' }}
          />
          <Image
            src="/vitalpath-logo.png"
            alt="VitalPath Logo"
            width={120}
            height={120}
            style={{ objectFit: 'contain' }}
          />
        </Flex>

        <Box>
          <Badge
            colorScheme="green"
            fontSize="sm"
            px={3}
            py={1}
            borderRadius="full"
            mb={3}
          >
            PhD Research Study
          </Badge>

          <Heading as="h1" size="2xl" fontWeight="extrabold">
            Welcome to{' '}
            <Text as="span" color={headingColor}>
              VitalPath
            </Text>{' '}
            🌿
          </Heading>
        </Box>

        <Text fontSize="xl" fontWeight="semibold" color={subtextColor}>
          Begin Your 100-Day Transformation Journey
        </Text>

        <Stack spacing={6} fontSize={{ base: 'md', md: 'lg' }} color={subtextColor}>
          <Text>
            Your personal AI Health Coach is ready to listen deeply, spark inspiration, and provide unwavering support as you create lasting well-being. This isn't just another app — it's your personal breakthrough companion.
          </Text>

          <Text>
            VitalPath uses advanced AI to ask the right questions at the right time, reflecting your own wisdom back to you and gently guiding you past obstacles toward the changes that matter most to you.
          </Text>

          <Text fontWeight="medium" color={headingColor}>
            This is more than a study—it's your opportunity to discover what becomes possible when technology truly understands and responds to your unique path to wellness.
          </Text>
        </Stack>

        <Divider />

        <Box
          bg={highlightColor}
          px={6}
          py={4}
          borderRadius="xl"
          mx="auto"
          w="full"
          maxW="xl"
        >
          <Text fontSize="md" fontWeight="medium" color={headingColor}>
            Participation is free and limited to 100 individuals. Join now to secure your spot!
          </Text>
        </Box>

        <Flex gap={6} flexWrap="wrap" justify="center" pt={5}>
          <Button
            as={NextLink}
            href="/register"
            colorScheme="purple"
            size="lg"
            px={8}
            py={6}
            rounded="full"
            fontWeight="bold"
          >
            Join the Study
          </Button>

          <Button
            as={NextLink}
            href="/login"
            variant="outline"
            colorScheme="purple"
            size="lg"
            px={8}
            py={6}
            rounded="full"
            fontWeight="bold"
          >
            Return User Login
          </Button>
        </Flex>

        <Text fontSize="sm" pt={6} color="gray.500">
          VitalPath Innovations, LLC • Research led by John-Eric Bonilla • UA Little Rock
        </Text>
      </VStack>
    </Box>
  );
}

