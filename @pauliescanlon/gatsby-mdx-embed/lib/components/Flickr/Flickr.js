"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flickr = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flickr = function Flickr(_ref) {
  var flickrLink = _ref.flickrLink;
  return _react.default.createElement("span", {
    className: "flickr-embed-mdx",
    "data-flickr-embed": "true",
    "data-header": "true",
    "data-footer": "true"
  }, _react.default.createElement("img", {
    src: "https://live.staticflickr.com/".concat(flickrLink),
    width: "100%",
    height: "auto",
    alt: flickrLink
  }));
};

exports.Flickr = Flickr;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ZsaWNrci9GbGlja3IudHN4Il0sIm5hbWVzIjpbIkZsaWNrciIsImZsaWNrckxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQU9PLElBQU1BLE1BQXVDLEdBQUcsU0FBMUNBLE1BQTBDO0FBQUEsTUFDckRDLFVBRHFELFFBQ3JEQSxVQURxRDtBQUFBLFNBR3JEO0FBQ0UsSUFBQSxTQUFTLEVBQUMsa0JBRFo7QUFFRSx5QkFBa0IsTUFGcEI7QUFHRSxtQkFBWSxNQUhkO0FBSUUsbUJBQVk7QUFKZCxLQU1FO0FBQ0UsSUFBQSxHQUFHLDBDQUFtQ0EsVUFBbkMsQ0FETDtBQUVFLElBQUEsS0FBSyxFQUFDLE1BRlI7QUFHRSxJQUFBLE1BQU0sRUFBQyxNQUhUO0FBSUUsSUFBQSxHQUFHLEVBQUVBO0FBSlAsSUFORixDQUhxRDtBQUFBLENBQWhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZsaWNrclByb3BzIHtcbiAgLyoqIEZsaWNrciBpbWFnZSBsaW5rKi9cbiAgZmxpY2tyTGluazogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBGbGlja3I6IEZ1bmN0aW9uQ29tcG9uZW50PElGbGlja3JQcm9wcz4gPSAoe1xuICBmbGlja3JMaW5rXG59OiBJRmxpY2tyUHJvcHMpID0+IChcbiAgPHNwYW5cbiAgICBjbGFzc05hbWU9XCJmbGlja3ItZW1iZWQtbWR4XCJcbiAgICBkYXRhLWZsaWNrci1lbWJlZD1cInRydWVcIlxuICAgIGRhdGEtaGVhZGVyPVwidHJ1ZVwiXG4gICAgZGF0YS1mb290ZXI9XCJ0cnVlXCJcbiAgPlxuICAgIDxpbWdcbiAgICAgIHNyYz17YGh0dHBzOi8vbGl2ZS5zdGF0aWNmbGlja3IuY29tLyR7ZmxpY2tyTGlua31gfVxuICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgIGhlaWdodD1cImF1dG9cIlxuICAgICAgYWx0PXtmbGlja3JMaW5rfVxuICAgIC8+XG4gIDwvc3Bhbj5cbilcbiJdfQ==