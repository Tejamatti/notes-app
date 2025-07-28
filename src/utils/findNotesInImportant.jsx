const findNotesInImportant = (important, id) => {
  return important.some((note) => note.id === id);
};

export default findNotesInImportant;
