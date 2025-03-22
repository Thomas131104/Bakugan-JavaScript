## JSDom: Document file JS / TS cho bản thân / người khác đọc

### Các annotations / tags

#### 1. `@param`: Mô tả các tham số (parameters) của hàm hoặc phương thức.

- Cú pháp: `@param {Type} name Description`
- Ví dụ:
```javascript
/**
 * Cộng hai số.
 * @param {number} a Số thứ nhất.
 * @param {number} b Số thứ hai.
 * @returns {number} Tổng của hai số.
 */
function add(a, b) {
  return a + b;
}
```



#### 2. `@returns`: Mô tả giá trị trả về của một hàm hoặc phương thức.

- Cú pháp: `@returns {Type} Description`
- VD:

```javascript
/**
 * Lấy chiều dài của một chuỗi.
 * @param {string} str Chuỗi cần đo độ dài.
 * @returns {number} Chiều dài của chuỗi.
 */
function getStringLength(str) {
  return str.length;
}
```


#### 3. `@type`: Chỉ định kiểu của một biến hoặc thuộc tính.

- Cú pháp: `@type {Type}`
- VD:

```javascript
/**
 * Đối tượng người dùng.
 * @type {{id: number, name: string}}
 */
const user = {
  id: 1,
  name: 'John Doe'
};
```


#### 4. `@property`: Mô tả các thuộc tính (properties) của một đối tượng hoặc một kiểu dữ liệu phức tạp.

- Cú pháp: `@property {Type} propertyName Description`
- VD1:

```javascript
/**
 * Định nghĩa một đối tượng User.
 * @typedef {Object} User
 * @property {number} id ID của người dùng.
 * @property {string} name Tên của người dùng.
 * @property {boolean} isActive Trạng thái hoạt động của người dùng.
 */

/** @type {User} */
const user = {
  id: 1,
  name: 'John Doe',
  isActive: true
};
```

- VD2:

```javascript
/**
 * Định nghĩa một đối tượng Product.
 * @typedef {Object} Product
 * @property {number} id Mã sản phẩm.
 * @property {string} name Tên sản phẩm.
 * @property {Object} dimensions Kích thước của sản phẩm.
 * @property {number} dimensions.length Chiều dài.
 * @property {number} dimensions.width Chiều rộng.
 * @property {number} dimensions.height Chiều cao.
 */

/** @type {Product} */
const product = {
  id: 101,
  name: 'Laptop',
  dimensions: {
    length: 35,
    width: 25,
    height: 2
  }
};
```



#### 5. `@typedef`: Dùng để định nghĩa kiểu dữ liệu tùy chỉnh, giúp mô tả cấu trúc phức tạp.

- Cú pháp:
```javascript
@typedef {Object} Name
@property {Type} propertyName Description
```

- VD:
```javascript
/**
 * @typedef {Object} User
 * @property {number} id ID của người dùng.
 * @property {string} name Tên của người dùng.
 */

/** @type {User} */
const user = {
  id: 123,
  name: 'Alice'
};
```



#### 6. `@example`: Cung cấp ví dụ minh họa cách sử dụng hàm hoặc phương thức.

- Cú pháp: `@example Code example`
- VD:

```javascript
/**
 * Cộng hai số.
 * @param {number} a Số thứ nhất.
 * @param {number} b Số thứ hai.
 * @returns {number} Tổng của hai số.
 * @example
 * // Gọi hàm
 * const sum = add(2, 3);
 * console.log(sum); // 5
 */
function add(a, b) {
  return a + b;
}
```



#### 7. `@deprecated` - Đánh dấu hàm, phương thức, hoặc API không nên được sử dụng nữa.

- Cú pháp: `@deprecated Description`
- VD:

```javascript
/**
 * @deprecated Hãy sử dụng hàm `newFunction` thay thế.
 */
function oldFunction() {
  console.log('Hàm này đã lỗi thời.');
}
```



#### 8. `@async`: Chỉ định rằng một hàm hoặc phương thức là bất đồng bộ (asynchronous).

- VD:

```javascript
/**
 * Lấy dữ liệu từ server.
 * @async
 * @returns {Promise<Object>} Dữ liệu trả về.
 */
async function fetchData() {
  return await fetch('/api/data').then(res => res.json());
}
```



#### 9. `@constructor`: Dùng để đánh dấu một hàm như là một constructor (hàm khởi tạo).

- VD:

```javascript
/**
 * Tạo một đối tượng Person.
 * @constructor
 * @param {string} name Tên của người.
 */
function Person(name) {
  this.name = name;
}
```



#### 10. `@throws`: Dùng để mô tả các lỗi có thể được ném ra từ hàm hoặc phương thức.

- Cú pháp: `@throws {Type} Description`
- VD:

```javascript
/**
 * Chia hai số.
 * @param {number} a Số bị chia.
 * @param {number} b Số chia.
 * @returns {number} Kết quả của phép chia.
 * @throws {Error} Nếu số chia là 0.
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Không thể chia cho 0');
  }
  return a / b;
}
```



