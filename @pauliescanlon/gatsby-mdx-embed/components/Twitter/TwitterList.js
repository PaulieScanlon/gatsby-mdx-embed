"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwitterList = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TwitterList = function TwitterList(_ref) {
  var username = _ref.username,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'light' : _ref$theme,
      listName = _ref.listName,
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
    href: "https://twitter.com/".concat(username, "/lists/").concat(listName, "?ref_src=twsrc%5Etfw")
  }, "A Twitter List by @".concat(username)));
};

exports.TwitterList = TwitterList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1R3aXR0ZXIvVHdpdHRlckxpc3QudHN4Il0sIm5hbWVzIjpbIlR3aXR0ZXJMaXN0IiwidXNlcm5hbWUiLCJ0aGVtZSIsImxpc3ROYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBZU8sSUFBTUEsV0FBaUQsR0FBRyxTQUFwREEsV0FBb0Q7QUFBQSxNQUMvREMsUUFEK0QsUUFDL0RBLFFBRCtEO0FBQUEsd0JBRS9EQyxLQUYrRDtBQUFBLE1BRS9EQSxLQUYrRCwyQkFFdkQsT0FGdUQ7QUFBQSxNQUcvREMsUUFIK0QsUUFHL0RBLFFBSCtEO0FBQUEsd0JBSS9EQyxLQUorRDtBQUFBLE1BSS9EQSxLQUorRCwyQkFJdkQsT0FKdUQ7QUFBQSx5QkFLL0RDLE1BTCtEO0FBQUEsTUFLL0RBLE1BTCtELDRCQUt0RCxJQUxzRDtBQUFBLFNBTy9EO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsUUFBUSxFQUFFO0FBQVo7QUFBWixLQUNFO0FBQ0UsSUFBQSxTQUFTLEVBQUMsNkNBRFo7QUFFRSxrQkFBWUosS0FGZDtBQUdFLGtCQUFZRSxLQUhkO0FBSUUsbUJBQWFDLE1BSmY7QUFLRSxJQUFBLElBQUksZ0NBQXlCSixRQUF6QixvQkFBMkNFLFFBQTNDO0FBTE4sa0NBT3lCRixRQVB6QixFQURGLENBUCtEO0FBQUEsQ0FBMUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGludGVyZmFjZSBJVHdpdHRlckxpc3RQcm9wcyB7XG4gIC8qKiBUd2l0dGVyIHVzZXJuYW1lICovXG4gIHVzZXJuYW1lOiBzdHJpbmdcbiAgLyoqIFRoZSBUd2l0dGVyIGxpc3QgbmFtZSAqL1xuICBsaXN0TmFtZTogc3RyaW5nXG4gIC8qKiBDb2xvciB0aGVtZSBvZiB0aGUgVGltZWxpbmUgKi9cbiAgdGhlbWU/OiAnbGlnaHQnIHwgJ2RhcmsnXG4gIC8qKiBXaWR0aCBmb3IgdGhlIGlGcmFtZSAqL1xuICB3aWR0aD86IG51bWJlciB8IHN0cmluZ1xuICAvKiogSGVpZ2h0IGZvciB0aGUgaUZyYW1lLiBOdWxsIGlzIGZ1bGwgaGVpZ2h0ICovXG4gIGhlaWdodD86IG51bWJlciB8IHN0cmluZyB8IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IFR3aXR0ZXJMaXN0OiBGdW5jdGlvbkNvbXBvbmVudDxJVHdpdHRlckxpc3RQcm9wcz4gPSAoe1xuICB1c2VybmFtZSxcbiAgdGhlbWUgPSAnbGlnaHQnLFxuICBsaXN0TmFtZSxcbiAgd2lkdGggPSAnNDk4cHgnLFxuICBoZWlnaHQgPSBudWxsXG59OiBJVHdpdHRlckxpc3RQcm9wcykgPT4gKFxuICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiAnYXV0bycgfX0+XG4gICAgPGFcbiAgICAgIGNsYXNzTmFtZT1cInR3aXR0ZXItdGltZWxpbmUgdHdpdHRlci10aW1lbGluZS1tZHgtZW1iZWRcIlxuICAgICAgZGF0YS10aGVtZT17dGhlbWV9XG4gICAgICBkYXRhLXdpZHRoPXt3aWR0aH1cbiAgICAgIGRhdGEtaGVpZ2h0PXtoZWlnaHR9XG4gICAgICBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS8ke3VzZXJuYW1lfS9saXN0cy8ke2xpc3ROYW1lfT9yZWZfc3JjPXR3c3JjJTVFdGZ3YH1cbiAgICA+XG4gICAgICB7YEEgVHdpdHRlciBMaXN0IGJ5IEAke3VzZXJuYW1lfWB9XG4gICAgPC9hPlxuICA8L2Rpdj5cbilcbiJdfQ==