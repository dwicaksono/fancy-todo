


$(document).ready(function () {
  $('#login').show()
  $('#register').hide()
  $('#todolistPage').hide()
  $('#editTodosDiv').hide()
  $('#addTodosDiv').hide()
  $('#todosForm').hide()
  $('#todolistPage').hide()
  $('#sun').hide()


  if (!localStorage.getItem('token')) {
    $('#login').show()
    $('#register').hide()
    // $('#todolistPage').hide()
    // $('#editTodosDiv').hide()
  } else {
    $('#login').hide()
    $('#todolistPage').show()
    showAllTodos()
  }


  $('#moon').on('click', function (event) {
    $('#box1').toggleClass('sun-mode')
    $('#moon').hide()
    $('#sun').show()
    $('#container').toggleClass('sun-mode')
  });
  $('#sun').on('click', function (event) {
    $('#box1').toggleClass('sun-mode')
    $('#container').toggleClass('sun-mode')
    $('#moon').show()
    $('#sun').hide()
  });


  $('#toRegister').on('click', function (event) {
    $('#register').show()
    $('#login').hide()
  })

  $('#toLogin').on('click', function (event) {
    $('#register').hide()
    $('#login').show()
  })

  $('#checkLogin').on('click', function () {
    if ($(this).prop("checked") == true) {
      $('#passwordLogin').attr('type', 'text')
    }
    else if ($(this).prop("checked") == false) {
      $('#passwordLogin').attr('type', 'password')
    }
  })

  $('#checkRegister').on('click', function () {
    if ($(this).prop("checked") == true) {
      $('#passwordRegister').attr('type', 'text')
    }
    else if ($(this).prop("checked") == false) {
      $('#passwordRegister').attr('type', 'password')
    }
  })

  $("#actionTologin").on('submit', function (event) {
    event.preventDefault()
    let emailLogin = $('#emailLogin').val()
    let passwordLogin = $('#passwordLogin').val()
    login(emailLogin, passwordLogin)
    // $('#todolistPage').show()
    $('#login').hide()
    $('#editTodosDiv').hide()

  })

  $("#actionToRegister").on('submit', function (event) {
    event.preventDefault()
    let username = $('#usernameRegister').val()
    let email = $('#emailRegister').val()
    let password = $('#passwordRegister').val()
    register(username, email, password)
    // $('#todolistPage').show()
    $('#register').hide()
    $('#editTodosDiv').hide()
  })

  $('#btn_google').on('click', function (event) {
    $('#login').hide()
    onSignIn()
  })

  $('#addTodoList').on('click', function (event) {
    $('#addTodosDiv').show()
    $('#todosForm').show()
    $('#todolistPage').hide()
  })

  $('#todosForm').on('submit', function (event) {
    event.preventDefault()
    let title = $('#titleAdd').val()
    let description = $('#descriptionAdd').val()
    let due_date = $('#due_dateAdd').val()
    addTodos(title, description, due_date)
    $('#todolistPage').show()
    $('#login').hide()
    // $('#editTodosDiv').hide()
    $('#addTodosDiv').hide()
  })

  $('#tolistPage').on('click', function () {
    $('#todolistPage').show()
    $('#addTodosDiv').hide()
  })

  $('#cancelEdit').on('click', function () {
    $('#editTodosDiv').hide()
    $('#todolistPage').show()
  })

  $('#todosEdit').on('submit', function (event) {
    event.preventDefault()
    $('#editTodosDiv').hide()
    $('#todolistPage').show()
    editTodosButton()
    showAllTodos()
  })


  //logout
  $('#logoutTodoList').on('click', function () {
    logoutTodos()
    // $('#login').show()
  })

})