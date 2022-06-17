var btn = document.querySelector("button");
var count = 0;
btn.addEventListener("click", function (e) {
    var todolist = document.querySelector('div.todos');
    var input = document.querySelector('input');
    var paragraph = document.createElement("p");
    paragraph.innerHTML = input.value;
    paragraph.setAttribute("key", count);
    todolist.appendChild(paragraph)

    input.value = ""
    count += 1;

    document.querySelector(`p[key="${count-1}"]`).addEventListener("click", function(e){
        let todolist = document.querySelector('div.todos');
        todolist.removeChild(this);
    })
});