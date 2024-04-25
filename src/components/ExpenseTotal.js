// Importa React y el gancho useContext desde la biblioteca 'react'
import React, { useContext } from "react";

// Importa el contexto de la aplicación desde el archivo AppContext.js
import { AppContext } from "../context/AppContext";

// Define un componente funcional llamado ExpenseTotal
const ExpenseTotal = () => {
  // Utiliza el gancho useContext para acceder al contexto de la aplicación
  // y extraer la variable 'expenses'
  const { expenses } = useContext(AppContext);

  // Calcula el total de gastos sumando los costos de todos los elementos en 'expenses'
  const totalExpenses = expenses.reduce((total, item) => {
    // La función reduce() toma una función de reducción y un valor inicial
    // En este caso, la función suma el costo de cada elemento al valor total
    return (total += item.cost);
  }, 0); // El segundo argumento de reduce() es el valor inicial del total, que se establece en 0

  // Renderiza un elemento 'div' con una clase CSS 'alert alert-primary'
  return (
    <div className="alert alert-primary">
      {/* Muestra el mensaje "Spent so far: $" seguido del total de gastos */}
      <span>Spent so far: $ {totalExpenses}</span>
    </div>
  );
};

// Exporta el componente ExpenseTotal para que pueda ser utilizado en otras partes de la aplicación
export default ExpenseTotal;
