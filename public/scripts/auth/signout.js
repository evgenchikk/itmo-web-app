function submitSignOut() {
    fetch(
        'http://localhost:3000/auth/signout',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            // body: JSON.stringify({
            //     "formFields": [
            //         {
            //           "id": "email",
            //           "value": document.auth_form.auth_email.value,
            //         },
            //         {
            //           "id": "password",
            //           "value": document.auth_form.auth_pass.value,
            //         }
            //       ]
            // })
        }
    )
}