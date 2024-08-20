import { useGlobalState } from "../../context/GlobalContext";
import { TransactionItems } from "./TransactionItems";

export function TransactionList() {
    const { transaction } = useGlobalState();

  return (
    <>
    <h3>Historial</h3>
      <ul>
    {transaction.map((transactions) => (
        <TransactionItems transactions={transactions} key=
        {transactions.id}/>
    ))}
    </ul>
    </>
  )
}

export default TransactionList;