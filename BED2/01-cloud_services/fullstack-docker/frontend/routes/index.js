const express = require('express');
const router = express.Router();

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3001';

// helper to call API using fetch
async function callApi(path, options = {}) {
  const url = `${API_BASE_URL}${path}`;
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`API Error: ${res.status} ${errText}`);
  }
  if (res.status !== 204) {
    return res.json();
  }
  return null;
}

// GET /
router.get("/", async (req, res, next) => {
  try {
    const todos = await callApi("/api/todos");
    res.render("index", { title: "Todos", todos });
  } catch (e) {
    next(e);
  }
});

// POST /add
router.post('/add', async (req, res, next) => {
  try {
    const title = req.body.title;
    if (title?.trim()) {
      await callApi('/api/todos', {
        method: 'POST',
        body: JSON.stringify({ title }),
      });
    }
    res.redirect('/');
  } catch (e) {
    next(e);
  }
});

// POST /toggle/:id
router.post('/toggle/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const { title, completed } = req.body;
    await callApi(`/api/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, completed: completed === 'true' }),
    });
    res.redirect('/');
  } catch (e) {
    next(e);
  }
});

// POST /delete/:id
router.post('/delete/:id', async (req, res, next) => {
  try {
    await callApi(`/api/todos/${req.params.id}`, { method: 'DELETE' });
    res.redirect('/');
  } catch (e) {
    next(e);
  }
});

module.exports = router;
