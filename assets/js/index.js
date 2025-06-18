/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


$(document).ready(function () {
    var backToTopBtn = $('#backToTop');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            backToTopBtn.fadeIn();
        } else {
            backToTopBtn.fadeOut();
        }
    });

    backToTopBtn.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });
});


$(document).ready(function () {
    if (typeof emailjs !== "undefined") {
        emailjs.init("mK1QHpsRA30RNOb6I"); // Replace with your actual EmailJS public key
    } else {
        console.error("EmailJS is not loaded properly.");
    }

    $("#contact-form").on("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        emailjs.sendForm("service_jugdgsc", "template_uom0izn", this)
            .then(function () {
                alert("Email sent successfully!");
                $("#contact-form")[0].reset(); // Clear form after submission
            }, function (error) {
                alert("Failed to send email: " + error.text);
                console.error("EmailJS Error:", error);
            });
    });
});

// project section scroll
$(document).ready(function () {
  const scrollContainer = document.querySelector(".project-scroll-content");

  $("#leftArrow").click(function () {
    scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
  });

  $("#rightArrow").click(function () {
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
  });
});





