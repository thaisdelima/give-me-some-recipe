import React from "react";
import "./RecipePage.css";
// import PropTypes from "prop-types";
import { Container, Box, Text, Flex } from "@chakra-ui/react";
import IngredientsList from "../components/IngredientsList";
import axios from "axios";

export default class RecipePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: "",
      title: "",
      ingredients: "",
    };
  }

  componentDidMount() {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => {
        const resp = res.data.meals[0];
        this.setState({ recipe: resp.strInstructions });
        this.setState({ title: resp.strMeal });
        this.setState({ ingredients: resp.strIngredient1 });
        console.log("resp", resp);
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
      <span>Loading recipe...</span>
    );
    // return (
    //   <div className="RecipePage">
    //     <Text fontSize="6xl" m={6} color="black">
    //       {this.state.title}
    //     </Text>
    //     <Flex wrap justify="center">
    //       <Box m={2}>
    //         <IngredientsList dataParentToChild={ingredients} />
    //       </Box>
    //       <Box
    //         w="50%"
    //         borderWidth="1px"
    //         borderRadius="lg"
    //         bg="white"
    //         overflow="hidden"
    //         px={10}
    //         py={5}
    //         m={2}>
    //         <Text fontSize="4xl" color="black" mb={4}>
    //           Recipe
    //         </Text>
    //         <Container color="black">{this.state.recipe}</Container>
    //       </Box>
    //     </Flex>
    //   </div>
    // );
  }
}
