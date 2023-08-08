import { MainRoutesProps } from "./main.routes";
import { StackScreenProps } from "@react-navigation/stack";

export type MainProps<ScreenName extends keyof MainRoutesProps> =
  StackScreenProps<MainRoutesProps, ScreenName>;
