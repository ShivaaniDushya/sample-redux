import './App.css';
import { Provider } from 'react-redux';
import store from './redux/pizza/store';
import PizzaContainer from './redux/pizza/pizzaContainer';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <PizzaContainer />
        </header>
      </div>
    </Provider>
  );
}

export default App;
