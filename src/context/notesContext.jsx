import {createContext,useContext,useReducer} from 'react';
import notesReducer from '../Reducers/notesReducer';

const NotesContext = createContext();
 const NotesProvider = ({children}) => {
   const initialState = {
     title: "",
     text: "",
     notes: [],
     archive:[],
     bin:[],
     important:[],
    //  pinnedNotes: [],
    //  unpinnedNotes: [],
   };

   const [{ title, text, notes, archive,bin,important }, notesDispatch] = useReducer(
     notesReducer,
     initialState
   );


  return (
    <NotesContext.Provider value={{ title, text, notes, archive, bin,important, notesDispatch }}>
      {children}
    </NotesContext.Provider>
  );
}

const useNotes = () => useContext(NotesContext);

export {useNotes, NotesProvider};