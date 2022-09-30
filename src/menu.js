

export default function Menu() {

    const mainContent = document.querySelector('.MainContent');
    mainContent.innerHTML = "";

    document.querySelector(".MenuNav").classList = "MenuNav NavActive";
    document.querySelector(".HomeNav").classList = "HomeNav";
    document.querySelector(".ContactNav").classList = "ContactNav";

    const headline = document.createElement("h1");
    headline.classList = "Headline";
    headline.innerHTML = "Papa's Place Menu";

    mainContent.append(headline);

    const info = document.createElement("div");
    headline.classList = "Info";

    const description = document.createElement('div');
    description.innerHTML = "We serve custom pizzas of any and every variety.  Choose from our toppings list: " + 
                            "Pepperoni, Sausage, Ham, Beef, Canadian Bacon, Mushroom, Peppers, Onions, Olives" + 
                            " Pinapple, Extra Cheese";

    info.append(description);
    mainContent.append(description);

    const hours = document.createElement("div");
    hours.classList = "Hours";

    const hoursOp = document.createElement('div');
    hoursOp.classList = "HoursOperation";
    hoursOp.innerHTML = "Pizzas";

    hours.append(hoursOp);

    let dayHours = document.createElement('div');
    dayHours.classList = "DayHours";
    dayHours.innerHTML = "$9.99";

    let weekday = document.createElement('div');
    weekday.classList = "Weekday";
    weekday.innerHTML = "Pepperoni Lovers:";

    hours.append(weekday,dayHours);

    weekday = document.createElement('div');
    weekday.innerHTML = "The Everything:";

    dayHours = document.createElement('div');
    dayHours.innerHTML = "$9.99";

    hours.append(weekday,dayHours);

    weekday = document.createElement('div');
    weekday.innerHTML = "Classic Garbage:";

    dayHours = document.createElement('div');
    dayHours.innerHTML = "$9.99";

    hours.append(weekday,dayHours);
    weekday = document.createElement('div');
    weekday.innerHTML = "Pork y Pine Apple:";

    dayHours = document.createElement('div');
    dayHours.innerHTML = "$9.99";

    hours.append(weekday,dayHours);
    weekday = document.createElement('div');
    weekday.innerHTML = "Sans All:";

    dayHours = document.createElement('div');
    dayHours.innerHTML = "$9.99";

    hours.append(weekday,dayHours);
    weekday = document.createElement('div');
    weekday.innerHTML = "Upside Down:";

    dayHours = document.createElement('div');
    dayHours.innerHTML = "$9.99";

    hours.append(weekday,dayHours);

    weekday = document.createElement('div');
    weekday.innerHTML = "The Business:";

    dayHours = document.createElement('div');
    dayHours.innerHTML = "$9.99";

    hours.append(weekday,dayHours);

    mainContent.append(hours);
}


                // <h1 class="Headline">Papa's Place</h1>
                // <div class="Info"><p>Welcome to Papa's Place! This one of a kind pizza joint 
                //                     started as a Christmas family tradition.  Every year the 
                //                     family would gather at Papa's Place for homemade pizza to celebrate the Holiday's.  
                //                     After many years the family convinced Papa that the world needed to try his pizza, 
                //                     so please enjoy!</p>
                // </div>
                // <div class="Hours">
                //     <div class="HoursOperation">Hours of Operation:</div>
                //     <div class="Weekday">Monday:</div><div class="DayHours">11:11 AM to 11:11 PM</div>
                //     <div class="Weekday">Tuesday:</div><div class="DayHours">11:11 AM to 11:11 PM</div>
                //     <div class="Weekday">Wednesday:</div><div class="DayHours">11:11 AM to 11:11 PM</div>
                //     <div class="Weekday">Thursday:</div><div class="DayHours">11:11 AM to 11:11 PM</div>
                //     <div class="Weekday">Friday:</div><div class="DayHours">11:11 AM to 11:11 PM</div>
                //     <div class="Weekday">Saturday:</div><div class="DayHours">11:11 AM to 11:11 PM</div>
                //     <div class="Weekday">Sunday:</div><div class="DayHours">11:11 AM to 11:11 PM</div>
                // </div>