document.addEventListener('DOMContentLoaded', (event) => {
    const button1 = document.querySelector('.button1');

    button1.addEventListener('mouseover', () => {
        button1.style.backgroundColor = '#2980b9'; // Darker blue
        button1.style.color = '#ecf0f1'; // Lighter text color
    });

    button1.addEventListener('mouseout', () => {
        button1.style.backgroundColor = '#3498db'; // Original blue
        button1.style.color = '#fff'; // Original text color
    });
});

// for 2 down 

document.addEventListener('DOMContentLoaded', (event) => {
    const button1 = document.querySelector('.button2');

    button1.addEventListener('mouseover', () => {
        button1.style.backgroundColor = '#2980b9'; // Darker blue
        button1.style.color = '#ecf0f1'; // Lighter text color
    });

    button1.addEventListener('mouseout', () => {
        button1.style.backgroundColor = '#3498db'; // Original blue
        button1.style.color = '#fff'; // Original text color
    });
});
