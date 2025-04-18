"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isValidMotionProp, motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/system";
import {
  Box,
  Button,
  Heading,
  Input,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const MotionHeading = chakra(motion.h1, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const goalsList = [
  "Longevity",
  "Stress reduction",
  "Weight management",
  "Better sleep quality",
  "Build strength and muscle",
  "Increase daily energy",
  "Healthier nutrition",
  "Improve mental health and resilience",
  "Boost cardiovascular fitness",
  "Explore new activities/hobbies",
];

export default function DiscoveryPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    preferredName: "",
    phone: "",
    raceEthnicity: "",
    education: "",
    employment: "",
    age: 30,
    gender: "",
    heightFeet: "5",
    heightInches: "6",
    weight: 160,
    location: "",
    maritalStatus: "",
    goals: ["", "", ""],
    otherGoal: "",
    wellness: {
      fulfillment: 50,
      happiness: 50,
      energy: 50,
      stress: 50,
      sleep: 50,
      activity: 50,
      nutrition: 50,
      purpose: 50,
      motivation: 50,
      confidence: 50,
    },
  });

  useEffect(() => {
    const hasCompletedDiscovery = localStorage.getItem("discoveryComplete");
    if (hasCompletedDiscovery) {
      router.push("/dashboard");
    }
  }, []);

  const handleSliderChange = (key: string, value: number) => {
    setFormData((prev) => ({
      ...prev,
      wellness: { ...prev.wellness, [key]: value },
    }));
  };

  const handleSubmit = () => {
    console.log("Form data submitted", formData);
    localStorage.setItem("discoveryComplete", "true");
    router.push("/dashboard");
  };

  const textColor = useColorModeValue("gray.700", "gray.300");
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box maxW="6xl" mx="auto" py={10} px={6}>
      <MotionHeading
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 } as any}
        fontSize="3xl"
        fontWeight="bold"
        textAlign="center"
        mb={4}
      >
        Welcome to Your Health Journey!
      </MotionHeading>
      <Text textAlign="center" color={textColor} mb={8}>
        We’re excited you’re here. Your honest answers will help us tailor your coaching experience.
      </Text>

      <VStack spacing={6} align="stretch">
        <Input placeholder="Preferred Name" value={formData.preferredName} onChange={(e) => setFormData({ ...formData, preferredName: e.target.value })} />
        <Input placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        <Select value={formData.raceEthnicity} onChange={(e) => setFormData({ ...formData, raceEthnicity: e.target.value })}>
          <option value="">Race/Ethnicity</option>
          <option>White</option>
          <option>Black or African American</option>
          <option>Asian</option>
          <option>Hispanic or Latino</option>
          <option>Native American</option>
          <option>Pacific Islander</option>
          <option>Other</option>
          <option>Prefer not to say</option>
        </Select>
        <Select value={formData.education} onChange={(e) => setFormData({ ...formData, education: e.target.value })}>
          <option value="">Education Level</option>
          <option>Some High School</option>
          <option>High School Graduate</option>
          <option>Some College</option>
          <option>Associate Degree</option>
          <option>Bachelor's Degree</option>
          <option>Graduate or Professional Degree</option>
          <option>Prefer not to say</option>
        </Select>
        <Select value={formData.employment} onChange={(e) => setFormData({ ...formData, employment: e.target.value })}>
          <option value="">Employment Status</option>
          <option>Employed full-time</option>
          <option>Employed part-time</option>
          <option>Self-employed</option>
          <option>Unemployed</option>
          <option>Student</option>
          <option>Retired</option>
          <option>Prefer not to say</option>
        </Select>

        <Text fontSize="sm">Age: {formData.age}</Text>
        <Slider min={18} max={100} value={formData.age} onChange={(val) => setFormData({ ...formData, age: val })}>
          <SliderTrack><SliderFilledTrack /></SliderTrack>
          <SliderThumb />
        </Slider>

        <Select value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Non-binary</option>
          <option>Prefer not to say</option>
        </Select>

        <Stack direction="row" spacing={2}>
          <Select value={formData.heightFeet} onChange={(e) => setFormData({ ...formData, heightFeet: e.target.value })}>
            {Array.from({ length: 4 }, (_, i) => i + 4).map((ft) => <option key={ft}>{ft}</option>)}
          </Select>
          <Select value={formData.heightInches} onChange={(e) => setFormData({ ...formData, heightInches: e.target.value })}>
            {Array.from({ length: 12 }, (_, i) => <option key={i}>{i}</option>)}
          </Select>
        </Stack>

        <Text fontSize="sm">Weight (lbs): {formData.weight}</Text>
        <Slider min={70} max={325} value={formData.weight} onChange={(val) => setFormData({ ...formData, weight: val })}>
          <SliderTrack><SliderFilledTrack /></SliderTrack>
          <SliderThumb />
        </Slider>

        <Input placeholder="Zip Code or City" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />

        <Select value={formData.maritalStatus} onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}>
          <option value="">Marital Status</option>
          <option>Single</option>
          <option>Married</option>
          <option>Divorced</option>
          <option>Widowed</option>
          <option>Separated</option>
          <option>In a Relationship</option>
          <option>Prefer not to say</option>
        </Select>

        <Heading as="h2" size="md">Top 3 Health Goals</Heading>
        {formData.goals.map((goal, idx) => (
          <Select key={idx} value={goal} onChange={(e) => {
            const newGoals = [...formData.goals];
            newGoals[idx] = e.target.value;
            setFormData({ ...formData, goals: newGoals });
          }}>
            <option value="">Select goal #{idx + 1}</option>
            {goalsList.map((g) => <option key={g}>{g}</option>)}
            <option value="Other">Other</option>
          </Select>
        ))}
        {formData.goals.includes("Other") && (
          <Input placeholder="Other goal" value={formData.otherGoal} onChange={(e) => setFormData({ ...formData, otherGoal: e.target.value })} />
        )}

        <Heading as="h2" size="md">Self-Assessment (0–100)</Heading>
        {Object.entries(formData.wellness).map(([key, val]) => (
          <Box key={key}>
            <Text fontSize="sm" mb={1} textTransform="capitalize">
              {key.replace(/([a-z])([A-Z])/g, "$1 $2")} ({val})
            </Text>
            <Slider min={0} max={100} value={val} onChange={(val) => handleSliderChange(key, val)}>
              <SliderTrack><SliderFilledTrack /></SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
        ))}

        <Button mt={6} colorScheme="blue" size="lg" w="full" onClick={handleSubmit}>
          Submit & Continue →
        </Button>
      </VStack>
    </Box>
  );
}





