import React from 'react';
import Logo from './components/LandingPage/Logo/Logo';
import SignIn from './components/LandingPage/SignIn/SignIn';
import Register from './components/LandingPage/Register/Register';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Content/Main/Main';
import Reminder from './components/Content/Reminder/Reminder';
import Archive from './components/Content/Archive/Archive';
import Trash from './components/Content/Trash/Trash';
import './App.css';


const initialState = {
  logo: "Keep",
  dark: false,
  add: 0,
  addNote: [],
  addArchive: [],
  addTrash: [],
  close: false,
  ham: false,
  more: false,
  title: '',
  body: '',
  route: 'signin',
  isSignedIn: false,
  linkRoute: 'Notes',
  user: {
    email: "",
    password: "",
    FirstName: "",
    LastName: ""
  },
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onToggleTheme = () => {
    this.setState({ dark: !this.state.dark });
    this.setState({ ham: false });
  }

  onTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  onBodyChange = (event) => {
    this.setState({ body: event.target.value });
  }

  onAdd = () => {
    this.setState({add: this.state.add + 1});
    // console.log(this.state.add);
    let newNote = {
      id: this.state.add,
      title: this.state.title,
      body: this.state.body
    }
    if (this.state.body.length > 0 && this.state.title.length > 0) {
      this.setState({ addNote: [...this.state.addNote, newNote ]});
    }
  }

  onArchive = (id) => {
    this.setState({add: this.state.add + 1});
    let newArchive = {
      id: this.state.add,
      title: this.state.title,
      body: this.state.body
    }
    if (this.state.body.length > 0 && this.state.title.length > 0) {
    this.setState({ addArchive: [...this.state.addArchive, newArchive ]});
    }
  }
  
  onDelete = (id) => {
    let deletedList = [...this.state.addNote];
    let del;
    for(let i = 0; i < deletedList.length; i++){
      let obj = deletedList[i];
      if(obj.id === id){
        del = deletedList.splice(i, 1);
        break;
      }
    } 
    this.setState({addNote: [...deletedList]})
    this.setState({addTrash: [...this.state.addTrash, del[0]]});
  }

  onClickHam = () => {
    this.setState({ ham: !this.state.ham });
    this.setState({ search: false });
  }

  onClickClose = () => {
    this.setState({ close: !this.state.close });
    this.setState({ ham: false });
  }

  onClickMore = () => {
    this.setState({ more: !this.state.more });
    console.log(this.state.more);
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }

  onLinkRouteChange = (route) => {
    this.setState({ linkRoute: route });
    if(route !== "Notes"){
      this.setState({logo: route});
    } else {
      this.setState({logo: "Keep"})
    }
  }

  render() {
    return (
      <div className={!this.state.dark ? "App" : "App darkMode"}>
        {
          this.state.route === "home"
            ?
            <div>
              <header>
                <Navbar
                  logo={this.state.logo}
                  dark={this.state.dark}
                  ham={this.state.ham}
                  onToggleTheme={this.onToggleTheme}
                  onClickHam={this.onClickHam}
                  onClickClose={this.onClickClose}
                  onRouteChange={this.onRouteChange}
                  onLinkRouteChange={this.onLinkRouteChange}
                />
              </header>
              <main>
                {
                  this.state.linkRoute === "Notes"
                    ?
                    <Main
                      dark={this.state.dark}
                      list={this.state.addNote}
                      add={this.state.add}
                      onAdd={this.onAdd}
                      onArchive = {this.onArchive}
                      onDelete={this.onDelete}
                      ham={this.state.ham}
                      title={this.state.title}
                      body={this.state.body}
                      reset={this.state.more}
                      linkRoute={this.linkRoute}
                      onBodyChange={this.onBodyChange}
                      onTitleChange={this.onTitleChange}
                      onClickMore={this.onClickMore}
                    />
                    :
                    (
                      this.state.linkRoute === "Reminders"
                        ?
                        <Reminder/>
                        :
                        (
                          this.state.linkRoute === "Archive"
                            ?
                            <Archive 
                              dark={this.state.dark}
                              add={this.state.add}
                              list={this.state.addArchive}
                              ham={this.state.ham}
                              title={this.state.title}
                              body={this.state.body}
                              onDelete={this.onDelete}
                              linkRoute={this.linkRoute}
                            />
                            :
                            <Trash 
                              dark={this.state.dark}
                              list={this.state.addTrash}
                              ham={this.state.ham}
                              title={this.state.title}
                              body={this.state.body}
                              linkRoute={this.linkRoute}
                            />
                        )
                    )
                }
              </main>
            </div>
            :
            (
              this.state.route === "signin"
                ?
                <div>
                  <Logo />
                  <SignIn onRouteChange={this.onRouteChange} />
                </div>
                :
                <div>
                  <Logo />
                  <Register onRouteChange={this.onRouteChange} />
                </div>
            )
        }
      </div>
    );
  }
}

export default App;
