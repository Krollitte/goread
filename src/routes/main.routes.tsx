import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { RepoDetail } from "../screens/RepoDetail";

export type MainRoutesProps = {
  Home: undefined;
  RepoDetail: undefined;
};

const Stack = createStackNavigator<MainRoutesProps>();

export function MainRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Stack.Screen name="RepoDetail" component={RepoDetail} />
    </Stack.Navigator>
  );
}
