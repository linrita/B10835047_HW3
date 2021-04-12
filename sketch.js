//預先讀取
let jsonobj;
let img;
let btns = [];
function preload(){
  jsonobj = loadJSON('data.json');
  img = loadImage('image.jpg');
}
function setup() {
  createCanvas(360, 180);
  console.log(jsonobj);//預先讀取完可以在setup裡面顯示
  console.log(jsonobj.metadata.count);//讀取object底下的metadata的url資料，加點就好.
  console.log(jsonobj.features[0].geometry.coordinates);//中括號是調取features裡的第0號資料
  console.log(jsonobj.features[0].geometry.coordinates);//調取第0號資料的geometry等等
  jsonobj.features.forEach((v)=>{  //定義每一個為V
  let lat = v.geometry.coordinates[0]; //調出經緯度
  let lang = v.geometry.coordinates[1];
  let mag = v.properties.mag;//調出震度大小的資料
  btns.push(new btn((lat+180),180-(lang+90),mag*mag*1.3));
  });
}
function draw(){
  background(img,0,0,720,360);//(img,設原點,圖片大小);
  //根據btns袋子中的每個物件進行顯示
  btns.forEach((b)=>{
    b.display();
  })
  
}

/*function draw() {
  background(img,0,0,720,360);//(img,設原點,圖片大小)
  jsonobj.features.forEach((v)=>{  //定義每一個為V
    let lat = v.geometry.coordinates[0]; //調出經緯度
    let lang = v.geometry.coordinates[1];
    let mag = v.properties.mag;//調出震度大小的資料
    noStroke();
    fill(239,139,171,mag*mag*2);
    circle( lat+180, lang+90, mag*mag*1.3);//網頁中心點在左上，所以要將位置加數值，位置才會正確
    
  });
  */
  
class btn{//按鈕碰到後的反應
  constructor(x,y,size){
    this.x = x;
    this.y = y;
    this.size = size;
  }
  display(){
    if(   mouseX > this.x-this.size/2 && //偵測滑鼠範圍
          mouseX < this.x+this.size/2 &&
          mouseY > this.y-this.size/2 && 
          mouseY < this.y+this.size/2){
            fill(239,139,171,this.size);
          
    }else{
            fill(40,176,231,this.size);
      }
    noStroke();
    circle(this.x,this.y,this.size);
    }
}