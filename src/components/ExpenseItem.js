// Importa React y el gancho useContext desde la biblioteca 'react'
import React, { useContext } from "react";

// Importa el icono de eliminación de React Icons
import { TiDelete } from "react-icons/ti";

// Importa el contexto de la aplicación desde el archivo AppContext.js
import { AppContext } from "../context/AppContext";

// Define un componente funcional llamado ExpenseItem que recibe props como argumento
const ExpenseItem = (props) => {
  // Utiliza el gancho useContext para acceder al contexto de la aplicación
  const { dispatch } = useContext(AppContext);

  // Función para manejar la eliminación de un gasto
  const handleDeleteExpense = () => {
    // Despacha una acción de tipo 'DELETE_EXPENSE' con el id del gasto como carga útil
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  // Función para aumentar la asignación de un gasto
  const increaseAllocation = (name) => {
    // Define un objeto expense con el nombre del gasto y un costo de 10
    const expense = {
      name: name,
      cost: 10,
    };

    // Despacha una acción de tipo 'ADD_EXPENSE' con el objeto expense como carga útil
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  // Renderiza una fila de la tabla con la información del gasto y botones para aumentar la asignación y eliminar el gasto
  return (
    <tr>
      <td>{props.name}</td>
      <td>£{props.cost}</td>
      <td>
        {/* Botón para aumentar la asignación del gasto */}
        <button onClick={(event) => increaseAllocation(props.name)}>+</button>
      </td>
      <td>
        {/* Icono de eliminación con el evento onClick que llama a la función handleDeleteExpense */}
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

// Exporta el componente ExpenseItem para que pueda ser utilizado en otras partes de la aplicación
export default ExpenseItem;
