'use strict';

const getData = () => {
  fetch('https://catfact.ninja/fact')
    .then((response) => {
      console.log('response.body =', response.body);
      // response.body = ReadableStream { locked: false, state: 'readable', supportsBYOB: false }
      return response.body;
    })
    .then((responseBody) => {
      const reader = responseBody.getReader();
      console.log('reader =', reader);
      // reader = ReadableStreamDefaultReader {
      //   stream: ReadableStream { locked: true, state: 'readable', supportsBYOB: false },
      //   readRequests: 0,
      //   close: Promise { <pending> }
      // }

      return new ReadableStream({
        start(controller) {
          console.log('controller =', controller);
          // controller = ReadableStreamDefaultController {}

          /**
           * Push handles each data chunk
           */
          function push() {
            /**
             * @param {boolean} done - Whether the stream is done
             * @param {Uint8Array} done - The stream state
             */
            reader.read().then(({ done, value }) => {
              // when there is no more data to read
              if (done) {
                console.log('done =', done);
                // done = true
                controller.close();
                return;
              }

              // get the data and put it on queue
              controller.enqueue(value);

              // show the done state and the chunks value
              console.log(done, value);
              // false Uint8Array(124) [
              //   123,  34, 102,  97,  99, 116,  34,  58,  34,  84,  97,  98,
              //    98, 121,  32,  99,  97, 116, 115,  32,  97, 114, 101,  32,
              //   116, 104, 111, 117, 103, 104, 116,  32, 116, 111,  32, 103,
              //   101, 116,  32, 116, 104, 101, 105, 114,  32, 110,  97, 109,
              //   101,  32, 102, 114, 111, 109,  32,  65, 116, 116,  97,  98,
              //    44,  32,  97,  32, 100, 105, 115, 116, 114, 105,  99, 116,
              //    32, 105, 110,  32,  66,  97, 103, 104, 100,  97, 100,  44,
              //    32, 110, 111, 119,  32, 116, 104, 101,  32,  99,  97, 112,
              //   105, 116,  97, 108,
              //   ... 24 more items
              // ]

              // continue getting data
              push();
            });
          }

          // start getting data
          push();
        },
      });
    })
    .then((stream) => {
      console.log('stream =', stream);
      // stream = ReadableStream { locked: false, state: 'readable', supportsBYOB: false }

      // create a Response with the stream content
      return new Response(stream, {
        headers: { 'Content-Type': 'text/html' },
      }).text();
    })
    .then((result) => {
      console.log('result =', result);
      // result = {"fact":"Tabby cats are thought to get their name from Attab,
      // a district in Baghdad, now the capital of Iraq.","length":100}
    });
};

getData();
