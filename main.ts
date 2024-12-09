/* 
1.	Deklarasikan variabel berikut dengan tipe data yang sesuai:
1.	Variabel username yang berisi string "Alice".
2.	Variabel age yang berisi angka 25.
3.	Variabel isAdmin yang berisi nilai boolean true.
4.	Variabel colors yang berisi array string ["red", "green", "blue"].

2.	Buat fungsi bernama multiply yang menerima dua parameter bertipe number dan mengembalikan hasil perkalian keduanya.

3.	Buat interface Car dengan properti:
1.	brand (string)
2.	model (string)
3.	year (number)
Lalu, buat variabel bernama myCar yang sesuai dengan interface tersebut.

4.	Buat variabel bernama userId yang dapat bertipe string atau number. Berikan nilai awal "123".

5.	Buat class bernama Animal dengan properti name (string) dan method makeSound yang mencetak "Some generic sound". Lalu, buat instance dari class tersebut.

6.	Buat class Dog yang mewarisi dari class Animal. Override method makeSound untuk mencetak "Woof!".

7.	Buat fungsi generic bernama identity yang menerima satu parameter dan mengembalikan parameter tersebut.

8.	Buat type alias Point untuk mendefinisikan objek dengan properti:
•	x (number)
•	y (number)
Lalu buat variabel pointA dengan nilai { x: 10, y: 20 }.

9.	Buat class BankAccount dengan:
1.	Properti private balance (number).
2.	Method deposit untuk menambah saldo.
3.	Method getBalance untuk mendapatkan saldo.

10.	Buat interface User dengan properti:
1.	id (readonly, number)
2.	name (string)
Lalu buat variabel user dengan properti id: 1 dan name: "Alice".

11.	Buat interface Profile dengan properti:
1.	name (string)
2.	age (number)
Gunakan Partial untuk membuat variabel profileUpdate di mana semua properti opsional.

12.	Buat enum Role dengan nilai:
1.	Admin
2.	User
3.	Guest
Lalu buat variabel currentRole dengan nilai Role.User.

13.	Buat dua type alias Employee dan Manager, lalu gabungkan keduanya menggunakan intersection type.

14.	Buat sebuah objek person dengan properti opsional address. Gunakan optional chaining untuk mengakses city di dalam address.

15.	Buat fungsi calculateDiscount yang menerima dua parameter:
1.	price (number)
2.	discount (number, default: 10)
Fungsi mengembalikan harga setelah diskon.


*/

// Soal 1
console.log('======Soal 1======\n');
let username: string = 'Alice';
let age: number = 25;
let isAdmin: boolean = true;
let colors: string[] = ['red', 'green', 'blue'];

console.log(username);
console.log(age);
console.log(isAdmin);
console.log(colors);

// Soal 2
console.log('\n\n======Soal 2======\n');
function multiply(a: number, b: number): number {
  return a * b;
}

console.log('5 dikali 3 adalah ', multiply(5, 3));

// Soal 3
console.log('\n\n======Soal 3======\n');
interface Car {
  brand: string;
  model: string;
  year: number;
}

const myCar: Car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
};

console.log(myCar);

// Soal 4
console.log('\n\n======Soal 4======\n');
let userId: string | number = '123';
// jika nilai awal "123", maka akan menjadi string
// jika nilai awal 123, maka akan menjadi number

console.log(typeof userId);
console.log(userId);

// Soal 5
console.log('\n\n======Soal 5======\n');
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log('Some generic sound');
  }
}

const animal = new Animal('Generic Animal');
animal.makeSound();

// Soal 6
console.log('\n\n======Soal 6======\n');
class Dog extends Animal {
  makeSound(): void {
    console.log('Woof!');
  }
}

const dog = new Dog('Kupa');
dog.makeSound();

// Soal 7
console.log('\n\n======Soal 7======\n');
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>('Hello'));

// Soal 8
console.log('\n\n======Soal 8======\n');
type Point = {
  x: number;
  y: number;
};

const pointA: Point = { x: 10, y: 20 };
console.log(pointA);

// Soal 9
console.log('\n\n======Soal 9======\n');
class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount();
account.deposit(1000000);
console.log(account.getBalance());

// Soal 10
console.log('\n\n======Soal 10======\n');
interface User {
  readonly id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: 'Alice',
};

// user.name = "Bob";
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

console.log(user);

// Soal 11
console.log('\n\n======Soal 11======\n');
interface Profile {
  name: string;
  age: number;
}

const profileUpdate: Partial<Profile> = {};
// karena semua property opsional, maka kosong

console.log(profileUpdate);

// Soal 12
console.log('\n\n======Soal 12======\n');
enum Role {
  Admin, // 0
  User, // 1
  Guest, // 2
}

const currentRole: Role = Role.User;

console.log(currentRole);

// Soal 13
console.log('\n\n======Soal 13======\n');
type Employee = {
  id: number;
  name: string;
};

type Manager = {
  department: string;
};

type ManagerEmployee = Employee & Manager;

const manager: ManagerEmployee = {
  id: 1,
  name: 'Xavier',
  department: 'HR',
};

console.log(manager);

// Soal 14
console.log('\n\n======Soal 14======\n');
const person = {
  address: {
    city: 'Surabaya',
  },
};

console.log(person.address?.city);

// Soal 15
console.log('\n\n======Soal 15======\n');
function calculateDiscount(price: number, discount: number = 10): number {
  return price - (price * discount) / 100;
}

console.log(calculateDiscount(100)); // 90
console.log(calculateDiscount(100, 20)); // 80
