// components/layout/SidebarLayout.jsx
import { Sidebar } from "@/components/sidebar";

export default function SidebarLayout({ children }) {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
