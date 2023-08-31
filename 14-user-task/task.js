class Task {
  constructor(taskMessage) {
    this.taskMessage = taskMessage;
  }

  run() {
    console.log(this.taskMessage);
  }
}

export { Task };
