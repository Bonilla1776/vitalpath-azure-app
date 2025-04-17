'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { isValidMotionProp, motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/system";
import {
  Box,
  Button,
  Checkbox,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";

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
        title: "Consent Required",
        description: "You must agree to participate to continue.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    try {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 1000));
      router.push("/discovery");
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const bgGradient = useColorModeValue(
    "linear(to-br, blue.50, green.100)",
    "linear(to-br, gray.800, green.700)"
  );

  const textColor = useColorModeValue("gray.800", "gray.100");

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
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="xl"
        borderRadius="2xl"
        p={8}
      >
        <Stack spacing={4} mb={6} textAlign="center">
          <Text fontSize="sm" color="gray.500" fontWeight="medium">
            Step 2 of 3
          </Text>
          <Heading fontSize="2xl" color={textColor}>
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
          bg={useColorModeValue("gray.50", "gray.700")}
          borderRadius="lg"
          p={4}
          fontSize="sm"
          color={textColor}
        >
          <Stack spacing={3} textAlign="left">
            <Text><strong>Title of Study:</strong> AI-Driven Motivational Interviewing: A Scalable Digital Health Coaching Model for Personalized Behavioral Change and Health Improvement</Text>
            <Text><strong>Introduction:</strong> You are invited to participate in a research project evaluating an AI-driven health coaching platform that integrates Motivational Interviewing (MI) techniques. This study is led by John-Eric Bonilla, Ph.D. Candidate in the Department of Information Science at UA Little Rock, under the supervision of Professor Xiaowei Xu. To participate, you must be at least 18 years old. This consent form explains the study and your rights as a participant. Please ask questions if anything in this form is unclear.</Text>
            <Text><strong>Key Information:</strong></Text>
            <Text>• Purpose: To develop and evaluate an AI-driven health coaching platform that uses MI techniques to deliver personalized health interventions.</Text>
            <Text>• Eligibility: You must be 18 or older, possess a device (smartphone, tablet, or computer) capable of running the AI health coaching app, and be willing to use the AI coach regularly over a 12-week period.</Text>
            <Text>• What You Will Do:</Text>
            <Text>   o Provide some demographic information.</Text>
            <Text>   o Complete an initial setup with the AI coach (20–30 minutes).</Text>
            <Text>   o Interact with the AI coach (10–30 minutes per session) about once per week.</Text>
            <Text>   o Optional daily check-in (up to 5 minutes per check-in)</Text>
            <Text>• Risks: Minimal. The primary risk is the potential loss of confidentiality, which is no greater than typical daily online interactions.</Text>
            <Text>• Benefits: You may experience improvements in your health behaviors. Your participation also helps advance digital health research that could benefit others in the future.</Text>
            <Text>• Voluntary Participation: Your participation is entirely voluntary. You may withdraw at any time without penalty.</Text>

            <Text><strong>Study Details:</strong> This research explores how embedding MI techniques into an AI health coaching platform may enhance user engagement and improve health outcomes. We aim to identify a scalable, personalized approach to health interventions.</Text>

            <Text><strong>Procedures:</strong></Text>
            <Text>1. Initial Setup (20–30 minutes):</Text>
            <Text>   You will complete a one-time session with the AI health coach to establish your profile and preferences.</Text>
            <Text>2. Regular Sessions (10–15 minutes each):</Text>
            <Text>   You will interact with the AI health coach roughly once a week for 12 weeks.</Text>
            <Text>3. Optional Surveys (10–15 minutes each):</Text>
            <Text>   You may be asked to complete brief online surveys about your experience and health behaviors.</Text>
            <Text>4. Optional Interviews (30–45 minutes each):</Text>
            <Text>   If selected, you may participate in follow-up interviews to discuss your experience in more detail.</Text>
            <Text>   Overall time commitment is expected to be about 2–3 hours spread over 8–12 weeks.</Text>

            <Text><strong>Risks and Discomforts:</strong></Text>
            <Text>• Minimal Risk: Similar to everyday online activities.</Text>
            <Text>• Confidentiality: While unlikely, there is a small risk that unauthorized individuals could access your data. We will use secure data storage and restricted access protocols to reduce this risk.</Text>

            <Text><strong>Potential Benefits:</strong></Text>
            <Text>1. Personal Benefits: You may see improvements in health-related behaviors or overall well-being.</Text>
            <Text>2. Wider Impact: Your participation contributes to the development of scalable digital health tools that can benefit future users.</Text>

            <Text><strong>Confidentiality and Data Security:</strong></Text>
            <Text>• Under Arkansas’s Freedom of Information Act, research records affiliated with this institution may be requested by the public. However, we will make every effort to protect your confidential information, within the limits of the law and University policies.</Text>
            <Text>1. Data Storage & Protection:</Text>
            <Text>   o All electronic data will be stored on secure, encrypted servers with access limited to authorized team members.</Text>
            <Text>   o Any physical records will be kept in locked cabinets in secure office spaces.</Text>
            <Text>2. Access Control & Encryption:</Text>
            <Text>   o Password protection and secure logins will limit who can access data.</Text>
            <Text>   o All data stored and transmitted will be encrypted.</Text>
            <Text>3. Duration of Storage:</Text>
            <Text>   o Data will be retained securely for at least three years after the study ends.</Text>
            <Text>   o Personally identifiable information will be destroyed thereafter; de-identified data may be kept for further research.</Text>
            <Text>4. Data Use in Publications:</Text>
            <Text>   o Any published findings will be in aggregate form, ensuring that individual participants remain unidentifiable.</Text>
            <Text>5. Email Communication:</Text>
            <Text>   o Please note that email is not fully secure. Exercise caution when sharing sensitive information through email.</Text>
            <Text>6. Supervising Faculty Access:</Text>
            <Text>   o Because the principal investigator is a student, the supervising faculty will also have access to raw data and will retain it for at least three years.</Text>

            <Text><strong>Your Rights as a Participant:</strong></Text>
            <Text>• You are free to ask questions at any time.</Text>
            <Text>• Participation is completely voluntary; you may stop at any point without any penalty.</Text>
            <Text>• If you choose to withdraw, your data will be de-identified and used only in aggregate form unless you specifically request its removal.</Text>

            <Text><strong>IRB Approval & Contacts:</strong></Text>
            <Text>This study has been reviewed and approved by the UA Little Rock Institutional Review Board (IRB). The IRB confirms that this research meets the required ethical standards.</Text>
            <Text>• Principal Investigator: John-Eric Bonilla, jbonilla@ualr.edu</Text>
            <Text>• Faculty Advisor: Professor Xiaowei Xu: xwxu@ualr.edu</Text>
            <Text>• Office of Research Compliance: 501-916-6209 or irb@ualr.edu</Text>
          </Stack>
        </Box>

        <Checkbox
          mt={6}
          isChecked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          colorScheme="green"
        >
          I affirm that I am at least 18 years old and I agree to participate in this study.
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


