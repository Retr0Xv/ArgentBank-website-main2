const signin = (data) => {
    const response = fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    console.log(response);
    return response.json();
}

export default signin;