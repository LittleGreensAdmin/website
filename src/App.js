import './App.css';
import LandingPage from '@Pages/LandingPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function renderComponent(param) {

    switch(param) {
        case 'landing':
            return LandingPage;
        default:
            return LandingPage;
    }
}

function App() {
    let view = localStorage.getItem('view') == null ?
        { type: 'landing'} :
        JSON.parse(localStorage.getItem('view'));

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={renderComponent(view.type)} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
