"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vimeo = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Vimeo = function Vimeo(_ref) {
  var vimeoId = _ref.vimeoId,
      _ref$autoPlay = _ref.autoPlay,
      autoPlay = _ref$autoPlay === void 0 ? false : _ref$autoPlay,
      _ref$skipTo = _ref.skipTo,
      skipTo = _ref$skipTo === void 0 ? {
    h: 0,
    m: 0,
    s: 0
  } : _ref$skipTo;
  var h = skipTo.h,
      m = skipTo.m,
      s = skipTo.s;
  return _react.default.createElement("div", {
    className: "vimeo-mdx-embed",
    style: _objectSpread({
      position: 'relative',
      width: '100%'
    }, (0, _utils.getPadding)('16:9'))
  }, _react.default.createElement("iframe", {
    title: "vimeo-".concat(vimeoId),
    src: "https://player.vimeo.com/video/".concat(vimeoId, "?autoplay=").concat(autoPlay, "#t=").concat(h, "h").concat(m, "m").concat(s, "s"),
    frameBorder: "0",
    allow: "autoplay; fullscreen",
    allowFullScreen: true,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    }
  }));
};

exports.Vimeo = Vimeo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpbWVvL1ZpbWVvLnRzeCJdLCJuYW1lcyI6WyJWaW1lbyIsInZpbWVvSWQiLCJhdXRvUGxheSIsInNraXBUbyIsImgiLCJtIiwicyIsInBvc2l0aW9uIiwid2lkdGgiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7QUFlTyxJQUFNQSxLQUFxQyxHQUFHLFNBQXhDQSxLQUF3QyxPQUlsQztBQUFBLE1BSGpCQyxPQUdpQixRQUhqQkEsT0FHaUI7QUFBQSwyQkFGakJDLFFBRWlCO0FBQUEsTUFGakJBLFFBRWlCLDhCQUZOLEtBRU07QUFBQSx5QkFEakJDLE1BQ2lCO0FBQUEsTUFEakJBLE1BQ2lCLDRCQURSO0FBQUVDLElBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLElBQUFBLENBQUMsRUFBRSxDQUFYO0FBQWNDLElBQUFBLENBQUMsRUFBRTtBQUFqQixHQUNRO0FBQUEsTUFDVEYsQ0FEUyxHQUNHRCxNQURILENBQ1RDLENBRFM7QUFBQSxNQUNOQyxDQURNLEdBQ0dGLE1BREgsQ0FDTkUsQ0FETTtBQUFBLE1BQ0hDLENBREcsR0FDR0gsTUFESCxDQUNIRyxDQURHO0FBR2pCLFNBQ0U7QUFDRSxJQUFBLFNBQVMsRUFBQyxpQkFEWjtBQUVFLElBQUEsS0FBSztBQUNIQyxNQUFBQSxRQUFRLEVBQUUsVUFEUDtBQUVIQyxNQUFBQSxLQUFLLEVBQUU7QUFGSixPQUdBLHVCQUFXLE1BQVgsQ0FIQTtBQUZQLEtBUUU7QUFDRSxJQUFBLEtBQUssa0JBQVdQLE9BQVgsQ0FEUDtBQUVFLElBQUEsR0FBRywyQ0FBb0NBLE9BQXBDLHVCQUF3REMsUUFBeEQsZ0JBQXNFRSxDQUF0RSxjQUEyRUMsQ0FBM0UsY0FBZ0ZDLENBQWhGLE1BRkw7QUFHRSxJQUFBLFdBQVcsRUFBQyxHQUhkO0FBSUUsSUFBQSxLQUFLLEVBQUMsc0JBSlI7QUFLRSxJQUFBLGVBQWUsTUFMakI7QUFNRSxJQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxRQUFRLEVBQUUsVUFETDtBQUVMRSxNQUFBQSxHQUFHLEVBQUUsQ0FGQTtBQUdMQyxNQUFBQSxJQUFJLEVBQUUsQ0FIRDtBQUlMRixNQUFBQSxLQUFLLEVBQUUsTUFKRjtBQUtMRyxNQUFBQSxNQUFNLEVBQUU7QUFMSDtBQU5ULElBUkYsQ0FERjtBQXlCRCxDQWhDTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBnZXRQYWRkaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVZpbWVvUHJvcHMge1xuICAvKiogVmltZW8gaWQgKi9cbiAgdmltZW9JZDogc3RyaW5nXG4gIC8qKiBTa2lwIHRvIGEgdGltZSBpbiB0aGUgdmlkZW8gKi9cbiAgc2tpcFRvOiB7XG4gICAgaD86IG51bWJlclxuICAgIG06IG51bWJlclxuICAgIHM6IG51bWJlclxuICB9XG4gIC8qKiBBdXRvIHBsYXkgdGhlIHZpZGVvICovXG4gIGF1dG9QbGF5OiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBWaW1lbzogRnVuY3Rpb25Db21wb25lbnQ8SVZpbWVvUHJvcHM+ID0gKHtcbiAgdmltZW9JZCxcbiAgYXV0b1BsYXkgPSBmYWxzZSxcbiAgc2tpcFRvID0geyBoOiAwLCBtOiAwLCBzOiAwIH1cbn06IElWaW1lb1Byb3BzKSA9PiB7XG4gIGNvbnN0IHsgaCwgbSwgcyB9ID0gc2tpcFRvXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJ2aW1lby1tZHgtZW1iZWRcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIC4uLmdldFBhZGRpbmcoJzE2OjknKVxuICAgICAgfX1cbiAgICA+XG4gICAgICA8aWZyYW1lXG4gICAgICAgIHRpdGxlPXtgdmltZW8tJHt2aW1lb0lkfWB9XG4gICAgICAgIHNyYz17YGh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8ke3ZpbWVvSWR9P2F1dG9wbGF5PSR7YXV0b1BsYXl9I3Q9JHtofWgke219bSR7c31zYH1cbiAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICAgICAgYWxsb3c9XCJhdXRvcGxheTsgZnVsbHNjcmVlblwiXG4gICAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ==