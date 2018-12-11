import React, { Component } from 'react';
import NavBar from './components/navBar/NavBar';
import { Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
                <div>Footer</div>
            </div>
        );
    }
}

export default App;
