#!/usr/bin/node
const request = require('request');
request(process.argv[2], (error, response, body) => {
  if (!error) {
    const todos = JSON.parse(body);
    const finished = {};
    todos.forEach((todo) => {
      if (finished[todo.userId] === undefined && todo.completed)  {
      finished[todo.userId] = 1;
      } else if (todo.completed) {
      finished[todo.userId] += 1;
      }
    });
    console.log(finished);
  }
});

