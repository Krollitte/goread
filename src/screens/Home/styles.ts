import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, FlatListProps } from "react-native";
import { ListRepositories } from "../../redux";

export const Container = styled.View`
  flex: 1;
  padding: 32px 16px 0 16px;
`;
export const Header = styled.View`
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.View`
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  line-height: 41px;
  color: #000;
  font-size: 34px;
  font-weight: 700;
`;

export const SearchContainer = styled.View`
  padding: 7px 8px;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  gap: 4px;
  background-color: #7676801f;
`;
export const Icon = styled(MaterialIcons)``;

export const SearchInput = styled.TextInput`
  line-height: 22px;
  color: #3c3c4399;
  font-size: 17px;
  font-weight: 400;
  width: 100%;
`;

export const RepoList = styled(
  FlatList as new (
    props: FlatListProps<ListRepositories>
  ) => FlatList<ListRepositories>
).attrs({ showsVerticalScrollIndicator: false })`
  width: 100%;
`;

export const LoadingIndicatorContainer = styled.View`
  background-color: red;
`;

export const LoadingIndicator = styled.ActivityIndicator``;
