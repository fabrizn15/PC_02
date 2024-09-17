let n1=0;
let n2 = 1;
let r;
let limite = parseInt(prompt("Ingrese hasta que número desea que llegue la sucesión"))

while(n1<=limite){
    r=n1+n2;
    console.log(n1);
    
    n1=n2;
    n2=r;
}