import { findUserById, checkUserEmail, findNameInArray } from '../../app/utils/userManager';

describe('User Manager Tests', () => {
  it('should return a user object when found by ID', () => {
    const user = findUserById(1);
    expect(user).toEqual({ id: 1, name: "John Doe", email: "john@example.com" }); // ตรวจสอบว่าผลลัพธ์ตรงกับ object ที่คาดหวัง
  });

  it('should return undefined for a user not found by ID', () => {
    const user = findUserById(99);
    expect(user).toBeUndefined(); // ตรวจสอบว่าผลลัพธ์เป็น undefined สำหรับผู้ใช้ที่ไม่พบ
  });

  it('should confirm a user has an email defined', () => {
    const user = findUserById(1);
    expect(checkUserEmail(user!)).toBeTruthy(); // ตรวจสอบว่าผู้ใช้มีอีเมล
  });

  it('should confirm a user has no email defined and return false', () => {
    const user = findUserById(2);
    expect(checkUserEmail(user!)).toBeFalsy(); // ตรวจสอบว่าผู้ใช้ไม่มีอีเมล
  });

  it('should find a name in an array', () => {
    const names = ["John Doe", "Jane Doe"];
    const nameToFind = "Jane Doe";
    expect(findNameInArray(names, nameToFind)).toContain(nameToFind); // ตรวจสอบว่าชื่อที่ต้องการค้นหามีอยู่ในอาร์เรย์
  });
});