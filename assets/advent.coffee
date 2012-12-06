AdventViewModel = ->
  entries2012general:  entries2012general
  entries2012teachers: entries2012teachers
  entries2011:         entries2011
  entries2010:         entries2010

ko.bindingHandlers.likeButton = {
  init: (element, valueAccessor) ->
    value = valueAccessor()
    $(element).html("<div class='fb-like' data-href='#{value}' data-send='false' data-layout='box_count' data-width='100' data-show-faces='false'></div>")
}

ko.bindingHandlers.tweetButton = {
  init: (element, valueAccessor) ->
    value = valueAccessor()
    $(element).html("<a href='https://twitter.com/share' class='twitter-share-button' data-url='#{value}' data-count='vertical'>Tweet</a>")
}

$ ->
  ko.applyBindings(new AdventViewModel())
