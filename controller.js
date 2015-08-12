var app = angular.module('reddit');

app.controller('PostsController', function($scope, FirebaseService){
	
	$scope.newPost = {title: 'hello world'}
	function getPosts(){
		FirebaseService.getAllPosts().then(function(posts){
			$scope.posts = posts;
		})
	}
	getPosts()
	
	$scope.addPost = function(){
		debugger
		FirebaseService.addPost($scope.newPost).then(getPosts)
	}
})

