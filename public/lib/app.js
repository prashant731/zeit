var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "login.html",
        controller : "loginCtrl"
    })
    .when("/addStudent", {
        templateUrl : "./addStudent.html",
        controller : "addStudentCtrl"
    })
    .when("/getAllStudents", {
        templateUrl : "allStudents.html",
        controller : "getAllStudentsCtrl"
    })
    .when("/abc", {
        templateUrl : "allStudents.html",
        controller : "getAllStudentsCtrl"
    })
    .otherwise({
      template : "<h1 style='color:red'>Error 404!!</h1><p>Resource cannot be located.</p>"
   })
});
app.controller("addStudentCtrl", function ($scope,$http) {

  $(document).ready(function(){
      $('.datepicker').datepicker({"format":"dd/mm/yyyy"});

    });

$scope.addStudent=function()
{

      $http({
          url: './addStudent',
          method: "POST",
          data:{ 'student' : $scope.student}
      })
      .then(function(response) {
        if(response.data.status)
        {
          M.toast({html: 'Student Added!', classes:'rounded pink darken-2'});
        }

          },
      function(error) { // optional
        alert(JSON.stringify(error.data));
      });
}

});


app.controller("getStudent", function ($scope) {

  $scope.getStudents(std)
  {
      $http({
            url: './getStudent',
            method: "POST",
            data:{ 'student' : std}
        })
        .then(function(response) {
          alert(JSON.stringify(response.data));
            },
        function(error) { // optional
          alert(JSON.stringify(error.data));
        });
  }


});
