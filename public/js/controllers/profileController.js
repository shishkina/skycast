'use strict';

function ProfileController(User, $timeout) {
    self.getUserQueries = function() {
      $timeout( () => {
         return User.getQueries();
      },1000)    
    }
}
