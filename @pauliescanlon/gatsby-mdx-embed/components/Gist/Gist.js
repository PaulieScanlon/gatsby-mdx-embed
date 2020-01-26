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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0dpc3QvR2lzdC50c3giXSwibmFtZXMiOlsiR2lzdCIsImdpc3RMaW5rIiwiaXNMb2FkaW5nIiwiZGl2IiwiZmlsZSIsImdpc3RSZXNwb25zZSIsInNldEdpc3RSZXNwb25zZSIsInJvb3QiLCJnaXN0SWQiLCJzcGxpdCIsImdpc3RFbWJlZFNjcmlwdCIsIndpbmRvdyIsImdpc3QiLCJzdHlsZXNoZWV0IiwiZmlsZXMiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQWdCTyxJQUFNQSxJQUFtQyxHQUFHLFNBQXRDQSxJQUFzQyxPQUVqQztBQUFBLE1BRGhCQyxRQUNnQixRQURoQkEsUUFDZ0I7O0FBQUEsa0JBQ3dCLHFCQUFxQjtBQUMzREMsSUFBQUEsU0FBUyxFQUFFLElBRGdEO0FBRTNEQyxJQUFBQSxHQUFHLEVBQUUsRUFGc0Q7QUFHM0RDLElBQUFBLElBQUksRUFBRTtBQUhxRCxHQUFyQixDQUR4QjtBQUFBO0FBQUEsTUFDVEMsWUFEUztBQUFBLE1BQ0tDLGVBREw7O0FBT2hCLE1BQU1DLElBQUksNkJBQVY7QUFDQSxNQUFNQyxNQUFNLEdBQUdQLFFBQVEsQ0FBQ1EsS0FBVCxDQUFlLEdBQWYsRUFBb0IsQ0FBcEIsQ0FBZjtBQUNBLE1BQU1DLGVBQWUsYUFBTUgsSUFBTixTQUFhTixRQUFiLDBDQUFxRE8sTUFBckQsQ0FBckI7QUFFQSx3QkFBVSxZQUFNO0FBQ2Q7O0FBQUVHLElBQUFBLE1BQUQseUJBQWlDSCxNQUFqQyxLQUE2QyxVQUFDSSxJQUFELEVBQWU7QUFDM0QsbUNBQWlCQSxJQUFJLENBQUNDLFVBQXRCO0FBQ0FQLE1BQUFBLGVBQWUsQ0FBQztBQUNkSixRQUFBQSxTQUFTLEVBQUUsS0FERztBQUVkQyxRQUFBQSxHQUFHLEVBQUVTLElBQUksQ0FBQ1QsR0FGSTtBQUdkQyxRQUFBQSxJQUFJLEVBQUVRLElBQUksQ0FBQ0UsS0FBTCxDQUFXLENBQVg7QUFIUSxPQUFELENBQWY7QUFLRCxLQVBBOztBQVFELGdDQUFnQkosZUFBaEIsRUFBaUMsSUFBakM7QUFDRCxHQVZELEVBVUcsQ0FBQ0YsTUFBRCxFQUFTRSxlQUFULENBVkg7QUFZQSxTQUNFLDZCQUFDLGVBQUQsUUFDRyxDQUFDTCxZQUFZLENBQUNILFNBQWQsSUFDQyw2QkFBQyxlQUFELFFBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0U7QUFBRyxJQUFBLElBQUksWUFBS0ssSUFBTCxjQUFhTixRQUFiO0FBQVAsS0FBaUNJLFlBQVksQ0FBQ0QsSUFBOUMsQ0FERixDQURGLENBREYsRUFPRTtBQUFLLElBQUEsdUJBQXVCLEVBQUU7QUFBRVcsTUFBQUEsTUFBTSxFQUFFVixZQUFZLENBQUNGO0FBQXZCO0FBQTlCLElBUEYsQ0FGSixDQURGO0FBZUQsQ0F4Q00iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVTY3JpcHRUYWcsIGNyZWF0ZVN0eWxlU2hlZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGludGVyZmFjZSBJR2lzdFByb3BzIHtcbiAgLyoqIEdpc3QgbGluayAqL1xuICBnaXN0TGluazogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJR2lzdFN0YXRlIHtcbiAgLyoqIExvYWRpbmcgc3RhdHVzICovXG4gIGlzTG9hZGluZzogYm9vbGVhblxuICAvKiogSFRNTCByZXNwb25zZSBmcm9tIGFwaSAgKi9cbiAgZGl2Pzogc3RyaW5nXG4gIC8qKiBUaGUgZmlsZSBuYW1lIG9mIHRoZSBHaXN0Ki9cbiAgZmlsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgR2lzdDogRnVuY3Rpb25Db21wb25lbnQ8SUdpc3RQcm9wcz4gPSAoe1xuICBnaXN0TGlua1xufTogSUdpc3RQcm9wcykgPT4ge1xuICBjb25zdCBbZ2lzdFJlc3BvbnNlLCBzZXRHaXN0UmVzcG9uc2VdID0gdXNlU3RhdGU8SUdpc3RTdGF0ZT4oe1xuICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICBkaXY6ICcnLFxuICAgIGZpbGU6ICcnXG4gIH0pXG5cbiAgY29uc3Qgcm9vdCA9IGBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9gXG4gIGNvbnN0IGdpc3RJZCA9IGdpc3RMaW5rLnNwbGl0KCcvJylbMV1cbiAgY29uc3QgZ2lzdEVtYmVkU2NyaXB0ID0gYCR7cm9vdH0ke2dpc3RMaW5rfS5qc29uP2NhbGxiYWNrPWdpc3RfY2FsbGJhY2tfJHtnaXN0SWR9YFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgOyh3aW5kb3cgYXMgYW55KVtgZ2lzdF9jYWxsYmFja18ke2dpc3RJZH1gXSA9IChnaXN0OiBhbnkpID0+IHtcbiAgICAgIGNyZWF0ZVN0eWxlU2hlZXQoZ2lzdC5zdHlsZXNoZWV0KVxuICAgICAgc2V0R2lzdFJlc3BvbnNlKHtcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZGl2OiBnaXN0LmRpdixcbiAgICAgICAgZmlsZTogZ2lzdC5maWxlc1swXVxuICAgICAgfSlcbiAgICB9XG4gICAgY3JlYXRlU2NyaXB0VGFnKGdpc3RFbWJlZFNjcmlwdCwgbnVsbClcbiAgfSwgW2dpc3RJZCwgZ2lzdEVtYmVkU2NyaXB0XSlcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHshZ2lzdFJlc3BvbnNlLmlzTG9hZGluZyAmJiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdpc3QgZ2lzdC1maWxlIGdpc3QtbWR4LWVtYmVkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdpc3QtbWV0YVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPXtgJHtyb290fS8ke2dpc3RMaW5rfWB9PntnaXN0UmVzcG9uc2UuZmlsZX08L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBnaXN0UmVzcG9uc2UuZGl2ISB9fSAvPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG4iXX0=