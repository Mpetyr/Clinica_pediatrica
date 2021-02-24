import { User } from "src/app/shared/models/user-interface";

export class RoleValidator {

    isPaciente(user:User):boolean{
        return user.role == 'PACIENTE';
    }

    isMedico(user:User):boolean{
        return user.role == 'MEDICO';
    }

    isSecretaria(user:User):boolean{
        return user.role == 'SECRETARIA';
    }

    isAdmin(user:User):boolean{
        return user.role == 'ADMIN';
    }

    isEditor(user:User):boolean{
        return user.role == 'EDITOR';
    }
}