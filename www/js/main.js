hoodie = new Hoodie();

var renderTask = function(t){
    $("<li>"+ t.title +"</li>").appendTo("ul");
}
var addTask = function(){
    var textInput = $("#text").val();
    var type = 'task';
    var task = {title: textInput, done: false};
    hoodie.store.add(type, task);
};

var loadTasks = function (tasks) {
    for(var i=0; i<tasks.length; i++){
        var task = tasks[i];
        renderTask(task);
        console.log(tasks);
    };
};

$(function(){
// code to run when page is loaded    

    hoodie.account.signIn("joe@example.com","secret");
    
    $("#submit").on("click", addTask);
    var type = 'task';
    hoodie.store.findAll(type).done(loadTasks);
    
    hoodie.remote.on('add:task', renderTask);

    
});