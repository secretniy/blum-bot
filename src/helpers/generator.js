class GeneratorHelper {
  constructor() {}

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (ue) => {
      const Yi = (Math.random() * 16) | 0; 
      return (ue === "x" ? Yi : (Yi & 3) | 8).toString(16);
    });
  }
}

const generatorHelper = new GeneratorHelper();
export default generatorHelper;
