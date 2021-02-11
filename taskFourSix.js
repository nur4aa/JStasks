(function() {

    let text;
    let ul = document.createElement("ul");
    let txt = document.createTextNode('Create List')
    document.body.appendChild(txt);
    document.body.appendChild(ul);
    do {

        text = prompt("Что добавим?", "");

        if (text !== "" && text != null) {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(text));
            ul.appendChild(li);
        }

    } while(text !== "" && text != null);

}());