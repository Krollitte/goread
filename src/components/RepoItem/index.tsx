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

interface Props {}

export function RepoItem() {
  return (
    <Container>
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
      <InfoContainer>
        <NameRepoAndStarNumberContainer>
          <NameRepoContainer>
            <NameRepo>Repositorio</NameRepo>
          </NameRepoContainer>
          <StarNumberContainer>
            <StarNumber>20 stars</StarNumber>
          </StarNumberContainer>
        </NameRepoAndStarNumberContainer>
        <UserNameContainer>
          <UserName>Krollitte</UserName>
        </UserNameContainer>
      </InfoContainer>
    </Container>
  );
}
