// function promiseAll(promises) {
//   return new Promise((resolve, reject) => {
//     if (promises.length === 0) return resolve([]);

//     const results = new Array(promises.length);
//     let resolved = 0;

//     promises.forEach((p, i) => {
//       Promise.resolve(p).then((val) => {
//         results[i] = val;
//         resolved++;
//         if (resolved === promises.length) resolve(results);
//       }).catch(reject);
//     });
//   });
// }

// function promiseAll(promises) {
//   return new Promise((resolve, reject) => {
//     if (promises.length === 0) resolve([]);

//     const results = new Array(promises.length);
//     let resolved = 0;
//     promises.forEach((p, i) => {
//       Promise.resolve(p).then((val) => {
//         results[i] = val;
//         resolved++;
//         if (resolved === promises.length) resolve(results);
//       }).catch(reject);
//     })
//   })
// }


function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) resolve([]);

    const results = new Array(promises.length);
    let resolved = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((val) => {
        results[i] = val;
        resolved++;
        if (resolved === promises.length) resolve(results);
      })
    }).catch(reject);
  })
}

promiseAll(Promise.resolve(1), Promise.resolve(2), Promise.resolve(3));