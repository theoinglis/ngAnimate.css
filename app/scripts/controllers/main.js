'use strict';

angular.module('ngAnimationcssApp')
  .controller('MainCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

    var heightCondition = 'padding-bottom, padding-top and max-height must be set to use';

    $scope.transitionsEnabled = Modernizr.csstransitions;


    $timeout(function() {
      $scope.animationTypes = [
        {name:'fade'},
        {name:'collapse', condition: heightCondition},
        {name:'slide-up', condition: heightCondition},
        {name:'slide-down', condition: heightCondition},
        {name:'slide-left', active: true},
        {name:'slide-right'},
        {name:'squash-vertical', condition: heightCondition},
        {name:'squash-left'},
        {name:'squash-right'},
      ];
      $scope.refreshClasses();
    }, 500);
    
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
  }]);
