import './App.css';
import Nav from './Nav/Nav';
import LandingPage from './LandingPage/LandingPage';
import About from './About/About';
import Projects from './Projects/Projects';
import CV from './CV/CV';
import Blog from './Blog/Blog';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact render={props =>
                        <div>
                            <LandingPage />
                            <About />
                            <Projects />
                        </div>} />
                    <Route path="/cv" exact component={CV}/>
                    <Route path="/blog" exact component={Blog}/>
                </Switch>
            </div>
        </Router>
  );
}

export default App;