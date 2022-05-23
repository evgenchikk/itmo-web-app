function submitSignOut() {
    fetch(
        'http://localhost:3000/auth/signout', //'https://evgeny-backend-itmo.herokuapp.com/auth/signout',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }
    )
}