function submitSignOut() {
    fetch(
        'http://localhost:3000/auth/signout',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }
    )
}