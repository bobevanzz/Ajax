var users;
$().ready(function() {

	list()
	.done(function(res) {
		users=res;
		buildUserTable(users);
		console.log(res);
	})
	.fail(function(err){
		console.error(err);
	});
});

function buildUserTable(users){
	var tbody = $("#userlist");
	for (var user of users) {
		var row = "<tr>";
		row += "<td>" + user.ID + "</td>";
		row += "<td>" + user.FirstName + " "+ user.LastName + "</td>";	
		row += "</tr>";
		tbody.append(row);
	}
}