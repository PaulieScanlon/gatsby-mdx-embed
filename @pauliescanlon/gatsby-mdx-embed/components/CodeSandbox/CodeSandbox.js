"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeSandbox = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CodeSandbox = function CodeSandbox(_ref) {
  var codeSandboxId = _ref.codeSandboxId;
  return _react.default.createElement("iframe", {
    title: "codeSandbox-".concat(codeSandboxId),
    className: "codesandbox-mdx-embed",
    src: "https://codesandbox.io/embed/".concat(codeSandboxId),
    allow: "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",
    sandbox: "allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
    style: {
      width: '100%',
      height: '500px',
      border: 0,
      borderRadius: '4px',
      overflow: ' hidden'
    }
  });
};

exports.CodeSandbox = CodeSandbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0NvZGVTYW5kYm94L0NvZGVTYW5kYm94LnRzeCJdLCJuYW1lcyI6WyJDb2RlU2FuZGJveCIsImNvZGVTYW5kYm94SWQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFPTyxJQUFNQSxXQUFpRCxHQUFHLFNBQXBEQSxXQUFvRDtBQUFBLE1BQy9EQyxhQUQrRCxRQUMvREEsYUFEK0Q7QUFBQSxTQUcvRDtBQUNFLElBQUEsS0FBSyx3QkFBaUJBLGFBQWpCLENBRFA7QUFFRSxJQUFBLFNBQVMsRUFBQyx1QkFGWjtBQUdFLElBQUEsR0FBRyx5Q0FBa0NBLGFBQWxDLENBSEw7QUFJRSxJQUFBLEtBQUssRUFBQywwSEFKUjtBQUtFLElBQUEsT0FBTyxFQUFDLHVFQUxWO0FBTUUsSUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsS0FBSyxFQUFFLE1BREY7QUFFTEMsTUFBQUEsTUFBTSxFQUFFLE9BRkg7QUFHTEMsTUFBQUEsTUFBTSxFQUFFLENBSEg7QUFJTEMsTUFBQUEsWUFBWSxFQUFFLEtBSlQ7QUFLTEMsTUFBQUEsUUFBUSxFQUFFO0FBTEw7QUFOVCxJQUgrRDtBQUFBLENBQTFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvZGVTYW5kYm94UHJvcHMge1xuICAvKiogQ29kZVNhbmRib3ggaWQgKi9cbiAgY29kZVNhbmRib3hJZDogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBDb2RlU2FuZGJveDogRnVuY3Rpb25Db21wb25lbnQ8SUNvZGVTYW5kYm94UHJvcHM+ID0gKHtcbiAgY29kZVNhbmRib3hJZFxufTogSUNvZGVTYW5kYm94UHJvcHMpID0+IChcbiAgPGlmcmFtZVxuICAgIHRpdGxlPXtgY29kZVNhbmRib3gtJHtjb2RlU2FuZGJveElkfWB9XG4gICAgY2xhc3NOYW1lPVwiY29kZXNhbmRib3gtbWR4LWVtYmVkXCJcbiAgICBzcmM9e2BodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkLyR7Y29kZVNhbmRib3hJZH1gfVxuICAgIGFsbG93PVwiZ2VvbG9jYXRpb247IG1pY3JvcGhvbmU7IGNhbWVyYTsgbWlkaTsgdnI7IGFjY2VsZXJvbWV0ZXI7IGd5cm9zY29wZTsgcGF5bWVudDsgYW1iaWVudC1saWdodC1zZW5zb3I7IGVuY3J5cHRlZC1tZWRpYTsgdXNiXCJcbiAgICBzYW5kYm94PVwiYWxsb3ctbW9kYWxzIGFsbG93LWZvcm1zIGFsbG93LXBvcHVwcyBhbGxvdy1zY3JpcHRzIGFsbG93LXNhbWUtb3JpZ2luXCJcbiAgICBzdHlsZT17e1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzUwMHB4JyxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICBvdmVyZmxvdzogJyBoaWRkZW4nXG4gICAgfX1cbiAgLz5cbilcbiJdfQ==