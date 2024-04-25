// Importa React, useContext y useState desde la biblioteca 'react'
import React, { useContext, useState } from "react";

// Importa el contexto de la aplicación desde el archivo AppContext.js
import { AppContext } from "../context/AppContext";

// Define un componente funcional llamado AllocationForm que recibe props como argumento
const AllocationForm = (props) => {
  // Utiliza el gancho useContext para acceder al contexto de la aplicación y extraer el estado 'dispatch' y 'remaining'
  const { dispatch, remaining } = useContext(AppContext);

  // Define estados locales para 'name', 'cost' y 'action' utilizando el gancho useState
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [action, setAction] = useState("");

  // Función para manejar el evento de envío del formulario
  const submitEvent = () => {
    // Verifica si el costo excede los fondos restantes y muestra una alerta si es así
    if (cost > remaining) {
      alert("The value cannot exceed remaining funds £" + remaining);
      setCost("");
      return;
    }

    // Crea un objeto de gasto con el nombre y el costo ingresados
    const expense = {
      name: name,
      cost: parseInt(cost),
    };

    // Despacha una acción según la acción seleccionada ('ADD_EXPENSE' o 'RED_EXPENSE')
    if (action === "Reduce") {
      dispatch({
        type: "RED_EXPENSE",
        payload: expense,
      });
    } else {
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    }
  };

  // Renderiza el formulario de asignación
  return (
    <div>
      <div className="row">
        <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Department
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => setName(event.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="Marketing" name="marketing">
              {" "}
              Marketing
            </option>
            <option value="Sales" name="sales">
              Sales
            </option>
            <option value="Finance" name="finance">
              Finance
            </option>
            <option value="HR" name="hr">
              HR
            </option>
            <option value="IT" name="it">
              IT
            </option>
            <option value="Admin" name="admin">
              Admin
            </option>
          </select>

          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Allocation
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(event) => setAction(event.target.value)}
          >
            <option defaultValue value="Add" name="Add">
              Add
            </option>
            <option value="Reduce" name="Reduce">
              Reduce
            </option>
          </select>

          <input
            required="required"
            type="number"
            id="cost"
            value={cost}
            style={{ marginLeft: "2rem", size: 10 }}
            onChange={(event) => setCost(event.target.value)}
          ></input>

          <button
            className="btn btn-primary"
            onClick={submitEvent}
            style={{ marginLeft: "2rem" }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

// Exporta el componente AllocationForm para que pueda ser utilizado en otras partes de la aplicación
export default AllocationForm;
