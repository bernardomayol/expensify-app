const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('This is my resolve data');
    reject('Something went wrong!');
  }, 3000);
});

console.log('Before');

promise
  .then((data) => {
    console.log('1', data);
  }, (error) => {
    console.log(error);
  });

console.log('After');
