const promedio = [4,5]
let count = 0;

function sumar(array){
for(let i = 0; i < promedio.length; i++){
    count = count + promedio[i];
}
return count;
};

console.log(sumar(promedio));