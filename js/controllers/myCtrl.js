app.controller("myCtrl", function ($scope) {
    //$scope.name="Hello";
    $scope.checker = true;
    $scope.sort = "name"
    $scope.users = [
        {
            name: 'Andrian',
            surname: 'sarabryn',
            age: 24
    },
        {
            name: 'Kolya',
            surname: 'kapusta',
            age: 25
    },
        {
            name: 'vasia',
            surname: 'ogirok',
            age: 26
    },
        {
            name: 'lenka',
            surname: 'pomidor',
            age: 27
    },
        {
            name: 'ostapko',
            surname: 'kukurudza',
            age: 28
    },
    ]

    $scope.showName = function () {
        alert($scope.name);
    };

    $scope.hideBox = function () {
        if ($scope.checker) {
            $scope.checker = false;
        } else {
            $scope.checker = true;
        }

        //$scope.checker  = !$scope.checker;    
    };
    $scope.addUser = function () {
        var x = {
            name: $scope.name,
            surname: $scope.surname,
            age: $scope.age
        };
        $scope.users.push(x);
    };
    $scope.reduct = function (index) {
        
        $scope.name= this.user.name;
        $scope.surname= this.user.surname;
        $scope.age= this.user.age;
        var x = {
            name: $scope.name,
            surname: $scope.surname,
            age: $scope.age
        };
       $scope.users.splice(index,1);

    };
})