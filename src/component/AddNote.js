import { useState, useEffect } from "react";
import ShowNote from "./ShowNote";
import axios from "axios";

export default function Addnote({alert}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setnotes] = useState([]);
  const[add,setAdd]= useState(false);

  // Fetch notes from backend
  const fetchNotes = async () => {
    const res = await axios.get("https://my-note-backend.vercel.app/note/getNote", {
      withCredentials: true,
    });
    setnotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://my-note-backend.vercel.app/note/addNote",
      {
        title,
        description,
      },
      { withCredentials: true }
    );
    setTitle("");
    setDescription("");
    fetchNotes(); // refresh notes after adding
    alert("Note added", "success");
  };
  useEffect(() => {
    const checkLogin = async () => {
      const response = await axios.get(
        "https://my-note-backend.vercel.app/auth/isLoggedIn",
        { withCredentials: true }
      );
      if (response.data === "loggedIn") {
        setAdd(true)
      } else {
        setAdd(false)
      }
    };
    checkLogin();
  },[])


  return (
    <div className="container mt-5">
      <h3 className="text-primary mb-3">Add a note</h3>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter note title"
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Note</label>
          <textarea
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write your note here..."
            minLength={10}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" disabled={!add} >
          Add note
        </button>
      </form>
      <ShowNote note={notes} setNotes={setnotes} fetchNotes={fetchNotes} alert={alert} />
    </div>
  );
}
