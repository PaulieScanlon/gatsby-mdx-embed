"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapRootElement = void 0;

var _react = _interopRequireDefault(require("react"));

var _MdxEmbedProvider = require("./components/MdxEmbedProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapRootElement = function wrapRootElement(_ref) {
  var element = _ref.element;
  return _react.default.createElement(_MdxEmbedProvider.MdxEmbedProvider, null, element);
};

exports.wrapRootElement = wrapRootElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy93cmFwUm9vdEVsZW1lbnQudHN4Il0sIm5hbWVzIjpbIndyYXBSb290RWxlbWVudCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQU1PLElBQU1BLGVBQW9ELEdBQUcsU0FBdkRBLGVBQXVEO0FBQUEsTUFDbEVDLE9BRGtFLFFBQ2xFQSxPQURrRTtBQUFBLFNBRTlELDZCQUFDLGtDQUFELFFBQW1CQSxPQUFuQixDQUY4RDtBQUFBLENBQTdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBNZHhFbWJlZFByb3ZpZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL01keEVtYmVkUHJvdmlkZXInXG5cbmludGVyZmFjZSBJV3JhcFJvb3RFbGVtZW50IHtcbiAgZWxlbWVudDogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmV4cG9ydCBjb25zdCB3cmFwUm9vdEVsZW1lbnQ6IEZ1bmN0aW9uQ29tcG9uZW50PElXcmFwUm9vdEVsZW1lbnQ+ID0gKHtcbiAgZWxlbWVudFxufSkgPT4gPE1keEVtYmVkUHJvdmlkZXI+e2VsZW1lbnR9PC9NZHhFbWJlZFByb3ZpZGVyPlxuIl19