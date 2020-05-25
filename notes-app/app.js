const yargs = require('yargs');
const notes = require('./notes');

yargs.command(
    'create',
    'create a new note',
    (yargs) => {
        yargs.positional('title', {
            describe: 'title of the new note',
            demandOption: true,
            type: 'string',
        });
        yargs.positional('body', {
            describe: 'content of the new note',
            default: '',
            type: 'string',
        });
    },
    (argv) => {
        notes.addNote(argv.title, argv.body);
    },
).argv;

yargs.command(
    'read',
    'read the selected note',
    (yargs) => {
        yargs.positional('title', {
            describe: 'title of the note to read',
            demandOption: true,
            type: 'string',
        });
    },
    (argv) => {
        notes.readNote(argv.title);
    },
).argv;

yargs.command(
    'delete',
    'delete the selected note',
    (yargs) => {
        yargs.positional('title', {
            describe: 'title of the note to delete',
            demandOption: true,
            type: 'string',
        });
    },
    (argv) => {
        notes.removeNote(argv.title);
    },
).argv;

yargs.command('list', 'list all the saved notes', (argv) => {
    notes.listNotes();
}).argv;
