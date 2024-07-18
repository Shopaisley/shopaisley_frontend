/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Box, Text, Spinner, Flex, Image } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { server } from "../../services/server"; // Adjust the path based on your file structure
import Navbar from "../../components/Navbar";

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("q");

  const [loading, setLoading] = useState<boolean>(false);
  //   const [products, setProducts] = useState<Product[]>([]);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${server}/filter/search`, {
          params: { n: searchTerm },
        });
        setSearchResults(response.data || []); // Ensure response data is handled properly
        console.log(response);
        setLoading(false);
      } catch (err) {
        setError(err as string);
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchSearchResults();
    }
  }, [searchTerm]);

  if (loading) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Box py="4rem" px="2rem">
        <Text fontSize="2xl" fontWeight="bold" color="red.500">
          {error}
        </Text>
      </Box>
    );
  }

  return (
    <Box bg={"#E2E8F0"} fontFamily={"Mulish"} h={"100vh"}>
      <Box position="sticky" zIndex={100} top={0}>
        <Navbar />
      </Box>
      <Box pt={"3rem"} px={"8vw"}>
      <Text fontSize="2xl" fontWeight="bold" mb="2rem">
        Search Results for: {searchTerm}
      </Text>
      {loading ? (
        <Flex justify="center" align="center" height="50vh">
          <Spinner size="xl" />
        </Flex>
      ) : error ? (
        <Text color="red.500">Error fetching search results: {error}</Text>
      ) : searchResults.length > 0 ? (
        <Flex flexDirection="column" gap="2rem">
          {searchResults.map((result, index) => (
            <Flex
              key={index}
              flexDirection="row"
              align="center"
              border="1px solid #ddd"
              p="1rem"
              borderRadius="8px"
              cursor={"pointer"}
            >
              <Image
                src={result.ImageURL}
                alt={result.name}
                boxSize="100px"
                objectFit="cover"
                borderRadius="8px"
              />
              <Box ml="1rem">
                <Text fontSize="lg" fontWeight="bold">
                  {result.name}
                </Text>
                <Text fontSize="md">{result.description}</Text>
                <Text fontSize="sm" color="gray.500">
                  {result.unitPrice.toLocaleString()}
                </Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      ) : (
        <Text>No results found for "{searchTerm}".</Text>
      )}
      </Box>
    </Box>
  );
};

export default Search;
