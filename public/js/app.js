$(function() {
  $("form#query .sent-info").hide();
  $('form#query').bind('submit', function() {
    var term = $('form#query input[name=term]').val();
    $("form#query .sent-info").hide();
    $.ajax({
      type: 'GET',
      url: 'http://134.102.198.11:80/queries',
      data: { 'query': term },
      success: function(data) {
        $("form#query .sent-info").show('slow');
      }
    });
    return false;
  });
  
  $('form#query submit-button').click(function() {
   $('form#query').submit();
  })
  
  $("a#suub-result").live('click', function() {
    var term = $('form#query input[name=term]').val();
    url = "http://suche3.suub.uni-bremen.de/cgi-bin/CiXbase/brewis/CiXbase_search?act=search&term="+term+"&LAN=DE&IHITS=30&FHITS=30&XML_STYLE=/styles/short-DE.xml&CID=750632&CLUSTER=simultanplus&index=w&n_dtyp=1L&n_rtyp=ceEdX&RELEVANCE=55&PRECISION=&QBITS=1000000"
    window.location = url
  });
});