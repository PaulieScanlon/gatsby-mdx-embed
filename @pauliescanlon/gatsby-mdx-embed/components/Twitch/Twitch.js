"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Twitch = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Twitch = function Twitch(_ref) {
  var twitchId = _ref.twitchId,
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
    className: "twitch-mdx-embed",
    style: _objectSpread({
      position: 'relative',
      width: '100%'
    }, (0, _utils.getPadding)('16:9'))
  }, _react.default.createElement("iframe", {
    title: "twitch-".concat(twitchId),
    src: "https://player.twitch.tv/?autoplay=".concat(autoPlay, "&t=").concat(h, "h").concat(m, "m").concat(s, "s&video=v").concat(twitchId),
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

exports.Twitch = Twitch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1R3aXRjaC9Ud2l0Y2gudHN4Il0sIm5hbWVzIjpbIlR3aXRjaCIsInR3aXRjaElkIiwiYXV0b1BsYXkiLCJza2lwVG8iLCJoIiwibSIsInMiLCJwb3NpdGlvbiIsIndpZHRoIiwidG9wIiwibGVmdCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0FBZU8sSUFBTUEsTUFBdUMsR0FBRyxTQUExQ0EsTUFBMEMsT0FJbkM7QUFBQSxNQUhsQkMsUUFHa0IsUUFIbEJBLFFBR2tCO0FBQUEsMkJBRmxCQyxRQUVrQjtBQUFBLE1BRmxCQSxRQUVrQiw4QkFGUCxLQUVPO0FBQUEseUJBRGxCQyxNQUNrQjtBQUFBLE1BRGxCQSxNQUNrQiw0QkFEVDtBQUFFQyxJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUUsQ0FBWDtBQUFjQyxJQUFBQSxDQUFDLEVBQUU7QUFBakIsR0FDUztBQUFBLE1BQ1ZGLENBRFUsR0FDRUQsTUFERixDQUNWQyxDQURVO0FBQUEsTUFDUEMsQ0FETyxHQUNFRixNQURGLENBQ1BFLENBRE87QUFBQSxNQUNKQyxDQURJLEdBQ0VILE1BREYsQ0FDSkcsQ0FESTtBQUdsQixTQUNFO0FBQ0UsSUFBQSxTQUFTLEVBQUMsa0JBRFo7QUFFRSxJQUFBLEtBQUs7QUFDSEMsTUFBQUEsUUFBUSxFQUFFLFVBRFA7QUFFSEMsTUFBQUEsS0FBSyxFQUFFO0FBRkosT0FHQSx1QkFBVyxNQUFYLENBSEE7QUFGUCxLQVFFO0FBQ0UsSUFBQSxLQUFLLG1CQUFZUCxRQUFaLENBRFA7QUFFRSxJQUFBLEdBQUcsK0NBQXdDQyxRQUF4QyxnQkFBc0RFLENBQXRELGNBQTJEQyxDQUEzRCxjQUFnRUMsQ0FBaEUsc0JBQTZFTCxRQUE3RSxDQUZMO0FBR0UsSUFBQSxXQUFXLEVBQUMsR0FIZDtBQUlFLElBQUEsS0FBSyxFQUFDLHNCQUpSO0FBS0UsSUFBQSxlQUFlLE1BTGpCO0FBTUUsSUFBQSxLQUFLLEVBQUU7QUFDTE0sTUFBQUEsUUFBUSxFQUFFLFVBREw7QUFFTEUsTUFBQUEsR0FBRyxFQUFFLENBRkE7QUFHTEMsTUFBQUEsSUFBSSxFQUFFLENBSEQ7QUFJTEYsTUFBQUEsS0FBSyxFQUFFLE1BSkY7QUFLTEcsTUFBQUEsTUFBTSxFQUFFO0FBTEg7QUFOVCxJQVJGLENBREY7QUF5QkQsQ0FoQ00iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldFBhZGRpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGludGVyZmFjZSBJVHdpdGNoUHJvcHMge1xuICAvKiogVHdpdGNoIGlkICovXG4gIHR3aXRjaElkOiBzdHJpbmdcbiAgLyoqIFNraXAgdG8gYSB0aW1lIGluIHRoZSB2aWRlbyAqL1xuICBza2lwVG86IHtcbiAgICBoPzogbnVtYmVyXG4gICAgbTogbnVtYmVyXG4gICAgczogbnVtYmVyXG4gIH1cbiAgLyoqIEF1dG8gcGxheSB0aGUgdmlkZW8gKi9cbiAgYXV0b1BsYXk6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IFR3aXRjaDogRnVuY3Rpb25Db21wb25lbnQ8SVR3aXRjaFByb3BzPiA9ICh7XG4gIHR3aXRjaElkLFxuICBhdXRvUGxheSA9IGZhbHNlLFxuICBza2lwVG8gPSB7IGg6IDAsIG06IDAsIHM6IDAgfVxufTogSVR3aXRjaFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaCwgbSwgcyB9ID0gc2tpcFRvXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJ0d2l0Y2gtbWR4LWVtYmVkXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAuLi5nZXRQYWRkaW5nKCcxNjo5JylcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGlmcmFtZVxuICAgICAgICB0aXRsZT17YHR3aXRjaC0ke3R3aXRjaElkfWB9XG4gICAgICAgIHNyYz17YGh0dHBzOi8vcGxheWVyLnR3aXRjaC50di8/YXV0b3BsYXk9JHthdXRvUGxheX0mdD0ke2h9aCR7bX1tJHtzfXMmdmlkZW89diR7dHdpdGNoSWR9YH1cbiAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICAgICAgYWxsb3c9XCJhdXRvcGxheTsgZnVsbHNjcmVlblwiXG4gICAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ==