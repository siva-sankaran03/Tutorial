var john = {
    firstName: 'John',
    lastNamr: 'Smith',
    birthyear: 1990,
    family: ['Jane','Smith'],
    job: 'teacher',
    ismarried:'false'
};
console.log(john.firstName);
console.log(john['lastname']);
var x='birthYear';
console.log(john[x]);
john.job='designer';
john['ismarried'] = true;
console.log(john);