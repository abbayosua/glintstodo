function addactivity() {
    let inputfromuser = document.getElementById("activityInput")

    let node = document.createElement("DIV");
    let textnode = document.createTextNode(inputfromuser.value);
    node.appendChild(textnode);
    document.getElementById("activities").appendChild(node);
    event.preventDefault();
}