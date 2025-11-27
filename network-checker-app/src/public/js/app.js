document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('network-check-form');
    const resultContainer = document.getElementById('result-container');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const selectedOption = document.querySelector('input[name="command"]:checked').value;
        const inputField = document.getElementById('input-field').value;

        fetch(`/api/${selectedOption}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ input: inputField })
        })
        .then(response => response.json())
        .then(data => {
            resultContainer.innerHTML = `<pre>${data.result}</pre>`;
        })
        .catch(error => {
            resultContainer.innerHTML = `<pre>Error: ${error.message}</pre>`;
        });
    });
});