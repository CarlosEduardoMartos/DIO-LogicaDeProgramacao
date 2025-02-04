class hero {
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type; 
    }
    atacar(){
        let atack;

   switch(this.type) {
    case "guerreiro":
        atack = "espada";
        break;
    case "mago": 
        atack = "magia";
        break;
    case "monge":
        atack = "artes marciais";
        break;
    case "ninja":
        atack = "shuriken";
        break;
   }
   console.log (`O ${this.type} ${this.name} atacou usando ${atack}`);
  
    }
}

let opcao1 = new hero("Carlos", 19, "mago");
let opcao2 = new hero("Eduardo", 20, "guerreiro");
let opcao3 = new hero("Carlos", 19, "monge");
let opcao4 = new hero("Carlos", 19, "ninja");

opcao1.atacar();
opcao2.atacar();
opcao3.atacar();
opcao4.atacar();