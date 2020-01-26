"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwitterTimeline = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TwitterTimeline = function TwitterTimeline(_ref) {
  var username = _ref.username,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'light' : _ref$theme,
      _ref$showLikes = _ref.showLikes,
      showLikes = _ref$showLikes === void 0 ? null : _ref$showLikes,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '498px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height;
  return _react.default.createElement("div", {
    style: {
      overflow: 'auto'
    }
  }, _react.default.createElement("a", {
    className: "twitter-timeline twitter-timeline-mdx-embed",
    "data-theme": theme,
    "data-width": width,
    "data-height": height,
    href: "https://twitter.com/".concat(username).concat(showLikes ? "/likes" : '', "?ref_src=twsrc%5Etfw")
  }, "Tweets by @".concat(username)));
};

exports.TwitterTimeline = TwitterTimeline;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1R3aXR0ZXIvVHdpdHRlclRpbWVsaW5lLnRzeCJdLCJuYW1lcyI6WyJUd2l0dGVyVGltZWxpbmUiLCJ1c2VybmFtZSIsInRoZW1lIiwic2hvd0xpa2VzIiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBZU8sSUFBTUEsZUFBeUQsR0FBRyxTQUE1REEsZUFBNEQ7QUFBQSxNQUN2RUMsUUFEdUUsUUFDdkVBLFFBRHVFO0FBQUEsd0JBRXZFQyxLQUZ1RTtBQUFBLE1BRXZFQSxLQUZ1RSwyQkFFL0QsT0FGK0Q7QUFBQSw0QkFHdkVDLFNBSHVFO0FBQUEsTUFHdkVBLFNBSHVFLCtCQUczRCxJQUgyRDtBQUFBLHdCQUl2RUMsS0FKdUU7QUFBQSxNQUl2RUEsS0FKdUUsMkJBSS9ELE9BSitEO0FBQUEseUJBS3ZFQyxNQUx1RTtBQUFBLE1BS3ZFQSxNQUx1RSw0QkFLOUQsSUFMOEQ7QUFBQSxTQU92RTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLFFBQVEsRUFBRTtBQUFaO0FBQVosS0FDRTtBQUNFLElBQUEsU0FBUyxFQUFDLDZDQURaO0FBRUUsa0JBQVlKLEtBRmQ7QUFHRSxrQkFBWUUsS0FIZDtBQUlFLG1CQUFhQyxNQUpmO0FBS0UsSUFBQSxJQUFJLGdDQUF5QkosUUFBekIsU0FDRkUsU0FBUyxjQUFjLEVBRHJCO0FBTE4sMEJBU2lCRixRQVRqQixFQURGLENBUHVFO0FBQUEsQ0FBbEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGludGVyZmFjZSBJVHdpdHRlclRpbWVsaW5lUHJvcHMge1xuICAvKiogVHdpdHRlciB1c2VybmFtZSAqL1xuICB1c2VybmFtZTogc3RyaW5nXG4gIC8qKiBTaG93IFR3ZWV0cyBsaWtlZCBieSB0aGUgdXNlcm5hbWUgKi9cbiAgc2hvd0xpa2VzPzogYm9vbGVhbiB8IG51bGxcbiAgLyoqIENvbG9yIHRoZW1lIG9mIHRoZSBUaW1lbGluZSAqL1xuICB0aGVtZT86ICdsaWdodCcgfCAnZGFyaydcbiAgLyoqIFdpZHRoIGZvciB0aGUgaUZyYW1lICovXG4gIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nXG4gIC8qKiBIZWlnaHQgZm9yIHRoZSBpRnJhbWUuIE51bGwgaXMgZnVsbCBoZWlnaHQgKi9cbiAgaGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbFxufVxuXG5leHBvcnQgY29uc3QgVHdpdHRlclRpbWVsaW5lOiBGdW5jdGlvbkNvbXBvbmVudDxJVHdpdHRlclRpbWVsaW5lUHJvcHM+ID0gKHtcbiAgdXNlcm5hbWUsXG4gIHRoZW1lID0gJ2xpZ2h0JyxcbiAgc2hvd0xpa2VzID0gbnVsbCxcbiAgd2lkdGggPSAnNDk4cHgnLFxuICBoZWlnaHQgPSBudWxsXG59OiBJVHdpdHRlclRpbWVsaW5lUHJvcHMpID0+IChcbiAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogJ2F1dG8nIH19PlxuICAgIDxhXG4gICAgICBjbGFzc05hbWU9XCJ0d2l0dGVyLXRpbWVsaW5lIHR3aXR0ZXItdGltZWxpbmUtbWR4LWVtYmVkXCJcbiAgICAgIGRhdGEtdGhlbWU9e3RoZW1lfVxuICAgICAgZGF0YS13aWR0aD17d2lkdGh9XG4gICAgICBkYXRhLWhlaWdodD17aGVpZ2h0fVxuICAgICAgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vJHt1c2VybmFtZX0ke1xuICAgICAgICBzaG93TGlrZXMgPyBgL2xpa2VzYCA6ICcnXG4gICAgICB9P3JlZl9zcmM9dHdzcmMlNUV0ZndgfVxuICAgID5cbiAgICAgIHtgVHdlZXRzIGJ5IEAke3VzZXJuYW1lfWB9XG4gICAgPC9hPlxuICA8L2Rpdj5cbilcbiJdfQ==