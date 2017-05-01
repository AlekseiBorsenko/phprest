/* global models, Backbone */

var views = {};

views.EmployeeRow = Backbone.View.extend({
    model:models.Employee,
    tagName:'tr',
    initialize:function(){
        console.log('initializing employee row view');
        this.listenTo(this.model,'change',this.render());
    },
    render:function(){
        this.$el.empty();
        this.$el.append('<td>'+this.model.get('lastname')+' '+this.model.get('firstname')+' '+this.model.get('patronymic')+'</td>');
        this.$el.append('<td>'+this.model.get('name')+'</td>');
    }
});
views.EmployeesTable = Backbone.View.extend({
    collection:null,
    el:'#employee_list',
    initialize:function(){
        console.log('initializing employee list view');
        this.listenTo(this.collection,'add',this.render());
        this.render();
    },
    render:function(){
        var elm = this.$el;
        this.$el.empty();
        this.collection.forEach(function(employee){
            var employeeView = new views.EmployeeRow(employee);
            elm.append(employeeView.$el);
        });
    },
    addEmployee:function(){
        console.log('adding employee')
    }
});