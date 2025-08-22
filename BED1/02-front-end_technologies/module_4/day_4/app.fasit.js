// When the button with id 'getJokesBtn' is clicked, execute the following function
$('#getJokesBtn').on('click', function () {
    // Clear any previous jokes in the container (with id 'joke-container')
    $('#joke-container').empty();

    // Get the value entered by the user in the input field (with id 'amount') to specify how many jokes to fetch
    let amount = $('#amount').val();

    // Make an AJAX request to the joke API
    $.ajax({
        // The URL to the API. We're asking for 'Programming' jokes and avoiding 'nsfw' content.
        url: `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw&type=twopart&amount=${amount}`,

        // If the request is successful, this function will run, passing in the response
        success: function (response) {
            // If more than one joke is requested
            if (amount > 1) {
                // Log the array of jokes to the console
                console.log(response.jokes);

                // Loop through each joke in the response
                response.jokes.forEach(joke => {
                    // Add the joke setup to the 'joke-container'
                    $('#joke-container').append(`<p>Setup: ${joke.setup}</p>`);

                    // Add the joke punchline (delivery) to the 'joke-container'
                    $('#joke-container').append(`<p>Delivery: ${joke.delivery}</p>`);

                    // Add a horizontal line to separate the jokes
                    $('#joke-container').append(`<hr/>`);
                });
            } else {
                // If only one joke is requested, log the single joke object
                console.log(response);

                // Display the single joke's setup and delivery
                $('#joke-container').append(`<p>Setup: ${response.setup}</p>`);
                $('#joke-container').append(`<p>Delivery: ${response.delivery}</p>`);
                $('#joke-container').append(`<hr/>`);
            }
        },

        // If there is an error with the request (e.g., wrong URL or network issues), this function runs
        error: function (error) {
            // Log the error in the console for debugging
            console.error(error);
        }
    })
});