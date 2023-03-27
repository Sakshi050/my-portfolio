import logo from './logo.svg';
import './App.css';
// import styled from "styled-components";
import Header from "./components/Header/header";
import Main from "./components/Header/main";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Footer from "./components/Footer/footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
