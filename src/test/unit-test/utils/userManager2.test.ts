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
    const user = findUserById("1");
    expect(user).toBeDefined();
    expect(user?.name).toEqual("John Doe");
  });

  it('should delete a user by id', () => {
    deleteUser("1");
    const user = findUserById("1");
    expect(user).toBeUndefined();
  });
});
