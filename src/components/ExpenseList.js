// Importa React y el gancho useContext desde la biblioteca 'react'
import React, { useContext } from "react";

// Importa el componente ExpenseItem desde el archivo ExpenseItem.js
import ExpenseItem from "./ExpenseItem";

// Importa el contexto de la aplicación desde el archivo AppContext.js
import { AppContext } from "../context/AppContext";

// Define un componente funcional llamado ExpenseList
const ExpenseList = () => {
  // Utiliza el gancho useContext para acceder al contexto de la aplicación
  // y extraer la variable 'expenses', que contiene la lista de gastos
  const { expenses } = useContext(AppContext);

  // Renderiza una tabla HTML con la lista de gastos
  return (
    <table className="table">
      {/* Encabezado de la tabla */}
      <thead className="thead-light">
        <tr>
          <th scope="col">Department</th>
          <th scope="col">Allocated Budget</th>
          <th scope="col">Increase by 10</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      {/* Cuerpo de la tabla */}
      <tbody>
        {/* Utiliza el método map() para recorrer la lista de gastos
            y renderizar un componente ExpenseItem para cada uno */}
        {expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            key={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </tbody>
    </table>
  );
};

// Exporta el componente ExpenseList para que pueda ser utilizado en otras partes de la aplicación
export default ExpenseList;
