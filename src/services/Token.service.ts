export const getLocalRefreshToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.refreshToken;
}

export const getLocalAccessToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.accessToken;
}

export const updateLocalTokens = (accessToken: string, refreshToken: string) => {
    let user = JSON.parse(localStorage.getItem("user"));
    user.accessToken = accessToken;
    user.refreshToken = refreshToken;
    localStorage.setItem("user", JSON.stringify(user));
}

export const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

export const setUser = (user: any) => {
    console.log(JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
}

export const removeUser = () => {
    localStorage.removeItem("user");
}

