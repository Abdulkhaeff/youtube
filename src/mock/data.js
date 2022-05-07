import Fara from '../assats/img/fara.jpg'
import Hayot from '../assats/img/hayot.jpg'
import Jurnalist from '../assats/img/jurnalist.jpg'
import Maktab from '../assats/img/maktab.jpg'
import Muzlik from '../assats/img/muzlikdavri.jpg'
import Newsong from '../assats/img/newsong.jpg'
import Senator from '../assats/img/senator.jpg'
import Topsong from '../assats/img/topsong.jpg'
import Yil from '../assats/img/yiltalabasi.jpg'
const user = {
  title: "Yil talabasi",
  view: "122m view",
  src: Maktab,
  user: {
    name: "Elbek",
    surname: "Abdulkhaev",
    img: Yil
  },
};
const user1 = {
  title: "Fara Toshkenskiy",
  view: "122k view",
  src: Fara,
  user: {
    name: "Elbek",
    surname: "Abdulkhaev",
    img: Fara,
  },
};
const user3 = {
  title: "Muzlik Davri",
  view: "12k view",
  src: Muzlik,
  user: {
    name: "Elbek",
    surname: "Abdulkhaev",
    img: Muzlik,
  },
};
const user4 = {
  title: "New Songs",
  view: "12k view",
  src: Newsong,
  user: {
    name: "Elbek",
    surname: "Abdulkhaev",
    img: Newsong,
  },
};
const user5 = {
  title: "Senator",
  view: "12k view",
  src: Senator,
  user: {
    name: "Elbek",
    surname: "Abdulkhaev",
    img: Senator,
  },
};
const user6 = {
  title: "Top songs",
  view: "12k view",
  src: Topsong,
  user: {
    name: "Elbek",
    surname: "Abdulkhaev",
    img: Topsong,
  },
};
const user7 = {
  title: "Jurnalist",
  view: "12k view",
  src: Jurnalist,
  user: {
    name: "Elbek",
    surname: "Abdulkhaev",
    img: Jurnalist,
  },
};
const user8 = {
  title: "Hayot",
  view: "12k view",
  src: Hayot,
  user: {
    name: "Elbek",
    surname: "Abdulkhaev",
    img: Hayot,
  },
};
export const muvies = [
  { catagory: "kino", id: 1, ...user },
  { catagory: "live", id: 2, ...user5 },
  { catagory: "music", id: 3, ...user4 },
  { catagory: "videos", id: 4, ...user8 },
  { catagory: "multic", id: 5, ...user3 },
  { catagory: "pubg", id: 6, ...user5 },
  { catagory: "camediya", id: 7, ...user7 },
  { catagory: "kino", id: 8, ...user1 },
  { catagory: "live", id: 9, ...user5 },
  { catagory: "music", id: 10, ...user6 },
  { catagory: "kino", id: 11, ...user8 },
  { catagory: "multic", id: 12, ...user },
  { catagory: "pubg", id: 13, ...user5 },
  { catagory: "videos", id: 14, ...user8 },
];
export default muvies;
