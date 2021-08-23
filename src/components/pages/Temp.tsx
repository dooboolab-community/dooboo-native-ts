import {Button, Icon, useTheme} from 'dooboo-ui';
import {
  RootStackNavigationProps,
  RootStackParamList,
} from '../navigations/RootStack';

import React from 'react';
import {RouteProp} from '@react-navigation/core';
import styled from '@emotion/native';
import {withScreen} from '../../utils/wrapper';

const Container = styled.View`
  flex: 1;
  align-self: stretch;

  background-color: ${({theme}) => theme.background};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface Props {
  navigation: RootStackNavigationProps<'Temp'>;
  route: RouteProp<RootStackParamList, 'Temp'>;
}

function Page(props: Props): React.ReactElement {
  const {theme} = useTheme();

  const {
    route: {
      params: {param},
    },
    navigation,
  } = props;

  return (
    <Container>
      <Button
        testID="btn-back"
        onPress={(): void => navigation.goBack()}
        text={param}
        leftElement={
          <Icon
            name="chevron-left-light"
            color={theme.textContrast}
            style={{
              marginRight: 4,
            }}
          />
        }
      />
    </Container>
  );
}

export default withScreen(Page);
