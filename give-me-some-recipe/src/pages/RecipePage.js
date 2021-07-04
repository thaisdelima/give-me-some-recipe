import React from 'react';
import './RecipePage.css';
// import PropTypes from "prop-types";
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
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => {
        const resp = res.data.meals[0];
        this.setState({ recipe: resp.strInstructions });
        this.setState({ title: resp.strMeal });
        const allowed = [
          'strIngredient1',
          'strIngredient2',
          'strIngredient3',
          'strIngredient4',
          'strIngredient5',
          'strIngredient6',
          'strIngredient7',
          'strIngredient8',
          'strIngredient9',
          'strIngredient10',
          'strIngredient11',
          'strIngredient12',
          'strIngredient13',
          'strIngredient14',
          'strIngredient15',
          'strIngredient16',
          'strIngredient17',
          'strIngredient18',
          'strIngredient19',
          'strIngredient20',
          'strMeasure1',
          'strMeasure2',
          'strMeasure3',
          'strMeasure4',
          'strMeasure5',
          'strMeasure6',
          'strMeasure7',
          'strMeasure8',
          'strMeasure9',
          'strMeasure10',
          'strMeasure11',
          'strMeasure12',
          'strMeasure13',
          'strMeasure14',
          'strMeasure15',
          'strMeasure16',
          'strMeasure17',
          'strMeasure18',
          'strMeasure19',
          'strMeasure20',
        ];

        const filtered = Object.keys(resp)
          .filter((key) => allowed.includes(key))
          .reduce((obj, key) => {
            obj[key] = resp[key];
            return obj;
          }, {});

        console.log(resp, filtered, 'ingrs');
        this.setState({ ingredients: filtered });
        console.log('resp', resp);
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
