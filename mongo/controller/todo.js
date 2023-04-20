const Todo=require('../model/todo');
exports.getAllTodoList=async(req,res)=>
{
    try{
        const list=await Todo.find();
        return res.status(200).send(list)
    }
    catch (error)
    {
        return res.status(500).json(
            {
                msg:"Internet server error"
            }
        )
    }
}
exports .createTodo=async(req,res)=>
{
    try{
        const newTodo=await Todo.create(req.body);
        return res.status(201).json(
            {
                data:newTodo
            }
        )
        }
        catch(error){
            return res.status(500).json(
                {
                    msg:'Internet error'
                }
            )
        }
}
exports.getToByID=async(req,res)=>
{
    try{
        const todo=await Todo.findById(req.params.id);
        if(todo)
        {

        
        return res.status(200).json(
           {
                data:todo
            }
          
        )
        }
        else{
            return res.status(404).json(
                {
                     msg:"data not found "
                 }
            )
        }
    }
    catch(error){

    }
}
exports.deleteID=async(req,res)=>
{
    try{
        const todo=await Todo.findByIdAndDelete( {"_id" :req.params.id});
        req.params.body=req.body
        console.log(req.params.body)

        if(todo)
        {

        
        return res.status(200).json(
           {
                data:todo
            }
          
        )
        }
        else
        {
            return res.status(200).json(
                {
                     msg:"no data found"
                 } 
            )
        }
    }
    catch(error){
        return res.status(200).json(
            {
                 msg:"error"
             }
        )
    }
}
exports.updateId=async(req,res)=>
{
    try
    {
        const todo=await Todo.findById(req.params.id);
        console.log(todo);
        if(todo)
        {
            const update=await Todo.findByIdAndUpdate(req.params.id,req.body);
            // console.log("sussesfully")
            // console.log(todo)
            return res.status(200).send("done")
        }
        else
        {
            res.send("error")
            console.log("error")
        }
   
    }
    catch(error)
    {
        res.send(error)
    }
}
exports.filter1=async(req,res)=>
{
    try{
        const todo=await Todo.find();
        if(todo)
        {
            var er=todo.filter((r)=>
            
                (r.priority==req.params.priority)
                
            )
            res.send(er);
        }
        else
        {
            res.send("network")
        }        
    }
    catch
    {
        res.send("404")
    }
}