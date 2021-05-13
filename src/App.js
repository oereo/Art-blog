import './App.css';
import MainContainer from "./containers/MainContainer";
import SubContainer from "./containers/SubContainer";
import NavbarContainer from "./containers/NavbarContainer";

function App() {
    return (
        <div className="App" style={{width:"100%"}}>
            {/*<HeaderContainer/>*/}
            <NavbarContainer/>
            <MainContainer/>
            <SubContainer/>
        </div>
    );
};

export default App;
