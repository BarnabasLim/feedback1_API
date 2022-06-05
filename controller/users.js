let users=[{
    firstName:'John',
    lastName:'Doe',
    age:15,
    id:"1"
    },
    {
    firstName:'Jane',
    lastName:'Foster',
    age:20,
    id:"2",
    },
    ]

export const getUsers=(req,res)=>{
    res.send(users);
}

export const getUser=(req,res)=>{
    const {id}=req.params;

    const user=users.filter((user)=>user.id===id);

    res.send(user);
}
export const addUser=(req, res)=>{
    //1. Access req.body or req.params
    const user=req.body;
    //2. Interact with database
    users.push(user);
    //3. Send res
    res.send(`${user.firstName} added`);

}

export const deleteUser=(req,res)=>{
    //1. Access req.body or req.params
    const {id}=req.params;
    console.log(id)
    //2. Interact with database
    users=users.filter((user)=>( user.id!==id));
    //3. Send res
    res.send(users);
}

export const updateUser=(req,res)=>{
    //1. Access req.body or req.params
    const {id}=req.params;
    const {firstName, lastName , age}=req.body;

    //2. Interact with database
    const userToUpd=users.find((user)=>user.id==id)
    if(firstName){
        userToUpd.firstName=firstName
    }
    if(lastName){
        userToUpd.lastName=lastName
    }
    if(age){
        userToUpd.age=age
    }
    //3. Send res
    res.send(`${id} updated`);
}