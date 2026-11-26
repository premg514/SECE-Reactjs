import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Likes from "./components/Likes";
import User from "./components/User";
import Parent1 from "./prop-drilling/Parent1";

function App() {
  return (
    <>
      {/* <Header logo={"Apple"} />
      <Header logo={"Samsung"} />
      <Header logo={"MI"} /> */}
      {/* <Body /> */}
      {/* <Likes/> */}
      {/* <Footer /> */}
      {/* <User/> */}
      <Parent1/>
    </>
  );
}

export default App;
