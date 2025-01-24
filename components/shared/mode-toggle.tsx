import { observer } from "mobx-react-lite";
import modeStore from "@/store/mode-store";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";

const ModeToggle = observer(() => {
     return (
          <div className="text-white">
               {modeStore.status === "dark" ? (
                    <FiSun
                         size={22}
                         className="cursor-pointer"
                         onClick={() => modeStore.changeMode("light")}
                    />
               ) : (
                    <FaRegMoon
                         size={22}
                         className="cursor-pointer"
                         onClick={() => modeStore.changeMode("dark")}
                    />
               )}
          </div>
     );
});

export default ModeToggle;
