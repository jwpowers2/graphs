// breadth graph traversal in JS
 

function Graph() {
 
    this.graph = {};

    // add an edge to graph
    this.addEdge = function(u,v){
    	if(!this.graph[u]){
    	    this.graph[u] = [];
    	    this.graph[u].push(v);
        } else {
            this.graph[u].push(v);
        }
    }

    // BFS
    this.BFS = function(s){
 
        //Mark all the vertices as not visited
        //visited = [False] * (len(self.graph))
        var visited = {};
        Object.keys(this.graph).forEach(function(element){
        	visited[element] = false;
        })

        // Create a queue for BFS
        var queue = [];
 
        // Mark the source node as 
        // visited and enqueue it
        queue.push(s);
        visited[s] = true;
        //console.log(visited);
        
        //console.log(typeof queue);
        
        while (queue.length > 0){
            
            //Dequeue a vertex from 
            //queue and print it
            s = queue.shift();
            console.log(s);
            console.log(visited);
            
            //Get all adjacent vertices of the
            //dequeued vertex s. If a adjacent
            //has not been visited, then mark it
            //visited and enqueue it
            
            for (let i of Object.keys(this.graph[s])){
                console.log(this.graph[s][i]);
                // for each in adjacency array
                if (visited[this.graph[s][i]] === false){
                    queue.push(this.graph[s][i]);
                    visited[this.graph[s][i]] = true;
                }
                
                
            }

            

        }
        
        
    }
    this.DFS_Util = function(v,visited){
        visited[v] = true;
        console.log(v);
        //Recur for all the vertices adjacent to this vertex
        for (let i of this.graph[v]){
            if (visited[i] === false){
                this.DFS_Util(i, visited)
            }
            
        }
    }

    this.DFS = function(v){

        //Mark all the vertices as not visited
        var visited = {};
        Object.keys(this.graph).forEach(function(element){
        	visited[element] = false;
        })
 
        //Call the recursive helper function to print
        //DFS traversal
        this.DFS_Util(v,visited);

    }
} 
//Driver code
 
//Create a graph given in
//the above diagram
let g = new Graph();
g.addEdge('Seattle', 'Tacoma');
g.addEdge('Seattle', 'Renton');
g.addEdge('Tacoma', 'Renton');
g.addEdge('Renton', 'Seattle');
g.addEdge('Renton', 'Olympia');
g.addEdge('Olympia', 'Olympia');


g.BFS('Seattle');
g.DFS('Seattle');
