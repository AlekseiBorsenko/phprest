/* global Backbone */

var models = {};
models.Service = Backbone.Model.extend({});

models.Services = Backbone.Collection.extend({
    model:models.Service,
    url:'php/repo/services.php'
});
models.Employee = Backbone.Model.extend({});

models.Employees = Backbone.Collection.extend({
    url:'php/controller/employees.php'
    
});
