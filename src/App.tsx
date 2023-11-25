import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Content} from "./test";
import {WebAppProvider} from "@vkruglikov/react-telegram-web-app";

function App() {
    const [smoothButtonsTransition, setSmoothButtonsTransition] = useState(false);

    return (
        <WebAppProvider options={{smoothButtonsTransition}}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Content/>
                </header>
            </div>
        </WebAppProvider>
    );
}

export default App;
