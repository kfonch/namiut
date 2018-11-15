angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('nAMIUtahPrograms', {
    url: '/home',
    templateUrl: 'templates/nAMIUtahPrograms.html',
    controller: 'nAMIUtahProgramsCtrl'
  })

  .state('reportProgramData', {
    url: '/page2',
    templateUrl: 'templates/reportProgramData.html',
    controller: 'reportProgramDataCtrl'
  })

$urlRouterProvider.otherwise('/home')


});