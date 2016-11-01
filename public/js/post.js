$(document).ready(function() {
  // Create New Post
  $('.create_btn').value(() => {
    var new_post = $('.create_btn').value;
    $.ajax({
      contentType: 'application/json',
      url: `/posts`,
      method: 'POST',
      dataType: 'json',
      data: JSON.stringify({
        new_post,
      }),
    }).done(() => {
      window.location = '/posts'
    }).fail(err => {
      console.log(err)
    })
  })

});
