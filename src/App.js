import logo from './logo.svg';
import './App.css';
import HeaderContainer from "./containers/HeaderContainer";
import MainContainer from "./containers/MainContainer";
import SubContainer from "./containers/SubContainer";

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
