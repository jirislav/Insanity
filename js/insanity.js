(function(){

	var insanity = angular.module('Insanity', []);

	insanity.controller('MainController', function(){

	});

	insanity.controller('PlaygroundController', function(){

		this.circles = [
			{
				"click" : function() {
					alert("clicked red!")
				},
				"x" : "100px",
				"y" : "100px",
				"r" : "20px",
				"fill" : "red",
			},
			{
				"click" : function() {
					alert("clicked green!")
				},
				"x" : "200px",
				"y" : "100px",
				"r" : "20px",
				"fill" : "green",
			}
		];
	});

	insanity.controller('HUDController', function(){
		this.saySomething = function() {
			return "HUD here ..";
		};
	});

	insanity.controller('ProgressBarController', function(){
		// Create 5 green bars out of 20 to have an example of showing progress ..
		this.greens = 5;
		this.total = 20;

		this.columns = [];
		for(var i = 0; i < this.total; ++i) {
			if (i < this.greens)
				this.columns.push({"bgcolor": "background-color: green"});
			else
				this.columns.push({});
		}
	});

	insanity.directive('playground', function(){
		return {
			'restrict' : 'E',
			'templateUrl' : 'playground.html',
			'controller' : 'PlaygroundController',
			'controllerAs' : 'playground'
		};
	});

	insanity.directive('hud', function(){
		return {
			'restrict' : 'E',
			'templateUrl' : 'HUD.html',
			'controller' : 'HUDController',
			'controllerAs' : 'hud'
		};
	});

	insanity.directive('progressBar', function(){
		return {
			'restrict' : 'E',
			'templateUrl' : 'progress-bar.html',
			'controller' : 'ProgressBarController',
			'controllerAs' : 'progressBar'
		};
	});

})();
