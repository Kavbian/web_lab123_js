document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');

        document.querySelectorAll('.lab').forEach(section => {
            section.classList.remove('active');
        });

        document.getElementById(target).classList.add('active');
    });
});

document.getElementById('lab1').classList.add('active');
