const profile = {
  username: "Jacob",
  playTime: 300,
  changeUsername: function (newName) {
    this.username = newName;
  },
  updatePlayTime: function (time) {
    this.playTime += time;
  },
  getInfo: function () {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};
