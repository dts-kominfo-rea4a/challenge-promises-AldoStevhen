const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();
    let marah = 0;
    let tidak_marah = 0;
    for (i in theaterIXX) {
      theaterIXX[i].hasil === "marah" ? marah++ : tidak_marah++;
    }
    for (i in theaterVGC) {
      theaterVGC[i].hasil === "marah" ? marah++ : tidak_marah++;
    }
    return emosi === "marah" ? marah : tidak_marah;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
