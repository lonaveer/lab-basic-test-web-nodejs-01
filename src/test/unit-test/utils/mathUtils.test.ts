import { divide } from '../../../app/utils/mathUtils';

// ทดสอบฟังก์ชัน divide
describe('divide function tests', () => {
  it('should return the correct result when dividing two positive numbers', () => {
    // const result = divide(10, 2);
    // expect(xxxxx).xxxxx(5); // ตรวจสอบว่าผลลัพธ์คือ 5
  });

  it('should return a positive result when dividing a negative number by a negative number', () => {
    // const result = divide(-10, -2);
    // expect(xxxxx).xxxxx(0); // ตรวจสอบว่าผลลัพธ์มากกว่า 0
  });

  it('should return a result less than 1 when dividing a number by a larger number', () => {
    // const result = divide(1, 2);
    // expect(xxxxx).xxxxx(1); // ตรวจสอบว่าผลลัพธ์น้อยกว่า 1
  });

  it('should throw an error when trying to divide by zero', () => {
    // // ตรวจสอบว่าการหารด้วย 0 จะ throw error
    // expect(() => divide(10, 0)).xxxxx("Cannot divide by zero");
  });
});