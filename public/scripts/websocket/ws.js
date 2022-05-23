const socket = io('http://localhost:3000');

// socket.on('connect', function() {
//     console.log('Connected');
// });

socket.on('msgToClient', data => {
    document.languageForm.languageSelector.value = data.editorMode;
    codeMirror.setOption('mode', data.editorMode);
    codeMirror.setValue(data.editorData);
});

// socket.on('disconnect', function() {
//     console.log('Disconnected');
// });

function submitTextFromTextarea() {
    const mode = codeMirror.getOption('mode');
    const content = codeMirror.getValue();
    socket.emit('msgToServer', { editorMode: mode, editorData: content });
}