'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

export default function CoachPage() {
  const [conversation, setConversation] = useState<string[]>([
    "👋 Hello! I'm your AI Health Coach. What would you like to work on today?",
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    setConversation((prev) => [
      ...prev,
      `🧍‍♂️ ${input}`,
      '🤖 That’s a great start! Let’s explore that further...',
    ]);
    setInput('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  return (
    <Box
      minH="100vh"
      py={10}
      px={{ base: 4, md: 10 }}
      bgGradient={useColorModeValue(
        'linear(to-br, blue.50, green.50)',
        'linear(to-br, gray.800, gray.700)'
      )}
    >
      <VStack
        spacing={6}
        maxW="3xl"
        mx="auto"
        p={6}
        bg={useColorModeValue('white', 'gray.800')}
        borderRadius="xl"
        boxShadow="xl"
        align="stretch"
      >
        <Heading
          size="lg"
          textAlign="center"
          color={useColorModeValue('blue.700', 'blue.200')}
        >
          AI Health Coaching
        </Heading>

        <Box
          h="300px"
          overflowY="auto"
          p={4}
          bg={useColorModeValue('gray.50', 'gray.700')}
          borderRadius="md"
          borderWidth="1px"
        >
          <Stack spacing={3}>
            {conversation.map((msg, idx) => (
              <Text key={idx}>{msg}</Text>
            ))}
            <div ref={messagesEndRef} />
          </Stack>
        </Box>

        <Flex gap={2}>
          <Input
            placeholder="Your response..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            flex="1"
            bg={useColorModeValue('white', 'gray.600')}
          />
          <Button
            colorScheme="green"
            onClick={sendMessage}
            isDisabled={!input.trim()}
          >
            Send
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
}

