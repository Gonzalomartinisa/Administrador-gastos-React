import { useGlobalState } from "../../context/GlobalContext";

export function TransactionItems({ transactions: { id, description, amount } }) {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{description}</p>
      <div>
        <span>${amount}</span>
        <button className="font-bold text-white rounded-lg ml-2"
        onClick={() => {
          deleteTransaction(id)          
        }}>
          Borrar
        </button>
      </div> 
    </li>
  );
}

export default TransactionItems;