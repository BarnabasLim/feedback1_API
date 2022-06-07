import {
    db_addUser, 
    db_getUsers,
    db_getUser,
    db_deleteUser,
    db_updateUser,

} from '../api/firestore.js'


export const getUsers=async(req,res)=>{
    //1. Access req.body or req.params
    let users=[];
    //2. Interact with database
    await db_getUsers((ans)=>{users=ans;},()=>{});

     //3. Send res
    res.send(users);
}

export const getUser=async(req,res)=>{
    //1. Access req.body or req.params
    const {id}=req.params;

     //2. Interact with database
    let user={};
    await db_getUser(id,(ans)=>{user=ans},()=>{});

     //3. Send res
    res.send(user);
}
export const addUser=async(req, res)=>{
    //1. Access req.body or req.params
    const user=req.body;

    //2. Interact with database
    await db_addUser(user,()=>{},(e)=>{console.log(e)});

    //3. Send res
    res.send(`${user.firstName} added`);

}

export const deleteUser=async(req,res)=>{
    //1. Access req.body or req.params
    const {id}=req.params;
    console.log(id)

    //2. Interact with database
    await db_deleteUser(id, ()=>{},()=>{});

    //3. Send res
    res.send(user);
}

export const updateUser=async(req,res)=>{
    //1. Access req.body or req.params
    const {id}=req.params;
    const {firstName, lastName , age}=req.body;

    //2. Interact with database
    let userToUpd=new Object();
    userToUpd.id=id;
    console.log(userToUpd);
    if(firstName){
        userToUpd.firstName=firstName
    }
    if(lastName){
        userToUpd.lastName=lastName
    }
    if(age){
        userToUpd.age=age
    }
    await db_updateUser(userToUpd,()=>{},()=>{})

    //3. Send res
    res.send(`${id} updated`);
}