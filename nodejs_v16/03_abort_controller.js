const controller = new AbortController();

const signal = controller.signal;

function fetchData() {
  fetch('url', { signal })
    .then(console.log)
    .catch((err) => console.error('request cancelled'));
}

fetchData();
