// import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./Header"
import Footer from "./Footer"
import Slide from "./Slide"
import Card from './Card';
import TestiMonials from './TestiMonials';
// import { useState } from "react";
function Ppa() {
  return (
    <div className="App">
      <Header></Header>
      <Slide/>
      <Card />
      <TestiMonials></TestiMonials>
      <Footer></Footer>
     </div>
  );
}
export default Ppa;
