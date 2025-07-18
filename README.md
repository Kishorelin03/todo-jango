<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>📝 Django To-Do List</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background-color: #f8f9fa;
      padding: 40px;
    }

    h1, h2 {
      color: #2c3e50;
    }

    code {
      background: #eaeaea;
      padding: 0.2rem 0.4rem;
      border-radius: 5px;
    }

    .screenshot {
      max-width: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      margin-bottom: 30px;
    }

    .badge {
      font-size: 0.9rem;
    }
  </style>
</head>
<body>

  <div class="container">
    <h1 class="mb-4">📝 Django To-Do List App</h1>

    <p>This is a clean and minimal To-Do List application built with <strong>Django</strong> and styled using <strong>Bootstrap 5</strong>. It supports task creation, editing, deletion, completion toggling, and includes a <strong>dark mode toggle</strong>.</p>

    <h2>🚀 Features</h2>
    <ul>
      <li>Add, edit, and delete tasks</li>
      <li>Mark tasks as done or undone</li>
      <li>Separate views for <strong>Today’s tasks</strong> and <strong>Completed tasks</strong></li>
      <li>Responsive UI with Bootstrap cards</li>
      <li><span class="badge bg-dark text-light">New</span> Dark mode toggle with persistent state</li>
    </ul>

    <h2>📸 Screenshots</h2>
    <p>(Replace with your actual screenshots)</p>
    <img src="screenshots/home-light.png" alt="Home Page Light Mode" class="screenshot">
    <img src="screenshots/home-dark.png" alt="Home Page Dark Mode" class="screenshot">

    <h2>🔧 Setup Instructions</h2>
    <ol>
      <li>Clone the repository:<br><code>git clone https://github.com/yourusername/django-todo.git</code></li>
      <li>Create a virtual environment:<br><code>python -m venv env</code></li>
      <li>Activate the environment:<br>
        <code>source env/bin/activate</code> (Mac/Linux)<br>
        <code>env\Scripts\activate</code> (Windows)
      </li>
      <li>Install dependencies:<br><code>pip install -r requirements.txt</code></li>
      <li>Run migrations:<br><code>python manage.py migrate</code></li>
      <li>Start the development server:<br><code>python manage.py runserver</code></li>
      <li>Visit: <code>http://127.0.0.1:8000/</code></li>
    </ol>

    <h2>🛠️ Tech Stack</h2>
    <ul>
      <li><strong>Backend:</strong> Django (Python)</li>
      <li><strong>Frontend:</strong> HTML, CSS, Bootstrap 5, Font Awesome</li>
      <li><strong>Other:</strong> JavaScript (theme toggle)</li>
    </ul>

    <h2>🌗 Dark Mode</h2>
    <p>Includes a built-in toggle (🌙 / ☀️) that saves user preference with <code>localStorage</code>. Theme works across multiple pages with a shared JS file.</p>

    <h2>📂 Directory Structure</h2>
    <pre>
/myproject/
├── myapp/
│   ├── templates/
│   │   └── home.html
│   ├── static/
│   │   └── js/theme.js
│   └── views.py
├── static/
│   └── js/theme.js
├── manage.py
├── db.sqlite3
    </pre>

    <h2>📜 License</h2>
    <p>This project is open-source and free to use under the MIT License.</p>
  </div>

</body>
</html>
