import Balance from "./components/Balance";
import ExpenseChart from "./components/ExpenseChart";
import IncomeExpense from "./components/IncomeExpense";
import TransactionForm from "./components/Transactions/TransactionForm";
import TransactionList from "./components/Transactions/TransactionList";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-3/6">
          <div className="bg-zinc-900 p-10 rounded-lg flex gap-x-2">
            <div>
              <h1 className="text-3xl">Control de gastos</h1>
              <IncomeExpense />
              <Balance />
              <TransactionForm />
            </div>
            <div className="flex flex-col">
              <ExpenseChart/>
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
