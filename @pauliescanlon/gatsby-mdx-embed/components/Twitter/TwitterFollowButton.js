"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwitterFollowButton = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TwitterFollowButton = function TwitterFollowButton(_ref) {
  var username = _ref.username,
      _ref$showFollowers = _ref.showFollowers,
      showFollowers = _ref$showFollowers === void 0 ? false : _ref$showFollowers,
      _ref$showUsername = _ref.showUsername,
      showUsername = _ref$showUsername === void 0 ? true : _ref$showUsername,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size;
  return _react.default.createElement("a", {
    href: "https://twitter.com/".concat(username, "?ref_src=twsrc%5Etfw"),
    className: "twitter-follow-button twitter-follow-button-mdx-embed",
    "data-show-count": showFollowers,
    "data-show-screen-name": showUsername,
    "data-size": size
  }, "Follow @".concat(username));
};

exports.TwitterFollowButton = TwitterFollowButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1R3aXR0ZXIvVHdpdHRlckZvbGxvd0J1dHRvbi50c3giXSwibmFtZXMiOlsiVHdpdHRlckZvbGxvd0J1dHRvbiIsInVzZXJuYW1lIiwic2hvd0ZvbGxvd2VycyIsInNob3dVc2VybmFtZSIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQWFPLElBQU1BLG1CQUFpRSxHQUFHLFNBQXBFQSxtQkFBb0U7QUFBQSxNQUMvRUMsUUFEK0UsUUFDL0VBLFFBRCtFO0FBQUEsZ0NBRS9FQyxhQUYrRTtBQUFBLE1BRS9FQSxhQUYrRSxtQ0FFL0QsS0FGK0Q7QUFBQSwrQkFHL0VDLFlBSCtFO0FBQUEsTUFHL0VBLFlBSCtFLGtDQUdoRSxJQUhnRTtBQUFBLHVCQUkvRUMsSUFKK0U7QUFBQSxNQUkvRUEsSUFKK0UsMEJBSXhFLE9BSndFO0FBQUEsU0FNL0U7QUFDRSxJQUFBLElBQUksZ0NBQXlCSCxRQUF6Qix5QkFETjtBQUVFLElBQUEsU0FBUyxFQUFDLHVEQUZaO0FBR0UsdUJBQWlCQyxhQUhuQjtBQUlFLDZCQUF1QkMsWUFKekI7QUFLRSxpQkFBV0M7QUFMYix1QkFNYUgsUUFOYixFQU4rRTtBQUFBLENBQTFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVR3aXR0ZXJGb2xsb3dCdXR0b25Qcm9wcyB7XG4gIC8qKiBUd2l0dGVyIHVzZXJuYW1lICovXG4gIHVzZXJuYW1lOiBzdHJpbmdcbiAgLyoqIFNob3cgdGhlIGZvbGxvd2VyIGNvdW50ICovXG4gIHNob3dGb2xsb3dlcnM/OiBib29sZWFuXG4gIC8qKiBTaG93IHRoZSB1c2VybmFtZSAqL1xuICBzaG93VXNlcm5hbWU/OiBib29sZWFuXG4gIC8qKiBUaGUgc2l6ZSBvZiB0aGUgYnV0dG9uICovXG4gIHNpemU/OiAnbGFyZ2UnIHwgJ3NtYWxsJ1xufVxuXG5leHBvcnQgY29uc3QgVHdpdHRlckZvbGxvd0J1dHRvbjogRnVuY3Rpb25Db21wb25lbnQ8SVR3aXR0ZXJGb2xsb3dCdXR0b25Qcm9wcz4gPSAoe1xuICB1c2VybmFtZSxcbiAgc2hvd0ZvbGxvd2VycyA9IGZhbHNlLFxuICBzaG93VXNlcm5hbWUgPSB0cnVlLFxuICBzaXplID0gJ3NtYWxsJ1xufTogSVR3aXR0ZXJGb2xsb3dCdXR0b25Qcm9wcykgPT4gKFxuICA8YVxuICAgIGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tLyR7dXNlcm5hbWV9P3JlZl9zcmM9dHdzcmMlNUV0ZndgfVxuICAgIGNsYXNzTmFtZT1cInR3aXR0ZXItZm9sbG93LWJ1dHRvbiB0d2l0dGVyLWZvbGxvdy1idXR0b24tbWR4LWVtYmVkXCJcbiAgICBkYXRhLXNob3ctY291bnQ9e3Nob3dGb2xsb3dlcnN9XG4gICAgZGF0YS1zaG93LXNjcmVlbi1uYW1lPXtzaG93VXNlcm5hbWV9XG4gICAgZGF0YS1zaXplPXtzaXplfVxuICA+e2BGb2xsb3cgQCR7dXNlcm5hbWV9YH08L2E+XG4pXG4iXX0=