const {Worker} = require('worker_threads')
const {highLoadTask} = require('./highLoadTask')

function main() {
  const worker1 = new Worker('./worker.js')
  const worker2 = new Worker('./worker2.js', {
    workerData: 'message from main.js!',
  })
  console.log("Start!!!");
  setTimeout(() => {
    highLoadTask()
    highLoadTask()
    highLoadTask()
    highLoadTask()
    highLoadTask()
    highLoadTask()
    highLoadTask()
    highLoadTask()
  }, 3000);
  console.log("Finish!!!");

}

// 実験したいこと
// マルチスレッドパターン
// pubsubブロックされるのか？
// 死活監視送信できるか？
main()
