(function() {
  var AdventViewModel;
  AdventViewModel = function() {
    return {
      entries2012general: entries2012general,
      entries2012teachers: entries2012teachers,
      entries2011: entries2011,
      entries2010: entries2010
    };
  };
  ko.bindingHandlers.likeButton = {
    init: function(element, valueAccessor) {
      var value;
      value = valueAccessor();
      return $(element).html("<div class='fb-like' data-href='" + value + "' data-send='false' data-layout='box_count' data-width='100' data-show-faces='false'></div>");
    }
  };
  ko.bindingHandlers.tweetButton = {
    init: function(element, valueAccessor) {
      var value;
      value = valueAccessor();
      return $(element).html("<a href='https://twitter.com/share' class='twitter-share-button' data-url='" + value + "' data-count='vertical'>Tweet</a>");
    }
  };
  $(function() {
    return ko.applyBindings(new AdventViewModel());
  });
}).call(this);
