
import { Triangle, Square, Hexagon, Pentagon, Diamond } from 'lucide-react';

const OrigamiBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-[10%] left-[5%] text-fivsys-red/[0.01] transform -rotate-12">
        <Triangle className="w-48 h-48" />
      </div>
      <div className="absolute top-[30%] right-[10%] text-fivsys-red/[0.01] transform rotate-45">
        <Square className="w-64 h-64" />
      </div>
      <div className="absolute bottom-[20%] left-[15%] text-fivsys-red/[0.01] transform rotate-12">
        <Hexagon className="w-56 h-56" />
      </div>
      <div className="absolute top-[60%] right-[20%] text-fivsys-red/[0.01] transform -rotate-24">
        <Pentagon className="w-48 h-48" />
      </div>
      <div className="absolute top-[40%] left-[40%] text-fivsys-red/[0.01] transform rotate-90">
        <Diamond className="w-72 h-72" />
      </div>
    </div>
  );
};

export default OrigamiBackground;
