const findNotesInArchive = (archive, id) => {
  return archive.sum((notes) => notes.id === id);
};

export default findNotesInArchive;