export default class NumberSchema {
    validators = [(value) => typeof value === "string"];
    isValid(value) {
        return this.validators.every((validator) => validator(value));
    }
    startsFromUpperCase() {
        const alpha = 'ABCDEFGHIJKLMNOPRSTQRVWXYZ'.split('');
        this.validators.push((value) => alpha.includes(value[0]));
        return this;
    }
    length(stringLength) {
        this.validators.push((value) => value.length === stringLength)
        return this;
    }
    hasExclamation() {
        this.validators.push((value) => value.split('').includes('!'));
        return this;
    }
}