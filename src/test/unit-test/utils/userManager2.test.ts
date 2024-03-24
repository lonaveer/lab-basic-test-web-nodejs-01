import { createUser, findUserById, deleteUser } from '../../../app/utils/userManager2';

describe('User Management Tests', () => {
  // ใช้ beforeEach สำหรับการเพิ่มข้อมูลผู้ใช้งานทดสอบลงในฐานข้อมูลจำลองก่อนแต่ละการทดสอบ
  beforeEach(() => {
    createUser({ id: "1", name: "John Doe", email: "john@example.com" });
  });

  // ใช้ afterEach สำหรับการลบข้อมูลผู้ใช้งานออกจากฐานข้อมูลจำลองหลังจากแต่ละการทดสอบ เพื่อไม่ให้ข้อมูลการทดสอบซ้ำซ้อน
  afterEach(() => {
    deleteUser("1");
  });

  it('should find a user by id', () => {
    const user = findUserById("1"); // ค้นหาผู้ใช้งานโดยใช้ ID
    expect(user).toBeDefined(); // ตรวจสอบว่าผลลัพธ์ไม่เป็น undefined
    expect(user?.name).toBe("John Doe"); // ตรวจสอบว่าผลลัพธ์ตรงกับชื่อ "John Doe"
  });

  it('should delete a user by id', () => {
    deleteUser("1"); // ลบผู้ใช้งานโดยใช้ ID
    const user = findUserById("1"); // ค้นหาผู้ใช้งานโดยใช้ ID
    expect(user).toBeUndefined(); // ตรวจสอบว่าผลลัพธ์เป็น undefined
  });
});
