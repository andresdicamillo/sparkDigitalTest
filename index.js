const express = require('express');
const port = 9100;
const app = express();

const users = [{
    id: 1,
    firstName: "Emily",
    lastName: "Riccardi",
    phone: "+54 9 11 3333 4444"
  },
  {
    id: 2,
    firstName: "Renat",
    lastName: "Budel",
    phone: "+54 9 11 4444 5555"
  },
  {
    id: 3,
    firstName: "August",
    lastName: "Chiambret",
    phone: "+54 9 11 5555 6666"
  }
];

app.get('/users', function(req, res){
  try {
    res.status(200).json(users);
  } catch(e) {
    console.error(e)
    res.status(500)
  }
});

app.post('/user/add', (req, res) => {
  try {
    const user = JSON.parse(req.body);
    users.push(user);
    res.status(201);
  } catch(e) {
    console.error(e)
    res.status(500)
  }
});

app.put('/user/:id', (req, res) => {
  try {
    const updateUser = JSON.parse(req.body); // assume body contains user to update
    const userId = parseInt(req.params.id)
    let indexToDelete = 0
    users.forEach((user, index) => {
      if (user.id === userId) {
        indexToDelete = index
      }
    });
    if (indexToDelete !== 0) {
      users.splice(indexToDelete, 1, updateUser);
    }
    res.status(204).send(users[indexToDelete])
  } catch(e) {
    console.error(e)
    res.status(500)
  }
});

app.delete('/user/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const indexToDelete = 0
    users.forEach((user, index) => {
      if (user.id === userId) {
        indexToDelete = index
      }
    });
    if (indexToDelete !== 0) {
      users.splice(indexToDelete, 1);
    }
    res.status(200).send();
  } catch(e) {
    console.error(e)
    res.status(404).send();
  }
});

console.log(`Server running on port: ${port}`)
app.listen(port);