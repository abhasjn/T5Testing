const functions = require('./functions')

test('Adding 2 + 2 equals 4 ',()=>{
    expect(functions.add(2,2)).toBe(4);
});

test('Adding 2 + 2 to NOT equals 5 ',()=>{
    expect(functions.add(2,2)).not.toBe(5);
});

//ToBeNull
test('Should be Null ',()=>{
    expect(functions.isNull()).toBeNull();
});
// same is for undefined as well toBeUndefined

// toBeFalsy
test('Should be Falsy ',()=>{
    expect(functions.checkValue(null)).toBeFalsy();
});
// Null is a falsy value.

// test('Should be Falsy ',()=>{
//     expect(functions.checkValue(2)).toBeFalsy();
// });  This will fail.

// toEqual used for Reference type(object)
test("User should be Abhas Jain object", ()=>{
    expect(functions.createUser()).toEqual({
        firstName: 'Abhas',
        lastName: 'Jain'
    });
});

// Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
  });

// Regular Expression
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);  // use /I/i if you want it to be case insesitive.
  });

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['Abhas', 'Rahul', 'Raj'];
    expect(usernames).toContain('Abhas');
  });


// Working with async data

// Promise
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual('Leanne Graham');
  });
});


// Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
  });