import "./app.css"

function App(){
    return(
        <div className="app">
            <input type="text" placeholder="Search..." className="seacrh" />
        <ul className="list">
            <li className="listItem">John</li>
            <li className="listItem">Jane</li>
            <li className="listItem">Mike</li>
        </ul>
        </div>
    );
}

export default App;