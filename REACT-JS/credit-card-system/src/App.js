import "./App.css";

import { ResponsiveAppBar } from "./Component/Header";
import { FullWidthGrid } from "./Component/Search";
import { Main } from "./Component/Main";
import { Transaction } from "./Component/Transaction";

const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      <FullWidthGrid />
      <Main />
      <Transaction />
    </>
  );
};

export default App;


