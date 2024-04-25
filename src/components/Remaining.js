// Importa React y el gancho useContext desde la biblioteca 'react'
import React, { useContext } from "react";

// Importa el contexto de la aplicación desde el archivo AppContext.js
import { AppContext } from "../context/AppContext";

// Define un componente funcional llamado Remaining
const Remaining = () => {
  // Utiliza el gancho useContext para acceder al contexto de la aplicación
  // y extraer las variables 'expenses' y 'budget'
  const { expenses, budget } = useContext(AppContext);

  // Calcula el total de gastos sumando los costos de todos los elementos en 'expenses'
  const totalExpenses = expenses.reduce((total, item) => {
    // La función reduce() toma una función de reducción y un valor inicial
    // En este caso, la función suma el costo de cada elemento al valor total
    return (total = total + item.cost);
  }, 0); // El segundo argumento de reduce() es el valor inicial del total, que se establece en 0

  // Determina el tipo de alerta según si el total de gastos supera el presupuesto
  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  // Renderiza un elemento 'div' con una clase CSS basada en el tipo de alerta
  return (
    <div className={`alert ${alertType}`}>
      {/* Muestra el mensaje "Remaining: £" seguido del cálculo de la cantidad restante */}
      <span>Remaining: £{budget - totalExpenses}</span>
    </div>
  );
};

// Exporta el componente Remaining para que pueda ser utilizado en otras partes de la aplicación
export default Remaining;
