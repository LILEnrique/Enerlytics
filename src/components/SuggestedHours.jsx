import energyData from "@/data/energyData";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BoltIcon } from "lucide-react";

const SuggestedHours = () => {
  const sorted = [...energyData].sort((a, b) => a.consumption - b.consumption);
  const top3 = sorted.slice(0, 3);

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Ventanas energéticas óptimas</CardTitle>
        <CardDescription>
          Recomendaciones para agendar tareas de alto consumo durante horas de menor carga energética.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-3">
        {top3.map((entry, index) => (
          <div key={index} className="border p-4 rounded-xl bg-muted flex flex-col gap-1 items-start">
            <span className="text-sm text-muted-foreground">Hora #{index + 1}</span>
            <span className="text-xl font-bold">{entry.hour}</span>
            <span className="text-sm flex items-center gap-1 text-muted-foreground">
              <BoltIcon className="w-4 h-4" /> {entry.consumption} kWh
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SuggestedHours;
