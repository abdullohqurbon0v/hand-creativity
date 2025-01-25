import { AuthType, IUser } from "@/types";
import { makeAutoObservable } from "mobx";
import { FormEvent } from "react";

class AuthStore {
     user: IUser | null = null
     token: string | null = null
     loading: boolean = false
     error: string | null = null


     constructor() {
          makeAutoObservable(this)
     }


     handleChangeInput(e: FormEvent<HTMLInputElement>) {
          const { name, value } = e.target
     }

     async signup(payload: AuthType) {
          this.loading = true
          try {
               const { username, email, password } = payload
               // API CALL

               this.loading = false
               this.error = null
          } catch (error) {
               console.error(error)
          }
     }
}


const authstore = new AuthStore()
export default authstore

