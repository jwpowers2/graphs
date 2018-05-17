// nodes for graphing application

function graphNode(value,lat,lng){
	
	this.value = value;
	this.lat = lat,
	this.lng = lng;
	this.edges = [];
	this.searched = false;
	this.parent = null;

}

graphNode.prototype.addEdge = function(neighbor){
	this.edges.push(neighbor);
	neighbor.edges.push(this);
}

module.exports = graphNode;
