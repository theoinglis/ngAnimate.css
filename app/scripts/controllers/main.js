'use strict';

angular.module('ngAnimationcssApp')
  .controller('MainCtrl', function ($scope) {

    var heightCondition = 'padding-bottom, padding-top and max-height must be set to use';

    $scope.animationTypes = [
      {name:'fade'},
      {name:'collapse', condition: heightCondition},
      {name:'slide-up', condition: heightCondition, active: true},
      {name:'slide-down', condition: heightCondition},
      {name:'slide-left'},
      {name:'slide-right'},
      {name:'squash-vertical', condition: heightCondition},
      {name:'squash-left'},
      {name:'squash-right'},
    ];
    $scope.animationType = $scope.animationTypes[$scope.animationTypes.length - 1];
    $scope.speed = 'nga-default';
    $scope.stagger = ' nga-stagger';

    $scope.refreshClasses = function() {
      $scope.classes = '';
      for (var i = 0; i < $scope.animationTypes.length; i++) {
        var animationType = $scope.animationTypes[i];
        if (animationType.active) {
          $scope.classes += 'nga-' + animationType.name + ' ';
        }
        if (animationType.allActive) {
          $scope.classes += 'nga-' + animationType.name + '-all ';
        }
        if (animationType.aActive) {
          $scope.classes += 'nga-' + animationType.name + '-add ';
        }
        if (animationType.rActive) {
          $scope.classes += 'nga-' + animationType.name + '-remove ';
        }
        if (animationType.mActive) {
          $scope.classes += 'nga-' + animationType.name + '-move ';
        }
      };
    }
    $scope.refreshClasses();
  });
