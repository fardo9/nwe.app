const person = {
    name: 'nazz',
    age: 25,
    sayHello: hello
}

function hello() {
    console.log('hey', this)
};

// hello()

function anotherFunction() {

    const person = {
        name: 'nazz',
        age: 25,
        sayHello: hello
    }

    console.log(person);
}

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}

function checkAge(age) {
    // return( age > 18 ) ? true : confirm('Родители разрешили?');

    return (age > 18) || confirm('asdsad')
}