
const itemsImg = document.querySelectorAll('.show-img');
let currentImg = 0;

// Bắt sự kiện click vào nút "Up"
document.querySelector('.btn-up-img').addEventListener('click', function () {
    for (let i = currentImg; i < itemsImg.length; i++) {
        if (itemsImg[i].classList.contains('hidden-img')) {
            itemsImg[i].classList.remove('hidden-img');
            currentImg = i + 1;
            if (currentImg >= itemsImg.length ) {
                currentImg = 0; // Quay lại đầu nếu đã đi hết danh sách
                itemsImg[currentImg].classList.add('hidden-img');
            } else {
                itemsImg[i + 1].classList.add('hidden-img');
            }
            break;
        }
    }
});

// Bắt sự kiện click vào nút "Down"
document.querySelector('.btn-down-img').addEventListener('click', function () {
    for (let i = currentImg; i >= 0; i--) {
        if (itemsImg[i].classList.contains('hidden-img')) {
            itemsImg[i].classList.remove('hidden-img');
            currentImg = i - 1;
            if (currentImg < 0) {
                currentImg = itemsImg.length - 1; // Quay lại cuối nếu đã đi hết danh sách
                itemsImg[currentImg].classList.add('hidden-img');
            } else {
                itemsImg[i-1].classList.add('hidden-img');
            }
            break;
        }
    }
});