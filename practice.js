//ace editor config
let editor;
window.onload = function() {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/chrome");
    editor.session.setMode("ace/mode/python");
}

//change language
function changeLanguage() {
    let language = $("#language-options").val();
    if(language == 'cpp')editor.session.setMode("ace/mode/c_cpp");
    else if(language == 'py')editor.session.setMode("ace/mode/python");
}

