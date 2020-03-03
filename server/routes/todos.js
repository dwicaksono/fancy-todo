const controllerTodos = require('../controllers/controllerTodo')
const router = require('express').Router()
//autoheris

router.get('/', controllerTodos.getAllTodo)
router.post('/', controllerTodos.createTodo)
router.get('/:id', controllerTodos.getOneTodo)
router.put('/:id', controllerTodos.putTodo)
router.delete('/:id', controllerTodos.deleteTodo)

module.exports = router







