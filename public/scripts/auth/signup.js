const { TreeRepositoryNotSupportedError } = require("typeorm");

function submitSignUpData() {
    fetch(
        'http://localhost:3000/auth/signup',
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
    .then(response => response.json())
    .then(response => {
        fetch(
            'http://localhost:3000/users',
            {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    'STUserid': response.user.id,
                    'name': document.auth_form.user_name.value,
                    'surname': document.auth_form.user_surname.value,
                    'login': document.auth_form.auth_email.value,
                })
            }
        )
    });
    
    // fetch(
    //     'http://localhost:3000/users',
    //     {
    //         method: 'POST',
    //         headers: {
    //         'Content-Type': 'application/json;charset=utf-8'
    //         },
    //         body: JSON.stringify({
    //             'name': document.auth_form.user_name.value,
    //             'surname': document.auth_form.user_surname.value,
    //             'login': document.auth_form.auth_email.value,
    //         })
    //     }
    // )
}