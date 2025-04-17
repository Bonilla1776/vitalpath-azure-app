'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import NextLink from 'next/link';

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function RegisterPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const cardBg = useColorModeValue('rgba(255,255,255,0.6)', 'rgba(26,32,44,0.6)');
  const headingColor = useColorModeValue('purple.700', 'purple.300');

  return (
    <Box position="relative" minH="100vh" overflow="hidden">
      <Box
        as="video"
        autoPlay
        muted
        loop
        playsInline
        position="fixed"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        objectFit="cover"
        zIndex={0}
        style={{ transform: 'scale(1.05)', objectPosition: 'top center' }}
      >
        <source src="/RegisterPageVideo.mp4" type="video/mp4" />
      </Box>

      <Box position="relative" zIndex={1} px={6} py={20}>
        <VStack spacing={6} maxW="lg" mx="auto" bg={cardBg} p={8} borderRadius="xl" boxShadow="xl">
          <MotionHeading size="2xl" color={headingColor}>
            Create Your Account
          </MotionHeading>
          <MotionText fontSize="md" color="gray.700">
            Begin your 100-day wellness journey
          </MotionText>

          <Stack spacing={4} w="full">
            <Input
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <Button colorScheme="purple" size="lg" w="full">
              Register
            </Button>
          </Stack>

          <Divider />

          <Text fontWeight="medium">Or register with</Text>
          <Stack direction="row" spacing={4}>
            <Button bg="white" boxShadow="md" w="full">
              <Image src="/google-icon.png" alt="Google" width={20} height={20} /> Google
            </Button>
            <Button bg="white" boxShadow="md" w="full">
              <Image src="/facebook-icon.png" alt="Facebook" width={20} height={20} /> Facebook
            </Button>
            <Button bg="white" boxShadow="md" w="full">
              <Image src="/apple-icon.png" alt="Apple" width={20} height={20} /> Apple
            </Button>
          </Stack>

          <Button as={NextLink} href="/" variant="link" colorScheme="gray">
            Back to Home
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

