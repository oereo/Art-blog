import './App.css';
import HeaderContainer from "./containers/HeaderContainer";
import MainContainer from "./containers/MainContainer";
import SubContainer from "./containers/SubContainer";

function App() {
    return (
        <div className="App" style={{width:"100%"}}>
            {/*<HeaderContainer/>*/}
            <MainContainer/>
            <SubContainer/>
        </div>
    );
};

export default App;
