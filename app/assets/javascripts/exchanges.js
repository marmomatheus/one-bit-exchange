$(document).ready(function() {
  $('#amount').on('blur', function() {
    return $.ajax('/convert', {
      type: 'GET',
      dataType: 'json',
      data: {
        source_currency: $('#source_currency').val(),
        target_currency: $('#target_currency').val(),
        amount: $('#amount').val()
      },
      error: function(jqXHR, textStatus, errorThrown) {
        return alert(textStatus);
      },
      success: function(data, text, jqXHR) {
        return $('#result').val(data.value.toFixed(2));
      }
    });
  });

  $('.btnInverter').on('click', function(){
    let sourceCurrency = $('#source_currency').val()
    let targetCurrency = $('#target_currency').val()

    $('#source_currency').val(targetCurrency)
    $('#target_currency').val(sourceCurrency)
  })
});
