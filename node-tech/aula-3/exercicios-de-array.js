console.log("Exercicíos de Array");

const preencherArray = (length) => {
  return new Array(10, 23, 47, 6, 8);
};

console.log(preencherArray(5));
console.log(preencherArray(10, 23, 47, 6, 8));

const parOuImpar = (tipo) => {
  let array = preencherArray(10, 23, 47, 6, 8);
  console.log(array);
  /*
  let A = [];
  for (let i = 0; i < array.length; i++) {
    if (tipo == "par") {
      if (array[i] % 2 == 0) {
        A.push(array[i]);
      }
    } else {
      if (array[i] % 2 != 0) {
        A.push(array[i]);
      }
    }
  }
  return A;
  */
};

console.log(parOuImpar("par"));
