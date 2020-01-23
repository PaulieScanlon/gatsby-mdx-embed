"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gist = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Gist = function Gist(_ref) {
  var gistLink = _ref.gistLink;

  var _useState = (0, _react.useState)({
    isLoading: true,
    div: '',
    file: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      gistResponse = _useState2[0],
      setGistResponse = _useState2[1];

  var root = "https://gist.github.com/";
  var gistId = gistLink.split('/')[1];
  var gistEmbedScript = "".concat(root).concat(gistLink, ".json?callback=gist_callback_").concat(gistId);
  (0, _react.useEffect)(function () {
    ;

    window["gist_callback_".concat(gistId)] = function (gist) {
      (0, _utils.createStyleSheet)(gist.stylesheet);
      setGistResponse({
        isLoading: false,
        div: gist.div,
        file: gist.files[0]
      });
    };

    (0, _utils.createScriptTag)(gistEmbedScript, null);
  }, [gistId, gistEmbedScript]);
  return _react.default.createElement(_react.Fragment, null, !gistResponse.isLoading && _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
    className: "gist gist-file gist-mdx-embed"
  }, _react.default.createElement("div", {
    className: "gist-meta"
  }, _react.default.createElement("a", {
    href: "".concat(root, "/").concat(gistLink)
  }, gistResponse.file))), _react.default.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: gistResponse.div
    }
  })));
};

