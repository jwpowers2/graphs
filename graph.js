
// google maps api info is in ~/Desktop/GoogleMaps

function Graph() {

    this.nodes = [];
    this.graph = {};
    this.end = null;
    this.start = null;

}

Graph.prototype.addNode = function(n){

    // node into tracking array
    this.nodes.push(n);
    var name = n.value;
    // node into graph object
    this.graph[name] = n;

}

Graph.prototype.setStart = function(city){
    this.start = this.graph[city];
    return this.start;
}

Graph.prototype.setEnd = function(city){
	this.end = this.graph[city];
	return this.end;
}

Graph.prototype.getNode = function(neighbor){

    var n = this.graph[neighbor];
    return n;

}

Graph.prototype.reset = function(){
	for (let i=0;i<this.nodes.length;i++){
		this.nodes[i].searched = false;
		this.nodes[i].parent = null;
	}
}

module.exports = Graph;



