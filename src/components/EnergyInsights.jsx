import energyData from "@/data/energyData";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUpIcon, TrendingDownIcon, BarChart3Icon, ClockIcon } from "lucide-react";

const getTrend = (data) => {
  const lastThree = data.slice(-3);
  const values = lastThree.map((d) => d.consumption);
  if (values[2] > values[1] && values[1] > values[0]) return "↑ Subiendo";
  if (values[2] < values[1] && values[1] < values[0]) return "↓ Bajando";
  return "→ Estable";
};

const EnergyInsights = () => {
  const current = energyData.at(-1);
  const accumulated = energyData.reduce((acc, d) => acc + d.consumption, 0);
  const trend = getTrend(energyData);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Consumo actual */}
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Consumo actual</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">{current.hour}</CardTitle>
          <div className="absolute right-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <ClockIcon className="size-3" />
              {current.consumption} kWh
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="text-sm text-muted-foreground">Última hora registrada</CardFooter>
      </Card>

      {/* Tendencia */}
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Tendencia</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">{trend}</CardTitle>
          <div className="absolute right-4">
            <Badge
              variant="outline"
              className={`flex gap-1 rounded-lg text-xs ${
                trend.includes("Subiendo") ? "text-green-600" : trend.includes("Bajando") ? "text-red-600" : ""
              }`}
            >
              {trend.includes("Subiendo") && <TrendingUpIcon className="size-3" />}
              {trend.includes("Bajando") && <TrendingDownIcon className="size-3" />}
              {trend.includes("Estable") && <BarChart3Icon className="size-3" />}
              {trend.replace("→ ", "")}
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="text-sm text-muted-foreground">Basado en las últimas 3 horas</CardFooter>
      </Card>

      {/* Consumo acumulado */}
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Consumo acumulado</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {accumulated} kWh
          </CardTitle>
          <div className="absolute right-4">
            <Badge variant="secondary" className="flex gap-1 rounded-lg text-xs">
              <BarChart3Icon className="size-3" />
              Total día
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="text-sm text-muted-foreground">Desde las 00:00 hasta ahora</CardFooter>
      </Card>
    </div>
  );
};

export default EnergyInsights;
