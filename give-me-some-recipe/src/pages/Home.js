import React, { Component } from "react";
import { Button } from "@chakra-ui/react";
import RecipePage from "./RecipePage";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Button
          size="lg"
          colorScheme="red"
          onClick={() => {
            return console.log("dasdasd");
          }}>
          Give me some recipe
        </Button>
        <RecipePage />
      </div>
    );
  }
}
