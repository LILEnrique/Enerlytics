import energyData from "@/data/energyData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDownIcon, TrendingUpIcon, ClockIcon, TimerIcon } from "lucide-react";

const getAverage = (data) => (data.reduce((acc, item) => acc + item.consumption, 0) / data.length).toFixed(2);

const getMax = (data) => data.reduce((prev, curr) => (curr.consumption > prev.consumption ? curr : prev));

const getMin = (data) => data.reduce((prev, curr) => (curr.consumption < prev.consumption ? curr : prev));

const EnergyStats = () => {
  const avg = getAverage(energyData);
  const max = getMax(energyData);
  const min = getMin(energyData);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Promedio Diario */}
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Promedio Diario</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">{avg} kWh</CardTitle>
          <div className="absolute right-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              +12.5%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="flex gap-2 font-medium">
            Tendencia positiva <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">En comparación al mes anterior</div>
        </CardFooter>
      </Card>

      {/* Hora de Mayor Consumo */}
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Hora de Mayor Consumo</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">{max.hour}</CardTitle>
          <div className="absolute right-4">
            <Badge variant="secondary" className="flex gap-1 rounded-lg text-xs">
              <ClockIcon className="size-3" />
              {max.consumption} kWh
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="flex gap-2 font-medium">Pico de uso energético</div>
          <div className="text-muted-foreground">Hora de mayor demanda del día</div>
        </CardFooter>
      </Card>

      {/* Hora de Menor Consumo */}
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Hora de Menor Consumo</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">{min.hour}</CardTitle>
          <div className="absolute right-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TimerIcon className="size-3" />
              {min.consumption} kWh
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="flex gap-2 font-medium">Bajo consumo energético</div>
          <div className="text-muted-foreground">Ideal para operaciones no críticas</div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EnergyStats;
