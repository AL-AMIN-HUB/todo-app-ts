import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <div className="App">
      <Menu />

      <div className="layout">
        <div className="content_area">
          <h2>Welcome!</h2>
          <p className="desc">
            Todo is a general-purpose website which can be used for simple home lists. You can simply create your own to do list, mark it when it's
            done and remove it when you no longer need it. It's that easy!
          </p>
          <div style={{ textAlign: "center", border: "5px solid  lightgrey" }}>
            <img title="DEV Team " className="content_image" src="https://i.ibb.co/C6HXVN8/agency-about-img.jpg" alt="" />
          </div>
        </div>
        <div className="list_area">
          <Todo />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
