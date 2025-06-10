const inputBox = document.getElementById('input-note');
const noteList = document.getElementById('note-list');
const button = document.getElementById('save-button');


function addNote(){
    const newId = Math.floor(Math.random()*100);
    const note = inputBox.value.trim();
    if(note){
        createNoteElement(note,newId);

        inputBox.value = '';
        
        saveNote(note, newId);

    }else{
        alert('please enter a note first!');
    }
}
function createNoteElement(note,newId){
    const noteItem = document.createElement('div');
    noteItem.className = 'note-menu';
    const item = document.createElement('span');
    item.className = 'note-text';
    noteItem.textContent = note;
    noteList.appendChild(noteItem);
    const deletebutton = document.createElement('button');
    deletebutton.textContent = 'Delete';
    deletebutton.className = 'delete-button';
    noteItem.appendChild(deletebutton);
    deletebutton.addEventListener('click', function(){
        noteList.removeChild(noteItem);

        saveNote(note,newId);
    });
    item.textContent = inputBox.value;
}

function saveNote(note,newId){
    const notes = localStorage.getItem('notes');
    if(notes){
        const notesArray = JSON.parse(notes);
        
        const currentNote ={
            id: newId,
            value: note,
        };
        notesArray.push(currentNote);

        const noteJSON = JSON.stringify([notesArray]);
        localStorage.setItem('notes',noteJSON);

    }else{
        const currentNote = {
            id: newId,
            value: note,
        };
        const newNote = JSON.stringify([currentNote]);
        localStorage.setItem('notes',newNote);
    }

}
function deleteNote(id){
    const notes = localStorage.getItem('notes');
    console.log('Deleting note with ID of', id);

    if(notes){
        const notesArray = JSON.parse(notes);

        const filteredNotes = notesArray.filter(function(notes){
            return notes.id !== id;
        });

        const newNote = JSON.stringify(filteredNotes);
        localStorage.setItem('notes', newNote);
        
    }
}

button.addEventListener('click', addNote);