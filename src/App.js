import React from "react";

import CountProvider from "./context/count";

import Counter from "./Components/Counter";
import Mirror from "./Components/Mirror";

function App() {
  return (
    <CountProvider>
      <Counter />
      <hr />
      <Mirror />
    </CountProvider>
  );
}

export default App;
