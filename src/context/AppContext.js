import React, { createContext, useReducer } from "react";

// Importa React y funciones necesarias de la biblioteca 'react'

// 5. El reductor - se utiliza para actualizar el estado, basado en la acción
export const AppReducer = (state, action) => {
  let budget = 0;
  // Define una función reductora que recibe el estado actual y una acción, y devuelve el nuevo estado actualizado
  switch (action.type) {
    // Maneja la acción de agregar un gasto
    case "ADD_EXPENSE":
      let total_budget = 0;
      // Calcula el presupuesto total actual sumando los costos de todos los gastos existentes
      total_budget = state.expenses.reduce((previousExp, currentExp) => {
        return previousExp + currentExp.cost;
      }, 0);
      // Agrega el costo del nuevo gasto al presupuesto total actual
      total_budget = total_budget + action.payload.cost;
      action.type = "DONE";
      // Comprueba si el presupuesto total está dentro del presupuesto asignado
      if (total_budget <= state.budget) {
        total_budget = 0;
        // Actualiza el costo de un gasto existente o agrega uno nuevo
        state.expenses.map((currentExp) => {
          if (currentExp.name === action.payload.name) {
            currentExp.cost = action.payload.cost + currentExp.cost;
          }
          return currentExp;
        });
        // Devuelve el nuevo estado actualizado
        return {
          ...state,
        };
      } else {
        // Alerta si el presupuesto total excede el presupuesto asignado
        alert("¡No se puede aumentar la asignación! Sin fondos suficientes");
        // Devuelve el estado actual sin realizar cambios
        return {
          ...state,
        };
      }
    // Maneja la acción de reducir un gasto
    case "RED_EXPENSE":
      const red_expenses = state.expenses.map((currentExp) => {
        if (
          currentExp.name === action.payload.name &&
          currentExp.cost - action.payload.cost >= 0
        ) {
          currentExp.cost = currentExp.cost - action.payload.cost;
          budget = state.budget + action.payload.cost;
        }
        return currentExp;
      });
      action.type = "DONE";
      // Devuelve el nuevo estado actualizado después de reducir el gasto
      return {
        ...state,
        expenses: [...red_expenses],
      };
    // Maneja la acción de eliminar un gasto
    case "DELETE_EXPENSE":
      action.type = "DONE";
      state.expenses.map((currentExp) => {
        if (currentExp.name === action.payload) {
          budget = state.budget + currentExp.cost;
          currentExp.cost = 0;
        }
        return currentExp;
      });
      action.type = "DONE";
      // Devuelve el nuevo estado actualizado después de eliminar el gasto
      return {
        ...state,
        budget,
      };
    // Maneja la acción de establecer el presupuesto
    case "SET_BUDGET":
      action.type = "DONE";
      state.budget = action.payload;

      // Devuelve el nuevo estado actualizado después de establecer el presupuesto
      return {
        ...state,
      };
    // Maneja la acción de cambiar la moneda
    case "CHG_CURRENCY":
      action.type = "DONE";
      state.currency = action.payload;
      // Devuelve el nuevo estado actualizado después de cambiar la moneda
      return {
        ...state,
      };

    default:
      // Devuelve el estado actual sin realizar cambios si no se encuentra ninguna acción coincidente
      return state;
  }
};

// Define el estado inicial de la aplicación
const initialState = {
  budget: 2000,
  expenses: [
    { id: "Marketing", name: "Marketing", cost: 50 },
    { id: "Finance", name: "Finance", cost: 300 },
    { id: "Sales", name: "Sales", cost: 70 },
    { id: "Human Resource", name: "Human Resource", cost: 40 },
    { id: "IT", name: "IT", cost: 500 },
  ],
  currency: "£",
};

// Crea el contexto que nuestros componentes importan y utilizan para obtener el estado
export const AppContext = createContext();

// Componente Proveedor - envuelve los componentes a los que queremos dar acceso al estado
// Acepta los children, que son los componentes anidados (envueltos)
export const AppProvider = (props) => {
  // Configura el estado de la aplicación utilizando el reductor y el estado inicial
  const [state, dispatch] = useReducer(AppReducer, initialState);
  let remaining = 0;

  // Calcula el presupuesto restante después de deducir los gastos actuales del presupuesto total asignado
  if (state.expenses) {
    const totalExpenses = state.expenses.reduce((total, item) => {
      return (total = total + item.cost);
    }, 0);
    remaining = state.budget - totalExpenses;
  }

  // Devuelve el componente Proveedor con el contexto y el estado proporcionados a través del valor
  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        remaining: remaining,
        dispatch,
        currency: state.currency,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
