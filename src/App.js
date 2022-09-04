import React, { useEffect } from "react";
import Routes from "./router/Routes";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="tokyo_tm_all_wrap">
      <Routes />
    </div>
  );
};

export default App;
