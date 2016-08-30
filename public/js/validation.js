$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='validate-form']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: "required",
      password: {
        required: true,
        minlength: 5
      },
      confirm_password: {
        required: true,
        minlength: 5,
        equalTo: '#password'
      },
      phone:{
        required: true,
        digits: true
      },
      email: {
        required: true,
        email: true
      },
      website: {
        required: true,
        url: true
      },
      birthday: {
        required: true,
        date: true
      }
    },
    // Specify validation error messages
    messages: {
      name: "Please enter your name",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});