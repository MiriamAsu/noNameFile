class Note{
    constructor(){
        this.inputBox = document.getElementById('input-note');
        this.list = document.getElementById('note-list');
        this.button = document.getElementById('submit');
        this.notes= [];

        this.button.addEventListener('click', ()=>{
            this.write();
        });
    }
    write(){
        if(!this.inputBox.value){
          alert('please type in note');
        }else{
            this.notes.push(this.inputBox.value);
            this.saveNote();
            this.showNote(this.inputBox.value);
            this.get();
            this.inputBox.value = '';
        }
    }
    showNote(note){
        const noteItem = document.createElement('div');
        noteItem.className = 'note-item';
        noteItem.textContent = note;
        this.list.appendChild(noteItem);

        const deleteButton = document.createElement('button');
        deleteButton.className ='delete-note';
        deleteButton.textContent = 'Delete';
        noteItem.appendChild(deleteButton);
        deleteButton.addEventListener('click', ()=>{
            this.list.removeChild(noteItem);
        });
    }
    
    saveNote(){
        const newNote = JSON.stringify(this.notes);
        localStorage.setItem('notes', newNote);
    }

    retrieveData(){
        const data = localStorage.getItem('notes');
       if(data){
        const array = JSON.parse(data);
        this.notes = array;

        for(let b = 0; b< this.notes.length; b++){
            const note = this.notes[b];
            this.showNote(note);
       }
       }
        
    }
    get(){
        console.log(this.notes);
    }
}
const myText = new Note();
myText.retrieveData();