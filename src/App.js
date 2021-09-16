import logo from "./logo.svg";
import "./App.css";
import { v4 as uuidv4 } from 'uuid'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Gradebook from "./pages/Gradebook";
import NewGrade from "./pages/NewGrade";
import Project from "./pages/Project";
import NoMatch from "./pages/NoMatch";
import grades from "./data/fakegrades";

function App() {
  const [gradeState, setGradeState] = useState(grades)

  const [newProject, setNewProject] = useState({
      id: null,
      projTitle: '',
      // projReqs: ['Responsive', 'Polished UI'],
      dueDate: null,
      // varCats: ['Category 1', 'Category 2'],
      // varCatsVals: ['Value 1', 'Value 2'],
      groupSize: null,
      // groupScore: ['Score 1', 'Score 2'],
      // memberScore: ['Score 1 mem 1'],
      // links: ['deployed link', 'github link'],
      // comments: ['comment 1', 'comment 2'],
      gradeCalc: null,
  })

  const [user, setUser] = useState("");

  const [password, setPassword] = useState("");

  const [username, setUsername] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  const changeUser = (event) => {
    event.preventDefault();
    if (username && password) {
      setUser(username);
      setLoggedIn(!loggedIn);
    } else if (username && !password) {
      window.alert('Please enter your password')
    } else if (!username && password) {
      window.alert('Please enter your username')
    } else {
      window.alert('Please enter both your username and password')
    }
  };

  const handleUsernameChange = e => {
    setUsername(e.target.value)
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  };
  
  const logInToggle = () => {
    setLoggedIn(!loggedIn);
  };
  
  const projTitleChange = e => {
    setNewProject({...newProject, projTitle: e.target.value})
  };
  const projDueChange = e => {
    setNewProject({...newProject, dueDate: e.target.value})
  };
  const groupSizeChange = e => {
    setNewProject({...newProject, groupSize: e.target.value})
  };
  const gradeChange = e => {
    setNewProject({...newProject, gradeCalc: e.target.value})
  };

  const newProjectSubmit = (event) => {
    event.preventDefault()
    setNewProject({...newProject, id: uuidv4()})
    setGradeState([...gradeState, newProject])

    // const newProj = event.target

  }
  return (
    <Router>
      <NavBar login={loggedIn} loginToggle={logInToggle} user={user} />
      <Switch>
        <Route exact path="/gradebook">
          {loggedIn ? <Gradebook login={loggedIn} projects={gradeState}/> : <Redirect to="/" />}
        </Route>
        <Route exact path="/project/:project">
          {loggedIn ? <Project login={loggedIn} projects={gradeState}/> : <Redirect to="/" />}
        </Route>
        <Route exact path="/new">
          {loggedIn ? <NewGrade login={loggedIn} submit={newProjectSubmit} newTitle={projTitleChange} dueDateChange={projDueChange} groupSize={groupSizeChange} gradeChange={gradeChange}/> : <Redirect to="/" />}
        </Route>
        <Route exact path="/">
          <Home handleChange={handleUsernameChange} handlePasswordChange={handlePasswordChange} login={loggedIn} setUser={changeUser} user={user}/>
        </Route>
        <Route path="*"><NoMatch /></Route>
      </Switch>
    </Router>
  );
}

export default App;