#### 11. `@see`: Tham chiếu đến các tài liệu liên quan hoặc đường dẫn khác.

- Cú pháp: `@see URL or Reference`
- VD:

```javascript
/**
 * Tìm thêm thông tin tại:
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript
 */
function example() {}
```



#### 12. `@module`: Dùng để mô tả một module

- Cú pháp: `@module Tên_module`
- VD:

```javascript
/**
 * @module MathUtils
 */
export function add(a, b) {
  return a + b;
}
```



#### 13. `@default`: Dùng để chỉ định giá trị mặc định của biến hoặc thuộc tính.

- VD:

```javascript
/**
 * @type {number}
 * @default 0
 */
let count = 0;
```





---

### Chi tiết cụ thể cho các đối tượng

#### 1. JSDoc cho Function (Hàm)

- Cấu trúc:

```js
/**
 * Mô tả hành vi của hàm.
 * @param {type} paramName Mô tả về tham số.
 * @returns {type} Mô tả về giá trị trả về.
 */
function functionName(param) {
  // code...
}
```

- VD:

```javascript
/**
 * Tính diện tích hình tròn.
 * @param {number} radius - Bán kính của hình tròn.
 * @returns {number} - Diện tích của hình tròn.
 */
function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
}
```



#### 2. JSDoc cho Constructor (Hàm Khởi Tạo)

- Cấu trúc:

```javascript
/**
 * Mô tả cách tạo một đối tượng.
 * @param {type} paramName Mô tả về tham số.
 */
class ClassName {
    constructor(param) {
        // code...
    }
}
```

- VD:

```javascript
/**
 * Khởi tạo một đối tượng Person.
 * @param {string} name - Tên của người.
 * @param {number} age - Tuổi của người.
 */
class Person {
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
```



#### 3. JSDoc cho Phương Thức (Methods)

- Cấu trúc

```javascript
/**
 * Mô tả hành vi của phương thức.
 * @returns {type} Mô tả về giá trị trả về.
 */
class ClassName {
    methodName() {
        // code...
    }
}
```

- Ví dụ

```javascript
/**
 * Lấy tên của người.
 * @returns {string} - Tên của người.
 */
class Person {
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }
}
```



#### 4. JSDoc cho Thuộc Tính (Properties)

- Cấu trúc

```javascript
/**
 * Mô tả thuộc tính.
 * @type {type}
 */
class ClassName {
    property;
}
```

- Vd:

```javascript
/**
 * Đại diện cho tên của người.
 * @type {string}
 */
class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}
```



#### 5. JSDoc cho Enum (Enum)

- Cấu trúc:

```javascript
/**
 * Mô tả enum.
 * @enum {type}
 */
const EnumName = {
    KEY1: value,
    KEY2: value
};
```

- VD:

```javascript
/**
 * Các loại màu sắc.
 * @enum {string}
 */
enum Color {
    RED = "red",
    GREEN = "green",
    BLUE = "blue"
}
```



#### 6. JSDoc cho Tham Số Tùy Chọn (Optional Parameters)

- Cấu trúc:

```javascript
/**
 * Mô tả hành vi của hàm với tham số tùy chọn.
 * @param {type} paramName Mô tả tham số tùy chọn.
 * @param {type} [paramName] - Tham số tùy chọn với giá trị mặc định.
 * @returns {type} Mô tả giá trị trả về.
 */
function functionName(param: type, optionalParam: type = defaultValue): type {
    // code...
}
```

- VD:

```javascript
/**
 * Cộng hai số lại.
 * @param {number} a - Số đầu tiên.
 * @param {number} [b=0] - Số thứ hai, mặc định là 0.
 * @returns {number} - Tổng của hai số.
 */
function add(a: number, b: number = 0): number {
    return a + b;
}
```



#### 7. JSDoc cho lỗi - Errors

- Cấu trúc:

```javascript
/**
 * Mô tả lỗi có thể ném ra.
 * @throws {Error} Mô tả lỗi.
 */
function functionName(param) {
    if (condition) {
        throw new Error("Mô tả lỗi");
    }
    // code...
}
```

- VD:

```javascript
/**
 * Tính tỷ lệ giữa hai số.
 * @param {number} a - Số chia.
 * @param {number} b - Số bị chia.
 * @returns {number} - Tỷ lệ giữa a và b.
 * @throws {Error} - Nếu b bằng 0.
 */
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Không thể chia cho 0");
    }
    return a / b;
}
```



#### 8. JSDoc cho Mảng (Arrays)

- Cấu trúc:

```javascript
/**
 * Mô tả mảng.
 * @param {type[]} paramName - Mảng các phần tử.
 * @returns {type} - Mô tả giá trị trả về.
 */
function functionName(param: type[]): type {
    // code...
}
```

- VD:

```javascript
/**
 * Tính tổng các số trong mảng.
 * @param {number[]} numbers - Mảng các số.
 * @returns {number} - Tổng các số trong mảng.
 */
function sum(numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}
```
