"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwitterHashtagButton = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TwitterHashtagButton = function TwitterHashtagButton(_ref) {
  var hashtag = _ref.hashtag,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size;
  return _react.default.createElement("a", {
    href: "https://twitter.com/intent/tweet?button_hashtag=".concat(hashtag, "&ref_src=twsrc%5Etfw"),
    className: "twitter-hashtag-button twitter-hashtag-button-mdx-embed",
    "data-size": size
  }, "Tweet #".concat(hashtag));
};

exports.TwitterHashtagButton = TwitterHashtagButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1R3aXR0ZXIvVHdpdHRlckhhc2h0YWdCdXR0b24udHN4Il0sIm5hbWVzIjpbIlR3aXR0ZXJIYXNodGFnQnV0dG9uIiwiaGFzaHRhZyIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQVNPLElBQU1BLG9CQUFtRSxHQUFHLFNBQXRFQSxvQkFBc0U7QUFBQSxNQUNqRkMsT0FEaUYsUUFDakZBLE9BRGlGO0FBQUEsdUJBRWpGQyxJQUZpRjtBQUFBLE1BRWpGQSxJQUZpRiwwQkFFMUUsT0FGMEU7QUFBQSxTQUlqRjtBQUNFLElBQUEsSUFBSSw0REFBcURELE9BQXJELHlCQUROO0FBRUUsSUFBQSxTQUFTLEVBQUMseURBRlo7QUFHRSxpQkFBV0M7QUFIYixzQkFJWUQsT0FKWixFQUppRjtBQUFBLENBQTVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVR3aXR0ZXJIYXNodGFnQnV0dG9uUHJvcHMge1xuICAvKiogVHdpdHRlciBoYXNodGFnICovXG4gIGhhc2h0YWc6IHN0cmluZ1xuICAvKiogVGhlIHNpemUgb2YgdGhlIGJ1dHRvbiAqL1xuICBzaXplPzogJ2xhcmdlJyB8ICdzbWFsbCdcbn1cblxuZXhwb3J0IGNvbnN0IFR3aXR0ZXJIYXNodGFnQnV0dG9uOiBGdW5jdGlvbkNvbXBvbmVudDxJVHdpdHRlckhhc2h0YWdCdXR0b25Qcm9wcz4gPSAoe1xuICBoYXNodGFnLFxuICBzaXplID0gJ3NtYWxsJ1xufTogSVR3aXR0ZXJIYXNodGFnQnV0dG9uUHJvcHMpID0+IChcbiAgPGFcbiAgICBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/YnV0dG9uX2hhc2h0YWc9JHtoYXNodGFnfSZyZWZfc3JjPXR3c3JjJTVFdGZ3YH1cbiAgICBjbGFzc05hbWU9XCJ0d2l0dGVyLWhhc2h0YWctYnV0dG9uIHR3aXR0ZXItaGFzaHRhZy1idXR0b24tbWR4LWVtYmVkXCJcbiAgICBkYXRhLXNpemU9e3NpemV9XG4gID57YFR3ZWV0ICMke2hhc2h0YWd9YH08L2E+XG4pXG4iXX0=