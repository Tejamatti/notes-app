import {createContext,useContext,useReducer} from 'react';
import notesReducer from '../Reducers/notesReducer';

const NotesContext = createContext();
 const NotesProvider = ({children}) => {
   const initialState = {
     title: "",
     text: "",
     notes: [],
     archive:[]
    //  pinnedNotes: [],
    //  unpinnedNotes: [],
   };

   const [{ title, text, notes, archive }, notesDispatch] = useReducer(
     notesReducer,
     initialState
   );


  return (
    <NotesContext.Provider value={{ title, text, notes, archive, notesDispatch }}>
      {children}
    </NotesContext.Provider>
  );
}

const useNotes = () => useContext(NotesContext);

export {useNotes, NotesProvider};