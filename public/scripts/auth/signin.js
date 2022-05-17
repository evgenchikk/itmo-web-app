async function submitSignInData() {
    await fetch(
        'http://localhost:3000/auth/signin',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "formFields": [
                    {
                      "id": "email",
                      "value": document.auth_form.auth_email.value,
                    },
                    {
                      "id": "password",
                      "value": document.auth_form.auth_pass.value,
                    }
                  ]
            })
        }
    )
    // .then(response => response.json())
    // .then(response => response.user.id);
}