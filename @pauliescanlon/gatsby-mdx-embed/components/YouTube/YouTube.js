"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YouTube = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var YouTube = function YouTube(_ref) {
  var youTubeId = _ref.youTubeId,
      _ref$aspectRatio = _ref.aspectRatio,
      aspectRatio = _ref$aspectRatio === void 0 ? '16:9' : _ref$aspectRatio,
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
  var tH = h * 60;
  var tM = m * 60;
  var startTime = tH + tM + s;
  return _react.default.createElement("div", {
    className: "youtube-mdx-embed",
    style: _objectSpread({
      position: 'relative',
      width: '100%'
    }, (0, _utils.getPadding)(aspectRatio))
  }, _react.default.createElement("iframe", {
    title: "youTube-".concat(youTubeId),
    src: "https://www.youtube.com/embed/".concat(youTubeId, "?&autoplay=").concat(autoPlay, "&start=").concat(startTime),
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
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

exports.YouTube = YouTube;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1lvdVR1YmUvWW91VHViZS50c3giXSwibmFtZXMiOlsiWW91VHViZSIsInlvdVR1YmVJZCIsImFzcGVjdFJhdGlvIiwiYXV0b1BsYXkiLCJza2lwVG8iLCJoIiwibSIsInMiLCJ0SCIsInRNIiwic3RhcnRUaW1lIiwicG9zaXRpb24iLCJ3aWR0aCIsInRvcCIsImxlZnQiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7OztBQWlCTyxJQUFNQSxPQUF5QyxHQUFHLFNBQTVDQSxPQUE0QyxPQUtwQztBQUFBLE1BSm5CQyxTQUltQixRQUpuQkEsU0FJbUI7QUFBQSw4QkFIbkJDLFdBR21CO0FBQUEsTUFIbkJBLFdBR21CLGlDQUhMLE1BR0s7QUFBQSwyQkFGbkJDLFFBRW1CO0FBQUEsTUFGbkJBLFFBRW1CLDhCQUZSLEtBRVE7QUFBQSx5QkFEbkJDLE1BQ21CO0FBQUEsTUFEbkJBLE1BQ21CLDRCQURWO0FBQUVDLElBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLElBQUFBLENBQUMsRUFBRSxDQUFYO0FBQWNDLElBQUFBLENBQUMsRUFBRTtBQUFqQixHQUNVO0FBQUEsTUFDWEYsQ0FEVyxHQUNDRCxNQURELENBQ1hDLENBRFc7QUFBQSxNQUNSQyxDQURRLEdBQ0NGLE1BREQsQ0FDUkUsQ0FEUTtBQUFBLE1BQ0xDLENBREssR0FDQ0gsTUFERCxDQUNMRyxDQURLO0FBR25CLE1BQU1DLEVBQUUsR0FBR0gsQ0FBQyxHQUFJLEVBQWhCO0FBQ0EsTUFBTUksRUFBRSxHQUFHSCxDQUFDLEdBQUcsRUFBZjtBQUVBLE1BQU1JLFNBQVMsR0FBR0YsRUFBRSxHQUFHQyxFQUFMLEdBQVVGLENBQTVCO0FBRUEsU0FDRTtBQUNFLElBQUEsU0FBUyxFQUFDLG1CQURaO0FBRUUsSUFBQSxLQUFLO0FBQ0hJLE1BQUFBLFFBQVEsRUFBRSxVQURQO0FBRUhDLE1BQUFBLEtBQUssRUFBRTtBQUZKLE9BR0EsdUJBQVdWLFdBQVgsQ0FIQTtBQUZQLEtBUUU7QUFDRSxJQUFBLEtBQUssb0JBQWFELFNBQWIsQ0FEUDtBQUVFLElBQUEsR0FBRywwQ0FBbUNBLFNBQW5DLHdCQUEwREUsUUFBMUQsb0JBQTRFTyxTQUE1RSxDQUZMO0FBR0UsSUFBQSxXQUFXLEVBQUMsR0FIZDtBQUlFLElBQUEsS0FBSyxFQUFDLHlFQUpSO0FBS0UsSUFBQSxlQUFlLE1BTGpCO0FBTUUsSUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsUUFBUSxFQUFFLFVBREw7QUFFTEUsTUFBQUEsR0FBRyxFQUFFLENBRkE7QUFHTEMsTUFBQUEsSUFBSSxFQUFFLENBSEQ7QUFJTEYsTUFBQUEsS0FBSyxFQUFFLE1BSkY7QUFLTEcsTUFBQUEsTUFBTSxFQUFFO0FBTEg7QUFOVCxJQVJGLENBREY7QUF5QkQsQ0F0Q00iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldFBhZGRpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGludGVyZmFjZSBJWW91VHViZVByb3BzIHtcbiAgLyoqIFlvdVR1YmUgaWQgKi9cbiAgeW91VHViZUlkOiBzdHJpbmdcbiAgLyoqIEFzcGVjdCByYXRpbyBvZiBZb3VUdWJlIHZpZGVvICovXG4gIGFzcGVjdFJhdGlvPzogJzE6MScgfCAnMTY6OScgfCAnNDozJyB8ICczOjInIHwgJzg6NSdcbiAgLyoqIFNraXAgdG8gYSB0aW1lIGluIHRoZSB2aWRlbyAqL1xuICBza2lwVG86IHtcbiAgICBoPzogbnVtYmVyXG4gICAgbTogbnVtYmVyXG4gICAgczogbnVtYmVyXG4gIH1cbiAgLyoqIEF1dG8gcGxheSB0aGUgdmlkZW8gKi9cbiAgYXV0b1BsYXk6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IFlvdVR1YmU6IEZ1bmN0aW9uQ29tcG9uZW50PElZb3VUdWJlUHJvcHM+ID0gKHtcbiAgeW91VHViZUlkLFxuICBhc3BlY3RSYXRpbyA9ICcxNjo5JyxcbiAgYXV0b1BsYXkgPSBmYWxzZSxcbiAgc2tpcFRvID0geyBoOiAwLCBtOiAwLCBzOiAwIH1cbn06IElZb3VUdWJlUHJvcHMpID0+IHtcbiAgY29uc3QgeyBoLCBtLCBzIH0gPSBza2lwVG9cblxuICBjb25zdCB0SCA9IGghICogNjBcbiAgY29uc3QgdE0gPSBtICogNjBcblxuICBjb25zdCBzdGFydFRpbWUgPSB0SCArIHRNICsgc1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwieW91dHViZS1tZHgtZW1iZWRcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIC4uLmdldFBhZGRpbmcoYXNwZWN0UmF0aW8pXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxpZnJhbWVcbiAgICAgICAgdGl0bGU9e2B5b3VUdWJlLSR7eW91VHViZUlkfWB9XG4gICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7eW91VHViZUlkfT8mYXV0b3BsYXk9JHthdXRvUGxheX0mc3RhcnQ9JHtzdGFydFRpbWV9YH1cbiAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiXG4gICAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ==