import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackRouter from "./stack.routes";

const Routes = () => (
  <NavigationContainer>
    <StackRouter />
  </NavigationContainer>
);

export default Routes;
