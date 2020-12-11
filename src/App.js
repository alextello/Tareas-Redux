import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
