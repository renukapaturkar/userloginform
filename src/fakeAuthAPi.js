const users = [
    {
        email: "admin@test.com", 
        password: "Admin123!"
    }
]


const findUserbyEmail = (email) => {
    return users.find((user) => user.email === email)
}

export const fakeAuthApi = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = findUserbyEmail(email); 
            if(user.password === password) {
                resolve({success: true, status: 200})
            }else {
                reject({success: false, status: 401})
            }
        }, 3000)
    })
}