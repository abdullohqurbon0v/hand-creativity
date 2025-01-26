import { backend } from "@/http/api";
import { AuthType } from "@/types";
import { makeAutoObservable } from "mobx";
import userStore from "./user-store";

class AuthStore {
     username: string = '';
     email: string = '';
     password: string = '';
     loading: boolean = false;
     error: string | null = null;

     constructor() {
          makeAutoObservable(this);
     }

     handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
          const { name, value } = e.target;
          (this as any)[name] = value;
          this.error = null
     }

     async signin() {
          this.loading = true;
          try {
               if (!this.email || !this.password) {
                    this.error = "Both email and password are required.";
                    this.loading = false;
                    return false;
               }
               const res = await backend.post('/login', {
                    email: this.email,
                    password: this.password,
               });
               localStorage.setItem('access_token', res.data.accessToken);
               localStorage.setItem('user-info', JSON.stringify(res.data.user));
               console.log(res);
               this.loading = false;
               this.error = null;
               return true;
          } catch (error) {
               this.error = error.response?.data?.message || "An error occurred during sign-in.";
               this.loading = false;
               return false;
          }
     }


     async signup() {
          this.loading = true;
          try {
               if (!this.username || !this.email || !this.password) {
                    this.error = "All fields are required.";
                    this.loading = false;
                    return false;
               }

               const res = await backend.post('/create-user', {
                    username: this.username,
                    email: this.email,
                    password: this.password
               });
               userStore.setUser(res.data.user)
               localStorage.setItem('access_token', res.data.accessToken);
               localStorage.setItem('user-info', JSON.stringify(res.data.user));
               console.log(res);
               this.loading = false;
               this.error = null;
               return true;
          } catch (error) {
               this.error = error.response?.data?.message || "An unexpected error occurred.";
               this.loading = false;
               return false;
          }
     }
}

const authstore = new AuthStore();
export default authstore;
