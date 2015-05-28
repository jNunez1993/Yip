angular.module('app')
.directive("navbar", function() { // (1)
  return {
    restrict: "E",         // (2)
    replace: true,         // (3)
    transclude: true,      // (4)
    templateUrl: "components/navbar/navbar.html"    // (5)
  }});
