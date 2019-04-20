import firebase from 'firebase';

const sketch = p => {
  let database;
  let ref;
  let storage;
  let easyIDvar;

  p.setup = function() {
    // Create the canvas
    p.createCanvas(window.innerWidth, window.innerHeight);

    // Initialize Firebase
    let config = {
        apiKey: "AIzaSyCLCtrfymafzgxNQCJpUVSEnmWiZAgbP84",
        authDomain: "digital-identities.firebaseapp.com",
        databaseURL: "https://digital-identities.firebaseio.com",
        projectId: "digital-identities",
        storageBucket: "digital-identities.appspot.com",
        messagingSenderId: "834438338603"
    };

    firebase.initializeApp(config);

    // Create a database variable from firebase
    database = firebase.database();

    // Create a storage variable for firebase
    storage = firebase.storage();

    // // Reference data from the database
    // ref = database.ref('users');

    // // Grab the data from the database
    // ref.on('value', p.assignEasyID, p.errData);

    // firebase.auth().signInAnonymously()
    //   .then( () => {
    //     console.log("User " + firebase.auth().currentUser.uid + " signed in with an easyID of " + easyIDvar);
    //     p.submitData();
    //   });

    //p.gradientBackground(p.hexWithAlpha("#222222", 0.5), p.hexWithAlpha("#222222", 0.5));

    // p.symShapes("richard");

    //p.circGrid(40, p.color(0), p.color(255));

    //p.gradCircle(200, 200, 50, p.color(0), p.color(255));

    //p.scales(40, p.color(0), p.color(255));

    //p.drawSquare(200, 200, 150, 45, 0, 255);

    //p.drawTriangle(200, 200, 150, 200, 0, 0, 255);

    //p.drawEqualTriangle(200, 200, 150, 0, 0, 255);

    //p.drawNewTriangle(300, 200, 400, 200, 0, 0, 255);

    //p.polygon(200, 200, 150, 6);


    // QUIZ ANSWERS
    let qFirstName = "Frank";
    
    let qLastName = "Furter";

    let qBirthMonth = "may";

    let qWhereLive = "city";
    // let qWhereLive = "country";
    // let qWhereLive = "suburbs";

    let qPizza = 1;

    let qSleep = "morning person";
    // let qSleep = "night owl";
    // let qSleep = "neither";
    
    let qPet = "cats";
    // let qPet = "dogs";
    // let qPet = "both";
    // let qPet = "neither";

    let qMess = 1;

    let qVert = 1;

    let qPlan = "methodical";
    // let qPlan = "spontaneous";

    



    // // Log user out of firebase
    // setTimeout(() => {
    //   firebase.auth().signOut();
    //   console.log("User " + firebase.auth().currentUser.uid + " has logged out.");
    // }, 1000);
  }

  p.draw = function() {

  }

  // // Sends data to firebase
  // p.submitData = function() {
  //   let data = {
  //     easyID: easyIDvar
  //   };

  //   // See what's being sent
  //   console.log("Following data is being sent to the database:");
  //   console.log(data);

  //   // Create a reference to the database
  //   ref = database.ref('users/' + firebase.auth().currentUser.uid );

  //   // Push the data to the database
  //   ref.push(data);

  //   // Confirm send
  //   console.log("Data sent.");
  // }

  // p.assignEasyID = function(data) {
  //   let results = data.val();
  //   let keys = Object.keys(results);
  //   let keyLength = keys.length;
  //   easyIDvar = keys.length;
  // }

  // // Throw an error if data can't be gotten
  // p.errData = function(err) {
  //   console.log('Error!');
  //   console.log(err);
  // }

  // // Snag the canvas element and send it to firebase
  // p.uploadImg = function() {
  //   // Create storage reference in the database
  //   let storageRef = storage.ref('test/' + firebase.auth().currentUser.uid);

  //   // Select the canvas in the document
  //   const canvas = document.getElementById('defaultCanvas0');

  //   // Convert the canvas into a blob and upload it using the storageRef
  //   canvas.toBlob(function(canvasBlob){
  //     // Upload the image using the newly created blob
  //     storageRef.put(canvasBlob);

  //     // Confirmations
  //     console.log("Sending the following blob:");
  //     console.log(canvasBlob);
  //     console.log("Blob location: " + storageRef);
  //   });
  // }

  p.alexMockupPlaceholder = function() {
    let color1 = p.color(174, 21, 255)
    let color2 = p.color(255, 62, 250)
    let color3 = p.color(98, 249, 98)
    let color4 = p.color(255, 255, 100)
    p.scales(25, color1, color2)
    p.noFill()
    p.stroke(255)
    p.strokeWeight(2)
    p.ellipse((p.width / 11) * 4, (p.height / 5) * 2, 700)
    p.gradCircle(800, 300, 200, color3, color4)
    p.gradCircle(100, 50, 100, color1, color2)

    p.fill(255)
    p.ellipse((p.width / 4) * 3, 250, 150)
  }

  // Creates a gradient circle with an offset stroke
  p.gradCircle = function(x, y, r, c1, c2) {
    const lineW = 1
    const lines = (r * 2) / lineW

    p.noStroke()
    for (var i = 0; i <= lines; i++) {
      let inter = p.map(i, 0, r, 0, 0.8)
      let c = p.lerpColor(c1, c2, inter)
      p.fill(c)
      const s = i * lineW + lineW
      const chordLength = Math.sqrt(2 * s * r - s * s) * 2
      p.rect(i * lineW + x, r - chordLength / 2 + y, lineW, chordLength)
    }
    p.stroke(255)
    p.noFill()
    p.ellipse(x + r + 20, y + r + 20, r * 2)
  }

  // Creates a scale background of overlapping circles
  p.scales = function(r, c1, c2) {
    let y = 0
    let x = 0
    let isShifted = false
    while (y < p.height + r) {
      if (isShifted) {
        x = 0
      } else {
        x = r
      }
      while (x < p.width) {
        let inter = p.map(y, 0, p.height, 0, 1)
        let c = p.lerpColor(c1, c2, inter)
        p.fill(c)
        p.stroke(p.lerpColor(c2, c1, inter))
        p.ellipse(x, y, r * 2)
        x = x + r * 2
      }
      y = y + r
      isShifted = !isShifted
    }
  }

  // Creates a grid of circles
  p.circGrid = function(r, c1, c2) {
    let y = 0
    while (y < p.height + r) {
      let x = 0
      while (x < p.width) {
        p.inter = p.map(y, 0, p.height, 0, 1)
        let c = p.lerpColor(c1, c2, p.inter)
        p.fill(c)
        p.stroke(255)
        p.ellipse(x, y, r * 2)
        x = x + r * 2
      }
      y = y + r * 2
    }
  }

  // Creates a smooth gradient background from left to right
  p.gradientBackground = function(from, to) {
  for(var i = 0; i < window.innerWidth; i++) {
      p.noStroke();
      p.fill(p.lerpColor(p.color(from), p.color(to), (i/window.innerHeight)));
      p.rectMode(p.CORNER);
      p.rect(i, 0, 1, window.innerHeight);
    }
  }

  // Returns an rgb or rgba color
  p.hexWithAlpha = function(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

    if(alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }

  // Draws a square
  p.drawSquare = function(xCoord, yCoord, size, rotationAngle, from, to) {
    p.push();
    p.translate(xCoord, yCoord);
    p.angleMode(p.DEGREES);
    p.rotate(rotationAngle);
    for(var i = 0; i < size; i++) {
      p.noStroke();
      p.fill(p.lerpColor(p.color(from), p.color(to), (i/size)));
      p.rectMode(p.CORNER);
      p.rect(i-(size/2), 0-(size/2), 1, size);
    }
    p.pop();
  }

  // Draws a triangle based on two side lengths
  p.drawTriangle = function(xCoord, yCoord, lengthSideA, lengthSideB, rotationAngle, from, to) {
    p.push();
    p.translate(xCoord, yCoord);
    p.angleMode(p.DEGREES);
    p.rotate(rotationAngle);
    for(var i = 0; i < lengthSideA; i++) {
      p.noStroke();
      p.rectMode(p.CORNER);
      p.fill(p.lerpColor(p.color(from), p.color(to), i/lengthSideA));
      p.rect(i, 0, 1, lengthSideB-(p.map(i, 0, lengthSideA, 0, lengthSideB)));
    }
    p.pop();
  }

  // Draws an equilateral triangle
  p.drawEqualTriangle = function(xCoord, yCoord, sideLength, rotationAngle, from, to) {
    p.push();
    p.translate(xCoord, yCoord);
    p.angleMode(p.DEGREES);
    p.rotate(rotationAngle);
    var lengthSideB = (sideLength*p.sqrt(3))/2;
    for(var i = 0; i < lengthSideB; i++) {
      p.noStroke();
      p.rectMode(p.CENTER);
      p.fill(p.lerpColor(p.color(from), p.color(to), i/lengthSideB));
      p.rect(i, 0, 1, (p.map(i, 0, lengthSideB, sideLength, 0)));
    }
    p.pop();
  }

  // Draws a right triangle based on length of base and height
  p.drawNewTriangle = function(xCoord, yCoord, triangleLength, triangleHeight, rotationAngle, from, to) {
    p.push();
    p.translate(xCoord, yCoord);
    p.angleMode(p.DEGREES);
    p.rotate(rotationAngle);
    for(var i = 0; i < triangleLength; i++) {
      p.noStroke();
      p.rectMode(p.CORNER);
      p.fill(p.lerpColor(p.color(from), p.color(to), i/triangleLength));
      if(i < triangleLength/2) {
          p.rect(i-triangleLength/2, 0, 1, (p.map(i, 0, triangleLength, 0, triangleHeight*2)));
      } else {
          p.rect(i-triangleLength/2, 0, 1, (p.map(i, 0, triangleLength, triangleHeight*2, 0)));
      }
    }
    p.pop();
  }

  // Creates a variety of shapes reflected around the center of the window based on a name input
  p.symShapes = function(name){
    // Initializes arrays that will hold shapeSize and the positions of the polygons
    let shapeSize = [];
    let leftShapesArray = [];
    let rightShapesArray = [];
    let topShapesArray = [];
    let bottomShapesArray = [];

    // Grab necessary data for shape placement and shove it into a variable
    var halfWidth = window.innerWidth/2;
    var halfHeight = window.innerHeight/2;
    var gridWidth26 = halfWidth/26;
    var gridHeight26 = halfHeight/26;

    // Determine the size of the polygons
    for(var g = 0; g < 10; g++) {
      let size = Math.floor(Math.random() * 100) + 10;
      shapeSize.push(size);
    }

    // Toss data into the shape arrays
    for(var i = 0; i < name.length; i++) {
      if(name.charAt(i)==='a') {
        leftShapesArray.push(gridWidth26);
        topShapesArray.push(gridHeight26);
        rightShapesArray.push(window.innerWidth-gridWidth26);
        bottomShapesArray.push(window.innerHeight-gridHeight26);
      }
      if(name.charAt(i)==='b') {
        leftShapesArray.push(gridWidth26*2);
        topShapesArray.push(gridHeight26*2);
        rightShapesArray.push(window.innerWidth-(gridWidth26*2));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*2));
      }
      if(name.charAt(i)==='c') {
        leftShapesArray.push(gridWidth26*3);
        topShapesArray.push(gridHeight26*3);
        rightShapesArray.push(window.innerWidth-(gridWidth26*3));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*3));
      }
      if(name.charAt(i)==='d') {
        leftShapesArray.push(gridWidth26*4);
        topShapesArray.push(gridHeight26*4);
        rightShapesArray.push(window.innerWidth-(gridWidth26*4));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*4));
      }
      if(name.charAt(i)==='e') {
        leftShapesArray.push(gridWidth26*5);
        topShapesArray.push(gridHeight26*5);
        rightShapesArray.push(window.innerWidth-(gridWidth26*5));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*5));
      }
      if(name.charAt(i)==='f') {
        leftShapesArray.push(gridWidth26*6);
        topShapesArray.push(gridHeight26*6);
        rightShapesArray.push(window.innerWidth-(gridWidth26*6));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*6));
      }
      if(name.charAt(i)==='g') {
        leftShapesArray.push(gridWidth26*7);
        topShapesArray.push(gridHeight26*7);
        rightShapesArray.push(window.innerWidth-(gridWidth26*7));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*7));
      }
      if(name.charAt(i)==='h') {
        leftShapesArray.push(gridWidth26*8);
        topShapesArray.push(gridHeight26*8);
        rightShapesArray.push(window.innerWidth-(gridWidth26*8));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*8));
      }
      if(name.charAt(i)==='i') {
        leftShapesArray.push(gridWidth26*9);
        topShapesArray.push(gridHeight26*9);
        rightShapesArray.push(window.innerWidth-(gridWidth26*9));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*9));
      }
      if(name.charAt(i)==='j') {
        leftShapesArray.push(gridWidth26*10);
        topShapesArray.push(gridHeight26*10);
        rightShapesArray.push(window.innerWidth-(gridWidth26*10));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*10));
      }
      if(name.charAt(i)==='k') {
        leftShapesArray.push(gridWidth26*11);
        topShapesArray.push(gridHeight26*11);
        rightShapesArray.push(window.innerWidth-(gridWidth26*11));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*11));
      }
      if(name.charAt(i)==='l') {
        leftShapesArray.push(gridWidth26*12);
        topShapesArray.push(gridHeight26*12);
        rightShapesArray.push(window.innerWidth-(gridWidth26*12));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*12));
      }
      if(name.charAt(i)==='m') {
        leftShapesArray.push(gridWidth26*13);
        topShapesArray.push(gridHeight26*13);
        rightShapesArray.push(window.innerWidth-(gridWidth26*13));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*13));
      }
      if(name.charAt(i)==='n') {
        leftShapesArray.push(gridWidth26*14);
        topShapesArray.push(gridHeight26*14);
        rightShapesArray.push(window.innerWidth-(gridWidth26*14));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*14));
      }
      if(name.charAt(i)==='o') {
        leftShapesArray.push(gridWidth26*15);
        topShapesArray.push(gridHeight26*15);
        rightShapesArray.push(window.innerWidth-(gridWidth26*15));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*15));
      }
      if(name.charAt(i)==='p') {
        leftShapesArray.push(gridWidth26*16);
        topShapesArray.push(gridHeight26*16);
        rightShapesArray.push(window.innerWidth-(gridWidth26*16));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*16));
      }
      if(name.charAt(i)==='q') {
        leftShapesArray.push(gridWidth26*17);
        topShapesArray.push(gridHeight26*17);
        rightShapesArray.push(window.innerWidth-(gridWidth26*17));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*17));
      }
      if(name.charAt(i)==='r') {
        leftShapesArray.push(gridWidth26*18);
        topShapesArray.push(gridHeight26*18);
        rightShapesArray.push(window.innerWidth-(gridWidth26*18));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*18));
      }
      if(name.charAt(i)==='s') {
        leftShapesArray.push(gridWidth26*19);
        topShapesArray.push(gridHeight26*19);
        rightShapesArray.push(window.innerWidth-(gridWidth26*19));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*19));
      }
      if(name.charAt(i)==='t') {
        leftShapesArray.push(gridWidth26*20);
        topShapesArray.push(gridHeight26*20);
        rightShapesArray.push(window.innerWidth-(gridWidth26*20));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*20));
      }
      if(name.charAt(i)==='u') {
        leftShapesArray.push(gridWidth26*21);
        topShapesArray.push(gridHeight26*21);
        rightShapesArray.push(window.innerWidth-(gridWidth26*21));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*21));
      }
      if(name.charAt(i)==='v') {
        leftShapesArray.push(gridWidth26*22);
        topShapesArray.push(gridHeight26*22);
        rightShapesArray.push(window.innerWidth-(gridWidth26*22));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*22));
      }
      if(name.charAt(i)==='w') {
        leftShapesArray.push(gridWidth26*23);
        topShapesArray.push(gridHeight26*23);
        rightShapesArray.push(window.innerWidth-(gridWidth26*23));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*23));
      }
      if(name.charAt(i)==='x') {
        leftShapesArray.push(gridWidth26*24);
        topShapesArray.push(gridHeight26*24);
        rightShapesArray.push(window.innerWidth-(gridWidth26*24));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*24));
      }
      if(name.charAt(i)==='y') {
        leftShapesArray.push(gridWidth26*25);
        topShapesArray.push(gridHeight26*25);
        rightShapesArray.push(window.innerWidth-(gridWidth26*25));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*25));
      }
      if(name.charAt(i)==='z') {
        leftShapesArray.push(gridWidth26*26);
        topShapesArray.push(gridHeight26*26);
        rightShapesArray.push(window.innerWidth-(gridWidth26*26));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*26));
      }
    }

    // Draw polygons based on the data in the arrays
    for(let i = 0; i < leftShapesArray.length; i++) {
      p.fill(0, 0, 0);
      p.push();
      p.polygon(leftShapesArray[i], topShapesArray[i], shapeSize[i], name.length);
      p.polygon(rightShapesArray[i], topShapesArray[i], shapeSize[i], name.length);
      p.polygon(leftShapesArray[i], bottomShapesArray[i], shapeSize[i], name.length);
      p.polygon(rightShapesArray[i], bottomShapesArray[i], shapeSize[i], name.length);
      p.pop();
    }
  }

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
  }
}

export default sketch
