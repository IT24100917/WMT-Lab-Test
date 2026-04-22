# 📚 Book Manager — MERN Practice Project

A starter MERN stack project for lab test practice.

---

## Your Tasks (Lab Test Style)

1. Run the project locally with your own MongoDB connection string
2. **Add a `genre` field** to the Book model and the frontend form
3. Push the code to a public GitHub repository
4. Deploy the backend on **Render**
5. Deploy the frontend on **Netlify**
6. Update the frontend API URL to point to the live Render backend

Look for all `// TODO` comments in the code — those are your tasks!

---

## Step 1 — Set up the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:

```
MONGO_URI=mongodb+srv://admin:password123@cluster0.6yfjak4.mongodb.net/?appName=Cluster0
PORT=5000
```

> Get your MONGO_URI from MongoDB Atlas → your cluster → Connect → Drivers

Start the backend:

```bash
node server.js
```

You should see:
```
✅ MongoDB connected
🚀 Server running on port 5000
```

Test it: open your browser and go to `http://localhost:5000/api/books`

---

## Step 2 — Set up the Frontend

Open a **new terminal** (keep the backend running):

```bash
cd frontend
npm install
npm start
```

The app will open at `http://localhost:3000`

---

## Step 3 — Complete the TODO tasks

Find every `// TODO` comment in these files and complete them:

| File | Task |
|------|------|
| `backend/models/Book.js` | Add `genre` field to the schema |
| `frontend/src/AddBook.js` | Add genre state, input field, and include in POST |
| `frontend/src/BookList.js` | Display genre badge on each book card |

---

## Step 4 — Push to GitHub

1. Create a new **public** repository on github.com
2. Run these commands from the project root:

```bash
git init
git add .
git commit -m "MERN Book Manager - initial commit"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/book-manager.git
git push -u origin main
```

---

## Step 5 — Deploy Backend on Render

1. Go to [render.com](https://render.com) → Sign up with GitHub
2. New → Web Service → connect your repo
3. Settings:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
4. Add environment variable: `MONGO_URI` = your Atlas connection string
5. Click **Deploy**
6. Copy your live URL (e.g. `https://book-manager-api.onrender.com`)

---

## Step 6 — Update Frontend API URL

In these 3 files, change `http://localhost:5000` to your Render URL:

- `frontend/src/App.js`
- `frontend/src/AddBook.js`
- `frontend/src/BookList.js`

Then commit and push the change.

---

## Step 7 — Deploy Frontend on Netlify

1. Go to [netlify.com](https://netlify.com) → Sign up with GitHub
2. Add new site → Import from Git → select your repo
3. Settings:
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `frontend/build`
4. Click **Deploy site**

---

## Project Structure

```
book-manager/
├── backend/
│   ├── models/
│   │   └── Book.js          ← Add genre field here (TODO)
│   ├── routes/
│   │   └── books.js         ← CRUD routes (complete)
│   ├── server.js            ← Express server (complete)
│   ├── .env.example         ← Copy this to .env and fill in your URI
│   └── package.json
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── App.js           ← Main app (complete)
    │   ├── AddBook.js       ← Add genre state + input (TODO)
    │   ├── BookList.js      ← Display genre badge (TODO)
    │   ├── index.js
    │   └── index.css        ← Styling (complete)
    └── package.json
```
