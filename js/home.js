const url="https://node-crud-api-0n4d.onrender.com";
let usersblock=document.getElementById("users");

// to read all user data

async function readUsers(){
    await fetch(`${url}/api/user`,{
        method:"GET",
        headers:{
            "content-type":"application/json"
        }
    }
    ).then(out=>out.json())
    .then(res=>{
        console.log(`output =`,res)
        printUsers(res.users)
    })
    .catch(err=>{
        console.error(err?.message)
    })
}

readUsers();

//to print the user data

function printUsers(data){
    data.forEach(item => {
        usersblock.innerHTML+= `<div class="card">
        
        <div class="card-header">
        <h5>${item.name}</h5>
        </div>

        <div class="card-body">
        <p><strong>Email:</strong>
        <span>${item.email} </span></p>
        <p><strong>Mobile:</strong>
        <span>${item.mobile} </span></p>
        </div>
        <div class="card-footer">
        <a href="update.html?userId=${item._id}" class="btn info">Edit</a>
        <button class="btn danger">Delete</button>
        </div>
        </div>` 
    });
}