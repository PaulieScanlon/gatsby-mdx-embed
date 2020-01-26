"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStyleSheet = exports.createScriptTag = exports.getPadding = void 0;

var getPadding = function getPadding(aspectRatio) {
  var config = {
    '1:1': {
      paddingTop: '100%'
    },
    '16:9': {
      paddingTop: '56.25%'
    },
    '4:3': {
      paddingTop: '75%'
    },
    '3:2': {
      paddingTop: '66.66%'
    },
    '8.5': {
      paddingTop: '62.5%'
    }
  }; // @ts-ignore

  return config[aspectRatio];
};

exports.getPadding = getPadding;

var createScriptTag = function createScriptTag(providerEmbedUrl, providerEmbedScript) {
  var script = document.createElement("script");
  script.type = "text/javascript";

  if (providerEmbedUrl) {
    script.src = providerEmbedUrl;
  }

  if (providerEmbedScript) {
    script.innerText = providerEmbedScript;
  }

  script.onerror = function (error) {
    console.error("MdxEmbedProvider ".concat(error.type), error);
  };

  document.getElementsByTagName("head")[0].appendChild(script);
};

exports.createScriptTag = createScriptTag;

var createStyleSheet = function createStyleSheet(href) {
  var link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = href;
  document.getElementsByTagName("head")[0].appendChild(link);
};

