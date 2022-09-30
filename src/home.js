

export default function HomePage() {

    const mainContent = document.querySelector('.MainContent');
    mainContent.innerHTML = "";

    document.querySelector(".HomeNav").classList = "HomeNav NavActive";
    document.querySelector(".MenuNav").classList = "MenuNav";
    document.querySelector(".ContactNav").classList = "ContactNav";

    const headline = document.createElement("h1");
    headline.classList = "Headline";
    headline.innerHTML = "Papa's Place";

    mainContent.append(headline);

    const info = document.createElement("div");
    headline.classList = "Info";

    const description = document.createElement('div');
    description.innerHTML = "Welcome to Papa's Place! This one of a kind pizza joint started as a Christmas" + 
                            " family tradition.  Every year the family would gather at Papa's Place for homemade" + 
                            " pizza to celebrate the Holiday's. After many years the family convinced Papa that" + 
                            " the world needed to try his pizza, so please enjoy!";

    info.append(description);
    mainContent.append(description);

    const hours = document.createElement("div");
    hours.classList = "Hours";

    const hoursOp = document.createElement('div');
    hoursOp.classList = "HoursOperation";
    hoursOp.innerHTML = "Hours of Operation:";

    hours.append(hoursOp);

    let dayHours = document.createElement('div');
    dayHours.classList = "DayHours";
    dayHours.innerHTML = "11:11 AM to 11:11 PM";

    let weekday = document.createElement('div');
    weekday.classList = "Weekday";
    weekday.innerHTML = "Monday:";

    hours.append(weekday,dayHours);

    weekday = document.createElement('div');
    weekday.innerHTML = "Tuesday:";

    dayHours = document.createElement('div');
    dayHours.innerHTML = "11:11 AM to 11:11 PM";

    hours.append(weekday,dayHours);

    weekday = document.createElement('div');
    weekday.innerHTML = "Wednesday:";

    dayHours = document.createElement('div');
    dayHours.innerHTML = "11:11 AM to 11:11 PM";

    hours.append(weekday,dayHours);
    weekday = document.createElement('div');
    weekday.innerHTML = "Thursday:";

    dayHours = document.createElement('div');
    dayHours.innerHTML = "11:11 AM to 11:11 PM";

    hours.append(weekday,dayHours);
    weekday = document.createElement('div');
    weekday.innerHTML = "Friday:";

    dayHours = document.createElement('div');
    dayHours.innerHTML = "11:11 AM to 11:11 PM";

    hours.append(weekday,dayHours);
    weekday = document.createElement('div');
    weekday.innerHTML = "Saturday:";

    dayHours = document.createElement('div');
    dayHours.innerHTML = "11:11 AM to 11:11 PM";

    hours.append(weekday,dayHours);

    weekday = document.createElement('div');
    weekday.innerHTML = "Sunday:";

    dayHours = document.createElement('div');
    dayHours.innerHTML = "11:11 AM to 11:11 PM";

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