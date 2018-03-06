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
function CreateUserTable(vendor){
	$("#idx").text(vendor.ID);
	$("#code").text(vendor.Code);
	$("#name").text(vendor.Name);
	$("#address").text(vendor.Address);
	$("#city").text(vendor.City);
	$("#state").text(vendor.State);
	$("#zip").text(vendor.Zip);
	$("#phone").text(vendor.Phone);
	$("#email").text(vendor.Email);
	$("#recommended").text((vendor.IsRecommended ? "Yes" : "No"));

}