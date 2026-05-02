export function countDown(i: number): number | string{

if(i <= 0){

return "done";

} else {

console.log(i);
return countDown(i - 1);
};
};


export function theCallStack(name: string): string{

  console.log(`hello there ${name}, very nice to meet you`);

    function greet2(n: string): string{

    console.log(`getting ready to say goodbye to you ${name}`);

    }

    greet2(name);

      function bye(): string{
      console.log('bye bye');

      }
      bye();


}


export function factorial(n: number): number | string{

  if (n == 1){
  return 1;
  }else {
  return n * factorial(n - 1);

  }

}
