window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var fullHeight = document.body.scrollHeight;
    var footerOffset = footer.offsetTop;

    if (scrollPosition + windowHeight >= fullHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});
