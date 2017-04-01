var models = {}

models.Example = Backbone.Model.extend({
    id: null,
    name: 'default name'
})

var ExampleLst = Backbone.Collection.extend({
    model: models.Example,
    url: 'php/lib/crudapi.php/example'
});

var views = {};

$(function(){
    var examples = new ExampleLst();
    examples.fetch({ data: $.param({ name: 1}) });
    var newEx = new models.Example();
    examples.add(newEx);
    newEx.save()
})
