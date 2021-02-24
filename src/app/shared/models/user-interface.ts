export type Roles = 'SECRETARIA' | 'MEDICO' | 'EDITOR' | 'ADMIN' | 'PACIENTE';

export interface User {
    uid: string;
    email: string;
    displayName?: string;
    emailVerified: boolean;
    password?: string;
    photoURL?: string;
    role?: Roles;
}
