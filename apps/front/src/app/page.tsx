'use client'

import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()
  const handleClick = () => {
    router.push('/login'); // Navigate programmatically
  };
    return (
        <Box p={10} border="1px solid gray">
            <VStack justify="center">
                <Box>
                    <Heading>Welcome</Heading>
                </Box>
                <Button onClick={handleClick}> Login</Button>
            </VStack>
        </Box>
    );
}
