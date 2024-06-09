function myPromise() {
  new Promise((_, reject) =>
    setTimeout(
      () =>
        reject({
          error: 'The call is rejected with an error',
        }),
      1000
    )
  ).then((data) => console.log(data.data));
}

myPromise();

process.on('unhandledRejection', (reason, promise) => {
  console.log('reason is', reason);
  console.log('promise is', promise);
  // Application specific logging, throwing an error, or other logic here
});