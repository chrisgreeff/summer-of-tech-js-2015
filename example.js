var a = 'old value';

function changeTheValueOfA() {
  a = 'new value';

  return;

  function a() {}
}

console.log(a);
changeTheValueOfA();
console.log(a);
