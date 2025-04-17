'use client';

import { signIn } from 'next-auth/react';
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
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import NextLink from 'next/link';
import { useState } from 'react';

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function RegisterPage() {
  const cardBg = useColorModeValue('rgba(255,255,255,0.6)', 'rgba(26,32,44,0.6)');
  const headingColor = useColorModeValue('purple.700', 'purple.300');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    // Custom email/password logic can go here
    signIn('azure-ad-b2c', { callbackUrl: '/' });
  };

  const handleOAuth = (provider: string) => {
    signIn(provider, { callbackUrl: '/' });
  };

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
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </FormControl>
            <Button
              colorScheme="purple"
              size="lg"
              w="full"
              onClick={handleRegister}
            >
              Register
            </Button>
          </Stack>

          <Divider />

          <Text fontWeight="medium">Or register with</Text>
          <Stack direction="row" spacing={4} w="full">
            <Button bg="white" boxShadow="md" w="full" onClick={() => handleOAuth('google')}>
              <Image src="/google-icon.png" alt="Google" width={20} height={20} /> Google
            </Button>
            <Button bg="white" boxShadow="md" w="full" onClick={() => handleOAuth('facebook')}>
              <Image src="/facebook-icon.png" alt="Facebook" width={20} height={20} /> Facebook
            </Button>
            <Button bg="white" boxShadow="md" w="full" onClick={() => handleOAuth('apple')}>
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



