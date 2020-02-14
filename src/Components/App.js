import React from "react";
import Post from "./Post";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Post title="Teste React" post="Raphael front end"/>
        <Post title="Aprendendo JS" post="Bom post"/>
        <Post title="Aprendendo React" post="Bom post"/>
      </div>
    );
  }
}
