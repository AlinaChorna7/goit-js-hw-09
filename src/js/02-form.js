let formData = {
    email: "",
    message: ""
}

const emailInput = document.getElementById('emailInput');
const messageInput = document.getElementById('messageInput');
const form = document.querySelector('.feedback-form');

function saveFormData(){
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));

}

function loadFormData(){
    const storedData = localStorage.getItem('feedback-form-state');
    if(storedData){
        formData = JSON.parse('storedData');
        emailInput = formData.email;
        messageInput = formData.message;

    }
}

window.addEventListener('load', loadFormData);

form.addEventListener('input', function(event){
    const { name , value } = event.target;
    formData[name]= value.trim();
    saveFormData();
})

form.addEventListener('submit', function(event){
event.preventDefault();
const emailValue = formData.email.trim();
const messageValue = formData.message.trim();

if(!emailValue || !messageValue){
    return alert('Fill please all fields');
}

console.log(formData);
localStorage.removeItem('feedback-form-state');
formData = { email: "", message: "" };
      emailInput.value = '';
      messageInput.value = '';
});