import { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
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
    },
  },
});

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
