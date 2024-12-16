
// Отправка данных на почту
function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        text: document.getElementById("text").value
    };
    emailjs.send('service_******', 'template_******', params)
    .then(function (res){
        console.log(res)
    })
    }
