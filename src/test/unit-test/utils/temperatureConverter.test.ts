import { convertTemperature } from '../../../app/utils/temperatureConverter';

// ใช้ describe.each สำหรับ Parametrized Tests
describe.each([
  [0, 'C', 32], // เซลเซียสเป็นฟาเรนไฮต์
  [32, 'F', 0], // ฟาเรนไฮต์เป็นเซลเซียส
  [100, 'C', 212], // เซลเซียสเป็นฟาเรนไฮต์
  [212, 'F', 100] // ฟาเรนไฮต์เป็นเซลเซียส
])('convertTemperature(%i, %s)', (inputTemp, unit, expected) => {
  it(`returns ${expected} when converting ${inputTemp}${unit}`, () => {
    // ตรวจสอบว่าผลลัพธ์จากการแปลงอุณหภูมิตรงกับค่าที่คาดการณ์ไว้หรือไม่
    expect(convertTemperature(inputTemp, unit as 'C' | 'F')).toBeCloseTo(expected);
  });
});