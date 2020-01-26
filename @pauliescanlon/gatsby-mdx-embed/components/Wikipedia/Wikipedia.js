"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wikipedia = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Wikipedia = function Wikipedia(_ref) {
  var wikipediaLink = _ref.wikipediaLink,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 600 : _ref$height;

  var _useState = (0, _react.useState)({
    isLoading: true,
    hasError: false,
    body: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      wikiResponse = _useState2[0],
      setWikiResponse = _useState2[1];

  var wikipediaEmbedUrl = "https://en.wikipedia.org/api/rest_v1/page/html/".concat(wikipediaLink);
  (0, _react.useEffect)(function () {
    fetch(wikipediaEmbedUrl).then(function (response) {
      return response.text();
    }).then(function (response) {
      if (response) {
        setWikiResponse({
          isLoading: false,
          hasError: false,
          body: response.replace(/<a rel="mw:WikiLink"/g, '<a target="_blank" rel="mw:WikiLink"')
        });
      }

      if (!response) {
        setWikiResponse({
          isLoading: false,
          hasError: true
        });
      }
    });
  }, [wikipediaEmbedUrl]);
  return _react.default.createElement(_react.Fragment, null, !wikiResponse.isLoading && _react.default.createElement("iframe", {
    className: "wikipedia-mdx-embed",
    title: wikipediaLink,
    frameBorder: "0",
    style: {
      width: '100%',
      minHeight: height
    },
    srcDoc: wikiResponse.body
  }));
};

exports.Wikipedia = Wikipedia;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpa2lwZWRpYS9XaWtpcGVkaWEudHN4Il0sIm5hbWVzIjpbIldpa2lwZWRpYSIsIndpa2lwZWRpYUxpbmsiLCJoZWlnaHQiLCJpc0xvYWRpbmciLCJoYXNFcnJvciIsImJvZHkiLCJ3aWtpUmVzcG9uc2UiLCJzZXRXaWtpUmVzcG9uc2UiLCJ3aWtpcGVkaWFFbWJlZFVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsInJlcGxhY2UiLCJ3aWR0aCIsIm1pbkhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBa0JPLElBQU1BLFNBQTZDLEdBQUcsU0FBaERBLFNBQWdELE9BR3RDO0FBQUEsTUFGckJDLGFBRXFCLFFBRnJCQSxhQUVxQjtBQUFBLHlCQURyQkMsTUFDcUI7QUFBQSxNQURyQkEsTUFDcUIsNEJBRFosR0FDWTs7QUFBQSxrQkFDbUIscUJBQTBCO0FBQ2hFQyxJQUFBQSxTQUFTLEVBQUUsSUFEcUQ7QUFFaEVDLElBQUFBLFFBQVEsRUFBRSxLQUZzRDtBQUdoRUMsSUFBQUEsSUFBSSxFQUFFO0FBSDBELEdBQTFCLENBRG5CO0FBQUE7QUFBQSxNQUNkQyxZQURjO0FBQUEsTUFDQUMsZUFEQTs7QUFPckIsTUFBTUMsaUJBQWlCLDREQUFxRFAsYUFBckQsQ0FBdkI7QUFFQSx3QkFBVSxZQUFNO0FBQ2RRLElBQUFBLEtBQUssQ0FBQ0QsaUJBQUQsQ0FBTCxDQUNHRSxJQURILENBQ1EsVUFBQUMsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsS0FEaEIsRUFFR0YsSUFGSCxDQUVRLFVBQUFDLFFBQVEsRUFBSTtBQUNoQixVQUFJQSxRQUFKLEVBQWM7QUFDWkosUUFBQUEsZUFBZSxDQUFDO0FBQ2RKLFVBQUFBLFNBQVMsRUFBRSxLQURHO0FBRWRDLFVBQUFBLFFBQVEsRUFBRSxLQUZJO0FBR2RDLFVBQUFBLElBQUksRUFBRU0sUUFBUSxDQUFDRSxPQUFULENBQ0osdUJBREksRUFFSixzQ0FGSTtBQUhRLFNBQUQsQ0FBZjtBQVFEOztBQUVELFVBQUksQ0FBQ0YsUUFBTCxFQUFlO0FBQ2JKLFFBQUFBLGVBQWUsQ0FBQztBQUNkSixVQUFBQSxTQUFTLEVBQUUsS0FERztBQUVkQyxVQUFBQSxRQUFRLEVBQUU7QUFGSSxTQUFELENBQWY7QUFJRDtBQUNGLEtBcEJIO0FBcUJELEdBdEJELEVBc0JHLENBQUNJLGlCQUFELENBdEJIO0FBd0JBLFNBQ0UsNkJBQUMsZUFBRCxRQUNHLENBQUNGLFlBQVksQ0FBQ0gsU0FBZCxJQUNDO0FBQ0UsSUFBQSxTQUFTLEVBQUMscUJBRFo7QUFFRSxJQUFBLEtBQUssRUFBRUYsYUFGVDtBQUdFLElBQUEsV0FBVyxFQUFDLEdBSGQ7QUFJRSxJQUFBLEtBQUssRUFBRTtBQUNMYSxNQUFBQSxLQUFLLEVBQUUsTUFERjtBQUVMQyxNQUFBQSxTQUFTLEVBQUViO0FBRk4sS0FKVDtBQVFFLElBQUEsTUFBTSxFQUFFSSxZQUFZLENBQUNEO0FBUnZCLElBRkosQ0FERjtBQWdCRCxDQXBETSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCwgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGludGVyZmFjZSBJV2lraXBlZGlhUHJvcHMge1xuICAvKiogV2lraXBlZGlhIHBhZ2UgbGluayAqL1xuICB3aWtpcGVkaWFMaW5rOiBzdHJpbmdcbiAgLyoqIEhlaWdodCBmb3IgdGhlIGlGcmFtZSAqL1xuICBoZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElXaWtpcGVkaWFTdGF0ZSB7XG4gIC8qKiBMb2FkaW5nIHN0YXR1cyAqL1xuICBpc0xvYWRpbmc6IGJvb2xlYW5cbiAgLyoqIEVycm9yIHN0YXR1cyAqL1xuICBoYXNFcnJvcjogYm9vbGVhblxuICAvKiogSFRNTCByZXNwb25zZSBmcm9tIGFwaSAgKi9cbiAgYm9keT86IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgV2lraXBlZGlhOiBGdW5jdGlvbkNvbXBvbmVudDxJV2lraXBlZGlhUHJvcHM+ID0gKHtcbiAgd2lraXBlZGlhTGluayxcbiAgaGVpZ2h0ID0gNjAwXG59OiBJV2lraXBlZGlhUHJvcHMpID0+IHtcbiAgY29uc3QgW3dpa2lSZXNwb25zZSwgc2V0V2lraVJlc3BvbnNlXSA9IHVzZVN0YXRlPElXaWtpcGVkaWFTdGF0ZT4oe1xuICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICBoYXNFcnJvcjogZmFsc2UsXG4gICAgYm9keTogJydcbiAgfSlcblxuICBjb25zdCB3aWtpcGVkaWFFbWJlZFVybCA9IGBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvYXBpL3Jlc3RfdjEvcGFnZS9odG1sLyR7d2lraXBlZGlhTGlua31gXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCh3aWtpcGVkaWFFbWJlZFVybClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgc2V0V2lraVJlc3BvbnNlKHtcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBoYXNFcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBib2R5OiByZXNwb25zZS5yZXBsYWNlKFxuICAgICAgICAgICAgICAvPGEgcmVsPVwibXc6V2lraUxpbmtcIi9nLFxuICAgICAgICAgICAgICAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibXc6V2lraUxpbmtcIidcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgIHNldFdpa2lSZXNwb25zZSh7XG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgaGFzRXJyb3I6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICB9LCBbd2lraXBlZGlhRW1iZWRVcmxdKVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgeyF3aWtpUmVzcG9uc2UuaXNMb2FkaW5nICYmIChcbiAgICAgICAgPGlmcmFtZVxuICAgICAgICAgIGNsYXNzTmFtZT1cIndpa2lwZWRpYS1tZHgtZW1iZWRcIlxuICAgICAgICAgIHRpdGxlPXt3aWtpcGVkaWFMaW5rfVxuICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IGhlaWdodFxuICAgICAgICAgIH19XG4gICAgICAgICAgc3JjRG9jPXt3aWtpUmVzcG9uc2UuYm9keX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuIl19