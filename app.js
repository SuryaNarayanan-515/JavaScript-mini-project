const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')

form.addEventListener('submit',(e)=>{
    
    if(!validateInput()){
        e.preventDefault();
    }
})
 
function validateInput(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordval = password.value.trim()
    const cpasswordVal = cpassword.value.trim()
    let success = true
    if(usernameVal===''){
        success = false
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        success = false
        setError(email,'Email is required')
    }
    else if(!ValidateEmail(emailVal)){
        success = false
        setError(email,'Email is invalid')
    }
    else{
        setSuccess(email)
    }

    if(passwordval===''){
        success = false
        setError(password,'Password is required')
    }
    else if(passwordval.length<8){
        success = false
        setError(password,'password must be atleast 6 character')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal===''){
        success = false
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordval){
        success = false
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }
    return success
}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = message;

    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element,message){
    
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = '';

    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}


function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
