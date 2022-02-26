// for storing data in localstorage...
function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');

   
    if(name.value.length == 0){
        document.getElementById('for_blank').style.display="block";
        

    }else if(pw.value.length == 0){
        document.getElementById('for_blank_pass').innerHTML="Please Enter a password";
        

    }else{
        // inserting user data into array 
        let user_records=new Array();
        // fetch data from the localstorage
        user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
        // it will check for the duplicacy
        if(user_records.some((v)=>{return v.name==name.value}))
        {
        alert("duplicate data user another username");
        }
        else
        {
        user_records.push({
        "name":name.value,
        "pw":pw.value
        })
        alert("Registration successfull");
        localStorage.setItem("users",JSON.stringify(user_records));
        }
    }
}

// checking for regression expression...
function regression_checker()
{    
    
    var username=document.getElementById('name').value;
    console.log(username);
    var reg_for_username= /^[a-z0-9_.]+$/ ;
     if(reg_for_username.test(username))
     {
         document.getElementById('for_reg').style.display="none";
     }
     else
     {
            document.getElementById('for_reg').style.display="block";
         document.getElementById('for_reg').style.backgroundColor="red";
         document.getElementById('for_blank').style.display="none";
            
     }

}
// checking for password condition...
function password_checker()
{
    var pw=document.getElementById('pw').value;
    var span=document.getElementById('for_blank_pass');

    if(!pw.match(/[0-9]/))
    {
        span.innerHTML="Password contain Number";
    }
    if(!pw.match(/[a-z]/))
    {
        span.innerHTML='Password msut container Lowercase';
    }
     if(!pw.match(/[A-Z]/))
    {
        span.innerHTML='Password msut container Uppercase';
    }
    else{
        span.innerHTML="";
    }
}
