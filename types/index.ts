export interface ChildProps {
     children: React.ReactNode
}
export interface IUser {
     id: number;
     username: string;
     email: string;
}

export interface Product {
     id: number;
     name: string;
     price: string;
}

export interface ModalType {
     isOpen: boolean,
     onClose: () => void
}


export interface AuthType {
     username: string,
     email: string,
     password: string
}