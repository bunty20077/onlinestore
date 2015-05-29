//Will be used as Route later. Now used for defining various Controllers
(function () {
	// Initialising module named store
	var app = angular.module('store', ['ngRoute']);

	//  ================ROUTER======================
		app.config(['$routeProvider',function($routeProvider) {
			$routeProvider
     			  	.when ('/gamecds',{
			  		templateUrl : 'partials/aboutus.htm'
			  });
		}]);		
		
	//  ================CONTROLLERS===================

	// Initialising Store Controller
	app.controller('StoreController', function(){
		this.products = books;		
	}),
	// Initialising Panel Controller
	app.controller('PanelController',function(){
		this.tab = 1;
	// Function to have clicked on default tab
		this.selectTab = function(setTab){
			this.tab=setTab	
		};
		this.isSelected = function(checkedTab){
			return this.tab===checkedTab	
		};
	}),
	// Initialising Review Controller
		app.controller('ReviewController',function($scope){
   			 $scope.reviews = [];
   			 $scope.review = function () {
   			 var newEntry = {
					star : $scope.star,
					comment : $scope.comment,
					name : $scope.uname		
				};
       		   $scope.reviews.push(newEntry);
       		    $scope.star='';
       		    $scope.comment='';
       		    $scope.uname='';
    	};	
	}),
	// Initialising Shopping Cart Controller
		app.controller('CartController',function($scope){
			$scope.itemsincart= [{
				bookid: '04',
				name : 'Head First JavaScript'}];	
			$scope.pricelists= [];
			var total =0;
			var totalqty =0;
			$scope.addItem = function(name,price,qty){
			var item = {
				name : name,
				price : price,
				quantity : qty
			};
			//Total Cart Calculation
			var productprice = item.quantity * item.price;
		    total = total+productprice;
			$scope.total = total;
			//Total Items Calculation
			totalqty = totalqty+item.quantity;
			alert(totalqty);
			$scope.totalqty = totalqty;

			//Pushing the value in cart
			 $scope.itemsincart.push(item);
			 console.log("object in itemscart arraylist is "+$scope.itemsincart.length);
			  alert("object in itemscart arraylist is "+$scope.itemsincart.length);

			   // Iterating cart arraylist 
			 for (i = 0; i < $scope.itemsincart.length; i++) {
   					    console.log("Index number is  "+i);
   					 	console.log("Name "+$scope.itemsincart[i].name);
			 			console.log("Qty "+$scope.itemsincart[i].quantity);
			 			console.log("Price "+$scope.itemsincart[i].price);
			 			}
			
			};
		});
})();


