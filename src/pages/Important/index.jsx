import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import { useNotes } from "../../context/notesContext";
import NotesCard from "../../components/NotesCard";

const Important = () => {
  const { important } = useNotes();

  return (
    <>
      <NavBar />
      <main className="flex gap-3">
        <SideBar />
        <div>
          <div className="flex flex-wrap gap-6 w-screen mt-7">
            {important?.length > 0 &&
              important
                .filter(Boolean)
                .map(({ title, text, id, isPinned }) => (
                  <NotesCard
                    key={id}
                    id={id}
                    title={title}
                    text={text}
                    isPinned={isPinned}
                  />
                ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Important;
