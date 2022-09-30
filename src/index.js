import './style.css';
import PageLoad from './pageload';
import HomePage from './home';
import Menu from './menu';
import Contact from './contact';


document.getElementById("content").append(PageLoad());
HomePage();

document.querySelector(".HomeNav").addEventListener('click', HomePage);
document.querySelector(".MenuNav").addEventListener('click', Menu);
document.querySelector(".ContactNav").addEventListener('click', Contact);