(function(){
    emailjs.init("user_xZJrbB8rdAKCLX48G5s7O");
})();

window.onload = function() {
    var form = document.getElementById("contact-form");

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;

        emailjs
            .sendForm('service_AYH9601', 'template_7goqlpb', this)
            .then(
                function(response) {
                    console.log('메일 발송', response.status, response.text); 
                    alert("메일이 전송되었습니다.");   
                    form.reset();   
                }, 
                function(error) {
                    console.log('메일 발송 실패', error);
                    alert("메일 발송에 실패했습니다.");
                }
            );
    });   
}