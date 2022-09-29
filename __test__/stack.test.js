'use strict';

const { LinkedList } = require('../LinkedList');
const { Node } = require('../Node');
const { Stack } = require('../Stack');

describe('testing Stack Class', () => {
  it('Creating instance testing', () => {
    const testStack = new Stack();
    expect(testStack).toBeInstanceOf(Stack);
    expect(testStack.top).toBeNull();
  });
  it('Testing isEmpty function', () => {
    const testStack = new Stack();
    let x = testStack.isEmpty();
    expect(x).toEqual(1);
  });
  it('Testing push function', () => {
    const testStack = new Stack();
    testStack.push('hello');
    testStack.push('hello1');
    expect(testStack.top.value).toEqual('hello1');
  })
  it('Testing pop function', () => {
    const testStack = new Stack();
    testStack.push('hello');
    testStack.push('hello1');
    testStack.pop();
    expect(testStack.top.value).toEqual('hello');
  })
  it('Testing peek function', () => {
    const testStack = new Stack();
    testStack.push('hello');
    testStack.pop();
    let x = testStack.peek();
    expect(x).toEqual('hello');
  })

});