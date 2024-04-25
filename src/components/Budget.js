// Importa React, el gancho useContext y el gancho useState desde la biblioteca 'react'
import React, { useContext, useState } from "react";

// Importa el contexto de la aplicación desde el archivo AppContext.js
import { AppContext } from "../context/AppContext";

// Define un componente funcional llamado Budget
const Budget = () => {
  // Utiliza el gancho useContext para acceder al contexto de la aplicación
  // y extraer la variable 'budget'
  const { budget } = useContext(AppContext);

  // Utiliza el gancho useState para definir una variable de estado 'newBudget'
  // y una función para actualizarla 'setNewBudget', inicializada con el valor de 'budget'
  const [newBudget, setNewBudget] = useState(budget);

  // Define una función 'handleBudgetChange' que actualiza el valor de 'newBudget'
  // cada vez que cambia el valor del campo de entrada
  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  };

  // Renderiza un elemento 'div' con una clase CSS 'alert alert-secondary'
  return (
    <div className="alert alert-secondary">
      {/* Muestra el mensaje "Budget: £" seguido del valor del presupuesto */}
      <span>Budget: £{budget}</span>
      {/* Renderiza un campo de entrada numérica con el valor de 'newBudget'
          y un controlador de eventos 'onChange' que llama a la función 'handleBudgetChange'
          cada vez que cambia el valor del campo */}
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};

// Exporta el componente Budget para que pueda ser utilizado en otras partes de la aplicación
export default Budget;
