const {nanoid} = require('nanoid');
const InvariantError = require('../../exceptions/invariant_error');
const NotFoundError = require('../../exceptions/not_found_error');

class NotesService {
    constructor() {
        this._notes = [];
    }

    addNotes({title,body,tags}){
        const id = nanoid(16);
        const createdAt = new Date().toISOString();
        const updatedAt = createdAt;
    
        const newNote = {
        title, tags, body, id, createdAt, updatedAt,
        };
    
        this._notes.push(newNote);
        const isSuccess = this._notes.filter((note) => note.id === id).length > 0;
        if(!isSuccess){
            throw new InvariantError("Catatan Gagal ditambahkan");
            
        }
        return id;


    }
    getNotes() {
        return this._notes;
    }
    getNoteById(id){
        const note = this._notes.filter((n)=> n.id === id)[0];

        if(!note){
            throw new NotFoundError("ID Tidak Ditemukan");
            
        }
        return note;
    }

    editNoteById(id, {title,body,tags}){
        // var index untuk menemukan id
        const index = this._notes.findIndex((note)=> note.id === id)

        if(index === -1){
            throw new NotFoundError("Gagal memperbarui, catatan tidak ditemukan");
            
        }
        const updatedAt = Date().toString();

        this._notes[index] = {
            ...this._notes[index],
            title,
            tags,
            body,
            updatedAt
        };

    }
    deleteNoteById(id){
        const index = this._notes.findIndex((n)=> n.id=== id);

        if(index === -1){
            throw new NotFoundError("Catatan Gagal Dihapus, Id tidak ditemukan");
            
        }
        this._notes.splice(index,1);
    }
    
}

module.exports = NotesService;