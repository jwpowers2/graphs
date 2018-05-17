// server file for graph project
var axios = require('axios');
var graphNode = require('./graphNode');
var Graph = require('./graph.js');
var cit = require('./cities.json');
var mode   = process.env.NODE_ENV;
var apiKey = process.env.GOOGLE_MAPS_API_KEY;


var graph;

function setup(){

    graph = new Graph();

	var cities = cit.cities;
	for (let i=0;i<cities.length;i++){
        var city = cities[i].name;
        var lat = cities[i].latitude;
        var lng = cities[i].longitude;
        var neighbors = cities[i].neighbors;

        var cityNode = new graphNode(city,lat,lng);
        graph.addNode(cityNode);

        for(let j=0;j<neighbors.length;j++){
        	var neighbor = neighbors[j];
        	var neighborNode = graph.getNode(neighbor);
        	if(neighborNode === undefined){
        		neighborNode = new graphNode(neighbor);
        	}
        	graph.addNode(neighborNode);
        	//console.log(neighbor);
        	cityNode.addEdge(neighborNode);
        }
	}
}



function BFS(start,end){

	var start = graph.setStart(start);
	var end = graph.setEnd(end);

	console.log(graph);

	var queue = [];
	start.searched = true;
	queue.push(start);

	while (queue.length > 0){
		var current = queue.shift();
	    //console.log(current.value);
	    if(current === end){
		    console.log("found" + current.value);
		    break;
	    }
	    var edges = current.edges;
	    for(let i =0;i<edges.length;i++){
		    let neighbor = edges[i];
		    if(!neighbor.searched){
			    // look at neighbors if they haven't been searched, send to queue and mark as searched
			    neighbor.searched = true;
			    neighbor.parent = current;
			    queue.push(neighbor);
			    //console.log(queue);
		    }
	    }
    }

    var path = [];
    path.push(end);
    var next = end.parent;
    while(next != null){
    	path.push(next);
    	next = next.parent;
    }

    var txt = '';
    for (let i=path.length-1;i>=0;i--){
    	var n = path[i];
    	txt += n.value + ' --> ';
    }
    return txt;
}


setup();

console.log(BFS("Washington DC","Harrisburg"));