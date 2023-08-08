import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  gap: 12px;
  width: 100%;
  flex-direction: row;
  margin-bottom: 12px;
`;

export const AvatarContainer = styled.View``;

export const Avatar = styled.Image`
  height: 52px;
  width: 52px;
  border-radius: 26px;
  background-color: #d9d9d9;
`;

export const InfoContainer = styled.View`
  border-bottom-width: 3px;
  border-bottom-color: #ebebeb;

  flex: 1;
`;

export const NameRepoAndStarNumberContainer = styled.View`
  flex-direction: row;

  justify-content: space-between;
`;
export const NameRepoContainer = styled.View``;

export const NameRepo = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

export const StarNumberContainer = styled.View``;

export const StarNumber = styled.Text`
  line-height: 24px;
  color: #48484a;
  font-size: 14px;
  font-weight: 400;
`;
export const UserNameContainer = styled.View``;
export const UserName = styled.Text`
  line-height: 24px;
  color: #000;
  font-size: 14px;
  font-weight: 400;
`;
