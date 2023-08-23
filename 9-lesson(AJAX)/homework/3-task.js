//Ask a user to submit an artist name and song and after 2 seconds add it to the screen

const button = document.getElementById("button");
const artist = document.getElementById("name");
const song = document.getElementById("song");

const dislayData = () => {
  return new Promise((resolve, reject) => {
    alert(`The ${song.value} by ${artist.value}`);
    resolve();
  });
};

const setTimer = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  return promise;
};

button.addEventListener("click", () => {
  event.preventDefault();
  setTimer().then(() => {
    dislayData();
  });
});
