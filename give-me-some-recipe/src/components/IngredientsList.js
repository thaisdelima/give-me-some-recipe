import React from 'react';
import { Checkbox, Box, Text, SimpleGrid } from '@chakra-ui/react';

export default class IngredientsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: this.props.dataParentToChild,
    };
  }

  render() {
    const data = this.state.ingredients;
    const ingredients = Object.entries(data);
    console.log(Object.entries(data), 'djaiojdoaeuhfauoiehfaieuh');

    return (
      <div>
        <Box borderWidth="1px" borderRadius="lg" bg="white" px={10} py={5}>
          <Text fontSize="4xl" color="black" mb={4}>
            Ingredients
          </Text>
          <SimpleGrid
            justifyContent="start"
            color="black"
            columns={1}
            spacing={10}
            minChildWidth="220px"
            p={3}>
            {ingredients.map((item) => {
              if (item[1].length > 1) {
                return (
                  <Checkbox size="lg" colorScheme="orange" key={item[0]}>
                    {item[1]}
                  </Checkbox>
                );
              }
              return '';
            })}
          </SimpleGrid>
        </Box>
      </div>
    );
  }
}
