import React from "react";
import "./App.css";
import Contact from "./components/contact";
import Skills from "./components/skills";
import About from "./components/about";
import Home from "./components/home";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

function App() {
  return (
  <div>
    <AppBar position="static">
     <Container maxWidth="xxl">
      <Contact></Contact>
     </Container>
        </AppBar>
        <div>

                  <Home></Home>
                  <About></About>
                  <Skills></Skills>
                </div>
                </div>
  );
}

export default App;
