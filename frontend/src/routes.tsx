import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';

export function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}