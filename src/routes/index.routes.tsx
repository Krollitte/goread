import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainRoutes } from "./main.routes";

export function Router() {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
}
