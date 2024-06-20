import { Container, Text, VStack, Box, Heading, Image, SimpleGrid, LinkBox, LinkOverlay, Button } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(storedRecipes);
  }, []);

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Recipe Sharing Website
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover and share your favorite recipes with the world!
        </Text>
        <Button as={Link} to="/submit-recipe" colorScheme="teal" size="lg">
          Submit a Recipe
        </Button>
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