var Purchase = {
  totalCost: 0,
  totalQuantity: 0,
  purchaseValue: function(amount) {
    this.totalCost = this.totalCost + amount;
  },
  quantityValue: function(quantity) {
    this.totalQuantity = this.totalQuantity + quantity;
  }
}; // gives total amount purchased

$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    item = $("input#descript").val();
    price = parseInt($("input#amount").val());
    $("table#lists").append('<tr>' + "<td>" + "Item | " + item + "  " + "</td>" + " " + "<td>" + "Price | $" + price + "</td>" + '</tr>')
    // $("tr").after("<td>" + "Price | $" + price + "</td>");
    var counter = 0;
    Purchase.quantityValue(counter += 1);
    Purchase.purchaseValue(price);

    $("h4#total").text("$" + Purchase.totalCost);
    $("h4#quantity").text(Purchase.totalQuantity);
    $("#result").show();

    // purchases.purchaseValue();
  //   totalCost += shipment.packageCost;
  //   $(".total").text("$" + totalCost.toFixed(2));
  })
});
