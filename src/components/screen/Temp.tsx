import { MainStackParamList, RouteProp } from '@react-navigation/core';

import Button from '../shared/Button';
import React from 'react';
import { RootStackNavigationProps } from '../../components/navigation/RootStackNavigator';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${(props): string => props.theme.background};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface Props {
  navigation: RootStackNavigationProps<'Temp'>;
  route: RouteProp<MainStackParamList, 'Temp'>;
}

function Page(props: Props): React.ReactElement {
  const { route: { params: { param } }, navigation } = props;
  return (
    <Container>
      <Button
        testID="btn-back"
        onClick={(): void => navigation.goBack()}
        text={param}
        style={{
          backgroundColor: '#333333',
        }}
      />
    </Container>
  );
}

export default Page;
