document.getElementById('queryType').addEventListener('change', function() {
    let projectOptions = document.getElementById('projectOptions');
    if (this.value === 'project') {
        projectOptions.style.display = 'block';
    } else {
        projectOptions.style.display = 'none';
    }
});


const button = document.getElementById('scroll-top');

button.addEventListener('click', function() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
});