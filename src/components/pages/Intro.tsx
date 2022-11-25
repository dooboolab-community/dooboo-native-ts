import {Button, useTheme} from 'dooboo-ui';
import {Image, View} from 'react-native';

import {IC_MASK} from '../../utils/Icons';
import IntroView from '../uis/IntroTemp';
import React from 'react';
import type {RootStackNavigationProps} from '../navigations/RootStack';
import type {User} from '../../types';
import {fbt} from 'fbt';
import styled from '@emotion/native';
import {useAppContext} from '../../providers/AppProvider';
import {useTranslation} from 'react-i18next';

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
  width: 75%;
  align-self: center;
`;

interface Props {
  navigation: RootStackNavigationProps<'Intro'>;
}

function Intro(props: Props): React.ReactElement {
  let timer: any;

  const {setUser} = useAppContext();
  const {t} = useTranslation();

  const {changeThemeType} = useTheme();
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);

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
        <Button
          testID="btn-login"
          startElement={
            <Image
              source={IC_MASK}
              style={{
                position: 'absolute',
                left: 12,
                width: 24,
                height: 24,
              }}
            />
          }
          loading={isLoggingIn}
          onPress={() => onLogin()}
          text={t('login')}
        />
        <View style={{marginTop: 8}} />
        <Button
          testID="btn-navigate"
          onPress={() =>
            props.navigation.navigate('Temp', {
              param: 'GO BACK',
            })
          }
          text={t('navigate')}
        />
        <View style={{marginTop: 8}} />
        <Button
          testID="btn-theme"
          onPress={() => changeThemeType()}
          text={t('changeTheme')}
        />
      </ButtonWrapper>
    </Container>
  );
}

export default Intro;
