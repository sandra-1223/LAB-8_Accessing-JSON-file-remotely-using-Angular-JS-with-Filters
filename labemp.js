var sample=angular.module("sample", []);
sample.controller("myctrl", function($scope, $http)
{
    $http.get('https://sandra-1223.github.io/LAB-8_Accessing-JSON-file-remotely-using-Angular-JS-with-Filters/data.json')
    .success(function(response)
    {
        $scope.entry=response.data;
    });
    $scope.rowlimit=10;
});
