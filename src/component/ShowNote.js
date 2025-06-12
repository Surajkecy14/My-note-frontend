import React, { useState } from "react";
import axios from "axios";

const ShowNote = ({ note = [], setNotes, alert }) => {
  const [editNote, setEditNote] = useState({ _id: "", title: "", description: "" });

  const deleteNote = async (id) => {
    try {
      await axios.delete(`https://my-note-backend.vercel.app/note/deleteNote/${id}`, {
        withCredentials: true,
      });

      setNotes((prevNotes) => prevNotes.filter((n) => n._id !== id));
      alert(" Delete sucessfull ", "success");
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleEdit = (note) => {
    setEditNote(note);
    new window.bootstrap.Modal(document.getElementById("editModal")).show();
  };

  const updateNote = async () => {
    try {
      const res = await axios.put(
        `https://my-note-backend.vercel.app/note/noteEdit/${editNote._id}`,
        {
          title: editNote.title,
          description: editNote.description,
        },
        { withCredentials: true }
      );

      setNotes((prevNotes) =>
        prevNotes.map((n) => (n._id === editNote._id ? res.data : n))
      );

      document.querySelector("#editModal .btn-close").click(); // Close modal
      alert(" Update sucessfull ", "success");
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <>
      {Array.isArray(note) && note.length > 0 ? (
        <div>
          <h5>Saved Notes:</h5>
          {note.map((n) => (
            <div key={n._id} className="card mb-2">
              <div className="card-body">
                <h6 className="card-title">{n.title}</h6>
                <p className="card-text">{n.description}</p>
                <span
                  style={{ cursor: "pointer", color: "red", fontWeight: "bold" }}
                  onClick={() => deleteNote(n._id)}
                >
                  Delete
                </span>{" "}
                <span
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    fontWeight: "bold",
                    marginLeft: "10px",
                  }}
                  onClick={() => handleEdit(n)}
                >
                  Edit
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3>No Notes Available. Add Notes!</h3>
      )}

      {/* Modal for Editing */}
      <div className="modal fade" id="editModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <input
                className="form-control mb-2"
                value={editNote.title}
                onChange={(e) => setEditNote({ ...editNote, title: e.target.value })}
                placeholder="Title"
              />
              <textarea
                className="form-control"
                value={editNote.description}
                onChange={(e) => setEditNote({ ...editNote, description: e.target.value })}
                placeholder="Description"
              ></textarea>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button className="btn btn-info" onClick={updateNote}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowNote;
