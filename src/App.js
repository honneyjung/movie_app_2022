import React from "react";
import axios from "axios";
import {HashRouter, Route} from "react-router-dom";   // import 다음 복수컨퍼넌트를 불러올땐 {}안에쓰기
import Home from "./routes/Home";
import About from "./routes/About";


import "./App.css";
import Navigation from "./components/Navigation";

/*
  Route path: 이동할 경로
  홈 화면에서 exact={true} 를 써줘야 다음 페이지들에서 홈 화면이 중복으로 뜨는걸 방지할수있음
*/

function App() {
  return(
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  )
}

export default App;
