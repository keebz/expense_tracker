var Category = {
  addPurchase: function(purchase) {
    this.purchases.push(purchase);
  },
  totalCost: function() {
    var total = 0;
    this.purchases.forEach(function(purchase) {
      total += purchase.price;
    });
    return total;
  },
  totalQuantity: function() {
    return this.purchases.length
  }
}

var Purchase = {};

//For adding category//
$(function(){
  var currentCategory;
  $("form#category").submit(function(event){
    event.preventDefault();
    inputtedCategory = $("input#categories").val();
    $("ul#categories").append("<li><span class='category'>" + inputtedCategory + "</span></li>");

    var category = Object.create(Category);
    category.purchases = [];
    category.name = inputtedCategory;

    $("ul#categories li").last().click(function(){
      currentCategory = category;
      $("form#purchases").show();
      $("#categoryTitle").text(currentCategory.name)
      $("h4#total").text("$" + currentCategory.totalCost());
      $("h4#quantity").text(currentCategory.totalQuantity());
      $("table#lists").empty();

       currentCategory.purchases.forEach(function(purchase){
        $("table#lists").append('<tr>' + "<td>" + "Item | " + purchase.description + "  " + "</td>" + " " + "<td>" + "Price | $" + purchase.price + "</td>" + '</tr>');
        });
    })
    $("input#categories").val("");
  });


  $("form#purchases").submit(function(event){
    event.preventDefault();
    var purchase  = Object.create(Purchase);
    purchase.description = $("input#descript").val();
    purchase.price = parseInt($("input#amount").val());
    currentCategory.addPurchase(purchase);

    $("table#lists").append('<tr>' + "<td>" + "Item | " + purchase.description + "  " + "</td>" + " " + "<td>" + "Price | $" + purchase.price + "</td>" + '</tr>');
    $("h4#total").text("$" + currentCategory.totalCost());
    $("h4#quantity").text(currentCategory.totalQuantity());
    $("input#descript").val("");
    $("input#amount").val("");
  })
});
