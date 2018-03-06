
$().ready(function() {

	list()
	.done(function(res) {
		buildUserTable(res);
		console.log(res);
	})
	.fail(function(err){
		console.error(err);
	});
});

function buildUserTable(products){
	var tbody = $("#productlist");
	for (var product of products) {
		var row = "<tr>";
		row += "<td>" + product.ID + "</td>";
		row += "<td>" + product.VendorId + "</td>";	
		row += "<td>" + product.VendorPartNumber + "</td>";
		row += "<td>" + product.Name + "</td>";
		row += "<td>" + product.Price + "</td>";
		row += "<td>" + product.Unit + "</td>";
		row += "</tr>";
		tbody.append(row);
	}
}