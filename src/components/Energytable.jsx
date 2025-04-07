import energyData from "@/data/energyData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const getStatus = (value) => {
  if (value <= 20) return { label: "Bajo", color: "text-blue-500" };
  if (value <= 40) return { label: "Medio", color: "text-yellow-500" };
  return { label: "Alto", color: "text-red-500" };
};

const EnergyTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Detalle horario</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="border-b">
            <tr>
              <th className="py-2 pr-4">Hora</th>
              <th className="py-2 pr-4">Consumo (kWh)</th>
              <th className="py-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            {energyData.map((item, idx) => {
              const status = getStatus(item.consumption);
              return (
                <tr key={idx} className="border-b hover:bg-muted/40">
                  <td className="py-2 pr-4">{item.hour}</td>
                  <td className="py-2 pr-4">{item.consumption}</td>
                  <td className={`py-2 font-medium ${status.color}`}>{status.label}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default EnergyTable;
