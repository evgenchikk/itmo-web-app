function submitAuthData() {
    // console.log('submitAuthData()');
    const login = document.auth_form.auth_email.value;
    const pass = document.auth_form.auth_pass.value;

    fetch(
        'http://localhost:3000/auth/api/signup',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "formFields": [
                    {
                      "id": "email",
                      "value": login,
                    },
                    {
                      "id": "password",
                      "value": pass
                    }
                  ]
            })
        }
    )
}