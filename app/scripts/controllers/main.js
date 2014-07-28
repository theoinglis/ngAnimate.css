'use strict';

angular.module('ngAnimationcssApp')
  .controller('MainCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

    var heightCondition = 'padding-bottom, padding-top and max-height must be set to use';
    var perspectiveCondition = 'perspective must be set on the parent container for a 3D effect';

    $scope.transitionsEnabled = Modernizr.csstransitions;

    $scope.showAdvanced = false;
    $scope.toggleShowAdvanced = function() { $scope.showAdvanced = !$scope.showAdvanced; };
    $scope.activeAnimation = 'slide-left';
    $timeout(function() {
      $scope.animationTypes = [
        {name:'fade'},
        {name:'collapse', condition: heightCondition},
        {name:'slide-up', condition: heightCondition},
        {name:'slide-down', condition: heightCondition},
        {name:'slide-left'},
        {name:'slide-right'},
        {name:'squash-vertical', condition: heightCondition},
        {name:'squash-left'},
        {name:'squash-right'},
        {name:'rotate-left', condition: perspectiveCondition},
        {name:'rotate-right', condition: perspectiveCondition},
        {name:'rotate-up', condition: perspectiveCondition},
        {name:'rotate-down', condition: perspectiveCondition},
      ];
      $scope.refreshClasses();
    }, 100);
    
    $scope.speed = 'nga-default';
    $scope.stagger = ' nga-stagger';

    $scope.listItemClicked = function(name) {
      if (!$scope.showAdvanced && name) {
        $scope.activeAnimation = name;
        $scope.selectMain(name);
      }
    }
    $scope.selectMain = function() {
      $timeout(function(){ $scope.toggleSingleActive(); });
      for (var i = 0; i < $scope.animationTypes.length; i++) {
        var animationType = $scope.animationTypes[i];
        animationType.allActive = null;
        animationType.aActive = null;
        animationType.rActive = null;
        animationType.mActive = null;
        $scope.refreshClasses();
      }
    };
    $scope.selectComponent = function() {
      $scope.activeAnimation = null;
      $scope.refreshClasses();
    };

    $scope.refreshClasses = function() {
      $scope.classes = '';
      for (var i = 0; i < $scope.animationTypes.length; i++) {
        var animationType = $scope.animationTypes[i];
        if ($scope.activeAnimation == animationType.name) {
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

      // Toggle Single Active
      $scope.toggleSingleActive = function() {
        $scope.singleActive = !$scope.singleActive;
      }
    };
  }]);
