import { IUser } from "@/types";
import { makeAutoObservable } from "mobx";


class AuthStore {
     user: IUser | null = null;
     token: string | null = null
     isAuthenticated: boolean = false;

     constructor() {
          makeAutoObservable(this);
     }
     login(user: IUser, token: string) {
          this.user = user;
          this.token = token;
          this.isAuthenticated = true;
          localStorage.setItem("authToken", token);
          localStorage.setItem("user", JSON.stringify(user));
     }

     logout() {
          this.user = null;
          this.token = null;
          this.isAuthenticated = false;

          localStorage.removeItem("authToken");
          localStorage.removeItem("user");
     }
}

const authStore = new AuthStore();
export default authStore;
