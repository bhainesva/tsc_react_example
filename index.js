"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
var MyComponent = /** @class */ (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent(props) {
        return _super.call(this, props) || this;
    }
    MyComponent.prototype.componentDidMount = function () {
        // Example of @types/jquery working as expected
        $.ajax('http://www.example.com');
    };
    MyComponent.prototype.render = function () {
        return "Hi";
    };
    return MyComponent;
}(React.Component));
var Woah = /** @class */ (function (_super) {
    __extends(Woah, _super);
    function Woah(props) {
        return _super.call(this, props) || this;
    }
    Woah.prototype.render = function () {
        return (React.createElement(MyComponent, null));
    };
    return Woah;
}(React.Component));
function init() {
    console.log("hello");
}
exports.init = init;
