export const helpFuncions = () => {

  const Capitalize = (str) => {
    

    const lower = str.toLowerCase();
 
    return  lower.charAt(0).toUpperCase() + lower.slice(1);
    
  };

 

  // objeto con los metodos de los vervos
  return {
    Capitalize
   
  };

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
};

// export default helpHttp;
