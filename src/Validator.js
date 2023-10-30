/* eslint-disable */
import NumberSchema from './NumberSchema.js';
import ArraySchema from './ArraySchema.js';
import { ESLint } from 'eslint';

export default class Validator {
  string() {
    return new NumberSchema();
  }

  array() {
    return new ArraySchema();
  }
}
