import express from "express";
import bodyParser from "body-parser";
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;
app.use(bodyParser.json());

// After the app.user body parser we can user the routes.
app.use('/users',usersRoutes);

app.get('/',(req,res) =>{
	console.log('[TEST]');
	res.send("Hello from Home Page.");
});

app.listen(PORT,() =>console.log("Server running."));