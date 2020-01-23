"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinterestBoard = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PinterestBoard = function PinterestBoard(_ref) {
  var pinterestLink = _ref.pinterestLink,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 400 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 250 : _ref$height,
      _ref$imageWidth = _ref.imageWidth,
      imageWidth = _ref$imageWidth === void 0 ? 80 : _ref$imageWidth,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'board' : _ref$variant;
  return _react.default.createElement("a", {
    className: "pinterest-board pinterest-board-mdx-embed",
    "data-pin-do": "embed".concat(variant.charAt(0).toUpperCase()).concat(variant.slice(1)),
    "data-pin-board-width": width,
    "data-pin-scale-height": height,
    "data-pin-scale-width": imageWidth,
    href: "https://www.pinterest.com/".concat(pinterestLink)
  });
};

exports.PinterestBoard = PinterestBoard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BpbnRlcmVzdC9QaW50ZXJlc3RCb2FyZC50c3giXSwibmFtZXMiOlsiUGludGVyZXN0Qm9hcmQiLCJwaW50ZXJlc3RMaW5rIiwid2lkdGgiLCJoZWlnaHQiLCJpbWFnZVdpZHRoIiwidmFyaWFudCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQWVPLElBQU1BLGNBQXVELEdBQUcsU0FBMURBLGNBQTBEO0FBQUEsTUFDckVDLGFBRHFFLFFBQ3JFQSxhQURxRTtBQUFBLHdCQUVyRUMsS0FGcUU7QUFBQSxNQUVyRUEsS0FGcUUsMkJBRTdELEdBRjZEO0FBQUEseUJBR3JFQyxNQUhxRTtBQUFBLE1BR3JFQSxNQUhxRSw0QkFHNUQsR0FINEQ7QUFBQSw2QkFJckVDLFVBSnFFO0FBQUEsTUFJckVBLFVBSnFFLGdDQUl4RCxFQUp3RDtBQUFBLDBCQUtyRUMsT0FMcUU7QUFBQSxNQUtyRUEsT0FMcUUsNkJBSzNELE9BTDJEO0FBQUEsU0FPckU7QUFDRSxJQUFBLFNBQVMsRUFBQywyQ0FEWjtBQUVFLGtDQUFxQkEsT0FBTyxDQUFDQyxNQUFSLENBQWUsQ0FBZixFQUFrQkMsV0FBbEIsRUFBckIsU0FBdURGLE9BQU8sQ0FBQ0csS0FBUixDQUFjLENBQWQsQ0FBdkQsQ0FGRjtBQUdFLDRCQUFzQk4sS0FIeEI7QUFJRSw2QkFBdUJDLE1BSnpCO0FBS0UsNEJBQXNCQyxVQUx4QjtBQU1FLElBQUEsSUFBSSxzQ0FBK0JILGFBQS9CO0FBTk4sSUFQcUU7QUFBQSxDQUFoRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgaW50ZXJmYWNlIElQaW50ZXJlc3RCb2FyZFByb3BzIHtcbiAgLyoqIFBpbnRlcmVzdCBsaW5rICovXG4gIHBpbnRlcmVzdExpbms6IHN0cmluZ1xuICAvKiogV2lkdGggZm9yIHRoZSBib2FyZCAqL1xuICB3aWR0aD86IG51bWJlclxuICAvKiogSGVpZ2h0IGZvciB0aGUgYm9hcmQgKi9cbiAgaGVpZ2h0PzogbnVtYmVyXG4gIC8qKiBTaXplIG9mIHRoZSB0aHVtYm5haWxzICovXG4gIGltYWdlV2lkdGg/OiBudW1iZXJcbiAgLyoqIFRoZSB0eXBlIG9mIGJvYXJkICovXG4gIHZhcmlhbnQ/OiAnYm9hcmQnIHwgJ3VzZXInXG59XG5cbmV4cG9ydCBjb25zdCBQaW50ZXJlc3RCb2FyZDogRnVuY3Rpb25Db21wb25lbnQ8SVBpbnRlcmVzdEJvYXJkUHJvcHM+ID0gKHtcbiAgcGludGVyZXN0TGluayxcbiAgd2lkdGggPSA0MDAsXG4gIGhlaWdodCA9IDI1MCxcbiAgaW1hZ2VXaWR0aCA9IDgwLFxuICB2YXJpYW50ID0gJ2JvYXJkJ1xufTogSVBpbnRlcmVzdEJvYXJkUHJvcHMpID0+IChcbiAgPGFcbiAgICBjbGFzc05hbWU9XCJwaW50ZXJlc3QtYm9hcmQgcGludGVyZXN0LWJvYXJkLW1keC1lbWJlZFwiXG4gICAgZGF0YS1waW4tZG89e2BlbWJlZCR7dmFyaWFudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3ZhcmlhbnQuc2xpY2UoMSl9YH1cbiAgICBkYXRhLXBpbi1ib2FyZC13aWR0aD17d2lkdGh9XG4gICAgZGF0YS1waW4tc2NhbGUtaGVpZ2h0PXtoZWlnaHR9XG4gICAgZGF0YS1waW4tc2NhbGUtd2lkdGg9e2ltYWdlV2lkdGh9XG4gICAgaHJlZj17YGh0dHBzOi8vd3d3LnBpbnRlcmVzdC5jb20vJHtwaW50ZXJlc3RMaW5rfWB9XG4gIC8+XG4pXG4iXX0=