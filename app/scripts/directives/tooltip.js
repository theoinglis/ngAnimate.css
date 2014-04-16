angular.module('Helpers')
	.directive('tooltip',
		function() {
			return {
				link: function($scope, $element, attrs) {

					$element.tooltip();
					
					attrs.$observe('tooltip', function(text) {
						$element.attr('data-original-title', text)
								.tooltip('fixTitle');
					});
				},
			};
		});