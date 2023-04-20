const express=require('express');
const bodyparser=require('body-parser');
const {getAllTodoList,createTodo,getToByID,deleteID,updateId,filter1} =require('./controller/todo')
const {connectDb}=require('./config/db')
const cors=require('cors')
connectDb();
const app=new express();
app.use(cors())
app.use(bodyparser.json())
app.get('/api/v2/todo',getAllTodoList);
app.post('/api/v2/todo',createTodo);
app.get('/api/v2/todo/:id',getToByID);
app.delete('/api/v2/todo/:id',deleteID);
app.put('/api/v2/todo/:id',updateId);
app.get('/api/v2/filter/:priority',filter1);

app.listen(3000,()=>
{
    console.log("server running")
})