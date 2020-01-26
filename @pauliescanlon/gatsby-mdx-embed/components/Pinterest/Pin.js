"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pin = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pin = function Pin(_ref) {
  var pinId = _ref.pinId,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size;
  return _react.default.createElement("a", {
    className: "pinterest-pin pinterest-pin-mdx-embed",
    "data-pin-do": "embedPin",
    "data-pin-width": size,
    href: "https://www.pinterest.com/pin/".concat(pinId)
  });
};

exports.Pin = Pin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1BpbnRlcmVzdC9QaW4udHN4Il0sIm5hbWVzIjpbIlBpbiIsInBpbklkIiwic2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBU08sSUFBTUEsR0FBaUMsR0FBRyxTQUFwQ0EsR0FBb0M7QUFBQSxNQUMvQ0MsS0FEK0MsUUFDL0NBLEtBRCtDO0FBQUEsdUJBRS9DQyxJQUYrQztBQUFBLE1BRS9DQSxJQUYrQywwQkFFeEMsT0FGd0M7QUFBQSxTQUkvQztBQUNFLElBQUEsU0FBUyxFQUFDLHVDQURaO0FBRUUsbUJBQVksVUFGZDtBQUdFLHNCQUFnQkEsSUFIbEI7QUFJRSxJQUFBLElBQUksMENBQW1DRCxLQUFuQztBQUpOLElBSitDO0FBQUEsQ0FBMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGludGVyZmFjZSBJUGluUHJvcHMge1xuICAvKiogUGludGVyZXN0IGlkICovXG4gIHBpbklkOiBzdHJpbmdcbiAgLyoqIFNpemUgKi9cbiAgc2l6ZTogJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJ1xufVxuXG5leHBvcnQgY29uc3QgUGluOiBGdW5jdGlvbkNvbXBvbmVudDxJUGluUHJvcHM+ID0gKHtcbiAgcGluSWQsXG4gIHNpemUgPSAnc21hbGwnXG59OiBJUGluUHJvcHMpID0+IChcbiAgPGFcbiAgICBjbGFzc05hbWU9XCJwaW50ZXJlc3QtcGluIHBpbnRlcmVzdC1waW4tbWR4LWVtYmVkXCJcbiAgICBkYXRhLXBpbi1kbz1cImVtYmVkUGluXCJcbiAgICBkYXRhLXBpbi13aWR0aD17c2l6ZX1cbiAgICBocmVmPXtgaHR0cHM6Ly93d3cucGludGVyZXN0LmNvbS9waW4vJHtwaW5JZH1gfVxuICAvPlxuKVxuIl19