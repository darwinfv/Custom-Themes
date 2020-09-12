let bg = document.getElementById('bg');

bg.addEventListener('input', () => {
    document.body.style.backgroundColor = bg.value;
    document.body.style.color = bg.value;
});