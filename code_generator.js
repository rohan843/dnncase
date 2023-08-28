class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
      this.size = 0;
    }
  
    // Add an item to the back of the queue
    enqueue(item) {
      const newNode = new Node(item);
      if (this.isEmpty()) {
        this.front = newNode;
        this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
      this.size++;
    }
  
    // Remove and return the front item from the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      const removedNode = this.front;
      this.front = this.front.next;
      this.size--;
      return removedNode.data;
    }
  
    // Return the front item of the queue without removing it
    frontItem() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.front.data;
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.size === 0;
    }
  
    // Return the size of the queue
    getSize() {
      return this.size;
    }
  
    // Print the queue
    print() {
      let current = this.front;
      const queueItems = [];
      while (current) {
        queueItems.push(current.data);
        current = current.next;
      }
      console.log(queueItems);
    }
  }
  
  //pushing all input layers to a queue
  const jsonString = '{"layers":[{"id":1,"type":"Input"},{"id":2,"type":"dense"}]}';
  const jsonObject = JSON.parse(jsonString)
  const queue = new Queue();

  for(const layer of jsonObject.layers){
    if(layer.type=='Input'){
        queue.enqueue(layer)
    }
  }
  const jsonEdges ='abc';
  while(!queue.isEmpty()){
      const item = queue.dequeue();
      
      
  }


  queue.print(); // Output: [20, 30]
  