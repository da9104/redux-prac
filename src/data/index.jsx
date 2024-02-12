import { faker } from "@faker-js/faker/locale/en";
import multiavatar from '@multiavatar/multiavatar/esm'


var words = ['Rock', 'Paper', 'Scissors', 'Bond'];
var word = words[Math.floor(Math.random() * words.length)];
export const svgCode = () => { return `${multiavatar(word)}`}

export const createRandomMovie = () => {
  return `${faker.word.adjective().toUpperCase()} ${faker.word.noun().toUpperCase()}`;
};

export const createRandomSong = () => {
  return faker.music.songName();
};
