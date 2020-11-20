'use strict';

const personDataLog = ({ firstName = 'John', lastNamme = 'Doe', age = '33' } = {}) => {
    console.log('My name is', firstName, lastNamme.concat('.'), 'I\'m', age, 'years old.');
};
personDataLog();
personDataLog({ firstName: 'Jane' });
personDataLog({ firstName: 'Jane', lastNamme: 'Wu' });
personDataLog({ firstName: 'Jane', lastNamme: 'Wu', age: 22 });
personDataLog({ lastNamme: 'Wu', age: 22 });
personDataLog({ age: 22 });