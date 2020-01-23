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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1lvdVR1YmUvWW91VHViZS50c3giXSwibmFtZXMiOlsiWW91VHViZSIsInlvdVR1YmVJZCIsImFzcGVjdFJhdGlvIiwiYXV0b1BsYXkiLCJza2lwVG8iLCJoIiwibSIsInMiLCJ0SCIsInRNIiwic3RhcnRUaW1lIiwicG9zaXRpb24iLCJ3aWR0aCIsInRvcCIsImxlZnQiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7OztBQWlCTyxJQUFNQSxPQUF5QyxHQUFHLFNBQTVDQSxPQUE0QyxPQUtwQztBQUFBLE1BSm5CQyxTQUltQixRQUpuQkEsU0FJbUI7QUFBQSw4QkFIbkJDLFdBR21CO0FBQUEsTUFIbkJBLFdBR21CLGlDQUhMLE1BR0s7QUFBQSwyQkFGbkJDLFFBRW1CO0FBQUEsTUFGbkJBLFFBRW1CLDhCQUZSLEtBRVE7QUFBQSx5QkFEbkJDLE1BQ21CO0FBQUEsTUFEbkJBLE1BQ21CLDRCQURWO0FBQUVDLElBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLElBQUFBLENBQUMsRUFBRSxDQUFYO0FBQWNDLElBQUFBLENBQUMsRUFBRTtBQUFqQixHQUNVO0FBQUEsTUFDWEYsQ0FEVyxHQUNDRCxNQURELENBQ1hDLENBRFc7QUFBQSxNQUNSQyxDQURRLEdBQ0NGLE1BREQsQ0FDUkUsQ0FEUTtBQUFBLE1BQ0xDLENBREssR0FDQ0gsTUFERCxDQUNMRyxDQURLO0FBR25CLE1BQU1DLEVBQUUsR0FBR0gsQ0FBQyxHQUFJLEVBQWhCO0FBQ0EsTUFBTUksRUFBRSxHQUFHSCxDQUFDLEdBQUcsRUFBZjtBQUVBLE1BQU1JLFNBQVMsR0FBR0YsRUFBRSxHQUFHQyxFQUFMLEdBQVVGLENBQTVCO0FBRUEsU0FDRTtBQUNFLElBQUEsU0FBUyxFQUFDLG1CQURaO0FBRUUsSUFBQSxLQUFLO0FBQ0hJLE1BQUFBLFFBQVEsRUFBRSxVQURQO0FBRUhDLE1BQUFBLEtBQUssRUFBRTtBQUZKLE9BR0EsdUJBQVdWLFdBQVgsQ0FIQTtBQUZQLEtBUUU7QUFDRSxJQUFBLEtBQUssb0JBQWFELFNBQWIsQ0FEUDtBQUVFLElBQUEsR0FBRywwQ0FBbUNBLFNBQW5DLHdCQUEwREUsUUFBMUQsb0JBQTRFTyxTQUE1RSxDQUZMO0FBR0UsSUFBQSxXQUFXLEVBQUMsR0FIZDtBQUlFLElBQUEsS0FBSyxFQUFDLHlFQUpSO0FBS0UsSUFBQSxlQUFlLE1BTGpCO0FBTUUsSUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsUUFBUSxFQUFFLFVBREw7QUFFTEUsTUFBQUEsR0FBRyxFQUFFLENBRkE7QUFHTEMsTUFBQUEsSUFBSSxFQUFFLENBSEQ7QUFJTEYsTUFBQUEsS0FBSyxFQUFFLE1BSkY7QUFLTEcsTUFBQUEsTUFBTSxFQUFFO0FBTEg7QUFOVCxJQVJGLENBREY7QUF5QkQsQ0F0Q00iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgZ2V0UGFkZGluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElZb3VUdWJlUHJvcHMge1xuICAvKiogWW91VHViZSBpZCAqL1xuICB5b3VUdWJlSWQ6IHN0cmluZ1xuICAvKiogQXNwZWN0IHJhdGlvIG9mIFlvdVR1YmUgdmlkZW8gKi9cbiAgYXNwZWN0UmF0aW8/OiAnMToxJyB8ICcxNjo5JyB8ICc0OjMnIHwgJzM6MicgfCAnODo1J1xuICAvKiogU2tpcCB0byBhIHRpbWUgaW4gdGhlIHZpZGVvICovXG4gIHNraXBUbzoge1xuICAgIGg/OiBudW1iZXJcbiAgICBtOiBudW1iZXJcbiAgICBzOiBudW1iZXJcbiAgfVxuICAvKiogQXV0byBwbGF5IHRoZSB2aWRlbyAqL1xuICBhdXRvUGxheTogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgWW91VHViZTogRnVuY3Rpb25Db21wb25lbnQ8SVlvdVR1YmVQcm9wcz4gPSAoe1xuICB5b3VUdWJlSWQsXG4gIGFzcGVjdFJhdGlvID0gJzE2OjknLFxuICBhdXRvUGxheSA9IGZhbHNlLFxuICBza2lwVG8gPSB7IGg6IDAsIG06IDAsIHM6IDAgfVxufTogSVlvdVR1YmVQcm9wcykgPT4ge1xuICBjb25zdCB7IGgsIG0sIHMgfSA9IHNraXBUb1xuXG4gIGNvbnN0IHRIID0gaCEgKiA2MFxuICBjb25zdCB0TSA9IG0gKiA2MFxuXG4gIGNvbnN0IHN0YXJ0VGltZSA9IHRIICsgdE0gKyBzXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJ5b3V0dWJlLW1keC1lbWJlZFwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgLi4uZ2V0UGFkZGluZyhhc3BlY3RSYXRpbylcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGlmcmFtZVxuICAgICAgICB0aXRsZT17YHlvdVR1YmUtJHt5b3VUdWJlSWR9YH1cbiAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt5b3VUdWJlSWR9PyZhdXRvcGxheT0ke2F1dG9QbGF5fSZzdGFydD0ke3N0YXJ0VGltZX1gfVxuICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcbiAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19