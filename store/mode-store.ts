import { makeAutoObservable } from "mobx";

class ModeStore {
     status: "light" | "dark" = "light";

     constructor() {
          makeAutoObservable(this);
     }

     changeMode(mode: "light" | "dark") {
          this.status = mode;
     }
}

const modeStore = new ModeStore();

export default modeStore;