exports.Gist = Gist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dpc3QvR2lzdC50c3giXSwibmFtZXMiOlsiR2lzdCIsImdpc3RMaW5rIiwiaXNMb2FkaW5nIiwiZGl2IiwiZmlsZSIsImdpc3RSZXNwb25zZSIsInNldEdpc3RSZXNwb25zZSIsInJvb3QiLCJnaXN0SWQiLCJzcGxpdCIsImdpc3RFbWJlZFNjcmlwdCIsIndpbmRvdyIsImdpc3QiLCJzdHlsZXNoZWV0IiwiZmlsZXMiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQWdCTyxJQUFNQSxJQUFtQyxHQUFHLFNBQXRDQSxJQUFzQyxPQUVqQztBQUFBLE1BRGhCQyxRQUNnQixRQURoQkEsUUFDZ0I7O0FBQUEsa0JBQ3dCLHFCQUFxQjtBQUMzREMsSUFBQUEsU0FBUyxFQUFFLElBRGdEO0FBRTNEQyxJQUFBQSxHQUFHLEVBQUUsRUFGc0Q7QUFHM0RDLElBQUFBLElBQUksRUFBRTtBQUhxRCxHQUFyQixDQUR4QjtBQUFBO0FBQUEsTUFDVEMsWUFEUztBQUFBLE1BQ0tDLGVBREw7O0FBT2hCLE1BQU1DLElBQUksNkJBQVY7QUFDQSxNQUFNQyxNQUFNLEdBQUdQLFFBQVEsQ0FBQ1EsS0FBVCxDQUFlLEdBQWYsRUFBb0IsQ0FBcEIsQ0FBZjtBQUNBLE1BQU1DLGVBQWUsYUFBTUgsSUFBTixTQUFhTixRQUFiLDBDQUFxRE8sTUFBckQsQ0FBckI7QUFFQSx3QkFBVSxZQUFNO0FBQ2Q7O0FBQUVHLElBQUFBLE1BQUQseUJBQWlDSCxNQUFqQyxLQUE2QyxVQUFDSSxJQUFELEVBQWU7QUFDM0QsbUNBQWlCQSxJQUFJLENBQUNDLFVBQXRCO0FBQ0FQLE1BQUFBLGVBQWUsQ0FBQztBQUNkSixRQUFBQSxTQUFTLEVBQUUsS0FERztBQUVkQyxRQUFBQSxHQUFHLEVBQUVTLElBQUksQ0FBQ1QsR0FGSTtBQUdkQyxRQUFBQSxJQUFJLEVBQUVRLElBQUksQ0FBQ0UsS0FBTCxDQUFXLENBQVg7QUFIUSxPQUFELENBQWY7QUFLRCxLQVBBOztBQVFELGdDQUFnQkosZUFBaEIsRUFBaUMsSUFBakM7QUFDRCxHQVZELEVBVUcsQ0FBQ0YsTUFBRCxFQUFTRSxlQUFULENBVkg7QUFZQSxTQUNFLDZCQUFDLGVBQUQsUUFDRyxDQUFDTCxZQUFZLENBQUNILFNBQWQsSUFDQyw2QkFBQyxlQUFELFFBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0U7QUFBRyxJQUFBLElBQUksWUFBS0ssSUFBTCxjQUFhTixRQUFiO0FBQVAsS0FBaUNJLFlBQVksQ0FBQ0QsSUFBOUMsQ0FERixDQURGLENBREYsRUFPRTtBQUFLLElBQUEsdUJBQXVCLEVBQUU7QUFBRVcsTUFBQUEsTUFBTSxFQUFFVixZQUFZLENBQUNGO0FBQXZCO0FBQTlCLElBUEYsQ0FGSixDQURGO0FBZUQsQ0F4Q00iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IGNyZWF0ZVNjcmlwdFRhZywgY3JlYXRlU3R5bGVTaGVldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElHaXN0UHJvcHMge1xuICAvKiogR2lzdCBsaW5rICovXG4gIGdpc3RMaW5rOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElHaXN0U3RhdGUge1xuICAvKiogTG9hZGluZyBzdGF0dXMgKi9cbiAgaXNMb2FkaW5nOiBib29sZWFuXG4gIC8qKiBIVE1MIHJlc3BvbnNlIGZyb20gYXBpICAqL1xuICBkaXY/OiBzdHJpbmdcbiAgLyoqIFRoZSBmaWxlIG5hbWUgb2YgdGhlIEdpc3QqL1xuICBmaWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBHaXN0OiBGdW5jdGlvbkNvbXBvbmVudDxJR2lzdFByb3BzPiA9ICh7XG4gIGdpc3RMaW5rXG59OiBJR2lzdFByb3BzKSA9PiB7XG4gIGNvbnN0IFtnaXN0UmVzcG9uc2UsIHNldEdpc3RSZXNwb25zZV0gPSB1c2VTdGF0ZTxJR2lzdFN0YXRlPih7XG4gICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgIGRpdjogJycsXG4gICAgZmlsZTogJydcbiAgfSlcblxuICBjb25zdCByb290ID0gYGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2BcbiAgY29uc3QgZ2lzdElkID0gZ2lzdExpbmsuc3BsaXQoJy8nKVsxXVxuICBjb25zdCBnaXN0RW1iZWRTY3JpcHQgPSBgJHtyb290fSR7Z2lzdExpbmt9Lmpzb24/Y2FsbGJhY2s9Z2lzdF9jYWxsYmFja18ke2dpc3RJZH1gXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICA7KHdpbmRvdyBhcyBhbnkpW2BnaXN0X2NhbGxiYWNrXyR7Z2lzdElkfWBdID0gKGdpc3Q6IGFueSkgPT4ge1xuICAgICAgY3JlYXRlU3R5bGVTaGVldChnaXN0LnN0eWxlc2hlZXQpXG4gICAgICBzZXRHaXN0UmVzcG9uc2Uoe1xuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICBkaXY6IGdpc3QuZGl2LFxuICAgICAgICBmaWxlOiBnaXN0LmZpbGVzWzBdXG4gICAgICB9KVxuICAgIH1cbiAgICBjcmVhdGVTY3JpcHRUYWcoZ2lzdEVtYmVkU2NyaXB0LCBudWxsKVxuICB9LCBbZ2lzdElkLCBnaXN0RW1iZWRTY3JpcHRdKVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgeyFnaXN0UmVzcG9uc2UuaXNMb2FkaW5nICYmIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2lzdCBnaXN0LWZpbGUgZ2lzdC1tZHgtZW1iZWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2lzdC1tZXRhXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2Ake3Jvb3R9LyR7Z2lzdExpbmt9YH0+e2dpc3RSZXNwb25zZS5maWxlfTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGdpc3RSZXNwb25zZS5kaXYhIH19IC8+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApfVxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cbiJdfQ==