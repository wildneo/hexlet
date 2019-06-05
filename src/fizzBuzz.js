/* eslint-disable no-console */

const fizzBuzz = (begin, end) => {
  // eslint-disable-next-line consistent-return
  const iter = (count) => {
    if (count <= end) {
      if (!(count % 3) && !(count % 5)) {
        console.log('FizzBuzz');
      } else if (!(count % 3)) {
        console.log('Fizz');
      } else if (!(count % 5)) {
        console.log('Buzz');
      } else {
        console.log(count);
      }
      return iter(count + 1);
    }
  };
  return iter(begin);
};

export default fizzBuzz;

fizzBuzz(10, 10);
