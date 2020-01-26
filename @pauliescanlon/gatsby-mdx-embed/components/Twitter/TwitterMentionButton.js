"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwitterMentionButton = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TwitterMentionButton = function TwitterMentionButton(_ref) {
  var username = _ref.username,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size;
  return _react.default.createElement("a", {
    href: "https://twitter.com/intent/tweet?screen_name=".concat(username, "&ref_src=twsrc%5Etfw"),
    className: "twitter-mention-button twitter-mention-button-mdx-embed",
    "data-size": size
  }, "Tweet to @".concat(username));
};

exports.TwitterMentionButton = TwitterMentionButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1R3aXR0ZXIvVHdpdHRlck1lbnRpb25CdXR0b24udHN4Il0sIm5hbWVzIjpbIlR3aXR0ZXJNZW50aW9uQnV0dG9uIiwidXNlcm5hbWUiLCJzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFTTyxJQUFNQSxvQkFBbUUsR0FBRyxTQUF0RUEsb0JBQXNFO0FBQUEsTUFDakZDLFFBRGlGLFFBQ2pGQSxRQURpRjtBQUFBLHVCQUVqRkMsSUFGaUY7QUFBQSxNQUVqRkEsSUFGaUYsMEJBRTFFLE9BRjBFO0FBQUEsU0FJakY7QUFDRSxJQUFBLElBQUkseURBQWtERCxRQUFsRCx5QkFETjtBQUVFLElBQUEsU0FBUyxFQUFDLHlEQUZaO0FBR0UsaUJBQVdDO0FBSGIseUJBSWVELFFBSmYsRUFKaUY7QUFBQSxDQUE1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgaW50ZXJmYWNlIElUd2l0dGVyTWVudGlvbkJ1dHRvblByb3BzIHtcbiAgLyoqIFR3aXR0ZXIgdXNlcm5hbWUgKi9cbiAgdXNlcm5hbWU6IHN0cmluZ1xuICAvKiogVGhlIHNpemUgb2YgdGhlIGJ1dHRvbiAqL1xuICBzaXplPzogJ2xhcmdlJyB8ICdzbWFsbCdcbn1cblxuZXhwb3J0IGNvbnN0IFR3aXR0ZXJNZW50aW9uQnV0dG9uOiBGdW5jdGlvbkNvbXBvbmVudDxJVHdpdHRlck1lbnRpb25CdXR0b25Qcm9wcz4gPSAoe1xuICB1c2VybmFtZSxcbiAgc2l6ZSA9ICdzbWFsbCdcbn06IElUd2l0dGVyTWVudGlvbkJ1dHRvblByb3BzKSA9PiAoXG4gIDxhXG4gICAgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3NjcmVlbl9uYW1lPSR7dXNlcm5hbWV9JnJlZl9zcmM9dHdzcmMlNUV0ZndgfVxuICAgIGNsYXNzTmFtZT1cInR3aXR0ZXItbWVudGlvbi1idXR0b24gdHdpdHRlci1tZW50aW9uLWJ1dHRvbi1tZHgtZW1iZWRcIlxuICAgIGRhdGEtc2l6ZT17c2l6ZX1cbiAgPntgVHdlZXQgdG8gQCR7dXNlcm5hbWV9YH08L2E+XG4pXG4iXX0=