"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spotify = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spotify = function Spotify(_ref) {
  var spotifyLink = _ref.spotifyLink,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 320 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 380 : _ref$height;
  return _react.default.createElement("iframe", {
    title: "spotify-".concat(spotifyLink),
    className: "spotify-mdx-embed",
    src: "https://open.spotify.com/embed/".concat(spotifyLink),
    width: width,
    height: height,
    frameBorder: "0",
    allow: "encrypted-media"
  });
};

exports.Spotify = Spotify;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Nwb3RpZnkvU3BvdGlmeS50c3giXSwibmFtZXMiOlsiU3BvdGlmeSIsInNwb3RpZnlMaW5rIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQVdPLElBQU1BLE9BQXlDLEdBQUcsU0FBNUNBLE9BQTRDO0FBQUEsTUFDdkRDLFdBRHVELFFBQ3ZEQSxXQUR1RDtBQUFBLHdCQUV2REMsS0FGdUQ7QUFBQSxNQUV2REEsS0FGdUQsMkJBRS9DLEdBRitDO0FBQUEseUJBR3ZEQyxNQUh1RDtBQUFBLE1BR3ZEQSxNQUh1RCw0QkFHOUMsR0FIOEM7QUFBQSxTQUt2RDtBQUNFLElBQUEsS0FBSyxvQkFBYUYsV0FBYixDQURQO0FBRUUsSUFBQSxTQUFTLEVBQUMsbUJBRlo7QUFHRSxJQUFBLEdBQUcsMkNBQW9DQSxXQUFwQyxDQUhMO0FBSUUsSUFBQSxLQUFLLEVBQUVDLEtBSlQ7QUFLRSxJQUFBLE1BQU0sRUFBRUMsTUFMVjtBQU1FLElBQUEsV0FBVyxFQUFDLEdBTmQ7QUFPRSxJQUFBLEtBQUssRUFBQztBQVBSLElBTHVEO0FBQUEsQ0FBbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGludGVyZmFjZSBJU3BvdGlmeVByb3BzIHtcbiAgLyoqIFNwb3RpZnkgbGluayAqL1xuICBzcG90aWZ5TGluazogc3RyaW5nXG4gIC8qKiBXaWR0aCBmb3IgdGhlIGlGcmFtZSAqL1xuICB3aWR0aD86IG51bWJlciB8IHN0cmluZ1xuICAvKiogSGVpZ2h0IGZvciB0aGUgaUZyYW1lICovXG4gIGhlaWdodD86IG51bWJlciB8IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgU3BvdGlmeTogRnVuY3Rpb25Db21wb25lbnQ8SVNwb3RpZnlQcm9wcz4gPSAoe1xuICBzcG90aWZ5TGluayxcbiAgd2lkdGggPSAzMjAsXG4gIGhlaWdodCA9IDM4MFxufTogSVNwb3RpZnlQcm9wcykgPT4gKFxuICA8aWZyYW1lXG4gICAgdGl0bGU9e2BzcG90aWZ5LSR7c3BvdGlmeUxpbmt9YH1cbiAgICBjbGFzc05hbWU9XCJzcG90aWZ5LW1keC1lbWJlZFwiXG4gICAgc3JjPXtgaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2VtYmVkLyR7c3BvdGlmeUxpbmt9YH1cbiAgICB3aWR0aD17d2lkdGh9XG4gICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICBhbGxvdz1cImVuY3J5cHRlZC1tZWRpYVwiXG4gIC8+XG4pXG4iXX0=