exports.createStyleSheet = createStyleSheet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy9pbmRleC50cyJdLCJuYW1lcyI6WyJnZXRQYWRkaW5nIiwiYXNwZWN0UmF0aW8iLCJjb25maWciLCJwYWRkaW5nVG9wIiwiY3JlYXRlU2NyaXB0VGFnIiwicHJvdmlkZXJFbWJlZFVybCIsInByb3ZpZGVyRW1iZWRTY3JpcHQiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwic3JjIiwiaW5uZXJUZXh0Iiwib25lcnJvciIsImVycm9yIiwiY29uc29sZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVTdHlsZVNoZWV0IiwiaHJlZiIsImxpbmsiLCJyZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxXQUFELEVBQXlCO0FBQ2pELE1BQU1DLE1BQU0sR0FBRztBQUNiLFdBQU87QUFDTEMsTUFBQUEsVUFBVSxFQUFFO0FBRFAsS0FETTtBQUliLFlBQVE7QUFDTkEsTUFBQUEsVUFBVSxFQUFFO0FBRE4sS0FKSztBQU9iLFdBQU87QUFDTEEsTUFBQUEsVUFBVSxFQUFFO0FBRFAsS0FQTTtBQVViLFdBQU87QUFDTEEsTUFBQUEsVUFBVSxFQUFFO0FBRFAsS0FWTTtBQWFiLFdBQU87QUFDTEEsTUFBQUEsVUFBVSxFQUFFO0FBRFA7QUFiTSxHQUFmLENBRGlELENBa0JqRDs7QUFDQSxTQUFPRCxNQUFNLENBQUNELFdBQUQsQ0FBYjtBQUNELENBcEJNOzs7O0FBc0JBLElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FDN0JDLGdCQUQ2QixFQUU3QkMsbUJBRjZCLEVBRzFCO0FBQ0gsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsVUFBZjtBQUVBRixFQUFBQSxNQUFNLENBQUNHLElBQVA7O0FBRUEsTUFBSUwsZ0JBQUosRUFBc0I7QUFDcEJFLElBQUFBLE1BQU0sQ0FBQ0ksR0FBUCxHQUFhTixnQkFBYjtBQUNEOztBQUVELE1BQUlDLG1CQUFKLEVBQXlCO0FBQ3ZCQyxJQUFBQSxNQUFNLENBQUNLLFNBQVAsR0FBbUJOLG1CQUFuQjtBQUNEOztBQUVEQyxFQUFBQSxNQUFNLENBQUNNLE9BQVAsR0FBaUIsVUFBQUMsS0FBSyxFQUFJO0FBQ3hCQyxJQUFBQSxPQUFPLENBQUNELEtBQVIsNEJBQW1DQSxLQUFELENBQWVKLElBQWpELEdBQXlESSxLQUF6RDtBQUNELEdBRkQ7O0FBSUFOLEVBQUFBLFFBQVEsQ0FBQ1Esb0JBQVQsU0FBc0MsQ0FBdEMsRUFBeUNDLFdBQXpDLENBQXFEVixNQUFyRDtBQUNELENBckJNOzs7O0FBdUJBLElBQU1XLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFrQjtBQUNoRCxNQUFNQyxJQUFJLEdBQUdaLFFBQVEsQ0FBQ0MsYUFBVCxRQUFiO0FBRUFXLEVBQUFBLElBQUksQ0FBQ1YsSUFBTDtBQUNBVSxFQUFBQSxJQUFJLENBQUNDLEdBQUw7QUFDQUQsRUFBQUEsSUFBSSxDQUFDRCxJQUFMLEdBQVlBLElBQVo7QUFFQVgsRUFBQUEsUUFBUSxDQUFDUSxvQkFBVCxTQUFzQyxDQUF0QyxFQUF5Q0MsV0FBekMsQ0FBcURHLElBQXJEO0FBQ0QsQ0FSTSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRQYWRkaW5nID0gKGFzcGVjdFJhdGlvOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgY29uZmlnID0ge1xuICAgICcxOjEnOiB7XG4gICAgICBwYWRkaW5nVG9wOiAnMTAwJSdcbiAgICB9LFxuICAgICcxNjo5Jzoge1xuICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JSdcbiAgICB9LFxuICAgICc0OjMnOiB7XG4gICAgICBwYWRkaW5nVG9wOiAnNzUlJ1xuICAgIH0sXG4gICAgJzM6Mic6IHtcbiAgICAgIHBhZGRpbmdUb3A6ICc2Ni42NiUnXG4gICAgfSxcbiAgICAnOC41Jzoge1xuICAgICAgcGFkZGluZ1RvcDogJzYyLjUlJ1xuICAgIH1cbiAgfVxuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBjb25maWdbYXNwZWN0UmF0aW9dXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTY3JpcHRUYWcgPSAoXG4gIHByb3ZpZGVyRW1iZWRVcmw6IHN0cmluZyB8IG51bGwsXG4gIHByb3ZpZGVyRW1iZWRTY3JpcHQ6IHN0cmluZyB8IG51bGxcbikgPT4ge1xuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBzY3JpcHRgKVxuXG4gIHNjcmlwdC50eXBlID0gYHRleHQvamF2YXNjcmlwdGBcblxuICBpZiAocHJvdmlkZXJFbWJlZFVybCkge1xuICAgIHNjcmlwdC5zcmMgPSBwcm92aWRlckVtYmVkVXJsXG4gIH1cblxuICBpZiAocHJvdmlkZXJFbWJlZFNjcmlwdCkge1xuICAgIHNjcmlwdC5pbm5lclRleHQgPSBwcm92aWRlckVtYmVkU2NyaXB0XG4gIH1cblxuICBzY3JpcHQub25lcnJvciA9IGVycm9yID0+IHtcbiAgICBjb25zb2xlLmVycm9yKGBNZHhFbWJlZFByb3ZpZGVyICR7KGVycm9yIGFzIGFueSkudHlwZX1gLCBlcnJvcilcbiAgfVxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKGBoZWFkYClbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU3R5bGVTaGVldCA9IChocmVmOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGxpbmtgKVxuXG4gIGxpbmsudHlwZSA9IGB0ZXh0L2Nzc2BcbiAgbGluay5yZWwgPSBgc3R5bGVzaGVldGBcbiAgbGluay5ocmVmID0gaHJlZlxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKGBoZWFkYClbMF0uYXBwZW5kQ2hpbGQobGluaylcbn1cbiJdfQ==