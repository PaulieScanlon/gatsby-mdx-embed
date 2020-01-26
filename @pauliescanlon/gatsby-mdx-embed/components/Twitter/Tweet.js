"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tweet = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tweet = function Tweet(_ref) {
  var tweetLink = _ref.tweetLink,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'light' : _ref$theme,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'left' : _ref$align;
  return _react.default.createElement("div", {
    className: "twitter-tweet-mdx-embed",
    style: {
      overflow: 'auto'
    }
  }, _react.default.createElement("blockquote", {
    className: "twitter-tweet",
    "data-theme": theme,
    "data-align": align
  }, _react.default.createElement("a", {
    href: "https://twitter.com/".concat(tweetLink, "?ref_src=twsrc%5Etfw")
  }, typeof window !== 'undefined' && !window.twttr ? 'Loading' : '')));
};

exports.Tweet = Tweet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1R3aXR0ZXIvVHdlZXQudHN4Il0sIm5hbWVzIjpbIlR3ZWV0IiwidHdlZXRMaW5rIiwidGhlbWUiLCJhbGlnbiIsIm92ZXJmbG93Iiwid2luZG93IiwidHd0dHIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQVdPLElBQU1BLEtBQXFDLEdBQUcsU0FBeENBLEtBQXdDO0FBQUEsTUFDbkRDLFNBRG1ELFFBQ25EQSxTQURtRDtBQUFBLHdCQUVuREMsS0FGbUQ7QUFBQSxNQUVuREEsS0FGbUQsMkJBRTNDLE9BRjJDO0FBQUEsd0JBR25EQyxLQUhtRDtBQUFBLE1BR25EQSxLQUhtRCwyQkFHM0MsTUFIMkM7QUFBQSxTQUtuRDtBQUFLLElBQUEsU0FBUyxFQUFDLHlCQUFmO0FBQXlDLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLFFBQVEsRUFBRTtBQUFaO0FBQWhELEtBQ0U7QUFBWSxJQUFBLFNBQVMsRUFBQyxlQUF0QjtBQUFzQyxrQkFBWUYsS0FBbEQ7QUFBeUQsa0JBQVlDO0FBQXJFLEtBQ0U7QUFBRyxJQUFBLElBQUksZ0NBQXlCRixTQUF6QjtBQUFQLEtBQ0csT0FBT0ksTUFBUCxLQUFrQixXQUFsQixJQUFpQyxDQUFFQSxNQUFELENBQWdCQyxLQUFsRCxHQUNHLFNBREgsR0FFRyxFQUhOLENBREYsQ0FERixDQUxtRDtBQUFBLENBQTlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVR3ZWV0UHJvcHMge1xuICAvKiogVHdlZXQgbGluayAqL1xuICB0d2VldExpbms6IHN0cmluZ1xuICAvKiogQ29sb3IgdGhlbWUgb2YgdGhlIFR3ZWV0ICovXG4gIHRoZW1lPzogJ2xpZ2h0JyB8ICdkYXJrJ1xuICAvKiogQWxpZ25tZW50IG9mIHRoZSBUd2VldCAqL1xuICBhbGlnbj86ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0J1xufVxuXG5leHBvcnQgY29uc3QgVHdlZXQ6IEZ1bmN0aW9uQ29tcG9uZW50PElUd2VldFByb3BzPiA9ICh7XG4gIHR3ZWV0TGluayxcbiAgdGhlbWUgPSAnbGlnaHQnLFxuICBhbGlnbiA9ICdsZWZ0J1xufTogSVR3ZWV0UHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyLXR3ZWV0LW1keC1lbWJlZFwiIHN0eWxlPXt7IG92ZXJmbG93OiAnYXV0bycgfX0+XG4gICAgPGJsb2NrcXVvdGUgY2xhc3NOYW1lPVwidHdpdHRlci10d2VldFwiIGRhdGEtdGhlbWU9e3RoZW1lfSBkYXRhLWFsaWduPXthbGlnbn0+XG4gICAgICA8YSBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS8ke3R3ZWV0TGlua30/cmVmX3NyYz10d3NyYyU1RXRmd2B9PlxuICAgICAgICB7dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgISh3aW5kb3cgYXMgYW55KS50d3R0clxuICAgICAgICAgID8gJ0xvYWRpbmcnXG4gICAgICAgICAgOiAnJ31cbiAgICAgIDwvYT5cbiAgICA8L2Jsb2NrcXVvdGU+XG4gIDwvZGl2PlxuKVxuIl19