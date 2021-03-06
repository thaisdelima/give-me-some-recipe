import React from 'react';
import './RecipePage.css';
import { Container, Box, Text, Flex, Spinner } from '@chakra-ui/react';
import IngredientsList from '../components/IngredientsList';
import axios from 'axios';

export default class RecipePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: '',
      title: '',
      ingredients: '',
    };
  }

  componentDidMount() {
    // todo: move this to a service
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => {
        const resp = res.data.meals[0];
        this.setState({ recipe: resp.strInstructions });
        this.setState({ title: resp.strMeal });
        let filtered = {
          ingredients: {},
          measure: {},
        };
        Object.entries(resp).forEach((item) => {
          if (item[0].includes('strIngredient')) {
            filtered.ingredients[item[0]] = item[1];
          }
          if (item[0].includes('strMeasure')) {
            filtered.measure[item[0]] = item[1];
          }
          return filtered;
        }, {});
        this.setState({ ingredients: filtered });
      });
  }

  render() {
    const ingredients = this.state.ingredients;
    return ingredients ? (
      <div className="RecipePage">
        <Text fontSize="6xl" m={6} color="black">
          {this.state.title}
        </Text>
        <Flex wrap justify="center">
          <Box m={2}>
            <IngredientsList dataParentToChild={ingredients} />
          </Box>
          <Box
            w="50%"
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            overflow="hidden"
            px={10}
            py={5}
            m={2}>
            <Text fontSize="4xl" color="black" mb={4}>
              Recipe
            </Text>
            <Container color="black">{this.state.recipe}</Container>
          </Box>
        </Flex>
      </div>
    ) : (
      <Spinner size="xl" />
    );
  }
}
