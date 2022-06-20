import { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../assets/styles/globalStyle";
import { theme } from "../assets/styles/theme";
interface AppProviderProps {
  children: ReactNode;
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // staleTime: 1000 * 30,
    },
  },
});

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <Router>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  );
};

export default AppProvider;
