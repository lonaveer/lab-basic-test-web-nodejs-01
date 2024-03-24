import { divide } from '../../app/utils/mathUtils';

// ทดสอบฟังก์ชัน divide
describe('divide function tests', () => {
  it('should return the correct result when dividing two positive numbers', () => {
    const result = divide(10, 2);
    expect(result).toBe(5); // ตรวจสอบว่าผลลัพธ์คือ 5
  });

  it('should return a positive result when dividing a negative number by a negative number', () => {
    const result = divide(-10, -2);
    expect(result).toBeGreaterThan(0); // ตรวจสอบว่าผลลัพธ์มากกว่า 0
  });

  it('should return a result less than 1 when dividing a number by a larger number', () => {
    const result = divide(1, 2);
    expect(result).toBeLessThan(1); // ตรวจสอบว่าผลลัพธ์น้อยกว่า 1
  });

  it('should throw an error when trying to divide by zero', () => {
    // ตรวจสอบว่าการหารด้วย 0 จะ throw error
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");

    // หมายเหตุ : การทดสอบ Error มักจะทำในรูปแบบนี้ "expect(() => divide(10, 0))"
    // เนื่องจาก Error จะแสดงก่อนที่ฟังก์ชั่นจะทำงานจบ จึงควรเอาฟังก์ชั่นใส่ลงไปใน expect เพื่อให้ toThrow() สามารถดักจับ Error ได้
    // ซึ่งไม่ควรเอาตัวแปรมารับค่าของฟังก์ชั่นก่อน เช่น const result = divide(10, 0); แล้วค่อยใช้ expect(result) ซึ่งจะผิดทันที
  });
});
