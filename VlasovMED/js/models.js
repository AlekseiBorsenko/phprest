var models = {};
// услуга
models.Service = Backbone.Model.extend({
    id: null,
    name: '',
    parse: function (r) {
        return {
            id: r[0],
            name: r[1]
        };
    }
});

// список услуг, подключается к CRUDAPI
models.ServiceLst = Backbone.Collection.extend({
    model: models.Service,
    url: 'php/lib/crudapi.php/service',
    parse: function (r) {
        return r.service.records;
    }
});
// запись на прием, она же пациент
models.Admission = Backbone.Model.extend({
    idAttribute:"id",
    url: 'php/lib/crudapi.php/admission',
    parse: function (r) {
        return {
            id: r[0],
            date: r[1],
            time: r[2],
            firstname: r[3],
            lastname: r[4],
            surname: r[5],
            contact: r[6],
            service_id: r[7],
        };
    }
});
models.AdmissionList = Backbone.Collection.extend({
    model: models.Admission,
    url: 'php/lib/crudapi.php/admission',
    parse: function (r) {
        return r.admission.records;
    }
})