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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1R3aXRjaC9Ud2l0Y2gudHN4Il0sIm5hbWVzIjpbIlR3aXRjaCIsInR3aXRjaElkIiwiYXV0b1BsYXkiLCJza2lwVG8iLCJoIiwibSIsInMiLCJwb3NpdGlvbiIsIndpZHRoIiwidG9wIiwibGVmdCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7O0FBZU8sSUFBTUEsTUFBdUMsR0FBRyxTQUExQ0EsTUFBMEMsT0FJbkM7QUFBQSxNQUhsQkMsUUFHa0IsUUFIbEJBLFFBR2tCO0FBQUEsMkJBRmxCQyxRQUVrQjtBQUFBLE1BRmxCQSxRQUVrQiw4QkFGUCxLQUVPO0FBQUEseUJBRGxCQyxNQUNrQjtBQUFBLE1BRGxCQSxNQUNrQiw0QkFEVDtBQUFFQyxJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUUsQ0FBWDtBQUFjQyxJQUFBQSxDQUFDLEVBQUU7QUFBakIsR0FDUztBQUFBLE1BQ1ZGLENBRFUsR0FDRUQsTUFERixDQUNWQyxDQURVO0FBQUEsTUFDUEMsQ0FETyxHQUNFRixNQURGLENBQ1BFLENBRE87QUFBQSxNQUNKQyxDQURJLEdBQ0VILE1BREYsQ0FDSkcsQ0FESTtBQUdsQixTQUNFO0FBQ0UsSUFBQSxTQUFTLEVBQUMsa0JBRFo7QUFFRSxJQUFBLEtBQUs7QUFDSEMsTUFBQUEsUUFBUSxFQUFFLFVBRFA7QUFFSEMsTUFBQUEsS0FBSyxFQUFFO0FBRkosT0FHQSx1QkFBVyxNQUFYLENBSEE7QUFGUCxLQVFFO0FBQ0UsSUFBQSxLQUFLLG1CQUFZUCxRQUFaLENBRFA7QUFFRSxJQUFBLEdBQUcsK0NBQXdDQyxRQUF4QyxnQkFBc0RFLENBQXRELGNBQTJEQyxDQUEzRCxjQUFnRUMsQ0FBaEUsc0JBQTZFTCxRQUE3RSxDQUZMO0FBR0UsSUFBQSxXQUFXLEVBQUMsR0FIZDtBQUlFLElBQUEsS0FBSyxFQUFDLHNCQUpSO0FBS0UsSUFBQSxlQUFlLE1BTGpCO0FBTUUsSUFBQSxLQUFLLEVBQUU7QUFDTE0sTUFBQUEsUUFBUSxFQUFFLFVBREw7QUFFTEUsTUFBQUEsR0FBRyxFQUFFLENBRkE7QUFHTEMsTUFBQUEsSUFBSSxFQUFFLENBSEQ7QUFJTEYsTUFBQUEsS0FBSyxFQUFFLE1BSkY7QUFLTEcsTUFBQUEsTUFBTSxFQUFFO0FBTEg7QUFOVCxJQVJGLENBREY7QUF5QkQsQ0FoQ00iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgZ2V0UGFkZGluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElUd2l0Y2hQcm9wcyB7XG4gIC8qKiBUd2l0Y2ggaWQgKi9cbiAgdHdpdGNoSWQ6IHN0cmluZ1xuICAvKiogU2tpcCB0byBhIHRpbWUgaW4gdGhlIHZpZGVvICovXG4gIHNraXBUbzoge1xuICAgIGg/OiBudW1iZXJcbiAgICBtOiBudW1iZXJcbiAgICBzOiBudW1iZXJcbiAgfVxuICAvKiogQXV0byBwbGF5IHRoZSB2aWRlbyAqL1xuICBhdXRvUGxheTogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgVHdpdGNoOiBGdW5jdGlvbkNvbXBvbmVudDxJVHdpdGNoUHJvcHM+ID0gKHtcbiAgdHdpdGNoSWQsXG4gIGF1dG9QbGF5ID0gZmFsc2UsXG4gIHNraXBUbyA9IHsgaDogMCwgbTogMCwgczogMCB9XG59OiBJVHdpdGNoUHJvcHMpID0+IHtcbiAgY29uc3QgeyBoLCBtLCBzIH0gPSBza2lwVG9cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cInR3aXRjaC1tZHgtZW1iZWRcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIC4uLmdldFBhZGRpbmcoJzE2OjknKVxuICAgICAgfX1cbiAgICA+XG4gICAgICA8aWZyYW1lXG4gICAgICAgIHRpdGxlPXtgdHdpdGNoLSR7dHdpdGNoSWR9YH1cbiAgICAgICAgc3JjPXtgaHR0cHM6Ly9wbGF5ZXIudHdpdGNoLnR2Lz9hdXRvcGxheT0ke2F1dG9QbGF5fSZ0PSR7aH1oJHttfW0ke3N9cyZ2aWRlbz12JHt0d2l0Y2hJZH1gfVxuICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICBhbGxvdz1cImF1dG9wbGF5OyBmdWxsc2NyZWVuXCJcbiAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19