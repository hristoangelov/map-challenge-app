
import React from "react";
import { Text, View } from 'react-native';
import styled from "styled-components";

const HomeWrapper = styled(View)`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
  `

export const Home = () => {
  return (
    <HomeWrapper>
      <Text>Open up App.tsx to start on your app!</Text>
    </HomeWrapper>
  );
};