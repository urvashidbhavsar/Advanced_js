function hello(name) {
    return `Hi ! ${name}`;
}
function display_msg(appriciate, msg, name) {
    console.log(`${appriciate(name)}, ${msg}`);
}
display_msg(hello, "Welcome to our Home", "Urvashi");