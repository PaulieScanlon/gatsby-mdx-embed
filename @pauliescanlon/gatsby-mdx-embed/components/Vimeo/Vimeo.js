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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1ZpbWVvL1ZpbWVvLnRzeCJdLCJuYW1lcyI6WyJWaW1lbyIsInZpbWVvSWQiLCJhdXRvUGxheSIsInNraXBUbyIsImgiLCJtIiwicyIsInBvc2l0aW9uIiwid2lkdGgiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFlTyxJQUFNQSxLQUFxQyxHQUFHLFNBQXhDQSxLQUF3QyxPQUlsQztBQUFBLE1BSGpCQyxPQUdpQixRQUhqQkEsT0FHaUI7QUFBQSwyQkFGakJDLFFBRWlCO0FBQUEsTUFGakJBLFFBRWlCLDhCQUZOLEtBRU07QUFBQSx5QkFEakJDLE1BQ2lCO0FBQUEsTUFEakJBLE1BQ2lCLDRCQURSO0FBQUVDLElBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLElBQUFBLENBQUMsRUFBRSxDQUFYO0FBQWNDLElBQUFBLENBQUMsRUFBRTtBQUFqQixHQUNRO0FBQUEsTUFDVEYsQ0FEUyxHQUNHRCxNQURILENBQ1RDLENBRFM7QUFBQSxNQUNOQyxDQURNLEdBQ0dGLE1BREgsQ0FDTkUsQ0FETTtBQUFBLE1BQ0hDLENBREcsR0FDR0gsTUFESCxDQUNIRyxDQURHO0FBR2pCLFNBQ0U7QUFDRSxJQUFBLFNBQVMsRUFBQyxpQkFEWjtBQUVFLElBQUEsS0FBSztBQUNIQyxNQUFBQSxRQUFRLEVBQUUsVUFEUDtBQUVIQyxNQUFBQSxLQUFLLEVBQUU7QUFGSixPQUdBLHVCQUFXLE1BQVgsQ0FIQTtBQUZQLEtBUUU7QUFDRSxJQUFBLEtBQUssa0JBQVdQLE9BQVgsQ0FEUDtBQUVFLElBQUEsR0FBRywyQ0FBb0NBLE9BQXBDLHVCQUF3REMsUUFBeEQsZ0JBQXNFRSxDQUF0RSxjQUEyRUMsQ0FBM0UsY0FBZ0ZDLENBQWhGLE1BRkw7QUFHRSxJQUFBLFdBQVcsRUFBQyxHQUhkO0FBSUUsSUFBQSxLQUFLLEVBQUMsc0JBSlI7QUFLRSxJQUFBLGVBQWUsTUFMakI7QUFNRSxJQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxRQUFRLEVBQUUsVUFETDtBQUVMRSxNQUFBQSxHQUFHLEVBQUUsQ0FGQTtBQUdMQyxNQUFBQSxJQUFJLEVBQUUsQ0FIRDtBQUlMRixNQUFBQSxLQUFLLEVBQUUsTUFKRjtBQUtMRyxNQUFBQSxNQUFNLEVBQUU7QUFMSDtBQU5ULElBUkYsQ0FERjtBQXlCRCxDQWhDTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0UGFkZGluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElWaW1lb1Byb3BzIHtcbiAgLyoqIFZpbWVvIGlkICovXG4gIHZpbWVvSWQ6IHN0cmluZ1xuICAvKiogU2tpcCB0byBhIHRpbWUgaW4gdGhlIHZpZGVvICovXG4gIHNraXBUbzoge1xuICAgIGg/OiBudW1iZXJcbiAgICBtOiBudW1iZXJcbiAgICBzOiBudW1iZXJcbiAgfVxuICAvKiogQXV0byBwbGF5IHRoZSB2aWRlbyAqL1xuICBhdXRvUGxheTogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgVmltZW86IEZ1bmN0aW9uQ29tcG9uZW50PElWaW1lb1Byb3BzPiA9ICh7XG4gIHZpbWVvSWQsXG4gIGF1dG9QbGF5ID0gZmFsc2UsXG4gIHNraXBUbyA9IHsgaDogMCwgbTogMCwgczogMCB9XG59OiBJVmltZW9Qcm9wcykgPT4ge1xuICBjb25zdCB7IGgsIG0sIHMgfSA9IHNraXBUb1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwidmltZW8tbWR4LWVtYmVkXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAuLi5nZXRQYWRkaW5nKCcxNjo5JylcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGlmcmFtZVxuICAgICAgICB0aXRsZT17YHZpbWVvLSR7dmltZW9JZH1gfVxuICAgICAgICBzcmM9e2BodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vJHt2aW1lb0lkfT9hdXRvcGxheT0ke2F1dG9QbGF5fSN0PSR7aH1oJHttfW0ke3N9c2B9XG4gICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgIGFsbG93PVwiYXV0b3BsYXk7IGZ1bGxzY3JlZW5cIlxuICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0=