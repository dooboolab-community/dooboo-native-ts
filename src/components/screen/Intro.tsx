import Button from '../shared/Button';
import Container from '../navigation/Container';
import { IC_MASK } from '../../utils/Icons';
import React from 'react';
import { RootStackNavigationProps } from '../navigation/RootStackNavigator';
import { User } from '../../types';
import { View } from 'react-native';
import { fbt } from 'fbt';
import styled from 'styled-components/native';
import { useAppContext } from '../../providers/AppProvider';
import { useThemeContext } from '../../providers/ThemeProvider';

const Wrapper = styled.View`
  flex: 1;
  align-self: stretch;
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
  let timer: number;
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
      <Wrapper>
        <ContentWrapper>
          <StyledText
            style={{
              marginTop: 100,
            }}
          >
            {user?.displayName ?? ''}
          </StyledText>
          <StyledText>{user?.age ?? ''}</StyledText>
          <StyledText>{user?.job ?? ''}</StyledText>
        </ContentWrapper>
        <ButtonWrapper>
          <Button
            testID="btn-login"
            imgLeftSrc={IC_MASK}
            isLoading={isLoggingIn}
            onClick={(): void => onLogin()}
            text={fbt('Login', 'login')}
          />
          <View style={{ marginTop: 8 }} />
          <Button
            testID="btn-navigate"
            onClick={(): void => props.navigation.navigate('Temp', {
              param: fbt('Go Back', 'go back'),
            })}
            text={fbt('Navigate', 'navigate')}
          />
          <View style={{ marginTop: 8 }} />
          <Button
            testID="btn-theme"
            onClick={(): void => changeThemeType()}
            text={fbt('Change Theme', 'change theme')}
          />
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
}

export default Intro;
