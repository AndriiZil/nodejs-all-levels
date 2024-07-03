const axios = require('axios');

const signal = AbortSignal.timeout(1500); // Abort operation after 1.5 sec

const fetch = async () => {
  try {
    const { data } = await axios.get('http://localhost:3000', { signal });

    return data;
  } catch (error) {
    console.log(axios.isCancel(error)); // true
    if (error.name === 'AbortError') {
      console.log('Operation timed out');
    } else {
      console.error(error); // error.code: 'ERR_CANCELED'
    }
  }
};

fetch().then(console.log);
