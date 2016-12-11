(function () {

    "use strict";

    angular.module("ngClassifieds")
        .controller("classifiedsCtrl", function ($scope, $http, $mdSidenav , classifiedsFactory, $mdToast) {

        classifiedsFactory.getClassifieds().then(function(classifieds){
             $scope.classifieds = classifieds.data;
        });     
       

            $scope.openSidebar = function () {

                $mdSidenav('left').open();
            }
            $scope.closeSidebar = function () {

                $mdSidenav('left').close();
            }
            $scope.saveClassified = function (classified) {
                if (classified) {
                    $scope.classifieds.push(classified);
                    $mdToast.show (
                    $mdToast.simple()
                        .content("Classified Saved!")
                        .position('top, left')
                        .hideDelay(3000)
                    );
                     $scope.closeSidebar();
                }
            }

        });
})();