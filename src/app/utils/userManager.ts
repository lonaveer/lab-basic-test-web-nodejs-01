// โครงสร้างข้อมูลผู้ใช้
interface User {
    id: number;
    name: string;
    email?: string;
}

// ข้อมูลผู้ใช้งานตัวอย่าง
const users: User[] = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe" } // ไม่มีอีเมล
];

// ฟังก์ชันค้นหาผู้ใช้งานโดยใช้ ID
export const findUserById = (id: number): User | undefined => {
    return users.find(user => user.id === id);
};

// ฟังก์ชันตรวจสอบอีเมลผู้ใช้งาน
export const checkUserEmail = (user: User): boolean => {
    return user.email ? true : false;
};

// ฟังก์ชันค้นหาชื่อภายในอาร์เรย์ข้อมูล
export const findNameInArray = (names: string[], nameToFind: string): string | undefined => {
    return names.find(name => name === nameToFind);
};