const fs = require("fs/promises");
const path = require("path");

const notesDir = path.join(__dirname, "notes");

const command = process.argv[2];
const noteName = process.argv[3];
const noteContent = process.argv[4];

async function ensureNotesDir() {
    await fs.mkdir(notesDir, { recursive: true });
}

async function addNote(name, content) {
    try {
        await ensureNotesDir();

        const filePath = path.join(notesDir, `${name}.txt`);

        await fs.writeFile(filePath, content);

        console.log(`Note saved: notes/${name}.txt`);
    } catch (error) {
        console.log("Error adding note");
    }
}

async function readNote(name) {
    try {
        const filePath = path.join(notesDir, `${name}.txt`);

        const data = await fs.readFile(filePath, "utf-8");

        console.log(`--- ${name} ---`);
        console.log(data);
    } catch (error) {
        console.log(`Note not found: ${name}`);
    }
}

async function listNotes() {
    try {
        await ensureNotesDir();

        const files = await fs.readdir(notesDir);

        console.log("Notes:");

        for (const file of files) {
            if (file.endsWith(".txt")) {
                const filePath = path.join(notesDir, file);

                const stats = await fs.stat(filePath);

                console.log(`  ${file} (${stats.size} bytes)`);
            }
        }
    } catch (error) {
        console.log("Error listing notes");
    }
}

async function removeNote(name) {
    try {
        const filePath = path.join(notesDir, `${name}.txt`);

        await fs.unlink(filePath);

        console.log(`Note removed: ${name}`);
    } catch (error) {
        console.log(`Note not found: ${name}`);
    }
}

async function appendNote(name, content) {
    try {
        const filePath = path.join(notesDir, `${name}.txt`);

        await fs.appendFile(filePath, `\n${content}`);

        console.log(`Appended to: notes/${name}.txt`);
    } catch (error) {
        console.log(`Note not found: ${name}`);
    }
}

async function statsNotes() {
    try {
        const files = await fs.readdir(notesDir);

        let totalFiles = 0;
        let totalSize = 0;

        for (const file of files) {
            if (file.endsWith(".txt")) {
                totalFiles++;

                const filePath = path.join(notesDir, file);

                const stats = await fs.stat(filePath);

                totalSize += stats.size;
            }
        }

        console.log("Note Statistics");
        console.log(`Total Notes: ${totalFiles}`);
        console.log(`Total Size: ${totalSize} bytes`);
    } catch (error) {
        console.log("Error getting stats");
    }
}


async function main() {
    switch (command) {
        case "add":
            await addNote(noteName, noteContent);
            break;

        case "read":
            await readNote(noteName);
            break;

        case "list":
            await listNotes();
            break;

        case "remove":
            await removeNote(noteName);
            break;

        case "append":
            await appendNote(noteName, noteContent);
            break;

        case "stats":
            await statsNotes();
            break;

        default:
            console.log("Invalid command");
    }
}

main();