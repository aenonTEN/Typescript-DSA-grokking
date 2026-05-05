import {countDown, theCallStack, factorial} from './recursion';

console.log('countDown: ');
console.log(countDown(10));
console.log(); //visual separator for console clarity

console.log('Callstack: ');
theCallStack('Ari');
console.log(); //--visual separator for console clarity

console.log('factorial: ');
console.log(factorial(5));

