$(function() {
  $('form#query').bind('submit', function() {
    var term = $('form#query input[name=term]').val();
    $("form#query").hide();
    $.ajax({
      type: 'POST',
      url: 'http://134.102.198.11:80/query',
      data: { 'query': term },
      success: function(data) {
        $("form#query").show();
        $("form#query .sent-info").show();
      }
    });
    return false;
  });
  
  $('form#query submit-button').click(function() {
   $('form#query').submit();
  })
});