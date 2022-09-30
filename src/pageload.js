

export default function PageLoad() {

    const gridContainer = document.createElement('div');
    gridContainer.classList = "GridContainer";

    const header = document.createElement('div');
    header.classList = "Header";

    const homeLi = document.createElement('li');
    homeLi.classList = "HomeNav";
    homeLi.innerHTML = "Home";

    const menuLi = document.createElement('li');
    menuLi.classList = "MenuNav";
    menuLi.innerHTML = "Menu";

    const contactLi = document.createElement('li');
    contactLi.classList = "ContactNav";
    contactLi.innerHTML = "Contact Us";

    const navUl = document.createElement('ul');
    navUl.append(homeLi, menuLi, contactLi);

    const nav = document.createElement('nav');
    nav.append(navUl);

    header.append(nav);

    gridContainer.append(header);

    const mainContent = document.createElement('div');
    mainContent.classList = "MainContent";

    gridContainer.append(mainContent);

    const footer = document.createElement('div');
    footer.classList = "Footer";

    const footAddress = document.createElement('div');
    footAddress.innerHTML = "Address: 100 N Main, Blue Springs, Midwest.";

    const footContact = document.createElement('div');
    footContact.innerHTML = "Contact Us: fakeemail@fakeemail.com";

    footer.append(footAddress, footContact);

    gridContainer.append(footer);

    return gridContainer;
}


// <div class="GridContainer">
//             <div class="Header">
//                 <nav>
//                     <ul>
//                         <li class="HomeNav NavActive">Home</li>
//                         <li class="MenuNav">Menu</li>
//                         <li class="ContactNav">Contact</li>
//                     </ul>
//                 </nav>
//             </div>
//             <div class="MainContent">

//             </div>
//             <div class="Footer">
//                 <div>Address: 100 N Main, Blue Springs, Midwest.</div>
//                 <div>Contact Us: fakeemail@fakeemail.com</div>
//             </div>
//         </div>