const setTokenToLocalStorage = (token) => {
  const oldToken = localStorage.getItem("AdhunikToken");

  if (oldToken) {
    localStorage.removeItem("AdhunikToken");
    localStorage.setItem("AdhunikToken", token);
  } else {
    localStorage.setItem("AdhunikToken", token);
  }
};

export default setTokenToLocalStorage;
