




var services
$(function () {


    var service = new models.Service({name:'test'});
    var services = new models.Services();
    services.add(service);
    service.save();

})
