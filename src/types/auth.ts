export interface User {
    id: string
    name: string
    email: string
    photoURL: string
}

export interface AuthContextType {
    user: User | null
    loading: boolean
    login: (userData: User) => void
    logout: () => Promise<void>
    loginWithGoogle: () => Promise<User>
}
