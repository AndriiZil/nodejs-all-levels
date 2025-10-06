'use strict';

async function callExampleAP() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log(await response.json());
  } catch (err) {
    console.log(err);
  }
}


callExampleAP().then(console.log);
