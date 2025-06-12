export default function About() {
  return (
    <div className="container mt-5">
      <div className="p-5 bg-light rounded shadow-sm">
        <h1 className="text-center text-primary mb-4">About My-Note</h1>
        <p className="fs-5 text-secondary">
          <strong>My-Note</strong> is your personal and secure note storage application. 
          We built it with simplicity in mind — clean, fast, and easy to use. Whether you're 
          jotting down daily thoughts, saving important ideas, or organizing tasks, My-Note helps 
          you stay focused and stress-free.
        </p>
        <p className="fs-5 text-secondary">
          Your notes are stored safely, and only you can access them. 
          With a user-friendly interface and smooth experience, My-Note makes digital note-taking 
          feel as natural as pen and paper — but more powerful.
        </p>
        <p className="fs-5 text-secondary">
          Thank you for trusting us to be part of your daily journey. 
          We promise to keep things simple, safe, and always centered around **you**.
        </p>
        <p className="text-end fst-italic mt-4 text-muted">
          — The My-Note Team
        </p>
      </div>
    </div>
  );
}
