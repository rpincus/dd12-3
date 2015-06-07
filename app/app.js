var portfolioApp = angular.module('portfolioApp',['firebase', 'ngSanitize', 'ngRoute'])
angular.module('portfolioApp').constant('FIREBASE_URL', 'https://urbanism.firebaseio.com/portfolios');
angular.module('portfolioApp').factory('portfolioFactory', function($firebase,FIREBASE_URL) {
  return {
    getPortfolio: function(key) {
      return $firebase(new Firebase(FIREBASE_URL + '/' + key));
    },
    getAllPortfolios: function() {
      return $firebase(new Firebase(FIREBASE_URL));
    }
  };
});

portfolioApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider
		.when('/portfolio/:portfolio_name', {
			controller: 'PortfolioViewerController',
			templateUrl: 'partials/portfolio_viewer.html'
		})
		.when('/', {
			templateUrl: "partials/portfolios.html",
			controller: "PortfolioListController"
		})
		.otherwise({ 
			redirectTo: "/404"
		});
	}
	]);