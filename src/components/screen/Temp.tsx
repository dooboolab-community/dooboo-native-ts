import Button from '../shared/Button';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${(props): stirng => props.theme.background};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface Props {
  navigation: NavigationScreenProp<NavigationStateRoute>;
}

function Page(props: Props): React.ReactElement {
  return (
    <Container>
      <Button
        testID='btn'
        onClick={(): string => props.navigation.goBack()}
        text='Go Back'
        style={{
          backgroundColor: '#333333',
        }}
      />
    </Container>
  );
}

export default Page;
