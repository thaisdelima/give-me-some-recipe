import React, { Component } from "react";
import { Button } from "@chakra-ui/react";
// import RecipePage from "./RecipePage";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/recipe">
          <Button size="lg" colorScheme="red">
            Give me some recipe
          </Button>
        </Link>
      </div>
    );
  }
}
