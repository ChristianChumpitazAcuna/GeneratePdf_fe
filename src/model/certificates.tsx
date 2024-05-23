export default class Certificado {
    dni: number
    name: string
    technicalCareer: string

    constructor(dni: number, name: string, technicalCareer: string) {
        this.dni = dni;
        this.name = name;
        this.technicalCareer = technicalCareer;
    }

    static fromJson(json: any): Certificado {
        return new Certificado(
            json.dni,
            json.name,
            json.technicalCareer
        );
    }

}