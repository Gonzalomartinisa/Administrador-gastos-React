import { VictoryLabel, VictoryPie } from "victory";
import { useGlobalState } from "../context/GlobalContext";

function ExpenseChart() {
    const { transaction } = useGlobalState();
    const total = transaction.reduce(
        (acc, transaction) =>(acc += transaction.amount), 0
    );

    const totalIngresos = transaction
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

    const totalGastos = transaction
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

    const porcentajeGastos = Math.round((totalGastos / totalIngresos) * 100);
    const porcentajeIngresos = 100 - porcentajeGastos;

  return (
    <VictoryPie
    colorScale={["#e74c3c", "#2ecc71"]}
    data={[
        { x: "Expenses", y: porcentajeGastos },
        { x: "Incomes", y: porcentajeIngresos },
      ]}
      animate={{
        duration: 2000,
      }}
      labels={({ datum }) => datum.y}
      labelComponent={
        <VictoryLabel
          angle={45}
          style={{
            fill: "white",
          }}
        />
      }
      />
  )
}

export default ExpenseChart