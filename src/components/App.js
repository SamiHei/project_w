import './App.css';
import Nav from './Nav/Nav';
import LandingPage from './LandingPage/LandingPage';
import About from './About/About';
import Projects from './Projects/Projects';
import CV from './CV/CV';
import Footer from './Footer/Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact render={props =>
                        <div>
                            <LandingPage />
                            <About />
                            <Projects />
                            <Footer />
                        </div>} />
                    <Route path="/cv" exact component={CV}/>
                </Switch>
            </div>
        </Router>
  );
}

export default App;