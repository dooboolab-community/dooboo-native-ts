import ActionButton from '../UI/molecules/ActionButton';
import {IC_MASK} from '../../utils/Icons';
import IntroView from '../templates/IntroView';
import React from 'react';
import {RootStackNavigationProps} from '../navigations/RootStackNavigator';
import {User} from '../../types';
import {View} from 'react-native';
import {fbt} from 'fbt';
import styled from 'styled-components/native';
import {useAppContext} from '../../providers/AppProvider';
import {useTheme} from '../../providers/ThemeProvider';
import {withScreen} from '../../utils/wrapper';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  overflow: scroll;
  background-color: ${({theme}) => theme.background};

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  flex-direction: column;
  bottom: 40px;
  width: 85%;
  align-self: center;
`;

interface Props {
  navigation: RootStackNavigationProps<'Intro'>;
}

function Intro(props: Props): React.ReactElement {
  let timer: number;

  const {setUser} = useAppContext();

  const {changeThemeType} = useTheme();
  const [isLoggingIn, setIsLoggingIn] = React.useState<boolean>(false);

  const onLogin = (): void => {
    setIsLoggingIn(true);

    timer = setTimeout(() => {
      const tempUser: User = {
        displayName: 'dooboolab',
        age: 30,
        job: 'developer',
      };

      setUser(tempUser);
      setIsLoggingIn(false);
      clearTimeout(timer);
    }, 1000);
  };

  return (
    <Container>
      <IntroView />
      <ButtonWrapper>
        <ActionButton
          testID="btn-login"
          imgLeftSrc={IC_MASK}
          isLoading={isLoggingIn}
          onPress={(): void => onLogin()}
          text={fbt('Login', 'login')}
        />
        <View style={{marginTop: 8}} />
        <ActionButton
          testID="btn-navigate"
          onPress={(): void =>
            props.navigation.navigate('Temp', {
              param: 'GO BACK',
            })
          }
          text={fbt('Navigate', 'navigate')}
        />
        <View style={{marginTop: 8}} />
        <ActionButton
          testID="btn-theme"
          onPress={(): void => changeThemeType()}
          text={fbt('Change Theme', 'change theme')}
        />
      </ButtonWrapper>
    </Container>
  );
}

export default withScreen(Intro);
