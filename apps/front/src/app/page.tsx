'use client'

// import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';
import { Box, Flex, Heading, Text, Button, SimpleGrid, Image, Icon,keyframes } from "@chakra-ui/react";
import { FaSwimmingPool, FaSpa , FaGym, FaWifi, FaConciergeBell, FaUtensils } from "react-icons/fa";


const colorChange = keyframes`
  0% { color: #FFFFFF; }     /* Bright White */
  25% { color: #FF6F61; }    /* Vibrant Coral */
  50% { color: #003366; }    /* Deep Blue */
  75% { color: #00FFFF; }    /* Bright Cyan */
  100% { color: #FFD700; }   /* Golden Yellow */
`;

export default function Home() {
  const router = useRouter()
  const handleClick = () => {
    router.push('/login'); // Navigate programmatically
  };
    return (
      
      <HomePage/>
      
    );
  }
  
  const HomePage = () => {
  return (
    <Box overflow = 'hidden'>
      {/* Hero Section */}
      <Box bgImage="url('/Images/home.jpg')" bgSize="cover" height="100vh">
        <Flex direction="column" align="center" justify="center" height="100%">
          <Heading as="h1" size="2xl" color="teal.300" animation={`${colorChange} 5s infinite`}>
            Welcome to Your Dream Stay
          </Heading>
          <Text color="#003366" mt={4} fontSize="lg">
            Experience luxury and comfort
          </Text>
          <Button mt={8} size="lg" colorScheme="teal">
            Book Now
          </Button>
        </Flex>
      </Box>

      {/* Rooms & Suites Section */}
      <Box py={10}>
        <Heading as="h2" textAlign="center" mb={6}>
          Our Rooms & Suites
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8} p = {5}>
          <SingleRoomView/>
          <SingleRoomView/>
          <SingleRoomView/>
          {/* Add more room cards here */}
        </SimpleGrid>
      </Box>

      {/* Featured Amenities Section */}
      <Box py={10}>
      <Heading as="h2" textAlign="center" mb={6}>
        Featured Amenities
      </Heading>
      <Flex overflowX="hidden" py={10} justify={'center'}>
        <Box minWidth="200px" textAlign="center" p={4}>
          <Icon as={FaSwimmingPool} w={10} h={10} color="teal.500" />
          <Text mt={4}>Pool</Text>
        </Box>
        <Box minWidth="200px" textAlign="center" p={4}>
          <Icon as={FaSpa} w={10} h={10} color="teal.500" />
          <Text mt={4}>Spa</Text>
        </Box>
        <Box minWidth="200px" textAlign="center" p={4}>
          <Icon as={FaGym} w={10} h={10} color="teal.500" />
          <Text mt={4}>Gym</Text>
        </Box>
        <Box minWidth="200px" textAlign="center" p={4}>
          <Icon as={FaWifi} w={10} h={10} color="teal.500" />
          <Text mt={4}>Free WiFi</Text>
        </Box>
        <Box minWidth="200px" textAlign="center" p={4}>
          <Icon as={FaConciergeBell} w={10} h={10} color="teal.500" />
          <Text mt={4}>Concierge Service</Text>
        </Box>
        <Box minWidth="200px" textAlign="center" p={4}>
          <Icon as={FaUtensils} w={10} h={10} color="teal.500" />
          <Text mt={4}>Restaurant</Text>
        </Box>
        {/* Add more amenities here */}
      </Flex>
    </Box>

      {/* Testimonials Section */}
      <Box py={10}>
        <Heading as="h2" textAlign="center" mb={6}>
          What Our Guests Say
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8} p = {5}>
          <Box p={6} borderWidth="1px" borderRadius="lg" boxShadow='md'>
            <Text>"An amazing stay! The rooms were perfect."</Text>
            <Heading as="h4" size="sm" mt={4}>
              John Doe
            </Heading>
          </Box>
          {/* Add more testimonials here */}
        </SimpleGrid>
      </Box>

      {/* Call to Action Section */}
      <Box bg="teal.600" color="white" py={10}>
        <Flex direction="column" align="center">
          <Heading as="h3" size="lg">Ready for your next adventure?</Heading>
          <Button mt={4} size="lg" colorScheme="whiteAlpha">
            Book Now
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

function SingleRoomView(){
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Image src="/Images/room1.jpg" alt="Deluxe Room" />
    <Box p={6}>
      <Heading as="h3" size="md">Deluxe Room</Heading>
      <Text mt={2}>Enjoy a comfortable stay with modern amenities.</Text>
      <Button mt={4} size="sm" colorScheme="teal">View Details</Button>
    </Box>
  </Box>
  );
}