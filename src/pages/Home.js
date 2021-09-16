import React from "react";
import Login from "../components/Login";

export default function Home(props) {
return (
    <div className="homeDiv">
    {props.login ? (
        <div>
        <h3>Welcome, {props.user}</h3>
        <h5>Use the links above to navigate.</h5>
        <h5>In a typical application, this would be connected to a backend that would store grade information.</h5>
        <h5>In this case, however, all grades are simulated, projects cannot be saved or edited, and all new grades will not persist upon next login.</h5>
        </div>
    ) : (
        <div>
        <h1>Please log in</h1>
        <h5>New users can use any username and password</h5>
        <Login
            handleChange={props.handleChange}
            handlePasswordChange={props.handlePasswordChange}
            setUser={props.setUser}
        />
        </div>
    )}
    </div>
);
}