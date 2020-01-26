"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodePen = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CodePen = function CodePen(_ref) {
  var codePenId = _ref.codePenId,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 500 : _ref$height,
      _ref$tabs = _ref.tabs,
      tabs = _ref$tabs === void 0 ? 'result' : _ref$tabs;
  return _react.default.createElement("iframe", {
    title: "codePen-".concat(codePenId),
    className: "codepen-mdx-embed",
    height: height,
    style: {
      width: '100%'
    },
    scrolling: "no",
    src: "https://codepen.io/team/codepen/embed/".concat(codePenId, "?height=265&theme-id=default&default-tab=").concat(tabs),
    frameBorder: "no",
    allowFullScreen: true
  });
};

exports.CodePen = CodePen;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0NvZGVQZW4vQ29kZVBlbi50c3giXSwibmFtZXMiOlsiQ29kZVBlbiIsImNvZGVQZW5JZCIsImhlaWdodCIsInRhYnMiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBV08sSUFBTUEsT0FBeUMsR0FBRyxTQUE1Q0EsT0FBNEM7QUFBQSxNQUN2REMsU0FEdUQsUUFDdkRBLFNBRHVEO0FBQUEseUJBRXZEQyxNQUZ1RDtBQUFBLE1BRXZEQSxNQUZ1RCw0QkFFOUMsR0FGOEM7QUFBQSx1QkFHdkRDLElBSHVEO0FBQUEsTUFHdkRBLElBSHVELDBCQUdoRCxRQUhnRDtBQUFBLFNBS3ZEO0FBQ0UsSUFBQSxLQUFLLG9CQUFhRixTQUFiLENBRFA7QUFFRSxJQUFBLFNBQVMsRUFBQyxtQkFGWjtBQUdFLElBQUEsTUFBTSxFQUFFQyxNQUhWO0FBSUUsSUFBQSxLQUFLLEVBQUU7QUFDTEUsTUFBQUEsS0FBSyxFQUFFO0FBREYsS0FKVDtBQU9FLElBQUEsU0FBUyxFQUFDLElBUFo7QUFRRSxJQUFBLEdBQUcsa0RBQTJDSCxTQUEzQyxzREFBZ0dFLElBQWhHLENBUkw7QUFTRSxJQUFBLFdBQVcsRUFBQyxJQVRkO0FBVUUsSUFBQSxlQUFlO0FBVmpCLElBTHVEO0FBQUEsQ0FBbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGludGVyZmFjZSBJQ29kZVBlblByb3BzIHtcbiAgLyoqIENvZGVQZW4gaWQgKi9cbiAgY29kZVBlbklkOiBzdHJpbmdcbiAgLyoqIEhlaWdodCBmb3IgdGhlIGlGcmFtZSAqL1xuICBoZWlnaHQ/OiBudW1iZXJcbiAgLyoqIFdoaWNoIHRhYnMgdG8gZGlzcGxheSAqL1xuICB0YWJzPzogc3RyaW5nW10gfCAnanMnIHwgJ2NzcycgfCAnc2NzcycgfCAnbGVzcycgfCAncmVzdWx0J1xufVxuXG5leHBvcnQgY29uc3QgQ29kZVBlbjogRnVuY3Rpb25Db21wb25lbnQ8SUNvZGVQZW5Qcm9wcz4gPSAoe1xuICBjb2RlUGVuSWQsXG4gIGhlaWdodCA9IDUwMCxcbiAgdGFicyA9ICdyZXN1bHQnXG59OiBJQ29kZVBlblByb3BzKSA9PiAoXG4gIDxpZnJhbWVcbiAgICB0aXRsZT17YGNvZGVQZW4tJHtjb2RlUGVuSWR9YH1cbiAgICBjbGFzc05hbWU9XCJjb2RlcGVuLW1keC1lbWJlZFwiXG4gICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgc3R5bGU9e3tcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9fVxuICAgIHNjcm9sbGluZz1cIm5vXCJcbiAgICBzcmM9e2BodHRwczovL2NvZGVwZW4uaW8vdGVhbS9jb2RlcGVuL2VtYmVkLyR7Y29kZVBlbklkfT9oZWlnaHQ9MjY1JnRoZW1lLWlkPWRlZmF1bHQmZGVmYXVsdC10YWI9JHt0YWJzfWB9XG4gICAgZnJhbWVCb3JkZXI9XCJub1wiXG4gICAgYWxsb3dGdWxsU2NyZWVuXG4gIC8+XG4pXG4iXX0=