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
  var child = document.getElementById("grand-node").querySelectorAll("div");
  for (let i=0; i<child.length-1; i++){
    var test = child[i].querySelector("div");
    return test;
  }
}
