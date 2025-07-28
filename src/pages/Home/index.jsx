import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import { useNotes } from "../../context/notesContext";
import NotesCard from "../../components/NotesCard";

const Home = () => {
  const { title, text, notes,archive,isImportant, notesDispatch } = useNotes();

  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };

  const onTextChange = (e) => {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };

  const onAddClick = () => {
    notesDispatch({
      type: "ADD_NOTE",
      // payload: {title, text}
    });
    notesDispatch({
      type: "CLEAR_INPUT",
      // payload: {title, text}
    });
  };

  const pinnedNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const unpinnedNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);

    console.log(archive)

  return (
    <>
      <NavBar />
      <main className="flex gap-3">
        <SideBar />
        <div className="flex flex-col w-screen  mt-7">
          <div className="flex flex-col w-[450px] border-red-400 relative self-center">
            <input
              value={title}
              className="border border-neutral-800 focus:outline-none border-b-0 p-1"
              placeholder="Enter Title"
              onChange={onTitleChange}
            />
            <textarea
              value={text}
              className="border border-neutral-800 rounded-b-md focus:outline-none p-1 border-t-0 h-[100px]"
              placeholder="Enter Text"
              onChange={onTextChange}
            />
            <button
              disabled={title.length === 0}
              onClick={onAddClick}
              className="absolute bottom-0 right-0 border bg-indigo-800 text-slate-50 rounded-full m-1"
            >
              <span className="material-icons-outlined">add</span>
            </button>
          </div>
          <div className="mt-14 ml-10 flex flex-col gap-5">
            {pinnedNotes?.length > 0 && (
              <div>
                <h1>Pinned Notes</h1>
                <div className=" flex flex-wrap gap-6">
                  {pinnedNotes?.length > 0 &&
                    pinnedNotes.map(({ title, text, id, isPinned, isImportant }) => (
                      <NotesCard
                        key={id}
                        id={id}
                        title={title}
                        text={text}
                        isPinned={isPinned}
                        isImportant={isImportant}
                      />
                    ))}
                </div>
              </div>
            )}
            <div>
              {pinnedNotes?.length > 0 && <h1>Unpinned Notes</h1>}
              <div className=" flex flex-wrap gap-6 ">
                {unpinnedNotes?.length > 0 &&
                  unpinnedNotes.map(({ title, text, id, isPinned, isImportant }) => (
                    <NotesCard
                      key={id}
                      id={id}
                      title={title}
                      text={text}
                      isPinned={isPinned}
                      isImportant={isImportant}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
