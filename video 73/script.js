function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewstr
    if(views>999&&views<=999999){
        viewstr=views/1000+"K"
    }
    else if(views>999999){
        viewstr=views/1000000+"M"
    }
    else{
        viewstr=views
    }
    let html=`<div class="card">
            <div class="image">
                <img src=${thumbnail}
                    alt="">
            </div>
        </div>
        <div class="text">
            <div class="t">${title}</div>
            <div class="r">${cName} . ${viewstr}views . ${monthsOld} months ago </div>
        </div>

    </div>`
    document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html

}
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 56000000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")