import React, { useLayoutEffect } from "react";

import { Container } from "./styles";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ListRepositories, RootState } from "../../redux";
import { useNavigation } from "@react-navigation/native";
import WebView from "react-native-webview";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function RepoDetail() {
  const selectedRepo = useAppSelector(
    (state) => state.repo.selectedRepo
  ) as ListRepositories;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedRepo.name,
    });
  }, []);
  return (
    <Container>
      <WebView source={{ uri: selectedRepo.html_url }} style={{ flex: 1 }} />
    </Container>
  );
}
