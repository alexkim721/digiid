let qFirstName = "";
let qLastName = "";
let qBirthday = "";
let qWhereLive = "";
let qPizza;
let qSleep = "";
let qPet = "";
let qMess;
let qVert;
let qPlan = "";

let winterP1 = '#2be7d9';
let winterP2 = '#2e34da';

let winterB1 = '#1ca7fc';
let winterB2 = '#166ffb';

let springY1 = '#fffb37';
let springY2 = '#ae15ff';

let springO1 = '#ffac06';
let springO2 = '#62f962';

let summerB1 = '#4ef9c6';
let summerB2 = '#ff4e4e';

let summerR1 = '#fbff52';
let summerR2 = '#0098ff';

let fallR1 = '#feb313';
let fallR2 = '#be25f4';

let fallP1 = '#ff3911';
let fallP2 = '#760cd8';

export const getAnswers = answers => {
  console.log("Following answers have been loaded into p5.js:");
  console.log(answers);

  // Change answer data to more explicit variable names
  qFirstName = answers.quest1.nfirst;
  qLastName = answers.quest1.nlast;
  qBirthday = answers.quest2;
  qWhereLive = answers.quest3;
  qPizza = answers.quest4;
  qSleep = answers.quest5;
  qPet = answers.quest6;
  qMess = answers.quest7;
  qVert = answers.quest8;
  qPlan = answers.quest9;
};

