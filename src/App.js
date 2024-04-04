// App.js
import React, { Component } from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import ThemeContext from './Contexts/ThemeContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark"
    };
  }
  toggleTheme = () =>{
    this.setState(state =>{
      return{
        theme: state.theme === "dark" ? "light" : "dark"
      }
    })
  }



  render() {
    return (
      <ThemeContext.Provider value={{theme: this.state.theme, toggleTheme:this.toggleTheme}}>
        <div className="App">
          <Home theme={this.state.theme} />
        </div>
        
      </ThemeContext.Provider>
    );
  }
}

export default App;
