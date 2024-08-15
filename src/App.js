import React from "react";
import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>Tálita Floriano</h1>
            <div className="button-container">
                <a href="https://wa.me/5521969133563" target="_blank" rel="noopener noreferrer">
                    <button>WhatsApp</button>
                </a>
                <a href="https://www.linkedin.com/in/talitafloriano/" target="_blank" rel="noopener noreferrer">
                    <button>LinkedIn</button>
                </a>
                <a href="https://www.instagram.com/talitafloriano" target="_blank" rel="noopener noreferrer">
                    <button>Instagram</button>
                </a>
                <a href="mailto:talitafloriano@gmail.com" target="_blank" rel="noopener noreferrer">
                    <button>Gmail</button>
                </a>
            </div>
        </div>
    );
}

export default App;
