import { Stack, SimpleGrid, Image, Box, Heading, Text } from "@chakra-ui/react";
import {
  Product,
  Resources,
  UseCases,
  Integrations,
  Social,
} from "./footerAssets";
export const Footer = () => {
  return (
    <Box pt="80px" bg="#375D75" pb="30px" mt="80px">
      <SimpleGrid columns={[1, 1, 1, 6]} pl="50px" pr="200px">
        <Stack>
          <Image
            width="80px"
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc9236f9ab08c7bdf83fe75_Logo-300px.png"
            al="Icon"
          />
          <Text color="#DBF1FF">© 2022 My Hours.</Text>
          <Text color="#DBF1FF">All rights reserved.</Text>
        </Stack>
        <Stack>
          <Heading as="h4" size="md" color="#DBF1FF">
            Product
          </Heading>
          {Product.map((el) => (
            <Text color="#DBF1FF" key={el}>
              {el}
            </Text>
          ))}
        </Stack>
        <Stack>
          <Heading as="h4" size="md" color="#DBF1FF">
            Resources
          </Heading>
          {Resources.map((el) => (
            <Text color="#DBF1FF" key={el}>
              {el}
            </Text>
          ))}
        </Stack>
        <Stack>
          <Heading as="h4" size="md" color="#DBF1FF">
            Use cases
          </Heading>
          {UseCases.map((el) => (
            <Text color="#DBF1FF" key={el}>
              {el}
            </Text>
          ))}
        </Stack>
        <Stack>
          <Heading as="h4" size="md" color="#DBF1FF">
            Integrations
          </Heading>
          {Integrations.map((el) => (
            <Text color="#DBF1FF" key={el}>
              {el}
            </Text>
          ))}
        </Stack>
        <Stack>
          <Heading as="h4" size="md" color="#DBF1FF">
            Social
          </Heading>
          {Social.map((el) => (
            <Text color="#DBF1FF" key={el}>
              {el}
            </Text>
          ))}
        </Stack>
      </SimpleGrid>
      <Text color="#DBF1FF" fontSize="2xl" align="center" mt="30px">
        Looking for employee attendance and absence tracking? Visit
        <Box as="span" fontSize="2xl" fontWeight="900" ml="4px">
          All Hours.
        </Box>
      </Text>
    </Box>
  );
};
