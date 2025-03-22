# Quá trình Testing trong JS

## Lý thuyết

- Testing (kiểm thử) là một quy trình trong lập trình mà bạn kiểm tra các phần của mã nguồn để đảm bảo chúng hoạt động đúng như mong đợi. Mục đích chính của kiểm thử là phát hiện lỗi, sai sót, hoặc những điều bất thường trong ứng dụng hoặc hệ thống trước khi đưa vào sử dụng thực tế.

- Lý do:
  - Phát hiện lỗi sớm
  - Đảm bảo chất lượng
  - Bảo vệ mã nguồn khi thay đổi
  - Dễ dàng bảo trì mã nguồn
  - Tiết kiệm thời gian
  - Hỗ trợ phát triển nhóm
 
- Phân loại kiểm thử:
  - Unit testing
  - Integration testing
  - End-to-end testing

- Các công cụ:
  - Jest: Là một framework kiểm thử phổ biến và mạnh mẽ, dễ sử dụng cho các ứng dụng JavaScript và React. Jest hỗ trợ kiểm thử đơn vị, kiểm thử tích hợp, và kiểm thử end-to-end.
  - Mocha và Chai: Một bộ framework-assertion đi với nhau
  - Cypress: Một công cụ kiểm thử end-to-end mạnh mẽ cho ứng dụng web, giúp mô phỏng hành động người dùng trên trình duyệt.



# Hướng dẫn sử dụng Jest

## Cách tạo testcase

- B1: Cài đặt jest bằng lệnh `npm install --save-dev jest`
- B2: Thêm cấu hình này vào file `package.json` (Vốn được tạo từ lệnh `npm init`)
```json
"scripts": {
  "test": "jest"
}
```
- B3: Viết mã nguồn
- B4: Viết mã thử
- B5: Chạy lệnh `npm test`



## Các hàm cho testcase

### 1. `test()` hoặc `it()`: Dùng để định nghĩa 1 testcase

```js
test('sums 1 + 2 equals 3', () => {
  expect(1 + 2).toBe(3);
});
```


```js
it('sums 1 + 2 equals 3', () => {
  expect(1 + 2).toBe(3);
});
```



### 2. `expect()`: Dùng để tạo một assertion, kiểm tra giá trị trả về của mã nguồn.

```js
expect(value).toBe(expectedValue); // Kiểm tra giá trị bằng nhau (so sánh strict)
expect(value).not.toBe(expectedValue); // Kiểm tra giá trị không bằng nhau
```



### 3. Các checker cơ bản


#### 3.1. `toBe(value)`: Kiểm tra giá trị bằng cách so sánh chặt chẽ (so sánh theo tham chiếu đối với các đối tượng).

```js
expect(2 + 2).toBe(4);
expect({ a: 1 }).toBe({ a: 1 }); // Sẽ fail vì đây là hai đối tượng khác nhau.
```


#### 3.2. `toEqual(value)`: Kiểm tra giá trị bằng cách so sánh nội dung (deep comparison), phù hợp với các đối tượng hoặc mảng.

```javascript
expect({ a: 1 }).toEqual({ a: 1 }); // Sẽ pass vì các giá trị là giống nhau.
```



#### 3.3. `toBeNull()`: Kiểm tra xem giá trị có phải là null hay không.

```javascript
expect(null).toBeNull(); // Pass
```



#### 3.4. `toBeUndefined()`: Kiểm tra xem giá trị có phải là undefined hay không.

```javascript
let a;
expect(a).toBeUndefined(); // Pass
```



#### 3.5. `toBeDefined()`: Kiểm tra xem giá trị có được định nghĩa (không phải undefined) hay không.

```javascript
expect(5).toBeDefined(); // Pass
```



#### 3.6. `toBeTruthy()`: Kiểm tra xem giá trị có phải là truthy hay không (giá trị không phải false, null, undefined, 0, NaN, hoặc chuỗi rỗng).

```javascript
expect(true).toBeTruthy(); // Pass
expect(1).toBeTruthy(); // Pass
expect(false).toBeTruthy(); // Fail
```



#### 3.7. `toBeFalsy()`: Kiểm tra xem giá trị có phải là falsy hay không (giá trị là false, null, undefined, 0, NaN, hoặc chuỗi rỗng).

```javascript
expect(false).toBeFalsy(); // Pass
expect(0).toBeFalsy(); // Pass
```



#### 3.8. `toContain(item)`: Kiểm tra xem một mảng hoặc chuỗi có chứa phần tử hoặc ký tự cụ thể không.

```javascript
const arr = [1, 2, 3];
expect(arr).toContain(2); // Pass
expect('hello world').toContain('world'); // Pass
```



#### 3.9. `toHaveLength(number)`: Kiểm tra xem một mảng, chuỗi, hoặc đối tượng có độ dài (length) nhất định hay không.

```javascript
const arr = [1, 2, 3];
expect(arr).toHaveLength(3); // Pass
```



#### 3.10. `toMatch(regex)`: Kiểm tra xem chuỗi có phù hợp với biểu thức chính quy (regex) hay không.

```javascript
expect('hello world').toMatch(/world/); // Pass
```



#### 3.11. `toThrow(error?)`: Kiểm tra xem hàm có ném ra lỗi hay không. Có thể kiểm tra lỗi cụ thể.

```javascript
const throwError = () => { throw new Error('oops'); };
expect(throwError).toThrow('oops'); // Pass
```



#### 3.12. `toBeGreaterThan(number)`: Kiểm tra xem giá trị có lớn hơn một giá trị nhất định hay không.

```javascript
expect(10).toBeGreaterThan(5); // Pass
```



#### 3.13. `toBeLessThan(number)`: Kiểm tra xem giá trị có nhỏ hơn một giá trị nhất định hay không.

```javascript
expect(5).toBeLessThan(10); // Pass
```





### 4. Các Matcher nâng cao

#### 4.1. `toHaveProperty(key, value)`: Kiểm tra xem đối tượng có thuộc tính với giá trị cụ thể không.

```javascript
const obj = { name: 'John', age: 30 };
expect(obj).toHaveProperty('name', 'John'); // Pass
```



#### 4.2. `toStrictEqual(value)`: Kiểm tra giá trị với sự so sánh sâu (deep comparison) và cả kiểu dữ liệu (so sánh chặt chẽ các thuộc tính của đối tượng).

```javascript
expect({ a: 1 }).toStrictEqual({ a: 1 }); // Pass
```



#### 4.3. `toHaveBeenCalled()`: Kiểm tra xem một hàm mock có được gọi hay không.

```javascript
const mockFn = jest.fn();
mockFn();
expect(mockFn).toHaveBeenCalled(); // Pass
```



#### 4.4. `toHaveBeenCalledWith(arg1, arg2, ...)`: Kiểm tra xem một hàm mock có được gọi với các tham số cụ thể hay không.

```javascript
const mockFn = jest.fn();
mockFn(1, 2);
expect(mockFn).toHaveBeenCalledWith(1, 2); // Pass
```
