function claculator(){
    var amount = $('#amount').val();
    var percentage = $('#Percentage').val();
    var tip = amount*(percentage/100);
    var total = Number(amount)+ tip;

    $('#tip').val(tip.toFixed(2));
      $('#total').val(total.toFixed(2));

      return false;


}

$('#claculator').submit(claculator);