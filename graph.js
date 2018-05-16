// breadth graph traversal in JS
// google maps api info is in ~/Desktop/GoogleMaps

function Graph() {
 
    this.graph = {};

    // add an edge to graph
    // v could be an object which is the computed distance between u and v
    // need to geolocate an address to lat/long and plug into a function

    this.addEdge = function(u,v){
    	if(!this.graph[u]){
    	    this.graph[u] = [];
    	    this.graph[u].push(v);
        } else {
            this.graph[u].push(v);
        }
    }

    this.BFS = function(s){
 
        var visited = {};
        Object.keys(this.graph).forEach(function(element){
        	visited[element] = false;
        })

        var queue = [];
 
        queue.push(s);
        visited[s] = true;

        
        while (queue.length > 0){

            s = queue.shift();
  
            for (let i of Object.keys(this.graph[s])){
                //console.log(this.graph[s][i]);
                
                if (visited[this.graph[s][i]] === false){
                    queue.push(this.graph[s][i]);
                    visited[this.graph[s][i]] = true;
                }   
            }
        }
    }
    this.DFS_Util = function(v,visited){
        visited[v] = true;
        //console.log(v);
        
        for (let i of this.graph[v]){
            if (visited[i] === false){
                this.DFS_Util(i, visited)
            }
            
        }
    }

    this.DFS = function(v){

        var visited = {};
        Object.keys(this.graph).forEach(function(element){
        	visited[element] = false;
        })

        this.DFS_Util(v,visited);

    }
} 

let g = new Graph();
g.addEdge('Seattle', 'Tacoma');
g.addEdge('Seattle', 'Renton');
g.addEdge('Tacoma', 'Renton');
g.addEdge('Renton', 'Seattle');
g.addEdge('Renton', 'Olympia');
g.addEdge('Olympia', 'Olympia');


//g.BFS('Seattle');
g.DFS('Seattle');
