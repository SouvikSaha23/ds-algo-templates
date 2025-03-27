class Stack<T> {
      private elements: T[];
      
      constructor(){
          this.elements = new Array<T>();
      } 
      
      public isEmpty(): boolean {
          return this.elements.length === 0;
      }
      
      public top(): T {
          if (this.isEmpty()){
             throw new Error("Stack is empty");
          }
          return this.elements[this.elements.length - 1];
      }
      
      public push(val: T) {
          this.elements.push(val);
      }
      
      public pop(): T {
          if (this.isEmpty()){
             throw new Error("Stack is empty");
          }
          return this.elements.pop()!;
      }

}
