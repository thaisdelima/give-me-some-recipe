import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Container, Box, Text, Flex, Spacer } from "@chakra-ui/react";
import IngredientsList from "../components/IngredientsList";

export default class RecipePage extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  render() {
    return (
      <div>
        <Text fontSize="6xl" color="black">
          Recipe Name
        </Text>
        <Flex>
          <Box m={5}>
            <IngredientsList />
          </Box>
          <Spacer />
          <Box
            maxW="md"
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            overflow="hidden"
            p={10}
            m={5}>
            <Text fontSize="4xl" color="black">
              Recipe
            </Text>
            <Container color="black" p={5}>
              There are many benefits to a joint design and development system.
              Not only does it bring benefits to the design team, but it also
              brings benefits to engineering teams. It makes sure that our
              experiences have a consistent look and feel, not just in our
              design specs, but in production
            </Container>
          </Box>
        </Flex>
      </div>
    );
  }
}
