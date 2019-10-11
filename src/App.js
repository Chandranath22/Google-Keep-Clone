import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/content/Main';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      dark: false,
      add: 0,
      close: false,
      ham: false,
      reset: false,
      title: '',
      body: ''
    }
  }

  onToggleTheme = () => {
    this.setState({dark: !this.state.dark});
    this.setState({ham: false});
  }

  onTitleChange = (event) => {
    this.setState({title: event.target.value});
  }

  onBodyChange = (event) => {
    this.setState({body: event.target.value});    
  }

  onAdd = () => {
    if(this.state.body.length > 0 && this.state.title.length > 0) {
      this.setState({add: this.state.add + 1});
    }
  }

  onClickHam = () => {
    this.setState({ham: !this.state.ham});
    this.setState({search: false});
}

onClickClose = () => {
  this.setState({close: !this.state.close});
  this.setState({ham: false});
}

onClickReset = () => {
  this.setState({reset: !this.state.reset});
}
  
  render() {
      return (
        <div className={!this.state.dark ? "App" : "App darkMode"}>
        <header>
          <Navbar 
          dark = {this.state.dark}
          ham = {this.state.ham}
          onToggleTheme = {this.onToggleTheme}
          onClickHam = {this.onClickHam}
          onClickClose = {this.onClickClose}
          />
        </header>
        <main>
            <Main 
            dark = {this.state.dark} 
            add = {this.state.add} 
            onAdd = {this.onAdd} 
            ham = {this.state.ham}
            title = {this.state.title}
            body = {this.state.body}
            reset = {this.state.reset}
            onBodyChange = {this.onBodyChange}
            onTitleChange = {this.onTitleChange}
          />
          </main>


        
      </div>
    );
  }
}

export default App;