const sketch = p => {
  p.setup = function() {
    // Create the canvas
    p.createCanvas(window.innerWidth, window.innerHeight);



    setTimeout(() => {
      console.log("It's working!");
      console.log("First name: " + qFirstName);
      console.log("Last name: " + qLastName);
      console.log("Birth month: " + qBirthday);
      console.log("Wants to live: " + qWhereLive);
      console.log("Pizza scale: " + qPizza);
      console.log("Morning person/night owl: " + qSleep);
      console.log("Cats or dogs: " + qPet);
      console.log("Messy/organized: " + qMess);
      console.log("Introvert/extrovert: " + qVert);
      console.log("Methodical/spontaneous: " + qPlan);

      let season = qBirthday;
    
      if (season=="september" || season=="october" || season=="november") {
        p.background(p.hexWithAlpha('#ff3911'));
      }
      if (season=="december" || season=="january" || season=="february") {
        p.background(p.hexWithAlpha('#745cfb'));
      }
      if (season=="march" || season=="april" || season=="may") {
        p.background(p.hexWithAlpha('#ae15ff'));
      }
      if (season=="june" || season=="july" || season=="august") {
        p.background(p.hexWithAlpha('#ff4e4e'));
      }
      
      p.mood();
      
      if (qPlan == "methodical") {
        console.log("Running Matthew's gradient shapes code");
        p.bgSquares((window.innerWidth/2), (window.innerHeight/2));

        let livin = qWhereLive;
        if (livin == "city") {
          p.squareRow((window.innerWidth/2), (window.innerHeight/2));
        } else if (livin == "country") {
          p.circleRow((window.innerWidth/2), (window.innerHeight/2));
        } else if (livin == "suburbs") {
          p.duoRow((window.innerWidth/2), (window.innerHeight/2));
        }
      } 
      if (qPlan == "spontaneous") {
        console.log("Running Patrick's gradient shapes code");
        p.bgCircles((window.innerWidth/2), (window.innerHeight/2));
        p.partickForegroundShapes();
      }
      
      if(qPizza < 3) {
        console.log("Running Patrick's outline code");
        p.pizzacircle();
      } else {
        console.log("Running Matthew's outline code");
        p.shapes((window.innerWidth/2), (window.innerHeight/2));
      }
    }, 1000);

    //p.gradientBackground(p.hexWithAlpha("#222222", 0.5), p.hexWithAlpha("#222222", 0.5));

    //p.circGrid(40, p.color(0), p.color(255));

    //p.gradCircle(200, 200, 50, p.color(0), p.color(255));

    //p.scales(40, p.color(0), p.color(255));

    //p.drawSquare(200, 200, 150, 45, 0, 255);

    //p.drawTriangle(200, 200, 150, 200, 0, 0, 255);

    //p.drawEqualTriangle(200, 200, 150, 0, 0, 255);

    //p.drawNewTriangle(300, 200, 400, 200, 0, 0, 255);

    //p.polygon(200, 200, 150, 6);
  };

  p.draw = function() {};

  p.pizzacircle = function(){
    // Initializes arrays that will hold shapeSize and the positions of the polygons
    var half = window.innerWidth/2;
    var heighthalf = window.innerHeight/2;
    var fraction;
    var heightfraction;
    var fractionTimes;
    var heightfractionTimes;
    var rightside;
    var bottomside;


    let nameleftTop = [];
    let nameleftBottom = [];
    let namerightBottom = [];
    let namerightTop = [];

    for(let i=0; i<qLastName.length; i++) {
      if(qLastName.charAt(i)=='a')
        {
          fraction=half/26;
          nameleftTop.push(fraction);
          rightside=window.innerWidth-fraction;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='a')
        {
          heightfraction=heighthalf/26;
          namerightTop.push(heightfraction);
          bottomside=window.innerHeight-heightfraction;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='b')
        {
          fraction=half/26;
          fractionTimes=fraction*2;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='b')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*2;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='c')
        {
          fraction=half/26;
          fractionTimes=fraction*3;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='c')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*3;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='d')
        {
          fraction=half/26;
          fractionTimes=fraction*4;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='d')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*4
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='e')
        {
          fraction=half/26;
          fractionTimes=fraction*5;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='e')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*5;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='f')
        {
          fraction=half/26;
          fractionTimes=fraction*6;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='f')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*6;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='g')
        {
          fraction=half/26;
          fractionTimes=fraction*7;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='g')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*7;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='h')
        {
          fraction=half/26;
          fractionTimes=fraction*8;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='h')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*8;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='i')
        {
          fraction=half/26;
          fractionTimes=fraction*9;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='i')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*9;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='j')
        {
          fraction=half/26;
          fractionTimes=fraction*10;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='j')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*10;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='k')
        {
          fraction=half/26;
          fractionTimes=fraction*11;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='k')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*11;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='l')
        {
          fraction=half/26;
          fractionTimes=fraction*12;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='l')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*12;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='m')
        {
          fraction=half/26;
          fractionTimes=fraction*13;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='m')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*13;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='n')
        {
          fraction=half/26;
          fractionTimes=fraction*14;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='n')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*14;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='o')
        {
          fraction=half/26;
          fractionTimes=fraction*15;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='o')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*15;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='p')
        {
          fraction=half/26;
          fractionTimes=fraction*16;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='p')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*16;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='q')
        {
          fraction=half/26;
          fractionTimes=fraction*17;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='q')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*17;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='r')
        {
          fraction=half/26;
          fractionTimes=fraction*18;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='r')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*18;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='s')
        {
          fraction=half/26;
          fractionTimes=fraction*19;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='s')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*19;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='t')
        {
          fraction=half/26;
          fractionTimes=fraction*20;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='t')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*20;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='u')
        {
          fraction=half/26;
          fractionTimes=fraction*21;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='u')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*21;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='v')
        {
          fraction=half/26;
          fractionTimes=fraction*22;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='v')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*22;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='w')
        {
          fraction=half/26;
          fractionTimes=fraction*23;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='w')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*23;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='x')
        {
          fraction=half/26;
          fractionTimes=fraction*24;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='x')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*24;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='y')
        {
          fraction=half/26;
          fractionTimes=fraction*25;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='y')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*25;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='z')
        {
          fraction=half/26;
          fractionTimes=fraction*26;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='z')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*26;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
    }

    var location = qWhereLive;
    var pizzanumber = 5;
    var messy = qMess;
    var day = qSleep;
    var s = qPlan;
    var start;

    if(s == "spontaneous") {
      start = 5;
    } else if(s == "methodical") {
      start = 2;
    }

    var daycount;
    if(day == "morning person") {
      daycount = 200;
    } else if(day == "night owl") {
      daycount = 300
    } else if(day == "neither") {
      daycount = 100;
    }

    let pizzadistance = pizzanumber*10;
    var points;
    var centerwidth = window.innerWidth/2;
    var centerheight = window.innerHeight/2;
    p.noFill();
    p.stroke(255, 255, 255);
    p.strokeWeight(5);
    var begin;
    var end;

    if(start <= pizzanumber) {
      begin = start;
      end = pizzanumber;
    } else if(pizzanumber < start) {
      begin = pizzanumber;
      end = start;
    }

    for(var i=begin; i<=end; i++) {
      if(location=="country") {
        if(messy=="5") {
          p.ellipse(centerwidth, centerheight-(i*pizzadistance), daycount, daycount); //top
          p.ellipse(centerwidth-(i*pizzadistance), centerheight, daycount, daycount); //right
          p.ellipse(centerwidth, centerheight+(i*pizzadistance), daycount, daycount); //bottom
          p.ellipse(centerwidth+(i*pizzadistance), centerheight, daycount, daycount); //left
        } else if(messy=="4") {
          p.ellipse(centerwidth, centerheight-(i*pizzadistance), nameleftTop[i]); //top
          p.ellipse(centerwidth-(i*pizzadistance), centerheight, daycount, daycount); //right
          p.ellipse(centerwidth, centerheight+(i*pizzadistance), daycount, daycount); //bottom
          p.ellipse(centerwidth+(i*pizzadistance), centerheight, daycount, daycount); //left
        } else if(messy=="3") {
          p.ellipse(centerwidth, centerheight-(i*pizzadistance), nameleftTop[i]); //top
          p.ellipse(centerwidth-(i*pizzadistance), centerheight, nameleftBottom[i]); //right
          p.ellipse(centerwidth, centerheight+(i*pizzadistance), daycount, daycount); //bottom
          p.ellipse(centerwidth+(i*pizzadistance), centerheight, daycount, daycount); //left
        } else if(messy=="2") {
          p.ellipse(centerwidth, centerheight-(i*pizzadistance), nameleftTop[i]); //top
          p.ellipse(centerwidth-(i*pizzadistance), centerheight, nameleftBottom[i]); //right
          p.ellipse(centerwidth, centerheight+(i*pizzadistance), namerightBottom[i]); //bottom
          p.ellipse(centerwidth+(i*pizzadistance), centerheight, daycount, daycount); //left
        } else if(messy=="1") {
          p.ellipse(centerwidth, centerheight-(i*pizzadistance), nameleftTop[i]); //top
          p.ellipse(centerwidth-(i*pizzadistance), centerheight, nameleftBottom[i]); //right
          p.ellipse(centerwidth, centerheight+(i*pizzadistance), namerightBottom[i]); //bottom
          p.ellipse(centerwidth+(i*pizzadistance), centerheight, namerightTop[i]); //left
        }
      } else if(location=="city") {
        points = 4;
        if(messy=="5") {
          p.polygon(centerwidth, centerheight-(i*pizzadistance), daycount, points); //top
          p.polygon(centerwidth-(i*pizzadistance), centerheight, daycount, points); //right
          p.polygon(centerwidth, centerheight+(i*pizzadistance), daycount, points); //bottom
          p.polygon(centerwidth+(i*pizzadistance), centerheight, daycount, points); //left
        } else if(messy=="4") {
          p.polygon(centerwidth, centerheight-(i*pizzadistance), nameleftTop[i], points); //top
          p.polygon(centerwidth-(i*pizzadistance), centerheight, daycount, points); //right
          p.polygon(centerwidth, centerheight+(i*pizzadistance), daycount, points); //bottom
          p.polygon(centerwidth+(i*pizzadistance), centerheight, daycount, points); //left
        } else if(messy=="3") {
          p.polygon(centerwidth, centerheight-(i*pizzadistance), nameleftTop[i], points); //top
          p.polygon(centerwidth-(i*pizzadistance), centerheight, nameleftBottom[i], points); //right
          p.polygon(centerwidth, centerheight+(i*pizzadistance), daycount, points); //bottom
          p.polygon(centerwidth+(i*pizzadistance), centerheight, daycount, points); //left
        } else if(messy=="2") {
          p.polygon(centerwidth, centerheight-(i*pizzadistance), nameleftTop[i], points); //top
          p.polygon(centerwidth-(i*pizzadistance), centerheight, nameleftBottom[i], points); //right
          p.polygon(centerwidth, centerheight+(i*pizzadistance), namerightBottom[i], points); //bottom
          p.polygon(centerwidth+(i*pizzadistance), centerheight, daycount, points); //left
        } else if(messy=="1") {
          p.polygon(centerwidth, centerheight-(i*pizzadistance), nameleftTop[i], points); //top
          p.polygon(centerwidth-(i*pizzadistance), centerheight, nameleftBottom[i], points); //right
          p.polygon(centerwidth, centerheight+(i*pizzadistance), namerightBottom[i], points); //bottom
          p.polygon(centerwidth+(i*pizzadistance), centerheight, namerightTop[i], points); //left
        }
      } else if(location=="suburb") {
        points = 6;
        if(messy=="5") {
          p.polygon(centerwidth, centerheight-(i*pizzadistance), daycount, points); //top
          p.polygon(centerwidth-(i*pizzadistance), centerheight, daycount, points); //right
          p.polygon(centerwidth, centerheight+(i*pizzadistance), daycount, points); //bottom
          p.polygon(centerwidth+(i*pizzadistance), centerheight, daycount, points); //left
        } else if(messy=="4") {
          p.polygon(centerwidth, centerheight-(i*pizzadistance), nameleftTop[i], points); //top
          p.polygon(centerwidth-(i*pizzadistance), centerheight, daycount, points); //right
          p.polygon(centerwidth, centerheight+(i*pizzadistance), daycount, points); //bottom
          p.polygon(centerwidth+(i*pizzadistance), centerheight, daycount, points); //left
        } else if(messy=="3") {
          p.polygon(centerwidth, centerheight-(i*pizzadistance), nameleftTop[i], points); //top
          p.polygon(centerwidth-(i*pizzadistance), centerheight, nameleftBottom[i], points); //right
          p.polygon(centerwidth, centerheight+(i*pizzadistance), daycount, points); //bottom
          p.polygon(centerwidth+(i*pizzadistance), centerheight, daycount, points); //left
        } else if(messy=="2") {
          p.polygon(centerwidth, centerheight-(i*pizzadistance), nameleftTop[i], points); //top
          p.polygon(centerwidth-(i*pizzadistance), centerheight, nameleftBottom[i], points); //right
          p.polygon(centerwidth, centerheight+(i*pizzadistance), namerightBottom[i], points); //bottom
          p.polygon(centerwidth+(i*pizzadistance), centerheight, daycount, points); //left
        } else if(messy=="1") {
          p.polygon(centerwidth, centerheight-(i*pizzadistance), nameleftTop[i], points); //top
          p.polygon(centerwidth-(i*pizzadistance), centerheight, nameleftBottom[i], points); //right
          p.polygon(centerwidth, centerheight+(i*pizzadistance), namerightBottom[i], points); //bottom
          p.polygon(centerwidth+(i*pizzadistance), centerheight, namerightTop[i], points); //left
        }
      }
    }
  }

  p.partickForegroundShapes = function() {
    // Initializes arrays that will hold shapeSize and the positions of the polygons
    var half = window.innerWidth/2;
    var heighthalf = window.innerHeight/2;
    var fraction;
    var heightfraction;
    var fractionTimes;
    var heightfractionTimes;
    var rightside;
    var bottomside;


    let nameleftTop = [];
    let nameleftBottom = [];
    let namerightBottom = [];
    let namerightTop = [];

    for(let i=0; i<qLastName.length; i++) {
      if(qLastName.charAt(i)=='a')
        {
          fraction=half/26;
          nameleftTop.push(fraction);
          rightside=window.innerWidth-fraction;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='a')
        {
          heightfraction=heighthalf/26;
          namerightTop.push(heightfraction);
          bottomside=window.innerHeight-heightfraction;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='b')
        {
          fraction=half/26;
          fractionTimes=fraction*2;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='b')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*2;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='c')
        {
          fraction=half/26;
          fractionTimes=fraction*3;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='c')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*3;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='d')
        {
          fraction=half/26;
          fractionTimes=fraction*4;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='d')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*4
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='e')
        {
          fraction=half/26;
          fractionTimes=fraction*5;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='e')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*5;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='f')
        {
          fraction=half/26;
          fractionTimes=fraction*6;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='f')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*6;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='g')
        {
          fraction=half/26;
          fractionTimes=fraction*7;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='g')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*7;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='h')
        {
          fraction=half/26;
          fractionTimes=fraction*8;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='h')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*8;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='i')
        {
          fraction=half/26;
          fractionTimes=fraction*9;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='i')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*9;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='j')
        {
          fraction=half/26;
          fractionTimes=fraction*10;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='j')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*10;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='k')
        {
          fraction=half/26;
          fractionTimes=fraction*11;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='k')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*11;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='l')
        {
          fraction=half/26;
          fractionTimes=fraction*12;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='l')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*12;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='m')
        {
          fraction=half/26;
          fractionTimes=fraction*13;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='m')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*13;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='n')
        {
          fraction=half/26;
          fractionTimes=fraction*14;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='n')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*14;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='o')
        {
          fraction=half/26;
          fractionTimes=fraction*15;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='o')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*15;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='p')
        {
          fraction=half/26;
          fractionTimes=fraction*16;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='p')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*16;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='q')
        {
          fraction=half/26;
          fractionTimes=fraction*17;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='q')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*17;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='r')
        {
          fraction=half/26;
          fractionTimes=fraction*18;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='r')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*18;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='s')
        {
          fraction=half/26;
          fractionTimes=fraction*19;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='s')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*19;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='t')
        {
          fraction=half/26;
          fractionTimes=fraction*20;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='t')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*20;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='u')
        {
          fraction=half/26;
          fractionTimes=fraction*21;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='u')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*21;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='v')
        {
          fraction=half/26;
          fractionTimes=fraction*22;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='v')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*22;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='w')
        {
          fraction=half/26;
          fractionTimes=fraction*23;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='w')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*23;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='x')
        {
          fraction=half/26;
          fractionTimes=fraction*24;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='x')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*24;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='y')
        {
          fraction=half/26;
          fractionTimes=fraction*25;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='y')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*25;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
      if(qLastName.charAt(i)=='z')
        {
          fraction=half/26;
          fractionTimes=fraction*26;
          nameleftTop.push(fractionTimes);
          rightside=window.innerWidth-fractionTimes;
          namerightBottom.push(rightside);
        }
      if(qLastName.charAt(i)=='z')
        {
          heightfraction=heighthalf/26;
          heightfractionTimes=heightfraction*26;
          namerightTop.push(heightfractionTimes);
          bottomside=window.innerHeight-heightfractionTimes;
          nameleftBottom.push(bottomside);
        }
    }

    let season = qBirthday;

    let size;

    if(qVert == "0") {
      size = window.innerWidth/(5*5);
    } else if(qVert == "1") {
      size = window.innerWidth/(5*4);
    } else if(qVert == "2") {
      size = window.innerWidth/(5*3);
    } else if(qVert == "3") {
      size = window.innerWidth/(5*2);
    } else if(qVert == "4") {
      size = window.innerWidth/(5*1);
    }

    if (season=="september" || season=="october" || season=="november") {
      for(var j=0; j<=nameleftTop.length; j++) {
        p.noStroke();
        p.push();
        p.gradCircle(nameleftTop[j],namerightTop[j],size,p.hexWithAlpha(fallR1, 1),p.hexWithAlpha(fallR2, 1));
        p.gradCircle(namerightBottom[j],namerightTop[j],size,p.hexWithAlpha(fallR1, 1),p.hexWithAlpha(fallR2, 1));
        p.gradCircle(nameleftTop[j],nameleftBottom[j],size,p.hexWithAlpha(fallR1, 1),p.hexWithAlpha(fallR2, 1));
        p.gradCircle(namerightBottom[j],nameleftBottom[j],size,p.hexWithAlpha(fallR1, 1),p.hexWithAlpha(fallR2, 1));
        p.pop();
      }
    }
    
    if (season=="december" || season=="january" || season=="february") {
      for(var j=0; j<=nameleftTop.length; j++) {
        p.noStroke();
        p.push();
        p.gradCircle(nameleftTop[j],namerightTop[j],size,p.hexWithAlpha(winterP1, 1),p.hexWithAlpha(winterP2, 1));
        p.gradCircle(namerightBottom[j],namerightTop[j],size,p.hexWithAlpha(winterP1, 1),p.hexWithAlpha(winterP2, 1));
        p.gradCircle(nameleftTop[j],nameleftBottom[j],size,p.hexWithAlpha(winterP1, 1),p.hexWithAlpha(winterP2, 1));
        p.gradCircle(namerightBottom[j],nameleftBottom[j],size,p.hexWithAlpha(winterP1, 1),p.hexWithAlpha(winterP2, 1));
        p.pop();
      }
    }
    
    if (season=="march" || season=="april" || season=="may") {
      for(var j=0; j<=nameleftTop.length; j++) {
        p.noStroke();
        p.push();
        p.gradCircle(nameleftTop[j],namerightTop[j],size,p.hexWithAlpha(springY1, 1),p.hexWithAlpha(springY2, 1));
        p.gradCircle(namerightBottom[j],namerightTop[j],size,p.hexWithAlpha(springY1, 1),p.hexWithAlpha(springY2, 1));
        p.gradCircle(nameleftTop[j],nameleftBottom[j],size,p.hexWithAlpha(springY1, 1),p.hexWithAlpha(springY2, 1));
        p.gradCircle(namerightBottom[j],nameleftBottom[j],size,p.hexWithAlpha(springY1, 1),p.hexWithAlpha(springY2, 1));
        p.pop();
      }
    }
    
    if (season=="june" || season=="july" || season=="august") {
      for(var j=0; j<=nameleftTop.length; j++) {
        p.noStroke();
        p.push();
        p.gradCircle(nameleftTop[j],namerightTop[j],size,p.hexWithAlpha(summerR1, 1),p.hexWithAlpha(summerB2, 1));
        p.gradCircle(namerightBottom[j],namerightTop[j],size,p.hexWithAlpha(summerR1, 1),p.hexWithAlpha(summerB2, 1));
        p.gradCircle(nameleftTop[j],nameleftBottom[j],size,p.hexWithAlpha(summerR1, 1),p.hexWithAlpha(summerB2, 1));
        p.gradCircle(namerightBottom[j],nameleftBottom[j],size,p.hexWithAlpha(summerR1, 1),p.hexWithAlpha(summerB2, 1));
        p.pop();
      }
    }
  }

  // Creates a gradient circle with an offset stroke
  p.gradCircle = function(x, y, r, c1, c2) {
    p.push();
    p.translate(-r, -r);
    const lineW = 1;
    const lines = (r * 2) / lineW;

    p.noStroke();
    for (var i = 0; i <= lines; i++) {
      let inter = p.map(i, 0, r, 0, 0.8);
      let c = p.lerpColor(p.color(c1), p.color(c2), inter);
      p.fill(c);
      const s = i * lineW + lineW;
      const chordLength = Math.sqrt(2 * s * r - s * s) * 2;
      p.rect(i * lineW + x, r - chordLength / 2 + y, lineW, chordLength);
    }
    p.stroke(255);
    p.noFill();
    p.ellipse(x + r + 20, y + r + 20, r * 2);
    p.pop();
  };

  p.squareRow = function(centerX, centerY) {
    let season = qBirthday;
    
    let scale = p.int(qMess);
    
    let pos = p.map(scale, 1, 5, 0, 200);
    
    
    if (season=="september" || season=="october" || season=="november") {
      p.drawSquare(centerX+175, centerY+pos, 50, 45, p.hexWithAlpha(fallR1, 1), p.hexWithAlpha(fallR2, 1));
      p.drawSquare(centerX-175, centerY-pos, 50, 45, p.hexWithAlpha(fallR1, 1), p.hexWithAlpha(fallR2, 1));
      
      p.drawSquare(centerX+100, centerY-pos, 100, 45, p.hexWithAlpha(fallR1, 1), p.hexWithAlpha(fallR2, 1));
      p.drawSquare(centerX-100, centerY+pos, 100, 45, p.hexWithAlpha(fallR1, 1), p.hexWithAlpha(fallR2, 1));
      
      p.drawSquare(centerX, centerY, 150, 45, p.hexWithAlpha(fallR1, 1), p.hexWithAlpha(fallR2, 1));
    }
    
    if (season=="december" || season=="january" || season=="february") {
      p.drawSquare(centerX+175, centerY+pos, 50, 45, p.hexWithAlpha(winterP1, 1), p.hexWithAlpha(winterP2, 1));
      p.drawSquare(centerX-175, centerY-pos, 50, 45, p.hexWithAlpha(winterP1, 1), p.hexWithAlpha(winterP2, 1));
      
      p.drawSquare(centerX+100, centerY-pos, 100, 45, p.hexWithAlpha(winterP1, 1), p.hexWithAlpha(winterP2, 1));
      p.drawSquare(centerX-100, centerY+pos, 100, 45, p.hexWithAlpha(winterP1, 1), p.hexWithAlpha(winterP2, 1));
      
      p.drawSquare(centerX, centerY, 150, 45, p.hexWithAlpha(winterP1, 1), p.hexWithAlpha(winterP2, 1));
    }
    
    if (season=="march" || season=="april" || season=="may") {
      p.drawSquare(centerX+175, centerY+pos, 50, 45, p.hexWithAlpha(springY1, 1), p.hexWithAlpha(springY2, 1));
      p.drawSquare(centerX-175, centerY-pos, 50, 45, p.hexWithAlpha(springY1, 1), p.hexWithAlpha(springY2, 1));
      
      p.drawSquare(centerX+100, centerY-pos, 100, 45, p.hexWithAlpha(springY1, 1), p.hexWithAlpha(springY2, 1));
      p.drawSquare(centerX-100, centerY+pos, 100, 45, p.hexWithAlpha(springY1, 1), p.hexWithAlpha(springY2, 1));
      
      p.drawSquare(centerX, centerY, 150, 45, p.hexWithAlpha(springY1, 1), p.hexWithAlpha(springY2, 1));
    }
    
    if (season=="june" || season=="july" || season=="august") {
      p.drawSquare(centerX+175, centerY+pos, 50, 45, p.hexWithAlpha(summerR1, 1), p.hexWithAlpha(summerB2, 1));
      p.drawSquare(centerX-175, centerY-pos, 50, 45, p.hexWithAlpha(summerR1, 1), p.hexWithAlpha(summerB2, 1));
      
      p.drawSquare(centerX+100, centerY-pos, 100, 45, p.hexWithAlpha(summerR1, 1), p.hexWithAlpha(summerB2, 1));
      p.drawSquare(centerX-100, centerY+pos, 100, 45, p.hexWithAlpha(summerR1, 1), p.hexWithAlpha(summerB2, 1));
      
      p.drawSquare(centerX, centerY, 150, 45, p.hexWithAlpha(summerR1, 1), p.hexWithAlpha(summerB2, 1));
    }
  }

  p.circleRow = function(centerX, centerY) {
    let season = qBirthday;
    
    let scale = p.int(qMess);
    
    let pos = p.map(scale, 1, 5, 0, 200);
    
    
    if (season=="september" || season=="october" || season=="november") {    
      p.gradCircle(centerX-175, (centerY-25)+pos, 25, p.hexWithAlpha(fallR1, 1), p.hexWithAlpha(fallR2, 0.7));
      p.gradCircle(centerX+125, (centerY-25)-pos, 25, p.hexWithAlpha(fallR1, 1), p.hexWithAlpha(fallR2, 0.7));
        
      p.gradCircle(centerX-150, (centerY-50)-pos, 50, p.hexWithAlpha(fallR1, 1), p.hexWithAlpha(fallR2, 0.7));
      p.gradCircle(centerX+50, (centerY-50)+pos, 50, p.hexWithAlpha(fallR1, 1), p.hexWithAlpha(fallR2, 0.7));
        
      p.gradCircle(centerX-75, centerY-75, 75, p.hexWithAlpha(fallR1, 1), p.hexWithAlpha(fallR2, 0.7));
    }
    
    if (season=="december" || season=="january" || season=="february") {
      p.gradCircle(centerX-175, (centerY-25)+pos, 25, p.hexWithAlpha(winterP1, 1), p.hexWithAlpha(winterP2, 0.7));
      p.gradCircle(centerX+125, (centerY-25)-pos, 25, p.hexWithAlpha(winterP1, 1), p.hexWithAlpha(winterP2, 0.7));
      
      p.gradCircle(centerX-150, (centerY-50)-pos, 50, p.hexWithAlpha(winterP1, 1), p.hexWithAlpha(winterP2, 0.7));
      p.gradCircle(centerX+50, (centerY-50)+pos, 50, p.hexWithAlpha(winterP1, 1), p.hexWithAlpha(winterP2, 0.7));
      
      p.gradCircle(centerX-75, centerY-75, 75, p.hexWithAlpha(winterP1, 1), p.hexWithAlpha(winterP2, 0.7));
    }
    
    if (season=="march" || season=="april" || season=="may") {
      p.gradCircle(centerX-175, (centerY-25)+pos, 25, p.hexWithAlpha(springY1, 1), p.hexWithAlpha(springY2, 0.7));
      p.gradCircle(centerX+125, (centerY-25)-pos, 25, p.hexWithAlpha(springY1, 1), p.hexWithAlpha(springY2, 0.7));
      
      p.gradCircle(centerX-150, (centerY-50)-pos, 50, p.hexWithAlpha(springY1, 1), p.hexWithAlpha(springY2, 0.7));
      p.gradCircle(centerX+50, (centerY-50)+pos, 50, p.hexWithAlpha(springY1, 1), p.hexWithAlpha(springY2, 0.7));
      
      p.gradCircle(centerX-75, centerY-75, 75, p.hexWithAlpha(springY1, 1), p.hexWithAlpha(springY2, 0.7));
    }
    
    if (season=="june" || season=="july" || season=="august") {
      p.gradCircle(centerX-175, (centerY-25)+pos, 25, p.hexWithAlpha(summerR1, 1), p.hexWithAlpha(summerB2, 0.7));
      p.gradCircle(centerX+125, (centerY-25)-pos, 25, p.hexWithAlpha(summerR1, 1), p.hexWithAlpha(summerB2, 0.7));
      
      p.gradCircle(centerX-150, (centerY-50)-pos, 50, p.hexWithAlpha(summerR1, 1), p.hexWithAlpha(summerB2, 0.7));
      p.gradCircle(centerX+50, (centerY-50)+pos, 50, p.hexWithAlpha(summerR1, 1), p.hexWithAlpha(summerB2, 0.7));
      
      p.gradCircle(centerX-75, centerY-75, 75, p.hexWithAlpha(summerR1, 1), p.hexWithAlpha(summerB2, 0.7));
    }
  }

  p.duoRow = function(centerX, centerY) {
    let season = qBirthday;
    
    let scale = p.int(qMess);
    
    let pos = p.map(scale, 1, 5, 0, 200);
    
    
    if (season=="september" || season=="october" || season=="november") {    
      p.gradCircle(centerX-200, (centerY-25)+pos, 25, p.hexWithAlpha(fallR1, 1), p.hexWithAlpha(fallR2, 0.7));
      p.gradCircle(centerX+150, (centerY-25)-pos, 25, p.hexWithAlpha(fallR1, 1), p.hexWithAlpha(fallR2, 0.7));
        
      p.drawSquare(centerX+100, centerY+pos, 100, 45, p.hexWithAlpha(fallR1, 1), p.hexWithAlpha(fallR2, 1));
      p.drawSquare(centerX-100, centerY-pos, 100, 45, p.hexWithAlpha(fallR1, 1), p.hexWithAlpha(fallR2, 1));
        
      p.gradCircle(centerX-75, centerY-75, 75, p.hexWithAlpha(fallR1, 1), p.hexWithAlpha(fallR2, 0.7));
    }
    
    if (season=="december" || season=="january" || season=="february") {
      p.gradCircle(centerX-200, (centerY-25)+pos, 25, p.hexWithAlpha(winterP1, 1), p.hexWithAlpha(winterP2, 0.7));
      p.gradCircle(centerX+150, (centerY-25)-pos, 25, p.hexWithAlpha(winterP1, 1), p.hexWithAlpha(winterP2, 0.7));
      
      p.drawSquare(centerX+100, centerY+pos, 100, 45, p.hexWithAlpha(winterP1, 1), p.hexWithAlpha(winterP2, 1));
      p.drawSquare(centerX-100, centerY-pos, 100, 45, p.hexWithAlpha(winterP1, 1), p.hexWithAlpha(winterP2, 1));
      
      p.gradCircle(centerX-75, centerY-75, 75, p.hexWithAlpha(winterP1, 1), p.hexWithAlpha(winterP2, 0.7));
    }
    
    if (season=="march" || season=="april" || season=="may") {
      p.gradCircle(centerX-200, (centerY-25)+pos, 25, p.hexWithAlpha(springY1, 1), p.hexWithAlpha(springY2, 0.7));
      p.gradCircle(centerX+150, (centerY-25)-pos, 25, p.hexWithAlpha(springY1, 1), p.hexWithAlpha(springY2, 0.7));
      
      p.drawSquare(centerX+100, centerY+pos, 100, 45, p.hexWithAlpha(springY1, 1), p.hexWithAlpha(springY2, 1));
      p.drawSquare(centerX-100, centerY-pos, 100, 45, p.hexWithAlpha(springY1, 1), p.hexWithAlpha(springY2, 1));
      
      p.gradCircle(centerX-75, centerY-75, 75, p.hexWithAlpha(springY1, 1), p.hexWithAlpha(springY2, 0.7));
    }
    
    if (season=="june" || season=="july" || season=="august") {
      p.gradCircle(centerX-200, (centerY-25)+pos, 25, p.hexWithAlpha(summerR1, 1), p.hexWithAlpha(summerB2, 0.7));
      p.gradCircle(centerX+150, (centerY-25)-pos, 25, p.hexWithAlpha(summerR1, 1), p.hexWithAlpha(summerB2, 0.7));
      
      p.drawSquare(centerX+100, centerY+pos, 100, 45, p.hexWithAlpha(summerR1, 1), p.hexWithAlpha(summerB2, 1));
      p.drawSquare(centerX-100, centerY-pos, 100, 45, p.hexWithAlpha(summerR1, 1), p.hexWithAlpha(summerB2, 1));
      
      p.gradCircle(centerX-75, centerY-75, 75, p.hexWithAlpha(summerR1, 1), p.hexWithAlpha(summerB2, 0.7));
    }
  }

  p.shapes = function(centerX, centerY) {
    let name = qFirstName.length;
    
    let life = qWhereLive;
    
    let prox = qPet;
    let dist;
    if (prox == "cats") {
      dist = 100;
    } else if (prox == "dogs") {
      dist = -100;
    } else if (prox == "both" || prox == "neither") {
      dist = 0;
    }
    
    let person = p.int(qVert);
    let perSq = p.map(person, 1, 5, 25, 400);
    
    let perCr = p.map(person, 1, 5, 25, 200);
    
    let square1 = perSq;
    let square2 = perSq+100;
    let square3 = square2+100;
    
    let circle1 = perCr;
    let circle2 = perCr+50;
    let circle3 = circle2+50;
    
    p.stroke(255);
    p.noFill();
    if (name%2 == 0) {
      console.log('even');
      
      if (life == "country") {
        p.ellipse(centerX, centerY-(circle1+dist), circle1, circle1); //top
        p.ellipse(centerX+(circle1+dist), centerY, circle1, circle1); //right
        p.ellipse(centerX, centerY+(circle1+dist), circle1, circle1); //bottom
        p.ellipse(centerX-(circle1+dist), centerY, circle1, circle1); //left

        p.ellipse(centerX, centerY-(circle2+dist), circle2, circle2); //top
        p.ellipse(centerX, centerY+(circle2+dist), circle2, circle2); //bottom

        p.ellipse(centerX, centerY-(circle3+dist), circle3, circle3); //top
        p.ellipse(centerX, centerY+(circle3+dist), circle3, circle3); //bottom
        p.ellipse(centerX-(circle3+dist), centerY, circle3, circle3); //left
        p.ellipse(centerX+(circle3+dist), centerY, circle3, circle3); //right

      } else if (life == "city") {            
        p.rect(centerX-(square1/2), centerY-(square1+dist), square1, square1); //top
        p.rect(centerX+dist, centerY-(square1/2), square1, square1); //right
        p.rect(centerX-(square1/2), centerY+dist, square1, square1); //bottom
        p.rect(centerX-(square1+dist), centerY-(square1/2), square1, square1); //left
        
        p.rect(centerX-(square2/2), centerY-(square2+dist), square2, square2); //top
        p.rect(centerX-(square2/2), centerY+dist, square2, square2); //bottom
        
        p.rect(centerX-(square3/2), centerY-(square3+dist), square3, square3); //top
        p.rect(centerX+dist, centerY-(square3/2), square3, square3); //right
        p.rect(centerX-(square3/2), centerY+dist, square3, square3); //bottom
        p.rect(centerX-(square3+dist), centerY-(square3/2), square3, square3); //left
          
      } else if (life == "suburbs") {
        p.ellipse(centerX, centerY-(circle1+dist), circle1, circle1); //top
        p.ellipse(centerX+(circle1+dist), centerY, circle1, circle1); //right
        p.ellipse(centerX, centerY+(circle1+dist), circle1, circle1); //bottom
        p.ellipse(centerX-(circle1+dist), centerY, circle1, circle1); //left

        p.rect(centerX-(square2/2), centerY-(square2+dist), square2, square2); //top
        p.rect(centerX-(square2/2), centerY+dist, square2, square2); //bottom
        
        p.rect(centerX-(square3/2), centerY-(square3+dist), square3, square3); //top
        p.rect(centerX+dist, centerY-(square3/2), square3, square3); //right
        p.rect(centerX-(square3/2), centerY+dist, square3, square3); //bottom
        p.rect(centerX-(square3+dist), centerY-(square3/2), square3, square3); //left
      }
        
    } else {
      console.log('odd');
      
      let square1_2 = square1/2;
      let square2_2 = square2/2;
      let square3_2 = square3/2;
      
      if (life == "country") {
        p.ellipse(centerX, centerY-((circle1/2)+dist), circle1/2, circle1/2); //top
        p.ellipse(centerX+(circle1+dist), centerY, circle1, circle1); //right
        p.ellipse(centerX, centerY+(circle1+dist), circle1, circle1); //bottom
        p.ellipse(centerX-(circle1+dist), centerY, circle1, circle1); //left

        p.ellipse(centerX, centerY-((circle1-25)+dist), circle1-25, circle1-25); //top
        p.ellipse(centerX, centerY+(circle2+dist), circle2, circle2); //bottom

        p.ellipse(centerX, centerY-((circle1+25)+dist), (circle1+25), (circle1+25)); //top
        p.ellipse(centerX, centerY+(circle3+dist), circle3, circle3); //bottom
        p.ellipse(centerX-(circle3+dist), centerY, circle3, circle3); //left
        p.ellipse(centerX+(circle3+dist), centerY, circle3, circle3); //right
          
      } else if (life == "city") {            
        p.rect(centerX-(square1_2/2), centerY-(square1_2+dist), square1_2, square1_2); //top
        p.rect(centerX+dist, centerY-(square1/2), square1, square1); //right
        p.rect(centerX-(square1/2), centerY+dist, square1, square1); //bottom
        p.rect(centerX-(square1+dist), centerY-(square1/2), square1, square1); //left
        
        p.rect(centerX-(square2_2/2), centerY-(square2_2+dist), square2_2, square2_2); //top
        p.rect(centerX-(square2/2), centerY+dist, square2, square2); //bottom
        
        p.rect(centerX-(square3_2/2), centerY-(square3_2+dist), square3_2, square3_2); //top
        p.rect(centerX+dist, centerY-(square3/2), square3, square3); //right
        p.rect(centerX-(square3/2), centerY+dist, square3, square3); //bottom
        p.rect(centerX-(square3+dist), centerY-(square3/2), square3, square3); //left
          
      } else if (life == "suburbs") {
        p.ellipse(centerX, centerY-((circle1/2)+dist), circle1/2, circle1/2); //top
        p.ellipse(centerX+(circle1+dist), centerY, circle1, circle1); //right
        p.ellipse(centerX, centerY+(circle1+dist), circle1, circle1); //bottom
        p.ellipse(centerX-(circle1+dist), centerY, circle1, circle1); //left

        p.rect(centerX-(square2_2/2), centerY-(square2_2+dist), square2_2, square2_2); //top
        p.rect(centerX-(square2/2), centerY+dist, square2, square2); //bottom
        
        p.rect(centerX-(square3_2/2), centerY-(square3_2+dist), square3_2, square3_2); //top
        p.rect(centerX+dist, centerY-(square3/2), square3, square3); //right
        p.rect(centerX-(square3/2), centerY+dist, square3, square3); //bottom
        p.rect(centerX-(square3+dist), centerY-(square3/2), square3, square3); //left
      }
    }
  }

  p.bgSquares = function(centerX, centerY) {
    let season = qBirthday;
    
    let scale = p.int(qMess);
    
    let pos = p.map(scale, 1, 5, 0, 300);
    
    if (season=="september" || season=="october" || season=="november") {
      p.drawSquare(centerX-400, centerY+pos, 600, 45, p.hexWithAlpha(fallP1, 0.7), p.hexWithAlpha(fallP2, 0.7));
      p.drawSquare(centerX-200, centerY-pos, 600, 45, p.hexWithAlpha(fallR1, 0.7), p.hexWithAlpha(fallR2, 0.7));
      
      p.drawSquare(centerX+400, centerY-pos, 600, 45, p.hexWithAlpha(fallP1, 0.7), p.hexWithAlpha(fallP2, 0.7));
      p.drawSquare(centerX+200, centerY+pos, 600, 45, p.hexWithAlpha(fallR1, 0.7), p.hexWithAlpha(fallR2, 0.7));
      p.drawSquare(centerX, centerY, 600, 45, p.hexWithAlpha(fallP1, 0.7), p.hexWithAlpha(fallP2, 0.7));
    }
    
    if (season=="december" || season=="january" || season=="february") {
      p.drawSquare(centerX-400, centerY+pos, 600, 45, p.hexWithAlpha(winterP1, 0.7), p.hexWithAlpha(winterP2, 0.7));
      p.drawSquare(centerX-200, centerY-pos, 600, 45, p.hexWithAlpha(winterB1, 0.7), p.hexWithAlpha(winterB2, 0.7));
      
      p.drawSquare(centerX+400, centerY-pos, 600, 45, p.hexWithAlpha(winterP1, 0.7), p.hexWithAlpha(winterP2, 0.7));
      p.drawSquare(centerX+200, centerY+pos, 600, 45, p.hexWithAlpha(winterB1, 0.7), p.hexWithAlpha(winterB2, 0.7));
      p.drawSquare(centerX, centerY, 600, 45, p.hexWithAlpha(winterP1, 0.7), p.hexWithAlpha(winterP2, 0.7));
    }
    
    if (season=="march" || season=="april" || season=="may") {
      p.drawSquare(centerX-400, centerY+pos, 600, 45, p.hexWithAlpha(springY1, 0.7), p.hexWithAlpha(springY2, 0.7));
      p.drawSquare(centerX-200, centerY-pos, 600, 45, p.hexWithAlpha(springO1, 0.7), p.hexWithAlpha(springO2, 0.7));
      
      p.drawSquare(centerX+400, centerY-pos, 600, 45, p.hexWithAlpha(springY1, 0.7), p.hexWithAlpha(springY2, 0.7));
      p.drawSquare(centerX+200, centerY+pos, 600, 45, p.hexWithAlpha(springO1, 0.7), p.hexWithAlpha(springO2, 0.7));
      p.drawSquare(centerX, centerY, 600, 45, p.hexWithAlpha(springY1, 0.7), p.hexWithAlpha(springY2, 0.7));
    }
    
    if (season=="june" || season=="july" || season=="august") {
      p.drawSquare(centerX-400, centerY+pos, 600, 45, p.hexWithAlpha(summerR1, 0.7), p.hexWithAlpha(summerR2, 0.7));
      p.drawSquare(centerX-200, centerY-pos, 600, 45, p.hexWithAlpha(summerB1, 0.7), p.hexWithAlpha(summerB2, 0.7));
      
      p.drawSquare(centerX+400, centerY-pos, 600, 45, p.hexWithAlpha(summerR1, 0.7), p.hexWithAlpha(summerR2, 0.7));
      p.drawSquare(centerX+200, centerY+pos, 600, 45, p.hexWithAlpha(summerB1, 0.7), p.hexWithAlpha(summerB2, 0.7));
      p.drawSquare(centerX, centerY, 600, 45, p.hexWithAlpha(summerR1, 0.7), p.hexWithAlpha(summerR2, 0.7));
    }
  }

  p.bgCircles = function(centerX, centerY) {
    let season = qBirthday;
    
    let scale = p.int(qMess);
    
    let pos = p.map(scale, 1, 5, 0, 300);
    
    if (season=="september" || season=="october" || season=="november") {        
      p.gradCircle(centerX-400, centerY+pos, 300, p.hexWithAlpha(fallP1, 0.7), p.hexWithAlpha(fallP2, 0.7));
      p.gradCircle(centerX-200, centerY-pos, 300, p.hexWithAlpha(fallR1, 0.7), p.hexWithAlpha(fallR2, 0.7));
      
      p.gradCircle(centerX+400, centerY-pos, 300, p.hexWithAlpha(fallP1, 0.7), p.hexWithAlpha(fallP2, 0.7));
      p.gradCircle(centerX+200, centerY+pos, 300, p.hexWithAlpha(fallR1, 0.7), p.hexWithAlpha(fallR2, 0.7));
      p.gradCircle(centerX, centerY, 300, p.hexWithAlpha(fallP1, 0.7), p.hexWithAlpha(fallP2, 0.7));
    }
    
    if (season=="december" || season=="january" || season=="february") {        
      p.gradCircle(centerX-400, centerY+pos, 300, p.hexWithAlpha(winterP1, 0.7), p.hexWithAlpha(winterP2, 0.7));
      p.gradCircle(centerX-200, centerY-pos, 300, p.hexWithAlpha(winterB1, 0.7), p.hexWithAlpha(winterB2, 0.7));
      
      p.gradCircle(centerX+400, centerY-pos, 300, p.hexWithAlpha(winterP1, 0.7), p.hexWithAlpha(winterP2, 0.7));
      p.gradCircle(centerX+200, centerY+pos, 300, p.hexWithAlpha(winterB1, 0.7), p.hexWithAlpha(winterB2, 0.7));
      p.gradCircle(centerX, centerY, 300, p.hexWithAlpha(winterP1, 0.7), p.hexWithAlpha(winterP2, 0.7));
    }
    
    if (season=="march" || season=="april" || season=="may") {        
      p.gradCircle(centerX-400, centerY+pos, 300, p.hexWithAlpha(springY1, 0.7), p.hexWithAlpha(springY2, 0.7));
      p.gradCircle(centerX-200, centerY-pos, 300, p.hexWithAlpha(springO1, 0.7), p.hexWithAlpha(springO2, 0.7));
      
      p.gradCircle(centerX+400, centerY-pos, 300, p.hexWithAlpha(springY1, 0.7), p.hexWithAlpha(springY2, 0.7));
      p.gradCircle(centerX+200, centerY+pos, 300, p.hexWithAlpha(springO1, 0.7), p.hexWithAlpha(springO2, 0.7));
      p.gradCircle(centerX, centerY, 300, p.hexWithAlpha(springY1, 0.7), p.hexWithAlpha(springY2, 0.7));
    }
    
    if (season=="june" || season=="july" || season=="august") {        
      p.gradCircle(centerX-400, centerY+pos, 300, p.hexWithAlpha(summerR1, 0.7), p.hexWithAlpha(summerR2, 0.7));
      p.gradCircle(centerX-200, centerY-pos, 300, p.hexWithAlpha(summerB1, 0.7), p.hexWithAlpha(summerB2, 0.7));
      
      p.gradCircle(centerX+400, centerY-pos, 300, p.hexWithAlpha(summerR1, 0.7), p.hexWithAlpha(summerR2, 0.7));
      p.gradCircle(centerX+200, centerY+pos, 300, p.hexWithAlpha(summerB1, 0.7), p.hexWithAlpha(summerB2, 0.7));
      p.gradCircle(centerX, centerY, 300, p.hexWithAlpha(summerR1, 0.7), p.hexWithAlpha(summerR2, 0.7));
    }
  }

  p.mood = function() {
    let time = qSleep;
    
    if (time == "morning person") {
      p.background(255);
    } 
    if (time == "night owl") {
      p.background(0);
    }
  }

  // Creates a scale background of overlapping circles
  p.scales = function(r, c1, c2) {
    let y = 0;
    let x = 0;
    let isShifted = false;
    while (y < p.height + r) {
      if (isShifted) {
        x = 0;
      } else {
        x = r;
      }
      while (x < p.width) {
        let inter = p.map(y, 0, p.height, 0, 1);
        let c = p.lerpColor(c1, c2, inter);
        p.fill(c);
        p.stroke(p.lerpColor(c2, c1, inter));
        p.ellipse(x, y, r * 2);
        x = x + r * 2;
      }
      y = y + r;
      isShifted = !isShifted;
    }
  };

  // Creates a grid of circles
  p.circGrid = function(r, c1, c2) {
    let y = 0;
    while (y < p.height + r) {
      let x = 0;
      while (x < p.width) {
        p.inter = p.map(y, 0, p.height, 0, 1);
        let c = p.lerpColor(c1, c2, p.inter);
        p.fill(c);
        p.stroke(255);
        p.ellipse(x, y, r * 2);
        x = x + r * 2;
      }
      y = y + r * 2;
    }
  };

  // Creates a smooth gradient background from left to right
  p.gradientBackground = function(from, to) {
    for (var i = 0; i < window.innerWidth; i++) {
      p.noStroke();
      p.fill(p.lerpColor(p.color(from), p.color(to), i / window.innerHeight));
      p.rectMode(p.CORNER);
      p.rect(i, 0, 1, window.innerHeight);
    }
  };

  // Returns an rgb or rgba color
  p.hexWithAlpha = function(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  };

  // Draws a square
  p.drawSquare = function(xCoord, yCoord, size, rotationAngle, from, to) {
    p.push();
    p.translate(xCoord, yCoord);
    p.angleMode(p.DEGREES);
    p.rotate(rotationAngle);
    for (var i = 0; i < size; i++) {
      p.noStroke();
      p.fill(p.lerpColor(p.color(from), p.color(to), i / size));
      p.rectMode(p.CORNER);
      p.rect(i - size / 2, 0 - size / 2, 1, size);
    }
    p.pop();
  };

  // Draws a triangle based on two side lengths
  p.drawTriangle = function(xCoord, yCoord, lengthSideA, lengthSideB, rotationAngle, from, to) {
    p.push();
    p.translate(xCoord, yCoord);
    p.angleMode(p.DEGREES);
    p.rotate(rotationAngle);
    for (var i = 0; i < lengthSideA; i++) {
      p.noStroke();
      p.rectMode(p.CORNER);
      p.fill(p.lerpColor(p.color(from), p.color(to), i / lengthSideA));
      p.rect(i, 0, 1, lengthSideB - p.map(i, 0, lengthSideA, 0, lengthSideB));
    }
    p.pop();
  };

  // Draws an equilateral triangle
  p.drawEqualTriangle = function(xCoord, yCoord, sideLength, rotationAngle, from, to) {
    p.push();
    p.translate(xCoord, yCoord);
    p.angleMode(p.DEGREES);
    p.rotate(rotationAngle);
    var lengthSideB = (sideLength * p.sqrt(3)) / 2;
    for (var i = 0; i < lengthSideB; i++) {
      p.noStroke();
      p.rectMode(p.CENTER);
      p.fill(p.lerpColor(p.color(from), p.color(to), i / lengthSideB));
      p.rect(i, 0, 1, p.map(i, 0, lengthSideB, sideLength, 0));
    }
    p.pop();
  };

  // Draws a right triangle based on length of base and height
  p.drawNewTriangle = function(xCoord, yCoord, triangleLength, triangleHeight, rotationAngle, from, to) {
    p.push();
    p.translate(xCoord, yCoord);
    p.angleMode(p.DEGREES);
    p.rotate(rotationAngle);
    for (var i = 0; i < triangleLength; i++) {
      p.noStroke();
      p.rectMode(p.CORNER);
      p.fill(p.lerpColor(p.color(from), p.color(to), i / triangleLength));
      if (i < triangleLength / 2) {
        p.rect(
          i - triangleLength / 2,
          0,
          1,
          p.map(i, 0, triangleLength, 0, triangleHeight * 2)
        );
      } else {
        p.rect(
          i - triangleLength / 2,
          0,
          1,
          p.map(i, 0, triangleLength, triangleHeight * 2, 0)
        );
      }
    }
    p.pop();
  };

  // Creates a polygon based on radius and number of vertex points
  p.polygon = function(x, y, radius, nPoints) {
    let angle = p.TWO_PI / nPoints;
    p.fill(0);
    p.stroke(0);
    p.beginShape();
    for (let a = 0; a < p.TWO_PI; a += angle) {
      let sx = x + p.cos(a) * radius;
      let sy = y + p.sin(a) * radius;
      p.vertex(sx, sy);
    }
    p.endShape(p.CLOSE);
  };
};

export default sketch;
