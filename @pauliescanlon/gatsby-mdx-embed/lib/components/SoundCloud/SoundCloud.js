"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SoundCloud = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SoundCloud = function SoundCloud(_ref) {
  var soundCloudLink = _ref.soundCloudLink,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '100%' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 'auto' : _ref$height,
      _ref$autoPlay = _ref.autoPlay,
      autoPlay = _ref$autoPlay === void 0 ? false : _ref$autoPlay,
      _ref$visual = _ref.visual,
      visual = _ref$visual === void 0 ? false : _ref$visual,
      color = _ref.color;
  return _react.default.createElement("iframe", {
    title: "sound-cloud-".concat(soundCloudLink),
    className: "soundcloud-mdx-embed",
    width: width,
    height: height,
    scrolling: "no",
    frameBorder: "no",
    allow: "autoplay",
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/".concat(soundCloudLink, "&color=%23").concat(color, "&auto_play=").concat(autoPlay, "&visual=").concat(visual)
  });
};

exports.SoundCloud = SoundCloud;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NvdW5kQ2xvdWQvU291bmRDbG91ZC50c3giXSwibmFtZXMiOlsiU291bmRDbG91ZCIsInNvdW5kQ2xvdWRMaW5rIiwid2lkdGgiLCJoZWlnaHQiLCJhdXRvUGxheSIsInZpc3VhbCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFpQk8sSUFBTUEsVUFBK0MsR0FBRyxTQUFsREEsVUFBa0Q7QUFBQSxNQUM3REMsY0FENkQsUUFDN0RBLGNBRDZEO0FBQUEsd0JBRTdEQyxLQUY2RDtBQUFBLE1BRTdEQSxLQUY2RCwyQkFFckQsTUFGcUQ7QUFBQSx5QkFHN0RDLE1BSDZEO0FBQUEsTUFHN0RBLE1BSDZELDRCQUdwRCxNQUhvRDtBQUFBLDJCQUk3REMsUUFKNkQ7QUFBQSxNQUk3REEsUUFKNkQsOEJBSWxELEtBSmtEO0FBQUEseUJBSzdEQyxNQUw2RDtBQUFBLE1BSzdEQSxNQUw2RCw0QkFLcEQsS0FMb0Q7QUFBQSxNQU03REMsS0FONkQsUUFNN0RBLEtBTjZEO0FBQUEsU0FRN0Q7QUFDRSxJQUFBLEtBQUssd0JBQWlCTCxjQUFqQixDQURQO0FBRUUsSUFBQSxTQUFTLEVBQUMsc0JBRlo7QUFHRSxJQUFBLEtBQUssRUFBRUMsS0FIVDtBQUlFLElBQUEsTUFBTSxFQUFFQyxNQUpWO0FBS0UsSUFBQSxTQUFTLEVBQUMsSUFMWjtBQU1FLElBQUEsV0FBVyxFQUFDLElBTmQ7QUFPRSxJQUFBLEtBQUssRUFBQyxVQVBSO0FBUUUsSUFBQSxHQUFHLDhFQUF1RUYsY0FBdkUsdUJBQWtHSyxLQUFsRyx3QkFBcUhGLFFBQXJILHFCQUF3SUMsTUFBeEk7QUFSTCxJQVI2RDtBQUFBLENBQXhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNvdW5kQ2xvdWRQcm9wcyB7XG4gIC8qKiBTb3VuZENsb3VkIGxpbmsgKi9cbiAgc291bmRDbG91ZExpbms6IHN0cmluZ1xuICAvKiogQXV0byBwbGF5IGF1ZGlvICovXG4gIGF1dG9QbGF5PzogYm9vbGVhblxuICAvKiogU2hvdyB0aGUgdmlzdWFsIGFydHdvcmsgKi9cbiAgdmlzdWFsPzogYm9vbGVhblxuICAvKiogV2lkdGggZm9yIHRoZSBpRnJhbWUgKi9cbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmdcbiAgLyoqIEhlaWdodCBmb3IgdGhlIGlGcmFtZSAqL1xuICBoZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmdcbiAgLyoqIFRoZSBjb2xvciBvZiB0aGUgcGxheSBidXR0b24gd2l0aG91dCB0aGUgIyAqL1xuICBjb2xvcj86IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgU291bmRDbG91ZDogRnVuY3Rpb25Db21wb25lbnQ8SVNvdW5kQ2xvdWRQcm9wcz4gPSAoe1xuICBzb3VuZENsb3VkTGluayxcbiAgd2lkdGggPSAnMTAwJScsXG4gIGhlaWdodCA9ICdhdXRvJyxcbiAgYXV0b1BsYXkgPSBmYWxzZSxcbiAgdmlzdWFsID0gZmFsc2UsXG4gIGNvbG9yXG59OiBJU291bmRDbG91ZFByb3BzKSA9PiAoXG4gIDxpZnJhbWVcbiAgICB0aXRsZT17YHNvdW5kLWNsb3VkLSR7c291bmRDbG91ZExpbmt9YH1cbiAgICBjbGFzc05hbWU9XCJzb3VuZGNsb3VkLW1keC1lbWJlZFwiXG4gICAgd2lkdGg9e3dpZHRofVxuICAgIGhlaWdodD17aGVpZ2h0fVxuICAgIHNjcm9sbGluZz1cIm5vXCJcbiAgICBmcmFtZUJvcmRlcj1cIm5vXCJcbiAgICBhbGxvdz1cImF1dG9wbGF5XCJcbiAgICBzcmM9e2BodHRwczovL3cuc291bmRjbG91ZC5jb20vcGxheWVyLz91cmw9aHR0cHMlM0EvL2FwaS5zb3VuZGNsb3VkLmNvbS8ke3NvdW5kQ2xvdWRMaW5rfSZjb2xvcj0lMjMke2NvbG9yfSZhdXRvX3BsYXk9JHthdXRvUGxheX0mdmlzdWFsPSR7dmlzdWFsfWB9XG4gIC8+XG4pXG4iXX0=