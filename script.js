
window.onload=function(){
const addbtn= document.getElementById('addtodo');
var clearBtn= document.getElementById('cleartodo');
addbtn.addEventListener('click', addTodoHandler);
const searchbtn= document.getElementById('searchtodo');
if(searchbtn)
searchbtn.addEventListener('click', searchHandler);

clearBtn.addEventListener('click',clearTodo);
}
var todoList=[];

const renderTodo=(searchitem='')=>
{ 
    todoList= todoList.filter(todo=> todo.closed == false);
 
    const todoUl = document.getElementById('todolist');
    var clearBtn= document.getElementById('cleartodo');
    if(todoList.length == 0)
    {
    todoUl.style.display="none";
    clearBtn.style.display="none";
    }
    
    
    else
    {
        const searchList= !searchitem ? todoList : todoList.filter(todo => todo.info.todoitem.includes(searchitem));
      
        clearBtn.style.display="block";
        
        todoUl.style.display="block";
        todoUl.innerHTML='';
        searchList.forEach(todo =>{
            const todoLi=document.createElement('li');
            todoLi.textContent=todo.info.todoitem;
    
            const closeButton=document.createElement('button');
            closeButton.innerHTML="Remove Item";
            closeButton.className="close"+todo.id;
           
            todoLi.append(closeButton);
            todoUl.append(todoLi);

            closeButton.addEventListener('click',function(event){
                event.target.parentElement.style.display="none";
                todo.closed=true;
                renderTodo();
                
               
               
               
            });
          
        
        })
    }

}

const searchHandler=()=>{
    const searchitem = document.getElementById('searchform').value;
        renderTodo(searchitem);
    

}
const addTodoHandler=()=>{
    const todoitem = document.getElementById('addform').value;
    if(todoitem.trim()=== null)
    return;
    else
    {
        
        
        const newTodo=
        {
            info:{
            todoitem
            },
            id:parseInt(Math.random() *100),
            closed: false
        }
        todoList.push(newTodo);
        renderTodo();
        return;
    }

}

const clearTodo=()=>
{
    todoList.splice(0);
    renderTodo();
}

