let formData ={
email: "" ,
message: "" 
};


const emailInput = document.getElementById('emailInput');
const messageInput = document.getElementById('messageInput');
const form = document.querySelector('.feedback-form')

function saveFormData(){
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

function loadFormData(){
    const storedData = localStorage.getItem('feedback-form-state');
    if (storedData){
        formData = JSON.parse(storedData);
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
}

form.addEventListener('submit', function(event) {
event.preventDefault();
if (formData.email.trim() === '' || formData.message.trim() === ''){
    alert ('Fill please all fields');
} else{
    console.log(formData); 
    localStorage.removeItem('feedback-form-state')
formData = {email: "" , message: ""}
emailInput.value = '';
messageInput.value = '';

}
});


