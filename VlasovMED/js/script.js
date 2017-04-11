

var models = {}
var views = {};
// услуга
models.Service = Backbone.Model.extend({
    id:null,
    name:'',
    parse:function(r){
        return {
          id:r[0],
          name:r[1]
        };
    }
});
// запись на прием, она же пациент
models.Admission = Backbone.Model.extend({
    url:'php/lib/crudapi.php/admission',
    parse:function(r){
        return {
          id:r[0],
          name:r[1]
        };
    }
});
// список услуг, подключается к CRUDAPI
models.ServiceLst = Backbone.Collection.extend({
    model:models.Service,
    url:'php/lib/crudapi.php/service',
    parse:function(r){
        return r.service.records;
    }
});
// SELECT для услуги
views.SelectService = Backbone.View.extend({
    collection:new models.ServiceLst(),
    el:'select',
    initialize:function(){
        var self = this;
        this.collection.fetch({success:function(){
                self.render();
        }});
        
    },
    render:function(){
        var self = this;
        this.collection.forEach(function(item){
            self.$el.append('<option value="'+item.get('id')+'">'+item.get('name')+'</option>')
        });
    }
});
// форма записи на прием
views.AdmissionForm = Backbone.View.extend({
    model:new models.Admission(),
    el:'form',
    initialize:function(){
        this.firstname = $('#firstname');
        this.lastname = $('#lastname');
        this.surname = $('#surname');
        this.contact = $('#contact');
        this.service = $('#service');
        this.listenTo(this.model,'change',this.render());
    },
    events:{
        'click #submit':'saveAdmission'
    },
    render:function(){
        var select = new views.SelectService();
    },
    saveAdmission:function(){
        this.model.set('firstname',this.firstname.val());
        this.model.set('lastname',this.lastname.val());
        this.model.set('surname',this.surname.val());
        this.model.set('contact',this.contact.val());
        this.model.set('service_id',this.service.val());
        this.model.save(null,{success:function(){
                alert('Вы успешно записаны на прием')
        }})
    }
});

var services
$(function () {


    var a = new views.AdmissionForm();
    
})
