<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Django To-Do List App</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body {
      background-color: #f9f9fb;
      font-family: 'Segoe UI', sans-serif;
      padding: 2rem;
      line-height: 1.6;
      color: #333;
    }
    h1, h2, h3 {
      color: #2c3e50;
      margin-top: 2rem;
    }
    code {
      background: #f1f1f1;
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      font-family: Consolas, monospace;
    }
    pre {
      background: #f1f1f1;
      padding: 1rem;
      border-radius: 6px;
      overflow-x: auto;
    }
    ul, ol {
      margin-left: 1.2rem;
    }
    .screenshot {
      max-width: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      margin: 1rem 0;
    }
    .divider {
      border-top: 2px solid #ddd;
      margin: 2rem 0;
    }
  </style>
</head>
<body>

  <h1>📝 Django To-Do List App</h1>
  <p>A clean and responsive To-Do List application built using <strong>Django</strong> and styled with <strong>Bootstrap 5</strong>. Includes task creation, editing, deletion, and a Dark Mode toggle that persists user preferences.</p>

  <div class="divider"></div>

  <h2>🚀 Features</h2>
  <ul>
    <li>✅ Add, edit, and delete tasks</li>
    <li>✅ Mark tasks as complete or incomplete</li>
    <li>✅ Separate views for today's tasks and completed tasks</li>
    <li>✅ Responsive layout with Bootstrap 5 cards</li>
    <li>🌙 <strong>Dark Mode Toggle</strong> (persistent using <code>localStorage</code>)</li>
    <li>📦 Simple project structure for learning Django basics</li>
  </ul>

  <div class="divider"></div>

  <h2>📸 Screenshots</h2>
  <p><em>Add your own screenshots in a <code>screenshots/</code> folder and replace the placeholders below:</em></p>
  <div class="row">
    <div class="col-md-6">
      <p><strong>Light Mode</strong></p>
      <img src="screenshots/home-light.png" alt="Home Page Light Mode" class="screenshot">
    </div>
    <div class="col-md-6">
      <p><strong>Dark Mode</strong></p>
      <img src="screenshots/home-dark.png" alt="Home Page Dark Mode" class="screenshot">
    </div>
  </div>

  <div class="divider"></div>

  <h2>🛠 Tech Stack</h2>
  <ul>
    <li><strong>Backend:</strong> Django (Python)</li>
    <li><strong>Frontend:</strong> HTML, CSS, Bootstrap 5, Font Awesome</li>
    <li><strong>Extras:</strong> JavaScript (<code>theme.js</code>) for Dark Mode toggle</li>
  </ul>

  <div class="divider"></div>

  <h2>⚙️ Getting Started</h2>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/yourusername/django-todo-app.git
cd django-todo-app</code></pre>
    </li>
    <li>Create a virtual environment:
      <pre><code>python -m venv env
source env/bin/activate  # or env\Scripts\activate on Windows</code></pre>
    </li>
    <li>Install dependencies:
      <pre><code>pip install -r requirements.txt</code></pre>
    </li>
    <li>Run migrations:
      <pre><code>python manage.py migrate</code></pre>
    </li>
    <li>Start the server:
      <pre><code>python manage.py runserver</code></pre>
    </li>
    <li>Open your browser and visit:
      <code>http://127.0.0.1:8000/</code>
    </li>
  </ol>

  <div class="divider"></div>

  <h2>🌗 Dark Mode</h2>
  <p>Dark mode is implemented using a toggle button and <code>localStorage</code> to remember the user's theme preference. Works across pages using a shared <code>theme.js</code> script inside <code>/static/js/</code>.</p>

  <div class="divider"></div>

  <h2>📁 Project Structure</h2>
  <pre><code>myproject/
├── myapp/
│   ├── templates/
│   │   └── home.html
│   ├── static/
│   │   └── js/
│   │       └── theme.js
│   └── views.py
├── static/
│   └── js/theme.js
├── db.sqlite3
├── manage.py
</code></pre>

  <div class="divider"></div>

  <h2>📄 License</h2>
  <p>This project is licensed under the <strong>MIT License</strong>.</p>

  <h2>👤 Author</h2>
  <p>Made with ❤️ by <strong>Your Name</strong></p>

</body>
</html>
