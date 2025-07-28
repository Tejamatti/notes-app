// const findNotesInArchive = (archive, id) => {
//   return archive.sum((notes) => notes.id === id);
// };

// export default findNotesInArchive;



// const findNotesInArchive = (archive, id) => {
//   if (!Array.isArray(archive)) return 0;

//   return archive
//     .filter((note) => note.id === id)
//     .reduce((acc, note) => acc + (note.value || 0), 0); // change `value` to the field you want to sum
// };

// export default findNotesInArchive;


const findNotesInArchive = (archive, id) => {
  if (!Array.isArray(archive)) return false;

  return archive
    .filter(Boolean) // remove undefined/null items
    .some((note) => note?.id === id);
};

export default findNotesInArchive;
