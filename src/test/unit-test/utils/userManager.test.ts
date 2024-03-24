import { findUserById, checkUserEmail, findNameInArray } from '../../../app/utils/userManager';

describe('User Manager Tests', () => {
  it('should return a user object when found by ID', () => {
    // const user = findUserById(1);

    // // ตรวจสอบว่าผลลัพธ์ตรงกับ object ที่คาดหวัง
    // expect(xxxxx).xxxxx({ id: 1, name: "John Doe", email: "john@example.com" });
  });

  it('should return undefined for a user not found by ID', () => {
    // const user = findUserById(99);
    // expect(xxxxx).xxxxx(); // ตรวจสอบว่าผลลัพธ์เป็น undefined สำหรับผู้ใช้ที่ไม่พบ
  });

  it('should confirm a user has an email defined', () => {
    // const user = findUserById(1);
    // expect(checkUserEmail(user!)).xxxxx(); // ตรวจสอบว่าผู้ใช้นี้มีอีเมล
  });

  it('should confirm a user has no email defined and return false', () => {
    // const user = findUserById(2);
    // expect(xxxxx).xxxxx(); // ตรวจสอบว่าผู้ใช้ไม่มีอีเมล
  });

  it('should find a name in an array', () => {
    // const names = ["John Doe", "Jane Doe"];
    // const nameToFind = "Jane Doe";

    // // ตรวจสอบว่าชื่อที่ต้องการค้นหามีอยู่ในอาร์เรย์
    // expect(findNameInArray(names, nameToFind)).xxxxx(nameToFind);
  });
});