import { useNotes } from "../../context/notesContext";
import findNotesInArchive from "../../utils/findNotesAchive";

const NotesCard = ({ id, title, text, isPinned }) => {
  const { notesDispatch, archive } = useNotes();
  const onPinClick = (id) => {
    !isPinned
      ? notesDispatch({
          type: "PIN",
          payload: { id },
        })
      : notesDispatch({
          type: "UNPIN",
          payload: { id },
        });
  };
  console.log(isPinned);

  const onArchiveClick = (id) => {
    !isNotesInArchive
      ? notesDispatch({
          type: "ADD_TO_ARCHIVE",
          payload: { id },
        })
      : notesDispatch({
          type: "REMOVE_FROM_ARCHIVE",
          payload: { id },
        });
  };

  const isNotesInArchive = findNotesInArchive(archive, id);

  return (
    <div
      className=" border border-neutral-800 p-2 rounded-md w-[320px]"
      key={id}
    >
      <div className="flex justify-between border-b-2">
        <p>{title}</p>
        {!isNotesInArchive ? <button onClick={() => onPinClick(id)}>
          <span
            className={isPinned ? "material-icons" : "material-icons-outlined"}
          >
            push_pin
          </span>
        </button>:<></>}
        
      </div>
      <div className="flex flex-col ">
        <p>{text}</p>
        <div className="ml-auto">
          <button onClick={() => onArchiveClick(id)}>
            <span
              className={
                isNotesInArchive ? "material-icons" : "material-icons-outlined"
              }
            >
              archive
            </span>
          </button>
          <button>
            <span className="material-icons-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default NotesCard;
