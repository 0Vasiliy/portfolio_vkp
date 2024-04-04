
// Отправка данных на почту
function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        text: document.getElementById("text").value
    };
    emailjs.send('service_9n8tqjp', 'template_k8ma24n', params)
    .then(function (res){
        console.log(res)
    })
    }
