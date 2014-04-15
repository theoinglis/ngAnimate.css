'use strict';

angular.module('ngAnimationcssApp')
  .controller('MainCtrl', function ($scope) {
    $scope.items = [
      'Michael Jordon',
      'Lebron James',
      'Kobe Bryant',
      'Paul Pierce',
      'Kevin Durant',
      'Shaquille O\'Neil',
      'Dwayne Wade',
      'Chris Bosh'
    ];

    $scope.animationTypes = [
      {name:'fade', allActive: true},
      {name:'collapse', allActive: true},
      {name:'slide-up'},
      {name:'slide-down'},
      {name:'slide-left'},
      {name:'slide-right'},
      {name:'squash-vertical'},
      {name:'squash-left'},
      {name:'squash-right'},
    ];
    $scope.animationType = $scope.animationTypes[$scope.animationTypes.length - 1];

    $scope.refreshClasses = function() {
      $scope.classes = "";
      for (var i = 0; i < $scope.animationTypes.length; i++) {
        var animationType = $scope.animationTypes[i];
        if (animationType.allActive) {
          $scope.classes += "nga-" + animationType.name + " ";
        }
      };
    }
    $scope.refreshClasses();
  });
