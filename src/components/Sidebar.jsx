// components/sidebar.jsx
import { Home, FileText, BarChart, Settings } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home },
  { label: "Reportes", icon: FileText },
  { label: "Análisis", icon: BarChart },
  { label: "Configuración", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-background p-6 hidden md:block">
      <h2 className="text-3xl font-extrabold mb-6">Enerlytics</h2>
      <nav className="space-y-2">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-md text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </div>
        ))}
      </nav>
    </aside>
  );
}
