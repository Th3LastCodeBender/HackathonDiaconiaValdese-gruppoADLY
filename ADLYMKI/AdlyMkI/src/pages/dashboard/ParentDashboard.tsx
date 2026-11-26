import { Box, Heading, Text, VStack, HStack, Card, Image } from "@chakra-ui/react";
import { GraduationCap, Camera } from "lucide-react";
import myFirstHtmlUrl from "../../assets/family_tutor/myFirstHtml.png";
import pizzaUrl from "../../assets/family_tutor/pizza.png"

export function ParentDashboard() {
  return (
    <VStack align="stretch" gap={6}>
      <Box mb={4}>
        <Heading size="lg" color="gray.800" mb={2}>Bacheca di Giulia</Heading>
        <Text color="gray.600">Scopri cosa ha fatto in struttura questa settimana.</Text>
      </Box>

      <Card.Root p={6} bg="white" shadow="sm" borderRadius="xl">
        <HStack align="start" gap={4}>
          <Box bg="blue.100" p={3} borderRadius="full" color="blue.600">
            <GraduationCap size={24} />
          </Box>
          <Box flex="1">
            <HStack justify="space-between" mb={2}>
              <Heading size="md">Laboratorio di Informatica</Heading>
              <Text fontSize="sm" color="gray.500">Oggi, 16:00</Text>
            </HStack>
            <Text color="gray.600" mb={4}>
              Oggi Giulia ha partecipato attivamente al laboratorio di programmazione base. Ha imparato a creare la sua prima pagina web!
            </Text>
            <Box bg="gray.100" h="200px" w="100%" borderRadius="lg" display="flex" alignItems="center" justifyContent="center">
              <VStack color="gray.400">
				<Image 
				src={myFirstHtmlUrl} 
				alt="Anteprima" 
				borderRadius="md"
				/>
              </VStack>
            </Box>
          </Box>
        </HStack>
      </Card.Root>

      <Card.Root p={6} bg="white" shadow="sm" borderRadius="xl">
        <HStack align="start" gap={4}>
          <Box bg="green.100" p={3} borderRadius="full" color="green.600">
            <Camera size={24} />
          </Box>
          <Box flex="1">
            <HStack justify="space-between" mb={2}>
              <Heading size="md">Corso di Cucina: Pizza</Heading>
              <Text fontSize="sm" color="gray.500">Ieri, 18:30</Text>
            </HStack>
			<VStack color="gray.400">
            <Text color="gray.600" mb={4}>
              Serata dedicata all'autonomia ai fornelli con tutti i ragazzi della struttura. 
            </Text>
				<Image 
				src={pizzaUrl} 
				alt="Anteprima" 
				borderRadius="md"
				/>
              </VStack>
          </Box>
        </HStack>
      </Card.Root>
      
    </VStack>
  );
}