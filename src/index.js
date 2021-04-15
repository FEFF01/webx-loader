
const { generate: codegen } = require("escodegen");
const { default: webx } = require("./webx");
const path = require("path");
const runtime = path.join(__dirname, "../src/runtime.js")

module.exports = function (source) {

    const loaderContext = this;
    //const filename = path.basename(loaderContext.resourcePath)

    
    let ast = webx(source);
    ast.body.unshift({
        "type": "ImportDeclaration",
        "specifiers": [
            {
                "type": "ImportDefaultSpecifier",
                "local": {
                    "type": "Identifier",
                    "name": "webx"
                }
            }
        ],
        "source": {
            "type": "Literal",
            "value": runtime,
            "raw": `"${runtime}"`
        }
    },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "window"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "_webx"
                    }
                },
                "right": {
                    "type": "Identifier",
                    "name": "webx"
                }
            }
        });
    let code = codegen(ast);

    
    return code;
}