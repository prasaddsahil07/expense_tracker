import React, { useState, useMemo } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import bg from './img/bg.png';
import { MainLayout } from './styles/Layouts';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { lightTheme, darkTheme } from './styles/Theme';
import Toggle from './Components/ToggleTheme/Toggle'; // Assuming you'll create a ToggleButton component

function App() {
  const [themeMode, setThemeMode] = useState('light');
  const isLightTheme = themeMode === "light";

  const toggleTheme = () => {
    setThemeMode(isLightTheme ? 'light' : 'dark');
  };

  const orbMemo = useMemo(() => {
    return <Orb />; // to stop re-rendering of background animation
  }, []);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <AppStyled bg={bg} className="App">
        {orbMemo}
        <MainLayout>
          <Toggle toggleTheme={toggleTheme} isLightTheme={isLightTheme} />
          <Navigation />
          <Outlet />
        </MainLayout>
      </AppStyled>
    </ThemeProvider>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main {
    flex: 1;
    background: ${props => props.theme.subtitle};
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
