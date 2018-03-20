//Team XDDD
//Tiffany Moi and Leo Liu
//SoftDev2 pd7
//K12 -- Medallions ...of Data!
//2018-03-020



var pic = document.getElementById("vimage");
var norway_btn = document.getElementById("norway");
var sk_btn = document.getElementById("skorea");

var norway_medal = [14,14,11];
var skorea_medal = [5,8,4];

var norway = function(){
    d3.selectAll("circle").data(norway_medal).style("r", function(d){return d *5 + "px";});
    d3.selectAll("text").data(norway_medal).html(function(d){return d;});
};

var skorea = function(){
    d3.selectAll("circle").data(skorea_medal).style("r", function(d){return d *5 + "px";});
    d3.selectAll("text").data(skorea_medal).html(function(d){return d;});
};

norway_btn.addEventListener("click", norway);
sk_btn.addEventListener("click", skorea);
