import express from 'express';

const router = express.Router();
// Here we initialize the router.
import { v4 as uuidv4 } from 'uuid';


import {createUser} from '../controllers/users.js';

let users =[
    {
        "firstName":"John",
        "lastName":"Doe",
        "age":28
    },
    {
        "firstName":"Brad",
        "lastName":"Traversy",
        "age":29
    }
];
router.get('/',(req,res) =>{
    console.log(users);
	res.send(users);
});

router.post('/',createUser);

router.get('/:id',(req,res) =>{
    // Using route parameters.
    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});

router.delete('/:id',(req,res) => {
	const {id} = req.params;
	users = users.filter( (user) => user.id !== id);
	res.send(`User with the id ${id} deleted.`);
});

router.patch('/:id',(req,res) =>{
	const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id ===id);
    if(firstName){
		user.firstName = firstName;
	}
	if(lastName){
		user.lastName = lastName;
	}
	if(age){
		user.age= age;
	}
	res.send(`User with the id ${id} has been updated`);
});

export default router;