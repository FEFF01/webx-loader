

const path = require("path");
const { default: webx } = require("./webx");
const runtime = path.join(__dirname, "../src/runtime.js")
const { default: generate } = require('@babel/generator')

module.exports = function (source) {

    const loaderContext = this;
    const filename = path.basename(loaderContext.resourcePath)

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
    let { code, map } = generate(toBabelAst(ast), {
        sourceMaps: true,
        //minified: true,
        sourceFileName: filename,
    }, source);
    //.replace(/[^\.]*?$/, "js")
    this.callback(null, code, map, ast);
    //return code;

}


function toBabelAst(node) {
    for (let key in node) {
        switch (key) {
            case "loc":
                node.loc.start.line += 1;
                node.loc.end.line += 1;
            case "range":
                break;
            default:
                let value = node[key];
                if (value && typeof value === "object") {
                    let res = toBabelAst(value);
                    res !== value && (node[key] = res);
                }
                break;
        }
    }
    switch (node.type) {
        case "Property":
            node.type = "ObjectProperty";
            break;
        case "Literal":
            switch (typeof node.value) {
                case "number":
                    node.type = "NumericLiteral";
                    break;
                case "boolean":
                    node.type = "BooleanLiteral";
                    break;
                case "string":
                    node.type = "StringLiteral";
                    break;
                case "object":
                    if (node.value instanceof RegExp) {
                        node.type = "RegExpLiteral"
                    } else if (node.value === null) {
                        node.type = "NullLiteral"
                    } else {
                        throw node;
                    }
                    break;
            }
            break;
    }
    return node;
}
