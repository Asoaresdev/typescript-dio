type heroi = {
    name:string,
    vulgo:string
}

// function printObj(pessoa:heroi){
//     console.log(pessoa); 
// }
function testar2 (pessoa:heroi){
    console.log(pessoa);
    
}

testar2({
    name :"teste",
    vulgo: "testando"
})

// Tuplas - tem que respeitar a ordem
let boleto :[string, number, number] = [ "teste", 1, 2]
// array multiple type 
let boleto2:(string | number)[] = [2,2]
let boleto3:(string | number)[] = ["teste",2]
let boleto4:(string | number)[] = ["teste", "teste"]




async function getName(id:number): Promise <string | number> {
    return "teste"
}



// Date

let aniversario:Date = new Date("2023-08-25 16:07")
console.log(aniversario);
console.log(aniversario.toString());


