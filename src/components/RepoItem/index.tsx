import React from "react";

import {
  Container,
  AvatarContainer,
  Avatar,
  InfoContainer,
  NameRepoAndStarNumberContainer,
  NameRepoContainer,
  NameRepo,
  StarNumberContainer,
  StarNumber,
  UserNameContainer,
  UserName,
} from "./styles";
import { AppDispatch, ListRepositories, selectRepo } from "../../redux";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { MainProps } from "../../routes/RouteTypes";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  data: ListRepositories;
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export function RepoItem({ data, ...touchableOpacityProps }: Props) {
  const dispatch = useAppDispatch();
  const navigation: MainProps<"RepoDetail"> = useNavigation();

  return (
    <Container {...touchableOpacityProps}>
      <AvatarContainer>
        <Avatar source={{ uri: data.owner.avatar_url }} />
      </AvatarContainer>
      <InfoContainer>
        <NameRepoAndStarNumberContainer>
          <NameRepoContainer>
            <NameRepo>{data.name}</NameRepo>
          </NameRepoContainer>
          <StarNumberContainer>
            <StarNumber>{data.stargazers_count} stars</StarNumber>
          </StarNumberContainer>
        </NameRepoAndStarNumberContainer>
        <UserNameContainer>
          <UserName>{data.owner.login}</UserName>
        </UserNameContainer>
      </InfoContainer>
    </Container>
  );
}
