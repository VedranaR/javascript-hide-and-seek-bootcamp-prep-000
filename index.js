function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n){
  var liLi=document.getElementById("app").querySelectorAll("ul.ranked-list li");
    for(let i=0; i<liLi.length; i++){
      liLi[i].innerHTML=parseInt(lis[i].innerHTML)+n;
}}

function deepestChild(){
  
}

  var lis=document.getElementById("grand-node").querySelectorAll("div");
  var test;
  for(let i=0;i<lis.length-1;i++) {
    test=lis[i].querySelector("div");
  }
return test;