import React from "react";
import "./App.css";
import Header from './components/Header/Header';
import Nav from './components/Navbar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom"
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app__wraper">
                <Header />
                <Nav state={props.state.sidebar}/>
                <div className="main__content">
                    <Route exact path="/profile" render={ () => 
                        <Profile profilePage={props.state.profilePage}
                        addPost={props.addPost} updateNewPostText={props.updateNewPostText}/> }/>
                    <Route path="/dialogs" render={ () => <Dialogs state={props.state.dialogsPage}/> }/>
                    <Route path="/news" render={ () => <News /> }/>
                    <Route path="/music" render={ () => <Music /> }/>
                    <Route path="/settings" render={ () => <Settings /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

