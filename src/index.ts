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





//decorators
//class decorator
function apiVersion(version: string) {
    return (target: any) => {
      Object.assign(target.prototype, { __version: version, __name: "felipe" });
    };
  }
  
  //attribute decorator
  function minLength(length: number) {
    return (target: any, key: string) => {
      let _value = target[key];
  
      const getter = () => "[play]" + _value;
      const setter = (value: string) => {
        if (value.length < length) {
          throw new Error(`Tamanho menor do que ${length}`);
        } else {
          _value = value;
        }
      };
  
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
      });
    };
  }
  
  class Api {
    @minLength(10)
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  }
  
  const api = new Api("usaadasdaaaaa");
  console.log(api.name);