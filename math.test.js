const test=require('node:test');
const assert=require('node:assert');
const {add,multiply}=require('./math');

test ('add 2 and 3',()=>{
    assert.strictEqual(add(2,3),5);
});

test ('add neagtive numbers',()=>{
    assert.strictEqual(add(-1,-4),-5);
});

test ('multiplies 4 and 5',()=>{
    assert.strictEqual(multiply(4,5),20);;
});