interface User {
    id: string;
    name: string;
    email: string;
}

// สมมติว่าเป็นฐานข้อมูลจำลอง
const mockDatabase: User[] = [];

// ฟังก์ชันเพิ่มผู้ใช้งานในฐานข้อมูลจำลอง
export const createUser = (user: User): void => {
    mockDatabase.push(user);
};

// ฟังก์ชันค้นหาผู้ใช้งานโดยใช้ ID
export const findUserById = (id: string): User | undefined => {
    return mockDatabase.find(user => user.id === id);
};

// ฟังก์ชันลบผู้ใช้งานโดยใช้ ID
export const deleteUser = (id: string): void => {
    const index = mockDatabase.findIndex(user => user.id === id);
    if (index !== -1) {
      mockDatabase.splice(index, 1);
    }
};