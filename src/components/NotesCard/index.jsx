import { useNotes } from "../../context/notesContext";
import findNotesInArchive from "../../utils/findNotesAchive";
import findNotesInBin from "../../utils/findNotesInBin";
import findNotesInImportant from "../../utils/findNotesInImportant";

const NotesCard = ({ id, title, text, isPinned }) => {
  const { notesDispatch, archive,bin, important } = useNotes();

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

//changes are made here

  const onDeleteClick = (id) => {
    if (isNotesInBin) {
      notesDispatch({
        type: "PERMANENT_DELETE",
        payload: { id },
      });
    } else {
      notesDispatch({
        type: "DELETE_NOTE",
        payload: { id },
      });
    }
  };


  const onToggleImportant = () => {
    notesDispatch({
      type: isNotesImportant ? "REMOVE_FROM_IMPORTANT" : "ADD_TO_IMPORTANT",
      payload: { id, title, text, isPinned },
    });
  };





  const isNotesInArchive = findNotesInArchive(archive, id);
  console.log(archive)

  const isNotesInBin = findNotesInBin(bin,id); // Placeholder for bin logic, if needed

  const isNotesImportant = findNotesInImportant(important, id); // Assuming isImportant is passed as a prop

  return (
    <div
      className=" border border-neutral-800 p-2 rounded-md w-[320px]"
      key={id}
    >
      <div className="flex justify-between border-b-2">
        <p>{title}</p>
        {!isNotesInArchive ? (
          <button onClick={() => onPinClick(id)}>
            <span
              className={
                isPinned ? "material-icons" : "material-icons-outlined"
              }
            >
              push_pin
            </span>
          </button>
        ) : (
          <></>
        )}
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

          <button onClick={onToggleImportant}>
            <span
              className={
                isNotesImportant ? "material-icons" : "material-icons-outlined"
              }
            >
              star
            </span>
          </button>

          {/* <button onClick={() => onDeleteClick(id)}>
            <span className="material-icons-outlined">delete</span>
          </button> */}

          {isNotesInBin ? (
            <button onClick={() => onDeleteClick(id)}>
              <span className="material-icons">delete_forever</span>
            </button>
          ) : (
            <button onClick={() => onDeleteClick(id)}>
              <span className="material-icons-outlined">delete</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
