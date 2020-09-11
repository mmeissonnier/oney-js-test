import React, { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Landing } from './components';
import { SignInContainer, HomeContainer } from './containers';
import { StoreProvider } from './store';

const GlobalStyle = createGlobalStyle`
html, body, #root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#root {
  display: flex;
  flex-direction:column;
}

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
`;

const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  padding-bottom: auto;
  flex: 1;
  padding: 30px;
`;

const App: FC = () => (
  <Container>
    <GlobalStyle />
    <StoreProvider>
      <BrowserRouter>
        <Route path="/" component={Landing} exact />
        <Route path="/signin" component={SignInContainer} exact />
        <Route path="/home" component={HomeContainer} exact />
      </BrowserRouter>
    </StoreProvider>
  </Container>
);

export default App;
