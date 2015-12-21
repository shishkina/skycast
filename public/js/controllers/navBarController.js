function navBarController(User, $state, $http) {
  let self = this;

  self.signOut = function() {
    $http.defaults.headers.common.Authorization = '';
  }
}
