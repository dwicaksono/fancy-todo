
const { Todo, User } = require('../models')
const createError = require('../helper/http-errors')

class ControllerTodo {

  static getAllTodo(req, res, next) {
    let UserId = req.user.id
    Todo
      .findAll({ where: { UserId }, order: [['updatedAt', 'DESC']] })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        next(err)
      })
  }

  static createTodo(req, res, next) {
    let { title, description, due_date } = req.body
    let id = req.user.id
    Todo
      .create({ title, description, due_date, UserId: id })
      .then(result => {
        res.status(201).json(result)
      })
      .catch(err => {
        next(err)
      })
  }
  static getOneTodo(req, res, next) {
    let id = req.params.id
    Todo
      .findOne({ where: { id } })
      .then(result => {
        if (result) {
          res.status(200).json(result)
        } else {
          throw createError(404, 'NotFound')
        }
      })
      .catch(err => {
        next(err)
      })
  }

  static putTodo(req, res, next) {
    let id = req.params.id
    let { title, description, status, due_date } = req.body
    Todo
      .update({ title, description, status, due_date }, { where: { id }, returning: true })
      .then(result => {
        if (result[0]) {
          res.status(201).json(result[1])
        } else {
          throw createError(404, 'NotFound')
        }
      })
      .catch(err => {
        next(err)
      })
  }

  static deleteTodo(req, res, next) {
    let id = req.params.id
    let value = null
    Todo
      .findOne({ where: { id } })
      .then(result => {
        value = result
        return Todo.destroy({ where: { id }, returning: true })
      })
      .then(resultDestroy => {
        if (resultDestroy) {
          res.status(200).json(value)
        } else {
          throw createError(404, 'not found')
        }
      })
      .catch(err => {
        console.log(err)
        next(err)
      })

  }

}

module.exports = ControllerTodo