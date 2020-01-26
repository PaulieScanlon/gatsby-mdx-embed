"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdxEmbedProvider = void 0;

var React = _interopRequireWildcard(require("react"));

var _react2 = require("@mdx-js/react");

var _CodePen2 = require("../CodePen");

var _CodeSandbox2 = require("../CodeSandbox");

var _Flickr2 = require("../Flickr");

var _Gist2 = require("../Gist");

var _Vimeo2 = require("../Vimeo");

var _Instagram2 = require("../Instagram");

var _Pinterest = require("../Pinterest");

var _SoundCloud2 = require("../SoundCloud");

var _Spotify2 = require("../Spotify");

var _Twitch2 = require("../Twitch");

var _Twitter = require("../Twitter");

var _Wikipedia2 = require("../Wikipedia");

var _YouTube2 = require("../YouTube");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var components = {
  CodePen: function CodePen(props) {
    return React.createElement(_CodePen2.CodePen, props);
  },
  CodeSandbox: function CodeSandbox(props) {
    return React.createElement(_CodeSandbox2.CodeSandbox, props);
  },
  Flickr: function Flickr(props) {
    return React.createElement(_Flickr2.Flickr, props);
  },
  Gist: function Gist(props) {
    return React.createElement(_Gist2.Gist, props);
  },
  Instagram: function Instagram(props) {
    return React.createElement(_Instagram2.Instagram, props);
  },
  Pin: function Pin(props) {
    return React.createElement(_Pinterest.Pin, props);
  },
  PinterestBoard: function PinterestBoard(props) {
    return React.createElement(_Pinterest.PinterestBoard, props);
  },
  PinterestFollowButton: function PinterestFollowButton(props) {
    return React.createElement(_Pinterest.PinterestFollowButton, props);
  },
  SoundCloud: function SoundCloud(props) {
    return React.createElement(_SoundCloud2.SoundCloud, props);
  },
  Spotify: function Spotify(props) {
    return React.createElement(_Spotify2.Spotify, props);
  },
  Twitch: function Twitch(props) {
    return React.createElement(_Twitch2.Twitch, props);
  },
  Tweet: function Tweet(props) {
    return React.createElement(_Twitter.Tweet, props);
  },
  TwitterFollowButton: function TwitterFollowButton(props) {
    return React.createElement(_Twitter.TwitterFollowButton, props);
  },
  TwitterHashtagButton: function TwitterHashtagButton(props) {
    return React.createElement(_Twitter.TwitterHashtagButton, props);
  },
  TwitterList: function TwitterList(props) {
    return React.createElement(_Twitter.TwitterList, props);
  },
  TwitterMentionButton: function TwitterMentionButton(props) {
    return React.createElement(_Twitter.TwitterMentionButton, props);
  },
  TwitterTimeline: function TwitterTimeline(props) {
    return React.createElement(_Twitter.TwitterTimeline, props);
  },
  Vimeo: function Vimeo(props) {
    return React.createElement(_Vimeo2.Vimeo, props);
  },
  Wikipedia: function Wikipedia(props) {
    return React.createElement(_Wikipedia2.Wikipedia, props);
  },
  YouTube: function YouTube(props) {
    return React.createElement(_YouTube2.YouTube, props);
  }
};

var MdxEmbedProvider = function MdxEmbedProvider(_ref) {
  var children = _ref.children;
  return React.createElement(_react2.MDXProvider, {
    components: components
  }, children);
};

