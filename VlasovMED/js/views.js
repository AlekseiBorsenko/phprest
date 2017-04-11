var views = {};

// SELECT для услуги
views.SelectService = Backbone.View.extend({
    collection: new models.ServiceLst(),
    el: 'select',
    initialize: function () {
        var self = this;
        this.collection.fetch({success: function () {
                self.render();
            }});

    },
    render: function () {
        var self = this;
        this.collection.forEach(function (item) {
            self.$el.append('<option value="' + item.get('id') + '">' + item.get('name') + '</option>')
        });
    }
});
// форма записи на прием
views.AdmissionForm = Backbone.View.extend({
    model: new models.Admission(),
    el: 'form',
    initialize: function () {
        this.firstname = $('#firstname');
        this.lastname = $('#lastname');
        this.surname = $('#surname');
        this.date = $('#date');
        this.time = $('#time');
        this.contact = $('#contact');
        this.service = $('#service');
        this.listenTo(this.model, 'change', this.render());
    },
    events: {
        'click #submit': 'saveAdmission'
    },
    render: function () {
        var select = new views.SelectService();
        $('#date').datepicker();
        $('#time').timepicker({
            'minTime': '7:00am',
            'maxTime': '19:00pm'
        });
    },
    saveAdmission: function () {
        this.model.set('firstname', this.firstname.val());
        this.model.set('lastname', this.lastname.val());
        this.model.set('surname', this.surname.val());
        this.model.set('date', this.date.val());
        this.model.set('time', this.time.val());
        this.model.set('contact', this.contact.val());
        this.model.set('service_id', this.service.val());
        this.model.save(null, {success: function () {
                alert('Вы успешно записаны на прием')
            }})
    }
});
views.AdmissionRow = Backbone.View.extend({
   model:models.Admission,
   services:null,
   tagName:'tr',
   initialize:function(){
       this.services = new models.ServiceLst();
       var self = this;
        this.services.fetch({success: function () {
                self.render();
            }});
   },
   render:function(){
       
       var elm = this.$el;
       elm.append('<td>'+this.model.get('firstname')+'</td>');
       elm.append('<td>'+this.model.get('lastname')+'</td>');
       elm.append('<td>'+this.model.get('surname')+'</td>');
       elm.append('<td>'+this.model.get('date')+'</td>');
       elm.append('<td>'+this.model.get('time')+'</td>');
       elm.append('<td>'+this.model.get('contact')+'</td>');
       var id = parseInt(this.model.get('service_id'))
       elm.append('<td>'+this.services.get(id).get('name')+'</td>');
   }
   
});
views.AdmissionTable = Backbone.View.extend({
    collection:null,
    el:'tbody',
    initialize:function(){
        var self = this;
        this.collection.fetch({success: function () {
                self.render();
            }});
    },
    render:function(){
        var self = this;
        this.collection.forEach(function (item) {
            self.$el.append(new views.AdmissionRow({model:item}).$el);
        });
    }
})