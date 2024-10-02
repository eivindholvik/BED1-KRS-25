$.ajax({
  url: 'https://api.giphy.com/v1/gifs/random?api_key=T0kCt345wOyP0k7T083ly1f1NAb4lEvI&rating=g',
  success: function (response) {
    if (response.data.user === null) return;
    console.log(response);
    const originalUrl = response.data.images.original.url;
    $("body").append("<img src = '" + originalUrl + "'></img>")
  },
  error: function (response) {
    console.log(response);
    $("body").append(`<p>An error occured with the status code of ${response.status} ${response.status === 401 ? "unauthorized" : ""}</p>`)

  }
});

// T0kCt345wOyP0k7T083ly1f1NAb4lEvI