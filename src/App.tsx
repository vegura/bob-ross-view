import React, {useState} from 'react';
import './App.css';
import {Content} from "./test";
import {WebAppProvider} from "@vkruglikov/react-telegram-web-app";
import {Typography} from "@mui/joy";

function App() {
    const [smoothButtonsTransition] = useState(false);

    return (
        <WebAppProvider options={{smoothButtonsTransition}}>
            <div className="App">
                <header className="App-header">
                    <Content/>
                    <img src={"/logo1.jpg"} style={{borderRadius: "10%"}} alt={"Evil face"}/>
                    <Typography level={"h2"} color="neutral" style={{marginTop: "20px"}}>Everything works</Typography>
                </header>
            </div>
        </WebAppProvider>
    );
}

export default App;
