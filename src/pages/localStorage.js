export const getUser = () => {
    const users = JSON.parse(localStorage.getItem('users'));
    return users ? users : [];
  };
  
  export const setUser = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };
  