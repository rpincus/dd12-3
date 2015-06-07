portfolioApp.service("PortService", ['$scope', '$log' function($scope){

	console.log('made it inside the port service');

var myObject = {
	formatDate: function(serverdate){
	var monthNames = [
		"January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"
	];

	var date = new Date(serverdate);
	var day = date.getDate();
	var monthIndex = date.getMonth();
	var year = date.getFullYear();

	console.log('Date: ' + day + '' + monthNames[monthIndex] + year);
	return dateResult;
}}; //myobj
return myObject;

}]);