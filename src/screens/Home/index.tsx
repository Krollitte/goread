import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { RepoItem } from "../../components/RepoItem";

import {
  Container,
  Content,
  Header,
  TitleContainer,
  Title,
  SearchContainer,
  Icon,
  SearchInput,
  RepoList,
  LoadingIndicatorContainer,
  LoadingIndicator,
} from "./styles";
import { Alert } from "react-native";
import {
  AppDispatch,
  ListRepositories,
  RootState,
  getRepoList,
  selectRepo,
} from "../../redux";
import { MainProps } from "../../routes/RouteTypes";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export function Home({ navigation }: MainProps<"Home">) {
  const dispatch = useAppDispatch();
  const repoList = useAppSelector((state) => state.repo.repoList);
  const [searchTerm, setSeachTerm] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSelectRepo(repo: ListRepositories) {
    dispatch(selectRepo(repo));
    navigation.navigate("RepoDetail");
  }

  function handleGetRepoList() {
    try {
      setLoading(true);
      dispatch(getRepoList(searchTerm));
      Keyboard.dismiss();
    } catch (error: any) {
      Alert.alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  function renderRepoList() {
    if (repoList.length > 0) {
      return (
        <RepoList
          data={repoList}
          renderItem={({ item }) => {
            return (
              <RepoItem data={item} onPress={() => handleSelectRepo(item)} />
            );
          }}
        />
      );
    } else {
      return (
        <Content>
          <Text style={{ color: "#000" }}>
            Digite algo para começar a buscar
          </Text>
        </Content>
      );
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handleGetRepoList}>
      <Container>
        <Header>
          <TitleContainer>
            <Title>Repositórios</Title>
          </TitleContainer>
          <SearchContainer>
            <Icon name="search" size={24} color={"#3C3C4399"} />
            <SearchInput
              value={searchTerm}
              placeholder="Busca por repositórios"
              placeholderTextColor={"#3C3C4399"}
              onChangeText={setSeachTerm}
              onEndEditing={handleGetRepoList}
              onSubmitEditing={handleGetRepoList}
              returnKeyType="search"
            />
          </SearchContainer>
        </Header>
        <Content>
          {loading ? (
            <LoadingIndicatorContainer>
              <LoadingIndicator size={"large"} color={"#000"} />
            </LoadingIndicatorContainer>
          ) : (
            renderRepoList()
          )}
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}
