console.log(/[a-z]/.test('a'));
console.log(/[a-zA-Z]/.test('A'));
console.log(/[a-zA-Z0-9]/.test('1'));
console.log(/[\d]/.test('0')); // /[0-9]/
console.log(/[\w]/.test('0')); // /[A-Za-z0-9_]/
console.log(/[^\w]/.test('-')); // ^ means excludes
