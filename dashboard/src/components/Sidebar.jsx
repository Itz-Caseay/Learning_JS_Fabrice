import { useState } from "react";
import { 
  LayoutDashboard, 
  Palette, 
  Type, 
  Square, 
  SquareDot, 
  BarChart2, 
  Bell, 
  Puzzle, 
  FileText, 
  Menu 
} from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`h-screen bg-gray-900 text-white p-4 transition-all duration-300 ${open ? "w-64" : "w-20"} flex flex-col`}>
      {/* Logo / Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className={`text-xl font-bold ${!open && "hidden"}`}>COREUI REACT.JS</h1>
        <Menu className="cursor-pointer" onClick={() => setOpen(!open)} />
      </div>

      {/* Nav Items */}
      <nav className="flex-1 space-y-2">
        <SidebarItem icon={<LayoutDashboard />} label="Dashboard" open={open} active />
        
        <p className={`text-xs text-gray-400 mt-6 mb-2 uppercase ${!open && "hidden"}`}>Theme</p>
        <SidebarItem icon={<Palette />} label="Colors" open={open} />
        <SidebarItem icon={<Type />} label="Typography" open={open} />

        <p className={`text-xs text-gray-400 mt-6 mb-2 uppercase ${!open && "hidden"}`}>Components</p>
        <SidebarItem icon={<Square />} label="Base" open={open} />
        <SidebarItem icon={<SquareDot />} label="Buttons" open={open} />
        <SidebarItem icon={<BarChart2 />} label="Charts" open={open} />
        <SidebarItem icon={<Puzzle />} label="Forms" open={open} />
        <SidebarItem icon={<Bell />} label="Notifications" open={open} />
        <SidebarItem icon={<Puzzle />} label="Widgets" open={open} badge="NEW" />

        <p className={`text-xs text-gray-400 mt-6 mb-2 uppercase ${!open && "hidden"}`}>Extras</p>
        <SidebarItem icon={<FileText />} label="Pages" open={open} />
        <SidebarItem icon={<FileText />} label="Docs" open={open} />
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, label, open, active, badge }) => {
  return (
    <div
      className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors ${
        active ? "bg-gray-800" : ""
      }`}
    >
      <span className="text-xl">{icon}</span>
      {open && <span className="flex-1">{label}</span>}
      {badge && open && (
        <span className="text-xs bg-blue-600 px-2 py-0.5 rounded-full">{badge}</span>
      )}
    </div>
  );
};

export default Sidebar;
