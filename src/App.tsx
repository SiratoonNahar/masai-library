import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';
import useAuth from './hooks/useAuth';

const App: React.FC = () => {
    const { user } = useAuth();

    return (
        <Provider store={store}>
            <div className="App">
                {user ? <Dashboard /> : <Auth />}
            </div>
        </Provider>
    );
};

export default App;
