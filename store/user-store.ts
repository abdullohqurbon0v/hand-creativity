import { IUser } from "@/types";
import { makeAutoObservable } from "mobx";

class UserStore {
     user: IUser | null = null;
     token: string | null = null;
     isAuthenticated: boolean = false;

     constructor() {
          makeAutoObservable(this);
     }

     setUser(user: IUser) {
          this.user = user;
          this.isAuthenticated = true;
     }

     logout() {
          this.user = null;
          this.token = null;
          this.isAuthenticated = false;
          localStorage.removeItem('access_token');
     }
}

const userStore = new UserStore();
export default userStore;
