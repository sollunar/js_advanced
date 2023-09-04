(function () {
  'use strict';

  class User {
    constructor(task) {
      this.task = task;
    }
    do() {
      this.task.run();
    }
  }

  class Task {
    constructor(taskMessage) {
      this.taskMessage = taskMessage;
    }

    run() {
      console.log(this.taskMessage);
    }
  }

  const task = new Task("Почистить кеш");

  const user = new User(task);

  user.do();

})();
