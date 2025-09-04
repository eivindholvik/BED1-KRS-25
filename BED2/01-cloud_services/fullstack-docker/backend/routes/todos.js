const express = require('express');
const router = express.Router();
const { Todo } = require('../models');

router.get('/', async (req, res, next) => {
  try {
    const todos = await Todo.findAll({ order: [['id', 'ASC']] });
    res.json(todos);
  } catch (e) { next(e); }
});

router.post('/', async (req, res, next) => {
  try {
    const { title } = req.body;
    const todo = await Todo.create({ title, completed: false });
    res.status(201).json(todo);
  } catch (e) { next(e); }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { title, completed } = req.body;
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) return res.status(404).json({ error: 'Not found' });
    await todo.update({ title, completed });
    res.json(todo);
  } catch (e) { next(e); }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) return res.status(404).json({ error: 'Not found' });
    await todo.destroy();
    res.status(204).end();
  } catch (e) { next(e); }
});

module.exports = router;
