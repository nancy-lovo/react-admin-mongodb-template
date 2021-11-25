const authProvider = {
  login: async (credentials: { username: any; password: any }) => {
    const { username: email, password } = credentials;
    const req = new Request(`${process.env.REACT_APP_SERVER_URL}/auth/admin`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    try {
      const res = await fetch(req);
      if (res.status < 200 || res.status >= 300) {
        throw new Error(res.statusText);
      } else {
        const auth = await res.json();
        if (auth.data.accessToken) {
          localStorage.setItem("auth", auth.data.accessToken);
        } else {
          throw new Error("Unauthorized");
        }
      }
    } catch (error) {
      throw new Error("Network error");
    }
  },
  checkError: (error: { status: any }) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("auth");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem("auth")
      ? Promise.resolve()
      : Promise.reject({ message: false }),
  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
