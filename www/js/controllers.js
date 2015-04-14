angular.module('starter.controllers', [])

.controller('ChatsCtrl', function($scope, $state, Users, TalkGroups, Chats, $ionicModal) {
  // load modal immediately
  // $scope.loadModal();

  $scope.chats = Chats.all();
  $scope.groups = TalkGroups;

  // bind user status to local scope
  $scope.curUser = Users;

  // binary switch for status icon
  $scope.isAvailable = function() {
  	if ($scope.curUser.status === "Available") {
  		return true;
  	} else return false;
  };

  $scope.changeStatus = function(input) {
  	if (input === 0) {
  		$scope.curUser.status = "Available";
  		return;
  	} else if (input === 1) {
  		$scope.curUser.status = "Busy";
  		return;
  	}
  };

  $scope.clickAvail = function() {
    $scope.changeStatus(0);
    $scope.modal.hide();
  };

  $scope.clickBusy = function() {
    $scope.changeStatus(1);
    $scope.modal.hide();
  };

  $scope.people = {
    name: "amma"
  };

  // init submenu buttons to not clicked
  $scope.clicked = false;

  $scope.onClicked = function() {
  	$scope.clicked = !$scope.clicked;
  };

  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope,
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.toggleScan = function() {
    $scope.curUser.scanOn = !$scope.curUser.scanOn;
  };

  $scope.sendGroup = function(str) {
    $scope.header = str;
    return;
  };

  $scope.startCall = function() {
    $alert('hello');
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