exports.MdxEmbedProvider = MdxEmbedProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL01keEVtYmVkUHJvdmlkZXIvTWR4RW1iZWRQcm92aWRlci50c3giXSwibmFtZXMiOlsiY29tcG9uZW50cyIsIkNvZGVQZW4iLCJwcm9wcyIsIkNvZGVTYW5kYm94IiwiRmxpY2tyIiwiR2lzdCIsIkluc3RhZ3JhbSIsIlBpbiIsIlBpbnRlcmVzdEJvYXJkIiwiUGludGVyZXN0Rm9sbG93QnV0dG9uIiwiU291bmRDbG91ZCIsIlNwb3RpZnkiLCJUd2l0Y2giLCJUd2VldCIsIlR3aXR0ZXJGb2xsb3dCdXR0b24iLCJUd2l0dGVySGFzaHRhZ0J1dHRvbiIsIlR3aXR0ZXJMaXN0IiwiVHdpdHRlck1lbnRpb25CdXR0b24iLCJUd2l0dGVyVGltZWxpbmUiLCJWaW1lbyIsIldpa2lwZWRpYSIsIllvdVR1YmUiLCJNZHhFbWJlZFByb3ZpZGVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQVFBOztBQUNBOztBQUNBOztBQUNBOztBQWNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUc7QUFDakJDLEVBQUFBLE9BQU8sRUFBRSxpQkFBQ0MsS0FBRDtBQUFBLFdBQTBCLG9CQUFDLGlCQUFELEVBQWFBLEtBQWIsQ0FBMUI7QUFBQSxHQURRO0FBRWpCQyxFQUFBQSxXQUFXLEVBQUUscUJBQUNELEtBQUQ7QUFBQSxXQUE4QixvQkFBQyx5QkFBRCxFQUFpQkEsS0FBakIsQ0FBOUI7QUFBQSxHQUZJO0FBR2pCRSxFQUFBQSxNQUFNLEVBQUUsZ0JBQUNGLEtBQUQ7QUFBQSxXQUF5QixvQkFBQyxlQUFELEVBQVlBLEtBQVosQ0FBekI7QUFBQSxHQUhTO0FBSWpCRyxFQUFBQSxJQUFJLEVBQUUsY0FBQ0gsS0FBRDtBQUFBLFdBQXVCLG9CQUFDLFdBQUQsRUFBVUEsS0FBVixDQUF2QjtBQUFBLEdBSlc7QUFLakJJLEVBQUFBLFNBQVMsRUFBRSxtQkFBQ0osS0FBRDtBQUFBLFdBQTRCLG9CQUFDLHFCQUFELEVBQWVBLEtBQWYsQ0FBNUI7QUFBQSxHQUxNO0FBTWpCSyxFQUFBQSxHQUFHLEVBQUUsYUFBQ0wsS0FBRDtBQUFBLFdBQXNCLG9CQUFDLGNBQUQsRUFBU0EsS0FBVCxDQUF0QjtBQUFBLEdBTlk7QUFPakJNLEVBQUFBLGNBQWMsRUFBRSx3QkFBQ04sS0FBRDtBQUFBLFdBQ2Qsb0JBQUMseUJBQUQsRUFBb0JBLEtBQXBCLENBRGM7QUFBQSxHQVBDO0FBVWpCTyxFQUFBQSxxQkFBcUIsRUFBRSwrQkFBQ1AsS0FBRDtBQUFBLFdBQ3JCLG9CQUFDLGdDQUFELEVBQTJCQSxLQUEzQixDQURxQjtBQUFBLEdBVk47QUFhakJRLEVBQUFBLFVBQVUsRUFBRSxvQkFBQ1IsS0FBRDtBQUFBLFdBQTZCLG9CQUFDLHVCQUFELEVBQWdCQSxLQUFoQixDQUE3QjtBQUFBLEdBYks7QUFjakJTLEVBQUFBLE9BQU8sRUFBRSxpQkFBQ1QsS0FBRDtBQUFBLFdBQTBCLG9CQUFDLGlCQUFELEVBQWFBLEtBQWIsQ0FBMUI7QUFBQSxHQWRRO0FBZWpCVSxFQUFBQSxNQUFNLEVBQUUsZ0JBQUNWLEtBQUQ7QUFBQSxXQUF5QixvQkFBQyxlQUFELEVBQVlBLEtBQVosQ0FBekI7QUFBQSxHQWZTO0FBZ0JqQlcsRUFBQUEsS0FBSyxFQUFFLGVBQUNYLEtBQUQ7QUFBQSxXQUF3QixvQkFBQyxjQUFELEVBQVdBLEtBQVgsQ0FBeEI7QUFBQSxHQWhCVTtBQWlCakJZLEVBQUFBLG1CQUFtQixFQUFFLDZCQUFDWixLQUFEO0FBQUEsV0FDbkIsb0JBQUMsNEJBQUQsRUFBeUJBLEtBQXpCLENBRG1CO0FBQUEsR0FqQko7QUFvQmpCYSxFQUFBQSxvQkFBb0IsRUFBRSw4QkFBQ2IsS0FBRDtBQUFBLFdBQ3BCLG9CQUFDLDZCQUFELEVBQTBCQSxLQUExQixDQURvQjtBQUFBLEdBcEJMO0FBdUJqQmMsRUFBQUEsV0FBVyxFQUFFLHFCQUFDZCxLQUFEO0FBQUEsV0FBOEIsb0JBQUMsb0JBQUQsRUFBaUJBLEtBQWpCLENBQTlCO0FBQUEsR0F2Qkk7QUF3QmpCZSxFQUFBQSxvQkFBb0IsRUFBRSw4QkFBQ2YsS0FBRDtBQUFBLFdBQ3BCLG9CQUFDLDZCQUFELEVBQTBCQSxLQUExQixDQURvQjtBQUFBLEdBeEJMO0FBMkJqQmdCLEVBQUFBLGVBQWUsRUFBRSx5QkFBQ2hCLEtBQUQ7QUFBQSxXQUNmLG9CQUFDLHdCQUFELEVBQXFCQSxLQUFyQixDQURlO0FBQUEsR0EzQkE7QUE4QmpCaUIsRUFBQUEsS0FBSyxFQUFFLGVBQUNqQixLQUFEO0FBQUEsV0FBd0Isb0JBQUMsYUFBRCxFQUFXQSxLQUFYLENBQXhCO0FBQUEsR0E5QlU7QUErQmpCa0IsRUFBQUEsU0FBUyxFQUFFLG1CQUFDbEIsS0FBRDtBQUFBLFdBQTRCLG9CQUFDLHFCQUFELEVBQWVBLEtBQWYsQ0FBNUI7QUFBQSxHQS9CTTtBQWdDakJtQixFQUFBQSxPQUFPLEVBQUUsaUJBQUNuQixLQUFEO0FBQUEsV0FBMEIsb0JBQUMsaUJBQUQsRUFBYUEsS0FBYixDQUExQjtBQUFBO0FBaENRLENBQW5COztBQW1DTyxJQUFNb0IsZ0JBQXlDLEdBQUcsU0FBNUNBLGdCQUE0QztBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQ3ZELG9CQUFDLG1CQUFEO0FBQWEsSUFBQSxVQUFVLEVBQUV2QjtBQUF6QixLQUFzQ3VCLFFBQXRDLENBRHVEO0FBQUEsQ0FBbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1EWFByb3ZpZGVyIH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuaW1wb3J0IHsgQ29kZVBlbiwgSUNvZGVQZW5Qcm9wcyB9IGZyb20gJy4uL0NvZGVQZW4nXG5pbXBvcnQgeyBDb2RlU2FuZGJveCwgSUNvZGVTYW5kYm94UHJvcHMgfSBmcm9tICcuLi9Db2RlU2FuZGJveCdcbmltcG9ydCB7IEZsaWNrciwgSUZsaWNrclByb3BzIH0gZnJvbSAnLi4vRmxpY2tyJ1xuaW1wb3J0IHsgR2lzdCwgSUdpc3RQcm9wcyB9IGZyb20gJy4uL0dpc3QnXG5pbXBvcnQgeyBWaW1lbywgSVZpbWVvUHJvcHMgfSBmcm9tICcuLi9WaW1lbydcbmltcG9ydCB7IEluc3RhZ3JhbSwgSUluc3RhZ3JhbVByb3BzIH0gZnJvbSAnLi4vSW5zdGFncmFtJ1xuaW1wb3J0IHtcbiAgUGluLFxuICBJUGluUHJvcHMsXG4gIFBpbnRlcmVzdEJvYXJkLFxuICBJUGludGVyZXN0Qm9hcmRQcm9wcyxcbiAgUGludGVyZXN0Rm9sbG93QnV0dG9uLFxuICBJUGludGVyZXN0Rm9sbG93QnV0dG9uUHJvcHNcbn0gZnJvbSAnLi4vUGludGVyZXN0J1xuaW1wb3J0IHsgU291bmRDbG91ZCwgSVNvdW5kQ2xvdWRQcm9wcyB9IGZyb20gJy4uL1NvdW5kQ2xvdWQnXG5pbXBvcnQgeyBTcG90aWZ5LCBJU3BvdGlmeVByb3BzIH0gZnJvbSAnLi4vU3BvdGlmeSdcbmltcG9ydCB7IFR3aXRjaCwgSVR3aXRjaFByb3BzIH0gZnJvbSAnLi4vVHdpdGNoJ1xuaW1wb3J0IHtcbiAgVHdlZXQsXG4gIElUd2VldFByb3BzLFxuICBUd2l0dGVyRm9sbG93QnV0dG9uLFxuICBJVHdpdHRlckZvbGxvd0J1dHRvblByb3BzLFxuICBUd2l0dGVySGFzaHRhZ0J1dHRvbixcbiAgSVR3aXR0ZXJIYXNodGFnQnV0dG9uUHJvcHMsXG4gIFR3aXR0ZXJMaXN0LFxuICBJVHdpdHRlckxpc3RQcm9wcyxcbiAgVHdpdHRlck1lbnRpb25CdXR0b24sXG4gIElUd2l0dGVyTWVudGlvbkJ1dHRvblByb3BzLFxuICBUd2l0dGVyVGltZWxpbmUsXG4gIElUd2l0dGVyVGltZWxpbmVQcm9wc1xufSBmcm9tICcuLi9Ud2l0dGVyJ1xuaW1wb3J0IHsgV2lraXBlZGlhLCBJV2lraXBlZGlhUHJvcHMgfSBmcm9tICcuLi9XaWtpcGVkaWEnXG5pbXBvcnQgeyBZb3VUdWJlLCBJWW91VHViZVByb3BzIH0gZnJvbSAnLi4vWW91VHViZSdcblxuY29uc3QgY29tcG9uZW50cyA9IHtcbiAgQ29kZVBlbjogKHByb3BzOiBJQ29kZVBlblByb3BzKSA9PiA8Q29kZVBlbiB7Li4ucHJvcHN9IC8+LFxuICBDb2RlU2FuZGJveDogKHByb3BzOiBJQ29kZVNhbmRib3hQcm9wcykgPT4gPENvZGVTYW5kYm94IHsuLi5wcm9wc30gLz4sXG4gIEZsaWNrcjogKHByb3BzOiBJRmxpY2tyUHJvcHMpID0+IDxGbGlja3Igey4uLnByb3BzfSAvPixcbiAgR2lzdDogKHByb3BzOiBJR2lzdFByb3BzKSA9PiA8R2lzdCB7Li4ucHJvcHN9IC8+LFxuICBJbnN0YWdyYW06IChwcm9wczogSUluc3RhZ3JhbVByb3BzKSA9PiA8SW5zdGFncmFtIHsuLi5wcm9wc30gLz4sXG4gIFBpbjogKHByb3BzOiBJUGluUHJvcHMpID0+IDxQaW4gey4uLnByb3BzfSAvPixcbiAgUGludGVyZXN0Qm9hcmQ6IChwcm9wczogSVBpbnRlcmVzdEJvYXJkUHJvcHMpID0+IChcbiAgICA8UGludGVyZXN0Qm9hcmQgey4uLnByb3BzfSAvPlxuICApLFxuICBQaW50ZXJlc3RGb2xsb3dCdXR0b246IChwcm9wczogSVBpbnRlcmVzdEZvbGxvd0J1dHRvblByb3BzKSA9PiAoXG4gICAgPFBpbnRlcmVzdEZvbGxvd0J1dHRvbiB7Li4ucHJvcHN9IC8+XG4gICksXG4gIFNvdW5kQ2xvdWQ6IChwcm9wczogSVNvdW5kQ2xvdWRQcm9wcykgPT4gPFNvdW5kQ2xvdWQgey4uLnByb3BzfSAvPixcbiAgU3BvdGlmeTogKHByb3BzOiBJU3BvdGlmeVByb3BzKSA9PiA8U3BvdGlmeSB7Li4ucHJvcHN9IC8+LFxuICBUd2l0Y2g6IChwcm9wczogSVR3aXRjaFByb3BzKSA9PiA8VHdpdGNoIHsuLi5wcm9wc30gLz4sXG4gIFR3ZWV0OiAocHJvcHM6IElUd2VldFByb3BzKSA9PiA8VHdlZXQgey4uLnByb3BzfSAvPixcbiAgVHdpdHRlckZvbGxvd0J1dHRvbjogKHByb3BzOiBJVHdpdHRlckZvbGxvd0J1dHRvblByb3BzKSA9PiAoXG4gICAgPFR3aXR0ZXJGb2xsb3dCdXR0b24gey4uLnByb3BzfSAvPlxuICApLFxuICBUd2l0dGVySGFzaHRhZ0J1dHRvbjogKHByb3BzOiBJVHdpdHRlckhhc2h0YWdCdXR0b25Qcm9wcykgPT4gKFxuICAgIDxUd2l0dGVySGFzaHRhZ0J1dHRvbiB7Li4ucHJvcHN9IC8+XG4gICksXG4gIFR3aXR0ZXJMaXN0OiAocHJvcHM6IElUd2l0dGVyTGlzdFByb3BzKSA9PiA8VHdpdHRlckxpc3Qgey4uLnByb3BzfSAvPixcbiAgVHdpdHRlck1lbnRpb25CdXR0b246IChwcm9wczogSVR3aXR0ZXJNZW50aW9uQnV0dG9uUHJvcHMpID0+IChcbiAgICA8VHdpdHRlck1lbnRpb25CdXR0b24gey4uLnByb3BzfSAvPlxuICApLFxuICBUd2l0dGVyVGltZWxpbmU6IChwcm9wczogSVR3aXR0ZXJUaW1lbGluZVByb3BzKSA9PiAoXG4gICAgPFR3aXR0ZXJUaW1lbGluZSB7Li4ucHJvcHN9IC8+XG4gICksXG4gIFZpbWVvOiAocHJvcHM6IElWaW1lb1Byb3BzKSA9PiA8VmltZW8gey4uLnByb3BzfSAvPixcbiAgV2lraXBlZGlhOiAocHJvcHM6IElXaWtpcGVkaWFQcm9wcykgPT4gPFdpa2lwZWRpYSB7Li4ucHJvcHN9IC8+LFxuICBZb3VUdWJlOiAocHJvcHM6IElZb3VUdWJlUHJvcHMpID0+IDxZb3VUdWJlIHsuLi5wcm9wc30gLz5cbn0gYXMgYW55XG5cbmV4cG9ydCBjb25zdCBNZHhFbWJlZFByb3ZpZGVyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPE1EWFByb3ZpZGVyIGNvbXBvbmVudHM9e2NvbXBvbmVudHN9PntjaGlsZHJlbn08L01EWFByb3ZpZGVyPlxuKVxuIl19