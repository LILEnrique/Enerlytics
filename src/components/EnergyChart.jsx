import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

import { ChartContainer } from "@/components/ui/chart";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import energyData from "@/data/energyData";

const chartData = energyData.map((item) => ({
  hora: item.hour,
  consumo: item.consumption,
}));

const chartConfig = {
  consumo: {
    label: "Consumo horario (kWh)",
    color: "#2563eb", // azul primario
  },
};

const EnergyChart = () => {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Consumo energético por hora</CardTitle>
      </CardHeader>
      <CardContent className="">
        <ChartContainer config={chartConfig} className="w-full h-[450px]">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hora" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="consumo" fill="var(--color-consumo)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default EnergyChart;
