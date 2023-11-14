import { User } from "firebase/auth";

export interface AutocompleteArrayItem {
    text: string;
    rating: number;
}

export interface SearchProps {
    searchAutocomplete: AutocompleteArrayItem[];
}

export interface HeaderProps {
    searchAutocomplete: AutocompleteArrayItem[];
    handleSignOut:()=>void;
    user: User | null
}
