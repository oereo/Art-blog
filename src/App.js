import logo from './logo.svg';
import './App.css';
import HeaderContainer from "./containers/HeaderContainer";
import MainContainer from "./containers/MainContainer";
import SubContainer from "./containers/SubContainer";
import Navbar from "../src/containers/Navbar";

function App() {
    return (
        <div className="App">
            <HeaderContainer/>
            <MainContainer/>
            <SubContainer/>
        </div>
    );
};

export default App;
