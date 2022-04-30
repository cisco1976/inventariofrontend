export interface CreditsResponse {
    statusCode: number;
    detail: Detail;
    tokenId: string;
}

export interface Detail {
    idUser: string;
    correo: string;
    firstName: string;
    lastName: string;
    numberIdentification: string;
    vistas: Vista[];
    roles: Roles;
}

export interface Vista {
    name: string;
    route: string;
    icon: string;
}

export interface Roles {
    id: string;
    name: string;
    descripcion: string;
}

export class Login{
    user: string = '';
    pass: string = '';
}
