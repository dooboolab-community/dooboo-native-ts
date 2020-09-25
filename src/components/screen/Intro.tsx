import Button from '../shared/Button';
import { IC_MASK } from '../../utils/Icons';
import React from 'react';
import { RootStackNavigationProps } from '../navigation/RootStackNavigator';
import { User } from '../../types';
import { View } from 'react-native';
import { getString } from '../../../STRINGS';
import styled from 'styled-components/native';
import { useAppContext } from '../../providers/AppProvider';
import { useThemeContext } from '@dooboo-ui/native-theme';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  overflow: scroll;
  background-color: ${({ theme }): string => theme.background};

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const ContentWrapper = styled.View`
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  flex-direction: column;
  bottom: 40px;
  width: 85%;
  align-self: center;
`;

const StyledText = styled.Text`
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }): string => theme.fontColor};
`;

interface Props {
  navigation: RootStackNavigationProps<'Intro'>;
}

function Intro(props: Props): React.ReactElement {
  let timer: NodeJS.Timeout;
  const { state: { user }, setUser } = useAppContext();
  const { changeThemeType } = useThemeContext();
  const [isLoggingIn, setIsLoggingIn] = React.useState<boolean>(false);

  const onLogin = (): void => {
    setIsLoggingIn(true);

    timer = setTimeout(() => {
      const user: User = {
        displayName: 'dooboolab',
        age: 30,
        job: 'developer',
      };

      setUser(user);
      setIsLoggingIn(false);
      clearTimeout(timer);
    }, 1000);
  };

  return (
    <Container>
      <ContentWrapper>
        <StyledText
          style={{
            marginTop: 100,
          }}
        >
          {user ? user.displayName : ''}
        </StyledText>
        <StyledText>{user ? user.age : ''}</StyledText>
        <StyledText>{user ? user.job : ''}</StyledText>
      </ContentWrapper>
      <ButtonWrapper>
        <Button
          testID="btn-login"
          imgLeftSrc={IC_MASK}
          isLoading={isLoggingIn}
          onClick={(): void => onLogin()}
          text={getString('LOGIN')}
        />
        <View style={{ marginTop: 8 }} />
        <Button
          testID="btn-navigate"
          onClick={(): void => props.navigation.navigate('Temp', {
            param: 'GO BACK',
          })}
          text={getString('NAVIGATE', { name: 'Temp' })}
        />
        <View style={{ marginTop: 8 }} />
        <Button
          testID="btn-theme"
          onClick={(): void => changeThemeType()}
          text={getString('CHANGE_THEME')}
        />
      </ButtonWrapper>
    </Container>
  );
}

export default Intro;
