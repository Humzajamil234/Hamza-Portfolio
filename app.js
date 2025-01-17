alert("Welcome to my portfolio website!");

// Modal functionality for Projects
function openModal(project) {
    const modalContent = document.getElementById('modal-content');
    if (project === 'project1') {
        modalContent.textContent = 'Personal Portfolio Website - A responsive portfolio website created using HTML, CSS, and JavaScript.';
    } else if (project === 'project2') {
        modalContent.textContent = 'E-commerce Website - A fully functional e-commerce website built using React, Node.js, and MongoDB.';
    }
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Smooth Scroll Effect
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill all the fields!');
    } else {
        alert('Form submitted successfully!');
        this.reset();
    }
});


  