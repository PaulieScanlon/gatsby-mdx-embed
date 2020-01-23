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
      width: '100%',
      border: '1px solid blue'
    },
    scrolling: "no",
    src: "https://codepen.io/team/codepen/embed/".concat(codePenId, "?height=265&theme-id=default&default-tab=").concat(tabs),
    frameBorder: "no",
    allowFullScreen: true
  });
};

exports.CodePen = CodePen;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvZGVQZW4vQ29kZVBlbi50c3giXSwibmFtZXMiOlsiQ29kZVBlbiIsImNvZGVQZW5JZCIsImhlaWdodCIsInRhYnMiLCJ3aWR0aCIsImJvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBV08sSUFBTUEsT0FBeUMsR0FBRyxTQUE1Q0EsT0FBNEM7QUFBQSxNQUN2REMsU0FEdUQsUUFDdkRBLFNBRHVEO0FBQUEseUJBRXZEQyxNQUZ1RDtBQUFBLE1BRXZEQSxNQUZ1RCw0QkFFOUMsR0FGOEM7QUFBQSx1QkFHdkRDLElBSHVEO0FBQUEsTUFHdkRBLElBSHVELDBCQUdoRCxRQUhnRDtBQUFBLFNBS3ZEO0FBQ0UsSUFBQSxLQUFLLG9CQUFhRixTQUFiLENBRFA7QUFFRSxJQUFBLFNBQVMsRUFBQyxtQkFGWjtBQUdFLElBQUEsTUFBTSxFQUFFQyxNQUhWO0FBSUUsSUFBQSxLQUFLLEVBQUU7QUFDTEUsTUFBQUEsS0FBSyxFQUFFLE1BREY7QUFFTEMsTUFBQUEsTUFBTSxFQUFFO0FBRkgsS0FKVDtBQVFFLElBQUEsU0FBUyxFQUFDLElBUlo7QUFTRSxJQUFBLEdBQUcsa0RBQTJDSixTQUEzQyxzREFBZ0dFLElBQWhHLENBVEw7QUFVRSxJQUFBLFdBQVcsRUFBQyxJQVZkO0FBV0UsSUFBQSxlQUFlO0FBWGpCLElBTHVEO0FBQUEsQ0FBbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGludGVyZmFjZSBJQ29kZVBlblByb3BzIHtcbiAgLyoqIENvZGVQZW4gaWQgKi9cbiAgY29kZVBlbklkOiBzdHJpbmdcbiAgLyoqIEhlaWdodCBmb3IgdGhlIGlGcmFtZSAqL1xuICBoZWlnaHQ/OiBudW1iZXJcbiAgLyoqIFdoaWNoIHRhYnMgdG8gZGlzcGxheSAqL1xuICB0YWJzPzogJ2pzJyB8ICdjc3MnIHwgJ3Njc3MnIHwgJ2xlc3MnIHwgJ3Jlc3VsdCdcbn1cblxuZXhwb3J0IGNvbnN0IENvZGVQZW46IEZ1bmN0aW9uQ29tcG9uZW50PElDb2RlUGVuUHJvcHM+ID0gKHtcbiAgY29kZVBlbklkLFxuICBoZWlnaHQgPSA1MDAsXG4gIHRhYnMgPSAncmVzdWx0J1xufTogSUNvZGVQZW5Qcm9wcykgPT4gKFxuICA8aWZyYW1lXG4gICAgdGl0bGU9e2Bjb2RlUGVuLSR7Y29kZVBlbklkfWB9XG4gICAgY2xhc3NOYW1lPVwiY29kZXBlbi1tZHgtZW1iZWRcIlxuICAgIGhlaWdodD17aGVpZ2h0fVxuICAgIHN0eWxlPXt7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsdWUnXG4gICAgfX1cbiAgICBzY3JvbGxpbmc9XCJub1wiXG4gICAgc3JjPXtgaHR0cHM6Ly9jb2RlcGVuLmlvL3RlYW0vY29kZXBlbi9lbWJlZC8ke2NvZGVQZW5JZH0/aGVpZ2h0PTI2NSZ0aGVtZS1pZD1kZWZhdWx0JmRlZmF1bHQtdGFiPSR7dGFic31gfVxuICAgIGZyYW1lQm9yZGVyPVwibm9cIlxuICAgIGFsbG93RnVsbFNjcmVlblxuICAvPlxuKVxuIl19