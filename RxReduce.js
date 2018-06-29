const values = [2, 4, 6, 8];

//Normal array reduce
const sumValue = values.map(i => i * 2).reduce((acc, curr) => acc + curr, 0);
console.log(sumValue);

//if the values comes from an external source, such as APIs -- Promises
const exSumValye = getData()
  .then(data => data.map(i => i * 2).reduce((acc, curr) => acc + curr, 0))
  .then(console.log);

//if the values comes from a websocket -- Streams / Observables

let websocket = new Websocket();
const websocketStream = Observable.create(observer => {
  websocket.onMessage = msg => observer.onNext(msg);
  websocket.onClose = () => observer.complete();

  return () => websocket.close();
});

const streamSumValue = websocketStream
  .map(i => i * 2)
  .scan((acc, curr) => acc + curr, 0)
  .subscribe(console.log);
