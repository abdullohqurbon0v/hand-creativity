import { StaticImageData } from "next/image";
export interface ChildProps {
     children: React.ReactNode
}
export interface IUser {
     id: number;
     username: string;
     email: string;
}


export type Product = {
     id: number;
     name: string;
     price: number;
     image: StaticImageData | string;
     user: string;
     title: string;
     body: string;
     rate: number;
     stock: number;
     size: string;
     dimensions: string;
     warranty: string;
     materials: string;
     category: string;
     images: string[];
     _id: string;
     createdAt: string;
     updatedAt: string;
     __v: number;
};



export interface ModalType {
     isOpen: boolean,
     onClose: () => void
}


export interface AuthType {
     username: string,
     email: string,
     password: string
}