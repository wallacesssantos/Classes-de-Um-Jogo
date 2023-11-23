class Heroi {
    // Construtor da classe
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método de ataque
    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }

        const mensagem = `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

// Exemplo de uso
// Criando um herói mago
const mago = new Heroi("Merlin", 100, "mago");
mago.atacar();

// Criando um herói guerreiro
const guerreiro = new Heroi("Aragorn", 30, "guerreiro");
guerreiro.atacar();

// Criando um herói monge
const monge = new Heroi("Bruce", 40, "monge");
monge.atacar();

// Criando um herói ninja
const ninja = new Heroi("Hanzo", 25, "ninja");
ninja.atacar();