import React from 'react';
import styled from '@emotion/native';
import {useAppContext} from '../../providers/AppProvider';

const ContentWrapper = styled.View`
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 18px;
  line-height: 27px;
  color: ${({theme}) => theme.text};
`;

function IntroView(): React.ReactElement {
  const {
    state: {user},
  } = useAppContext();

  return (
    <ContentWrapper>
      <StyledText
        style={{
          marginTop: 100,
        }}>
        {user ? user.displayName : ''}
      </StyledText>
      <StyledText>{user ? user.age : ''}</StyledText>
      <StyledText>{user ? user.job : ''}</StyledText>
    </ContentWrapper>
  );
}

export default IntroView;
