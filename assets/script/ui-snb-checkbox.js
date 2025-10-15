// JavaScript 코드
document.querySelectorAll('.snb-btn').forEach((button) => {
    button.addEventListener('click', function () {
        this.closest('.ui-snb-item').classList.toggle('active');
    });
});
