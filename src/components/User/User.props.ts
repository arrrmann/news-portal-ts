import { User } from "firebase/auth";

export interface UserProps {
    handleSignOut: () => void;
    user: User | null
}