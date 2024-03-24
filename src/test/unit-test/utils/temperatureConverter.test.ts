import { convertTemperature } from '../../../app/utils/temperatureConverter';

// จงใช้ describe.each สำหรับ Parametrized Tests
// 1. แปลงอุณหภูมิจาก 0 เซลเซียสเป็น 32 ฟาเรนไฮต์
// 2. แปลงอุณหภูมิจาก 32 ฟาเรนไฮต์เป็น 0 เซลเซียส
// 3. แปลงอุณหภูมิจาก 100 เซลเซียสเป็น 212 ฟาเรนไฮต์
// 4. แปลงอุณหภูมิจาก 212 ฟาเรนไฮต์เป็น 100 เซลเซียส

// describe.each([
//   [xxxxx, 'C', 32], // เซลเซียสเป็นฟาเรนไฮต์
//   [xxxxx, xxxxx, xxxxx], // ฟาเรนไฮต์เป็นเซลเซียส
//   [xxxxx, xxxxx, xxxxx], // เซลเซียสเป็นฟาเรนไฮต์
//   [xxxxx, xxxxx, xxxxx] // ฟาเรนไฮต์เป็นเซลเซียส
// ])('convertTemperature(%i, %s)', (inputTemp, unit, expected) => {
//   it(`returns ${xxxxx} when converting ${inputTemp}${unit}`, () => {
//     expect(xxxxx(xxxxx, xxxxx as 'C' | 'F')).xxxxx(xxxxx);

//     // หมายเหตุ : โปรดใช้ .toBeCloseTo() ในการทดสอบค่าทศนิยม ว่าตรงกันหรือไม่
//     //เนื่องจาก .toBe() นั้น Not Support การทดสอบค่าทศนิยม
//   });
// });

it('test message', () => {
  console.log('test message');
});