import React, { useState } from "react";

import LandingPage from "./LandingPage";
import GuidePage from "./GuidePage";

const App = () => {
  const [curPage, setCurPage] = useState(true);

  return <div>{curPage ? <LandingPage /> : <GuidePage />}</div>;
};

export default App;
