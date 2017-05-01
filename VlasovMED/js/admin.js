$(function () {

    var service = new models.Service({name:'test'});
    var services = new models.Services();
    services.add(service);
    service.save();

    $('#add_employee').on('click',function(){
        var newEmployee = new models.Employee({firstname:'asd',lastname:'dsa',patronymic:'aaa'});
        employees.add(newEmployee);
        newEmployee.save();
    });

});

