var app = angular.module("myMod");

app.controller('controller', function($scope, $http) {

    $scope.posts = [];

            $http({
                method: 'GET',
                url: 'https://www.reddit.com/r/aww/.json'
            }).then(function sucessfulCallback(response) {
                console.log(response);
                $scope.posts = response.data.data.children;

            }, function(error) {
                console.log(error);
            });

});
