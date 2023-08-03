import React, { useEffect } from "react";
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
} from "./styles";
import { View } from "react-native";
import { AppDispatch, RootState, getRepoList } from "../../redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export function Home() {
  const dispatch = useAppDispatch();
  const repoListVariable = useAppSelector((state) => state.repo.repoList);
  useEffect(() => {
    dispatch(getRepoList("Krollitte"));
  }, []);

  console.log("repoList =>", repoListVariable);
  return (
    <Container>
      <Header>
        <TitleContainer>
          <Title>Repositórios</Title>
        </TitleContainer>
        <SearchContainer>
          <Icon name="search" size={24} color={"#3C3C4399"} />
          <SearchInput
            placeholder="Busca por repositórios"
            placeholderTextColor={"#3C3C4399"}
          />
        </SearchContainer>
      </Header>
      <Content>
        <RepoList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          renderItem={({ item }) => {
            return <RepoItem />;
          }}
        />
      </Content>
    </Container>
  );
}
