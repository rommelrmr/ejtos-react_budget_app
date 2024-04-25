import React from "react";

// Importa el estilo CSS de Bootstrap para su uso en la aplicación
import "bootstrap/dist/css/bootstrap.min.css";

// Importa el componente Budget.js para su uso en la aplicación
import Budget from "./components/Budget";

// Agrega código para importar los otros componentes aquí debajo

// Importa el contexto de la aplicación para proporcionarlo a todos los componentes
import { AppProvider } from "./context/AppContext";

// Importa el componente Remaining.js para mostrar el presupuesto restante
import Remaining from "./components/Remaining";

// Importa el componente ExpenseTotal.js para mostrar el gasto total
import ExpenseTotal from "./components/ExpenseTotal";

// Importa el componente ExpenseList.js para mostrar la lista de gastos
import ExpenseList from "./components/ExpenseList";

// Importa el componente AllocationForm.js para permitir la asignación de presupuesto
import AllocationForm from "./components/AllocationForm";

// Define el componente principal de la aplicación
const App = () => {
  return (
    // Proporciona el contexto de la aplicación a todos los componentes
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Asignación de Presupuesto de la Empresa</h1>
        <div className="row mt-3">
          <div className="col-sm">
            {/* Renderiza el componente Budget */}
            <Budget />
          </div>
          <div className="col-sm">
            {/* Renderiza el componente Remaining */}
            <Remaining />
          </div>
          <div className="col-sm">
            {/* Renderiza el componente ExpenseTotal */}
            <ExpenseTotal />
          </div>
        </div>

        <h3 className="mt-3">Asignación</h3>
        <div className="row ">
          <div className="col-sm">
            {/* Renderiza el componente ExpenseList */}
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Cambiar asignación</h3>
        <div className="row mt-3">
          <div className="col-sm">
            {/* Renderiza el componente AllocationForm */}
            <AllocationForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

// Exporta el componente principal de la aplicación
export default App;
