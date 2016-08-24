$(function() {
    $(document).ready(function() {
        $('#home').click(function(event) {
            window.location.href = "http://localhost:8000";
        });
        $('#bio').click(function(event) {
            window.location.href = "http://localhost:8000/bio.html";
        });
        $('#projects').click(function(event) {
            window.location.href = "http://localhost:8000/projects.html";
        });
        $('#resume').click(function(event) {
            window.location.href = "http://localhost:8000/resume.html";
        });
        $('#contact').click(function(event) {
            window.location.href = "http://localhost:8000/contact.html";
        });
    });
});