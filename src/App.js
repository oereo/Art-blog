import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainContainer from "./containers/MainContainer";
import SubContainer from "./containers/SubContainer";
import EmailPage from "./containers/EmailPage";

function App() {
    return (
        <div className="App" style={{width:"100%"}}>
            <Router>
                <Switch>
                <Route exact path='/' component = {MainContainer}/>
                <Route path='/email' component = {EmailPage}/>
                    </Switch>
            </Router>

        </div>
    );
};

export default App;
