import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Device } from "./styles/breakpoints";
import {
  GlobalStyles,
  Sidebar,
  MyRoutes,
  useThemeStore,
  AuthContextProvider,
  Login
} from "./index";
import { useLocation } from "react-router-dom";


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { themeStyle } = useThemeStore();
  const {pathname} =useLocation();

  return (
    <ThemeProvider theme={themeStyle}>
      <AuthContextProvider>
          <GlobalStyles />
        {pathname!="/login"?(<Container className={sidebarOpen ? "active" : ""}>
        
          <section className="contentSidebar">
            <Sidebar
              state={sidebarOpen}
              setState={() => setSidebarOpen(!sidebarOpen)}
            />
          </section>
          <section className="contentMenuhambur">menu hambur</section>
          <section className="contentRouters">
            <MyRoutes />
          </section>
        </Container>):(<Login/>)}
        
      </AuthContextProvider>
    </ThemeProvider>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  transition: 0.1s ease-in-out;

  .contentSidebar {
    display: none;
  }
  .contentMenuhambur {
    position: absolute;
  }
  .contentRouters {
    width: 100%;
    grid-column: 1;
    display: flex;
  }

  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    &.active {
      grid-template-columns: 260px 1fr;
    }
    .contentSidebar {
      display: initial;
    }
    .contentMenuhambur {
      display: none;
    }
    .contentRouters {
      grid-column: 2;
    }
  }
`;

export default App;
