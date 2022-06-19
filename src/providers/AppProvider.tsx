import { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../assets/styles/globalStyle";
import { theme } from "../assets/styles/theme";
interface AppProviderProps {
  children: ReactNode;
}
const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;
