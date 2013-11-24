/**
 * @fileoverview Tests for no-new-wrappers rule.
 * @author Ilya Volodin
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslintTester = require("../../../../lib/tests/eslintTester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

eslintTester.add("no-new-wrappers", {
    valid: [
        "var a = new Object();",
        "var a = String('test'), b = String.fromCharCode(32);"
    ],
    invalid: [
        { code: "var a = new String('hello');", errors: [{ message: "Do not use String as a constructor.", type: "NewExpression"}] },
        { code: "var a = new Number(10);", errors: [{ message: "Do not use Number as a constructor.", type: "NewExpression"}] },
        { code: "var a = new Boolean(false);", errors: [{ message: "Do not use Boolean as a constructor.", type: "NewExpression"}] },
        { code: "var a = new Math();", errors: [{ message: "Do not use Math as a constructor.", type: "NewExpression"}] },
        { code: "var a = new JSON({ myProp: 10 });", errors: [{ message: "Do not use JSON as a constructor.", type: "NewExpression"}] }
    ]
});