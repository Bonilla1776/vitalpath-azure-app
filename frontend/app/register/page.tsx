'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { isValidMotionProp, motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/system';
import {
  Box,
  Button,
  Checkbox,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  useToast,
  List,
  ListItem,
} from '@chakra-ui/react';
import axios from 'axios';

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function ConsentPage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async () => {
    if (!agreed) {
      toast({
        title: 'Consent Required',
        description: 'You must agree to participate to continue.',
        status: 'warning',
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    try {
      setLoading(true);
      await axios.post('/api/consent', {
        consented: true,
        version: 'v1.0',
      });
      router.push('/discovery');
    } catch (error) {
      toast({
        title: 'Submission failed',
        description: 'Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const bgGradient = useColorModeValue(
    'linear(to-br, blue.50, green.100)',
    'linear(to-br, gray.800, green.700)'
  );

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      py={10}
      bgGradient={bgGradient}
    >
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 } as any}
        maxW="4xl"
        w="full"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="xl"
        borderRadius="2xl"
        p={8}
      >
        <Stack spacing={4} mb={6}>
          <Text fontSize="sm" color="gray.500" fontWeight="medium">
            Step 2 of 3
          </Text>
          <Heading fontSize="2xl" color={useColorModeValue('gray.800', 'gray.100')}>
            Informed Consent Form
          </Heading>
          <Text fontSize="sm" color="gray.600">
            Please read carefully before proceeding.
          </Text>
        </Stack>

        <Box
          h="400px"
          overflowY="auto"
          border="1px"
          borderColor="gray.200"
          bg={useColorModeValue('gray.50', 'gray.700')}
          borderRadius="lg"
          p={4}
          fontSize="sm"
          color={useColorModeValue('gray.800', 'gray.100')}
        >
          <Stack spacing={3}>
            <Text><strong>Title of Study:</strong> AI-Driven Motivational Interviewing...</Text>
            <Text><strong>Introduction:</strong> You are invited to participate in an IRB-approved research study exploring AI-supported health coaching using conversational interviews.</Text>
            <Text><strong>Key Information:</strong></Text>
            <List spacing={2} pl={4} styleType="disc">
              <ListItem>Purpose: To develop and evaluate an AI-powered coaching system.</ListItem>
              <ListItem>Eligibility: You must be 18 or older.</ListItem>
              <ListItem>What You Will Do: Complete onboarding, interact with AI weekly, and optionally complete surveys.</ListItem>
              <ListItem>Risks: Minimal; data confidentiality is a priority.</ListItem>
              <ListItem>Benefits: Possible improved self-awareness and behavioral outcomes.</ListItem>
            </List>
            <Text><strong>Study Details:</strong> This research explores digital tools to support long-term health behavior change.</Text>
            <Text><strong>Procedures:</strong></Text>
            <List spacing={2} pl={4} styleType="decimal">
              <ListItem>Initial setup including a discovery questionnaire.</ListItem>
              <ListItem>Weekly 5–30 minute interactions with your AI coach.</ListItem>
              <ListItem>Optional surveys or interviews at designated points.</ListItem>
            </List>
            <Text><strong>Confidentiality & Data Security:</strong></Text>
            <List spacing={2} pl={4} styleType="disc">
              <ListItem>Data is stored on secure servers with encryption and access controls.</ListItem>
              <ListItem>All data will be retained for a minimum of 3 years.</ListItem>
              <ListItem>Email communications may not be encrypted; avoid sending sensitive information via email.</ListItem>
            </List>
            <Text><strong>Your Rights:</strong> Participation is voluntary. You can withdraw at any time without consequence. Questions? Reach out:</Text>
            <Box pl={4}>
              <Text>John-Eric Bonilla, jbonilla@ualr.edu</Text>
              <Text>Prof. Xiaowei Xu, xwxu@ualr.edu</Text>
              <Text>IRB: 501-916-6209, irb@ualr.edu</Text>
            </Box>
          </Stack>
        </Box>

        <Checkbox
          mt={6}
          isChecked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          colorScheme="green"
        >
          I am at least 18 years old and I agree to participate in this study.
        </Checkbox>

        <Button
          mt={6}
          colorScheme="green"
          w="full"
          onClick={handleSubmit}
          isLoading={loading}
          isDisabled={!agreed}
          rounded="lg"
        >
          I Agree → Continue to Discovery
        </Button>
      </MotionBox>
    </Box>
  );
}
