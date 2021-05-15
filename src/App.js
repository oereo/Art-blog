import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainContainer from "./containers/MainContainer";
import EmailPage from "./containers/EmailPage";
import MobilePage from "./containers/MobilePage";
import Media from 'react-media'
import EmailMobilePage from "./containers/EmailMobilePage";

function App() {
    const MEDIA_QUERIES = {
        pc:"(min-width: 1000px)",
        mobile:"(max-width:1000px)"
    }


    return (
        <div className="App" style={{}}>
            <Router>
                <Switch>
                    <Media queries={MEDIA_QUERIES}>
                        {matches => {
                            return(
                                <>
                                    {matches.pc && <Route exact path='/' component={MainContainer}/>}
                                    {matches.mobile && <Route exact path='/' component={MobilePage}/>}
                                    {matches.pc && <Route path='/email' component={EmailPage}/>}
                                    {matches.mobile && <Route path='/email' component={EmailMobilePage}/>}

                                </>
                            )
                        }}
                    </Media>


                </Switch>
            </Router>

        </div>
    );
};

export default App;
