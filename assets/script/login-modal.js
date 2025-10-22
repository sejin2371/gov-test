// 필요한 요소 가져오기
const modal = document.getElementById('modal');
const openButton = document.getElementById('open-modal-login-method');
const closeButton = document.getElementById('close-modal');

// 모달 열기
openButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// 모달 닫기
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 모달 외부 클릭 시 닫기
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
