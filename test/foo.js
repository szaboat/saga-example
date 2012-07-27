function hello(name){
    var hello = "hello";
    var message;
    if (name) {
        message = hello + ' ' + name; 
    } else {
        message = hello + ' world';
    }
    return message;
}
