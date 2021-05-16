function highLoadTask() {
  console.log("Heavyなタスクがスタート！");
  for (let i = 0; i < 2_000_000_000; i++) {
  }
  console.log("Heavyなタスクが終了しました！");
}

module.exports = {highLoadTask}
