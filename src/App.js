import React, { Component } from 'react';
import NavBar from './components/navBar/NavBar';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div>MainContent</div>
                <div>Footer</div>
            </div>
        );
    }
}

export default App;
