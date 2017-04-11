$(function () {

    var admissions = new models.AdmissionList();
    var a = new views.AdmissionTable({collection:admissions});
    admissions.fetch();

})

