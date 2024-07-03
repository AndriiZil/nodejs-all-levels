function promiseReject(delay) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject({
        error: `Error from promise about ${delay} delay`,
      });
    }, delay);
  });
}

function promiseSuccess(delay) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve({
        result: `Success from promise about ${delay} delay`,
      });
    }, delay);
  });
}

async function getData() {
  try {
    const result1 = await Promise.any([promiseReject(100), promiseSuccess(500)]);
    const result2 = await Promise.any([promiseReject(100), promiseSuccess(500)]);
    const result3 = await Promise.any([promiseReject(100), promiseSuccess(500)]);

    console.log('result1', result1);
    console.log('result2', result2);
    console.log('result3', result3);
  } catch (err) {
    console.log(err);
  }
}

getData().catch(console.error);
