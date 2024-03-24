import { createUser, findUserById, deleteUser } from '../../../app/utils/userManager2';

describe('User Management Tests', () => {
  // // ใช้ beforeEach สำหรับการเพิ่มข้อมูลผู้ใช้งานทดสอบลงในฐานข้อมูลจำลองก่อนแต่ละการทดสอบ
  // beforeEach(() => {
  //   xxxxx({ id: "1", name: "John Doe", email: "john@example.com" });
  // });

  // // ใช้ afterEach สำหรับการลบข้อมูลผู้ใช้งานออกจากฐานข้อมูลจำลองหลังจากแต่ละการทดสอบ เพื่อไม่ให้ข้อมูลการทดสอบซ้ำซ้อน
  // afterEach(() => {
  //   xxxxx("1");
  // });

  it('should find a user by id', () => {
    // find a user "1"
    // const user = xxxxx("1");

    // found user should be defined
    // expect(xxxxx).xxxxx();

    // found user name should be "John Doe"
    // expect(xxxxx?.name).xxxxx("John Doe");
  });

  it('should delete a user by id', () => {
    // // delete a user "1"
    // xxxxx("1");

    // // find a user "1"
    // const user = xxxxx("1");

    // // found user should be undefined
    // expect(xxxxx).xxxxx();
  });
});
