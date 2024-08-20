import { useGlobalState } from "../context/GlobalContext";
function Balance() {

    const { transaction } = useGlobalState();

    const amounts = transaction.map(transactions => transactions.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0);
    
  return (
    <div className="flex justify-between">
      <h3>Balance</h3>
      <h1 className="font-bold">${total}</h1>
    </div>
  )
}

export default Balance;

