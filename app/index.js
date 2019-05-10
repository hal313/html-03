((SampleApp, $) => {

    $(() => {
        // Add the app element to the DOM
        $('#uppercase-app').append('<button class="btn btn-primary" id="uppercase" type="submit">Uppercase</button>');
    });

    $(() => {

        $('#uppercase').click(event => {
            // Prevent the default behavior (submitting the form)
            event.preventDefault();

            // Get the message from the form
            const message = SampleApp.getMessage();

            // Send the AJAX request
            SampleApp.handleRequest(`${SampleApp.config.baseurl}/uppercase/?message=${message}`);
        });

    });

})(this.SampleApp, jQuery);