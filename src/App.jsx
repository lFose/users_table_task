import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UsersRoute from 'routes/UsersRoute';

class App extends React.PureComponent {
    
    render() {
        return (
        <Switch>
            <Route path='/'>
                <UsersRoute />
            </Route>
        </Switch>
        )
    }
}

export default App;