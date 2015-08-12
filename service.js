var app = angular.module('reddit');

app.service('FirebaseService', function($http, $q){
	this.getAllPosts = function(){
		var myPromise = $q(function(resolve, reject){
			$http.get('https://devmtn.firebaseio.com/posts.json').then(function(response){
				resolve(response.data)
			})
		})
		return myPromise
	}
	
	this.addPost = function(post){
		post.timestamp = Date.now();
		post.comments = [];
		post.karma = 0;
		post.id = guid();
		var url = 'https://devmtn.firebaseio.com/posts/' + post.id + '.json'
		return $http.put(url, post)
	}
	
	
	var guid = function() {
    var s4 = function() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
})

