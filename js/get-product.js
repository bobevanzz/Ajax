$().ready(function(){
	get(1)
	.done(function(res) {
		CreateUserTable(res);
		console.log(res);
	})
	.fail(function(err){
		console.error(err);
	});
});
function CreateUserTable(product){
	$("#idx").text(product.ID);
	$("#vendorid").text(product.VendorId);
	$("#vendorpartnumber").text(product.VendorPartNumber);
	$("#name").text(product.Name);
	$("#price").text(product.Price);
	$("#unit").text(product.Unit);

}