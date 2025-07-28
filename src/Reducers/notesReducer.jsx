import {v4 as uuid} from 'uuid';


const notesReducer = (state,{type,payload}) =>{
  switch (type) {
    case "TITLE":
      return {
        ...state,
        title: payload,
      };
    case "TEXT":
      return {
        ...state,
        text: payload,
      };
    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: state.title,
            text: state.text,
            id: uuid(),
            isPinned: false,
            isImportant: false,
          },
        ],
      };
    case "CLEAR_INPUT":
      return {
        ...state,
        title: "",
        text: "",
      };
    case "PIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
        ),
      };
    case "UNPIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
        ),
      };
    case "ADD_TO_ARCHIVE":
      return {
        ...state,
        archive: [
          ...state.archive,
          state.notes.find(({ id }) => id === payload.id),
        ],
        notes: state.notes.filter(({ id }) => id !== payload.id),
      };
    case "REMOVE_FROM_ARCHIVE":
      return {
        ...state,
        notes: [
          ...state.notes,
          state.archive.find(({ id }) => id === payload.id),
        ],
        archive: state.archive.filter(({ id }) => id !== payload.id),
      };

    case "DELETE_NOTE": {
      const noteToDelete = state.notes.find(({ id }) => id === payload.id);
      if (!noteToDelete) return state; // safety fallback

      return {
        ...state,
        bin: [...state.bin, noteToDelete],
        notes: state.notes.filter(({ id }) => id !== payload.id),
      };
    }

    case "PERMANENT_DELETE":
      return {
        ...state,
        bin: state.bin.filter(({ id }) => id !== payload.id),
      };

    case "ADD_TO_IMPORTANT":
      return {
        ...state,
        important: [
          ...state.important,
          state.notes.find(({ id }) => id === payload.id),
        ],
        notes: state.notes.filter(({ id }) => id !== payload.id),
      };

    case "REMOVE_FROM_IMPORTANT":
      return {
        ...state,
        notes: [
          ...state.notes,
          state.important.find(({ id }) => id === payload.id),
        ],
        important: state.important.filter(({ id }) => id !== payload.id),
      };

    default:
      return state;
  }
}
export default notesReducer;