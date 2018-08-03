// Code goes here

var app = angular.module('myApp',
    []);

app.controller('countryCtrl', [
        '$scope',
function($scope) {

$scope.countriesWithPhoneCode = [
{
"name": "Afghanistan",
"dial_code": "+93",
"code": "AF"
},
{
"name": "Aland Islands",
"dial_code": "+358",
"code": "AX"
},
{
"name": "Albania",
"dial_code": "+355",
"code": "AL"
},
{
"name": "Algeria",
"dial_code": "+213",
"code": "DZ"
},
{
"name": "AmericanSamoa",
"dial_code": "+1684",
"code": "AS"
},
{
"name": "Andorra",
"dial_code": "+376",
"code": "AD"
},
{
"name": "Angola",
"dial_code": "+244",
"code": "AO"
},
{
"name": "Anguilla",
"dial_code": "+1264",
"code": "AI"
},
{
"name": "Antarctica",
"dial_code": "+672",
"code": "AQ"
},
{
"name": "Antigua and Barbuda",
"dial_code": "+1268",
"code": "AG"
},
{
"name": "Argentina",
"dial_code": "+54",
"code": "AR"
},
{
    "name": "India",
    "dial_code": "+91",
    "code": "IN"
    }
    
];

}]);