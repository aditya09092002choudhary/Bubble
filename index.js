var items = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var speed = [10, 20, 30, 40, 50];
var position = [10, 20, 40, 60, 80];
var ids = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var count = 0;
var score = 0;
var eid, audio;
var ccount = 0;

var time = 1500;

var t1;
var t2;



function main(){

  t1 = setInterval(function (e) {
        function random_ids(ids) {

        return ids[Math.floor(Math.random() * ids.length)];

    }

    var cid = random_ids(ids);
    var aid = 'element' + cid;

    function random_item(items) {

        return items[Math.floor(Math.random() * items.length)];
        
    }



    var key = random_item(items);



    var element = document.createElement('div');
    element.id = aid;
    element.className = "element";
    element.innerHTML = key;
    document.querySelector(".body").appendChild(element);

    
    console.log(key);
    
    
    count++;
    
    
    var x = document.querySelectorAll(".element");
    var i;
    for (i = 0; i < x.length; i++) {
        //   x[i].style.backgroundColor = "red";
        
        x[i].addEventListener('click', function () {
            this.classList.add("visiblity");
            // audio = new Audio("BubblePop.wav");
            // audio.play();
            eid = this.id;
            ccount++;
            // For Score
            
            if ((eid == 'element1') || (eid == 'element6')) {
                score = score + 50;
                document.getElementById("score").innerHTML = "Score: " + score;
            }
            else if ((eid == 'element2') || (eid == 'element7')) {
                score = score + 35;
                document.getElementById("score").innerHTML = "Score: " + score;
                
            }
            else if ((eid == 'element3') || (eid == 'element8')) {
                score = score + 25;
                document.getElementById("score").innerHTML = "Score: " + score;
                
            }
            else if ((eid == 'element4') || (eid == 'element9')) {
                score = score + 20;
                document.getElementById("score").innerHTML = "Score: " + score;
                
            }
            else {
                score = score + 10;
                document.getElementById("score").innerHTML = "Score: " + score;
                
            }
        });
    }
    
    // increasing Speed 
    count++;
    if (count % 5 == 0) {
        time = time - 50;
        
    }
}, time);


}

function start() {
    document.querySelector(".Pstart").addEventListener('click',function(){
        document.querySelector(".Pstart").classList.add("display");
        document.querySelector(".start").classList.remove("display");
        document.getElementById("container").style.display= "block";
    document.querySelector(".over").classList.add("display");


    })
}


t2 = setTimeout(function(){
    // clearInterval();
    document.querySelector(".start").classList.add("display");

    document.querySelector(".over").classList.remove("display");
    document.getElementById("container").style.display= "flex";
    document.querySelector(".result").innerHTML ="Score: " + score;
    clearInterval(t1);
},120000);

function restart(){
    location.reload();
    clearInterval(t2);
}

// document.querySelector(".over").addEventListener('click',function(){
//     start();
// });

// setTimeout(0);