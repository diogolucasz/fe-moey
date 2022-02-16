import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { runServer } from "./services/mirage";
import { GlobalStyle } from "./styles/globalStyle";

runServer();

export function App() {
  return (
    <>
      <Header/>
      <Dashboard/>
      <GlobalStyle />
    </>
  );
}

