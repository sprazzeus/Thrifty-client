angular.module('thriftyApp')
  .component('register', {
    templateUrl: 'register.template.html',
    controller: function ($http, $scope, $location) {
      $scope.sendData = function() {
        var data ={
          first_name: $scope.user.first_name,
          last_name: $scope.user.last_name,
          email: $scope.user.email,
          password: $scope.user.password
        }
        $http({
          method: 'POST',
          url: 'https://thrifty-app.herokuapp.com/register',
          data: data
        })
        .success(function (data) {
          console.log(data)
          window.localStorage.email = data.email
          window.localStorage.auth_token = data.auth_token
          $location.path('/getstarted')
        })
      }
    }
  })
