document.getElementById('queryType').addEventListener('change', function() {
    let projectOptions = document.getElementById('projectOptions');
    if (this.value === 'project') {
        projectOptions.style.display = 'block';
    } else {
        projectOptions.style.display = 'none';
    }
});


document.getElementById('queryType').addEventListener('change', function() {
    let mediaOptions = document.getElementById('mediaOptions');
    if (this.value === 'media') {
        mediaOptions.style.display = 'block';
    } else {
        mediaOptions.style.display = 'none';
    }
});


document.getElementById('queryType').addEventListener('change', function() {
    let learningOptions = document.getElementById('learningOptions');
    if (this.value === 'learning') {
        learningOptions.style.display = 'block';
    } else {
        learningOptions.style.display = 'none';
    }
});


const button = document.getElementById('scroll-top');

button.addEventListener('click', () => {
    console.log('btn-clicked');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    const headerScroll = document.getElementById('header-id');
    if (window.scrollY > 100) {
        headerScroll.style.backgroundColor = 'white';
    } else {
        headerScroll.style.backgroundColor = 'transparent';
    }
});

let hamBtn = document.getElementById('ham-button');
let closeBtn = document.getElementById('close-button');
let resNav = document.getElementById('resp-nav-bar');
let textBN = document.getElementById('text-below-nav');

hamBtn.addEventListener('click', () => {
    console.log('ham btn clicked');
    resNav.style.display = "block";
    closeBtn.style.display = "block";
    hamBtn.style.display = "none";
    textBN.style.display = "none";
    
    
});

closeBtn.addEventListener('click', () => {
    console.log('close btn clicked');
    resNav.style.display = "none";
    closeBtn.style.display = "none";
    hamBtn.style.display = "block";
    textBN.style.display = "block";
    
});
