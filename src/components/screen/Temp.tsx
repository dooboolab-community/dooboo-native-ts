import {
  RootStackNavigationProps,
  RootStackParamList,
} from '../../components/navigation/RootStackNavigator';

import Button from '../shared/Button';
import Container from '../navigation/Container';
import React from 'react';
import {RouteProp} from '@react-navigation/core';
import styled from 'styled-components/native';

const Content = styled.View`
  background-color: ${({theme}): string => theme.background};

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface Props {
  navigation: RootStackNavigationProps<'Temp'>;
  route: RouteProp<RootStackParamList, 'Temp'>;
}

function Page(props: Props): React.ReactElement {
  const {
    route: {
      params: {param},
    },
    navigation,
  } = props;

  return (
    <Container>
      <Content>
        <Button
          testID="btn-back"
          onClick={(): void => navigation.goBack()}
          text={param}
          style={{
            backgroundColor: '#333333',
          }}
        />
      </Content>
    </Container>
  );
}

export default Page;
