import Button from '../shared/Button';
import { DefaultNavigationProps } from '../../types';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${(props): string => props.theme.background};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface Props {
  navigation: DefaultNavigationProps;
}

function Page(props: Props): React.ReactElement {
  return (
    <Container>
      <Button
        testID="btn"
        onClick={(): boolean => props.navigation.goBack()}
        text="Go Back"
        style={{
          backgroundColor: '#333333',
        }}
      />
    </Container>
  );
}

export default Page;
