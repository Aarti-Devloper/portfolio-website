const form = document.getElementById('contactform');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }   else{
        alert('Form submitted successfully!');
         form.reset();
    }   
});


