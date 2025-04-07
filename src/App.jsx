import "./App.css";
import SidebarLayout from "@/components/layout/SidebarLayout";
import { Button } from "@/components/ui/button";
import EnergyTable from "./components/Energytable";
import EnergySection from "./components/EnergySection";

function App() {
  return (
    <SidebarLayout>
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Dashboard Energético</h1>
        <p className="text-muted-foreground">
          Visualiza los patrones de consumo por hora para optimizar procesos industriales.
        </p>
      </header>

      <div className="flex justify-end mb-4">
        <Button>Descargar informe</Button>
      </div>

      <section className="space-y-6">
        <EnergySection />
        <EnergyTable />
      </section>
    </SidebarLayout>
  );
}

export default App;
