const findNotesInBin = (bin, id) => {
  if (!Array.isArray(bin)) return false;

  return bin.filter(Boolean).some((note) => note?.id === id);
};

export default findNotesInBin;
