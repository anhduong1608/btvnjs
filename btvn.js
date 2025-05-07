let student = {
    name: "",
    age: null,
    math: null,
    literature: null,
    engli: null,
    average: null,
    garade: "",
  };
  
  let choice;
  
  do {
    choice = +prompt(
      `=== MENU QUẢN LÝ HỌC SINH ===
  1: Nhập tên học sinh
  2: Nhập tuổi học sinh
  3: Nhập điểm Toán, Văn, Anh
  4: Tính điểm trung bình và xếp loại
  5: Hiển thị thông tin học sinh
  6: Thoát
  => Nhập lựa chọn của bạn:`
    );
  
    if (choice === 1) {
      let nameInput;
      do {
        nameInput = prompt("Nhập tên học sinh:");
        if (nameInput && nameInput.trim() !== "") {
          student.name = nameInput.trim();
          break;
        } else {
          alert("Tên không hợp lệ, mời nhập lại.");
        }
      } while (true);
    }
  
    else if (choice === 2) {
      let ageInput;
      do {
        ageInput = +prompt("Nhập tuổi học sinh:");
        if (Number.isInteger(ageInput) && ageInput > 0) {
          student.age = ageInput;
          break;
        } else {
          alert("Tuổi không hợp lệ, mời nhập lại.");
        }
      } while (true);
    }
  
    else if (choice === 3) {
      let score;
  
      do {
        score = +prompt("Nhập điểm Toán (0–10):");
        if (!isNaN(score) && score >= 0 && score <= 10) {
          student.math = score;
          break;
        } else {
          alert("Điểm Toán không hợp lệ.");
        }
      } while (true);
  
      do {
        score = +prompt("Nhập điểm Văn (0–10):");
        if (!isNaN(score) && score >= 0 && score <= 10) {
          student.literature = score;
          break;
        } else {
          alert("Điểm Văn không hợp lệ.");
        }
      } while (true);
  
      do {
        score = +prompt("Nhập điểm Anh (0–10):");
        if (!isNaN(score) && score >= 0 && score <= 10) {
          student.engli = score;
          break;
        } else {
          alert("Điểm Anh không hợp lệ.");
        }
      } while (true);
    }
  
    else if (choice === 4) {
      if (
        student.math !== null &&
        student.literature !== null &&
        student.engli !== null
      ) {
        student.average = (
          (student.math + student.literature + student.engli) /
          3
        ).toFixed(2); // Làm tròn 2 chữ số
  
        let avg = student.average;
  
        if (
          avg >= 8 &&
          student.math >= 5 &&
          student.literature >= 5 &&
          student.engli >= 5
        ) {
          student.garade = "Học sinh giỏi";
        } else if (
          avg >= 6.5 &&
          student.math >= 4 &&
          student.literature >= 4 &&
          student.engli >= 4
        ) {
          student.garade = "Học sinh khá";
        } else if (avg >= 5) {
          student.garade = "Học sinh trung bình";
        } else {
          student.garade = "Học sinh yếu";
        }
      } else {
        alert("Vui lòng nhập đầy đủ điểm trước khi tính trung bình.");
      }
    }
  
    else if (choice === 5) {
      alert(`=== THÔNG TIN HỌC SINH ===
  Tên: ${student.name || "Chưa nhập"}
  Tuổi: ${student.age !== null ? student.age : "Chưa nhập"}
  Điểm Toán: ${student.math !== null ? student.math : "Chưa nhập"}
  Điểm Văn: ${student.literature !== null ? student.literature : "Chưa nhập"}
  Điểm Anh: ${student.engli !== null ? student.engli : "Chưa nhập"}
  Điểm TB: ${student.average !== null ? student.average : "Chưa tính"}
  Xếp loại: ${student.garade || "Chưa có"}
      `);
    }
  
    else if (choice === 6) {
      alert("Cảm ơn bạn đã sử dụng chương trình!");
    }
  
    else {
      alert("Lựa chọn không hợp lệ, vui lòng nhập từ 1 đến 6.");
    }
  
  } while (choice !== 6);
  