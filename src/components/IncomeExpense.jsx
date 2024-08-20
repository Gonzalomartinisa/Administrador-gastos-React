import { useGlobalState } from "../context/GlobalContext";

function IncomeExpense() {

  const { transaction } = useGlobalState();

  //console.log(transaction)

  const amounts = transaction.map((transactions) => transactions.amount);

  //console.log(amounts)

  const income = amounts
     .filter((item) => item > 0)
     .reduce((acc, item) => (acc += item), 0)
     .toFixed(2);

  const expense = amounts
     .filter((item) => item < 0)
     .reduce((acc, item) => (acc += item), 0) 
     .toFixed(2) * -1;

  return (
    <>
    <div className="flex justify-between my-2">
      <h4>Ingresos</h4>
      <p>{income}</p>
    </div>
    <div className="flex justify-between my-2">  
      <h4>Egresos</h4>
      <p>{expense}</p>
    </div>
    </>
  )
}

export default IncomeExpense;