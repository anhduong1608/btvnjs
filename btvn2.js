let menu;

do {
  menu = +prompt(`
        === MENU BẢNG CỬU CHƯƠNG NÂNG CAO ===

1. Hiển thị bảng cửu chương từ 1 đến 9
2. Hiển thị bảng cửu chương của một số cụ thể
3. Kiểm tra kết quả phép nhân
4. Hiển thị bảng cửu chương ngược
5. Luyện tập bảng nhân với số lần tùy chọn
6. Thống kê kết quả đúng/sai
7. Thoát
Lựa chọn của bạn: `);
  if (menu === 1) {
    let result = "";
    for (let i = 2; i <= 9; i++) {
      for (let j = 1; j <= 10; j++) {
        result += `${i} x ${j} = ${i * j}\n`;
      }
      result += "\n";
    }
    console.log(result);
  } else if (menu === 2) {
    let number = null;
    let resultN = "";
    do {
      number = +prompt("nhập số từ 2-9:");
      if (Number.isInteger(number) && number > 1 && number < 10) {
        for (let n = 1; n <= 10; n++) {
          resultN += `${number} x ${n} = ${number * n}\n `;
        }
        console.log(resultN);
        break;
      } else {
        alert("nhập sai rồi");
      }
    } while (true);
  } else if (menu === 3) {
    do {
      let resultM = "";
      let n1 = +prompt("nhập số thứ nhất");
      let n2 = +prompt("nhập số thứ hai:");
      if (!isNaN(n1) && !isNaN(n2) && (n1 && n2) >= 1) {
        alert(`${n1} x ${n2} = ${n1 * n2}`);
        break;
      } else {
        alert("nhập sai dữ liệu");
      }
    } while (true);
  }
} while (menu !== 7);
