import { Container, Text, VStack, Box, Heading, Image, SimpleGrid, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    image: "https://via.placeholder.com/150",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    image: "https://via.placeholder.com/150",
    description: "Chunks of roasted marinated chicken in a spiced curry sauce.",
  },
  {
    id: 3,
    title: "Beef Stroganoff",
    image: "https://via.placeholder.com/150",
    description: "A Russian dish of sautéed pieces of beef served in a sauce with smetana (sour cream).",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Recipe Sharing Website
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover and share your favorite recipes with the world!
        </Text>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          {recipes.map((recipe) => (
            <LinkBox as="article" key={recipe.id} p="5" borderWidth="1px" rounded="md">
              <Image src={recipe.image} alt={recipe.title} borderRadius="md" />
              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <FaHeart color="red" />
                  <Text ml="2" fontWeight="semibold" lineHeight="tight" isTruncated>
                    {recipe.title}
                  </Text>
                </Box>
                <Text mt="2" color="gray.500">
                  {recipe.description}
                </Text>
              </Box>
            </LinkBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;