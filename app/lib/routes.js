Router.route('/', {
  template: 'home'
});

Router.route('/dashboard', function() {
  this.layout('dashboard_menu');
  this.render('dashboard');
}, {
  name: 'dashboard'
});

Router.route('/dashboard/vote', function() {
  this.layout('dashboard_menu');
  this.render('vote');
}, {
  name: 'vote'
});

Router.route('/dashboard/create', function() {
  this.layout('dashboard_menu');
  this.render('create');
}, {
  name: 'create'
});