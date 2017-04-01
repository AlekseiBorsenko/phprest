var models = {}

var Person = Backbone.Model.extend({
    id: null,
    name: 'default name'
})

var People = Backbone.Collection.extend({
    model: Person,
    url: 'php/lib/crudapi.php/people',
    parse:function(resp){
        console.log(resp)
    }
});


$(function () {
    
    var ppl = new People();
    ppl.fetch()
    console.log(ppl)
})
