import './App.css';
import Header from './components/Header';
import AddTransaction from './components/AddTransaction';
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';
import { GlobalContextProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <AddTransaction />
          <div className="budget-list">
            <IncomeList />
            <ExpenseList />
          </div>
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
