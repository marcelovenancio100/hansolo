export class Contato {
    id: number;
    nome: string;
    telefone: string;
    celular: string;
    email: string;

    constructor(id: number, nome: string, telefone: string, celular: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.celular = celular;
        this.email = email;
    }
}