interface PersonaConfig {
    nombre?: string;
    edad?: number;
    NSS?: string;
    sexo?: string;
    peso?: number;
    altura?: number;
}

export class Persona {
    private nombre: string;
    private edad: number;
    private NSS: string;
    private sexo: string;
    private peso: number;
    private altura: number;

    constructor(config: PersonaConfig){
        this.NSS = this.generaNSS();
        this.nombre = '';
        this.edad = 0;
        this.sexo = 'H';
        this.peso = 0;
        this.altura = 0;
        if(config.nombre && config.edad && config.sexo){
            this.nombre = config.nombre;
            this.edad = config.edad;
            this.sexo = config.sexo;
        }
        if(config.peso && config.altura){
            this.peso = config.peso;
            this.altura = config.altura;
        }
    }

    calcularIMC(){
        let imc = this.peso / (this.altura * this.altura);
        let faltaDePeso = -1;
        let pesoNormal = 0;
        let sobrePeso = 1;
        if(this.sexo == 'M'){
            if(imc < 19){
                return faltaDePeso;
            } else {
                if(imc <= 24){
                    return pesoNormal;
                } else {
                    return sobrePeso;
                }
            }
        } else {
            if(imc < 20){
                return faltaDePeso;
            } else {
                if(imc <= 25){
                    return pesoNormal;
                } else {
                    return sobrePeso;
                }
            }
        }
    }

    esMayorDeEdad(): boolean {
        return this.edad >= 18 ? true : false;
    }

    comprobarSexo(sexo: string): boolean {
        return this.sexo == sexo ? true : false;
    }

    toString(): PersonaConfig {
        return {
            nombre: this.nombre,
            edad: this.edad,
            NSS: this.NSS,
            sexo: this.sexo,
            peso: this.peso,
            altura: this.altura
        }
    }

    generaNSS(): string {
        var nss = "";
        var caracteres = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 8; i++)
            nss += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        return nss;
    }

    setNombre(nombre: string){
        this.nombre = nombre;
    }

    setEdad(edad: number){
        this.edad = edad;
    }

    setSexo(sexo: string){
        this.sexo = sexo;
    }

    setPeso(peso: number){
        this.peso = peso;
    }

    setAltura(altura: number){
        this.altura = altura;
    }

}
