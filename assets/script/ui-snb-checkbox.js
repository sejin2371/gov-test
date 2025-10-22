// JavaScript 코드
// document.querySelectorAll('.snb-btn').forEach((button) => {
//     button.addEventListener('click', function () {
//         this.closest('.ui-snb-item').classList.toggle('active');
//     });
// });

// 탭키 사용시 열림
document.querySelectorAll('.snb-btn').forEach((button) => {
    // 클릭 이벤트 리스너
    button.addEventListener('click', function () {
        this.closest('.ui-snb-item').classList.toggle('active');
    });

    // 포커스 이벤트 리스너
    // button.addEventListener('focus', function () {
    //     this.closest('.ui-snb-item').classList.add('active');
    // });

    // // 블러 이벤트 리스너 (선택 사항)
    // button.addEventListener('blur', function () {
    //     // 약간의 지연을 주어 다음 요소로 포커스가 이동한 후 체크
    //     setTimeout(() => {
    //         // 현재 포커스된 요소가 같은 메뉴 내부에 있는지 확인
    //         const currentFocus = document.activeElement;
    //         const parentMenu = this.closest('.ui-snb-item');

    //         // 포커스가 메뉴 밖으로 이동했을 때만 메뉴 닫기
    //         if (!parentMenu.contains(currentFocus)) {
    //             parentMenu.classList.remove('active');
    //         }
    //     }, 10);
    // });
});

// snb 검색기간 radio 선택 가능하게해주는 코드
document
    .querySelectorAll('.ui-chip-box-date .chip-item label')
    .forEach((label) => {
        label.addEventListener('keydown', function (e) {
            // Enter 또는 Spacebar 키를 눌렀을 때
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // 기본 동작 (스크롤 등) 방지
                const targetRadio = document.getElementById(
                    this.getAttribute('for')
                );
                if (targetRadio && !targetRadio.checked) {
                    targetRadio.checked = true; // 라디오 버튼 선택
                    // 만약 change 이벤트를 직접 발생시켜야 한다면 아래 코드 추가
                    // targetRadio.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }
        });
    });
