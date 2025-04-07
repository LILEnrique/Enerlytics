import EnergyChart from "./EnergyChart";
import SuggestedHours from "./SuggestedHours";
import EnergyInsights from "./EnergyInsights";
import EnergyStats from "./EnergyStats";

const EnergySection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Gráfico a la izquierda */}
      <div className="lg:w-2/3 w-full">
        <EnergyChart />
      </div>

      {/* Info relacionada a la derecha */}
      <div className="lg:w-1/2 w-full space-y-6">
        <EnergyInsights />
        <EnergyStats />
        <SuggestedHours />
      </div>
    </div>
  );
};

export default EnergySection;
