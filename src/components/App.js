import './App.css';
import Nav from './Nav';
import LandingPage from './LandingPage';
import About from './About';
import Projects from './Projects';
import CV from './CV';
import Blog from './Blog';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact render={pages =>
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
