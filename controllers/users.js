export const createUser = (req,res) => {
	//console.log("Post reached.");
    const user = req.body;
    users.push({ ...user,id:uuidv4() });
    res.send(`User with the username ${user.firstName} is added.`);
};