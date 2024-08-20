import { useState } from "react";
import { useGlobalState } from "../../context/GlobalContext";

export function TransactionForm() {
  const { addTransaction } = useGlobalState();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });

    setDescription("");
    setAmount(0);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-500 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={description}
        />
        <input
          type="number"
          placeholder="0.00"
          onChange={(e) => setAmount(e.target.value)}
          className="bg-zinc-500 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={amount}
        />
        <button className="bg-indigo-500 text-white px-3 py-2 rounded-lg block mb-2 w-full">
          Agregar
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;