export interface ChildProps {
     children: React.ReactNode
}
export interface IUser {
     id: number;
     name: string;
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