let victoryAndDefeat = ranked (118, 6);
var victoryBalance;
var nivel;

function ranked(victory, defeat){
    victoryBalance = victory - defeat;
    if(victoryBalance < 10){
            nivel = "Ferro";
        }else if(victoryBalance>=11 && victoryBalance<=20){
            nivel = "Bronze";
        }else if(victoryBalance>=21 && victoryBalance<=50){
            nivel = "Prata";
        }else if(victoryBalance>=51 && victoryBalance<=80){
            nivel = "Ouro";
        }else if(victoryBalance>=81 && victoryBalance<=90){
            nivel = "Diamante";
        }else if(victoryBalance>=91 && victoryBalance<=100){
            nivel = "Lendário";
        }else{
            nivel = "Imortal";
        }
    console.log("O Herói tem de saldo de " + victoryBalance + " está no nível de " + nivel);
    return nivel;
}