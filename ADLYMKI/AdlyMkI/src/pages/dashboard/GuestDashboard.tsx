import { Box, Heading, Text, VStack, SimpleGrid, Card, HStack } from "@chakra-ui/react";
import { CheckCircle2, Trophy, CalendarClock } from "lucide-react";
import { GuestTaskList } from "../../components/tasks/GuestTaskList";
import { CalendarView } from "../../components/calendar/CalendarView";
import { useAuth } from "../../context/AuthContext";
import { mockFacilities } from "../../data/mockData";

export function GuestDashboard() {
  const { user } = useAuth();
  const facilityId = user?.facilityIds?.[0];
  const facility = facilityId ? mockFacilities.find((item) => item.id === facilityId) : undefined;

  return (
    <VStack align="stretch" gap={6}>
      <Box mb={4}>
        <Heading size="lg" color="gray.800" mb={2}>Bentornato, andiamo a completare i compiti di oggi!</Heading>
        <Text color="gray.600">Hai 2 compiti assegnati per oggi. L'educatore di riferimento è online.</Text>
        {facility && (
          <Text color="blue.700" fontWeight="medium" mt={2}>
            Struttura assegnata: {facility.name}
          </Text>
        )}
      </Box>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
        <Card.Root p={5} bg="white" color="gray.800" shadow="sm" borderRadius="xl">
          <HStack mb={3} color="blue.500">
            <CheckCircle2 size={24} />
            <Text fontWeight="bold">Da Fare</Text>
          </HStack>
          <Heading size="2xl" mb={1}>2</Heading>
          <Text fontSize="sm" color="gray.500">Compiti rimasti oggi</Text>
        </Card.Root>

        <Card.Root p={5} bg="white" color="gray.800" shadow="sm" borderRadius="xl">
          <HStack mb={3} color="purple.500">
            <CalendarClock size={24} />
            <Text fontWeight="bold">Prossimo Appuntamento</Text>
          </HStack>
          <Text fontWeight="semibold" fontSize="lg" mb={1}>Psicologo</Text>
          <Text fontSize="sm" color="gray.500">Domani, 15:30</Text>
        </Card.Root>

        <Card.Root p={5} bg="white" color="gray.800" shadow="sm" borderRadius="xl">
          <HStack mb={3} color="yellow.500">
            <Trophy size={24} />
            <Text fontWeight="bold">Punti XP</Text>
          </HStack>
          <Heading size="2xl" mb={1}>450</Heading>
          <Text fontSize="sm" color="gray.500">Livello 3 • A 50xp dal Pro</Text>
        </Card.Root>
      </SimpleGrid>

      {/* Phase 4 Content */}
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
        <Box p={6} bg="white" color="gray.800" borderRadius="xl" shadow="sm">
          <Heading size="md" mb={4} color="gray.800">I Miei Compiti di Oggi</Heading>
          <GuestTaskList />
        </Box>
        <Box p={6} bg="white" color="gray.800" borderRadius="xl" shadow="sm">
          <CalendarView />
        </Box>
      </SimpleGrid>
    </VStack>
  );
}
