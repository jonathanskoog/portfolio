// import React from "react";
// import Test from "./About_me/Test";
// import "./App.css";

// function App() {
//   return (
//     <div className="Font">
//       <p className="text-center text-blue-400 text-7xl">HEj</p>
//       <Test />
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import AboutMe from "./About_me/AboutMe";

import { NextUIProvider } from "@nextui-org/react";

// import "@fontsource/inter/300.css";
// import "@fontsource/inter/400.css";

function App() {
  return (
    <div>
      <NextUIProvider
        style={{
          fontFamily:
            "SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 600,
        }}
      >
        <div className="full-screen-div">
          <AboutMe />
        </div>
      </NextUIProvider>
    </div>
  );
}

export default App;
