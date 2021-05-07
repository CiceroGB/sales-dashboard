import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

export function Routes() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/dashboard' component={Dashboard} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </>
    )
}