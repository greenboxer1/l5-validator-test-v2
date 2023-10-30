import NumberSchema from "./NumberSchema.js"
import ArraySchema from "./ArraySchema.js";

export default class Validator {
    string() {
        return new NumberSchema();
    }
    array() {
        return new ArraySchema()
    }
}