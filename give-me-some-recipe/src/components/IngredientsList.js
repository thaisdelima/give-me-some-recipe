import React, { Component } from "react";
import { Container, Checkbox, Box, Text, SimpleGrid } from "@chakra-ui/react";

export default class IngredientsList extends Component {
  render() {
    return (
      <div>
        <Box
          borderWidth="1px"
          borderRadius="lg"
          bg="white"
          overflow="hidden"
          p={[0, 10]}>
          <Text fontSize="4xl" color="black">
            Ingredients
          </Text>
          <SimpleGrid color="black" columns={1} spacing={10} p={5}>
            <Checkbox defaultIsChecked>Checkbox</Checkbox>
            <Checkbox defaultIsChecked>Checkbox</Checkbox>
            <Checkbox defaultIsChecked>Checkbox</Checkbox>
            <Checkbox defaultIsChecked>Checkbox</Checkbox>
          </SimpleGrid>
        </Box>
      </div>
    );
  }
}
