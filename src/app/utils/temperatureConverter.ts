// แปลงอุณหภูมิระหว่างเซลเซียสและฟาเรนไฮต์
export const convertTemperature = (temp: number, unit: 'C' | 'F'): number => {
    if (unit === 'C') {
      return (temp - 32) * 5/9; // แปลงฟาเรนไฮต์เป็นเซลเซียส
    } else {
      return (temp * 9/5) + 32; // แปลงเซลเซียสเป็นฟาเรนไฮต์
    }
};