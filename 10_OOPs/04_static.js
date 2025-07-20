// In summary, static members provide a way to associate functionality or data directly with the class itself,
//  making them useful for operations that are independent of any specific object created from that class


class MyClass {
  // Static property
  static myStaticProperty = 'Hello from static!';

  // Static method
  static myStaticMethod(message) {
    console.log(`Static method called: ${message}`);
    // Cannot access 'this.instanceProperty' here
  }

  // Instance property
  instanceProperty = 'Hello from instance!';

  // Instance method
  myInstanceMethod() {
    console.log(`Instance method called: ${this.instanceProperty}`);
    // Can access 'this.instanceProperty' here
  }
}

// Accessing static members
console.log(MyClass.myStaticProperty); // Output: Hello from static!
MyClass.myStaticMethod("This is a static message."); // Output: Static method called: This is a static message.

// Creating an instance
const myInstance = new MyClass();

// Accessing instance members
console.log(myInstance.instanceProperty); // Output: Hello from instance!
myInstance.myInstanceMethod(); // Output: Instance method called: Hello from instance!

// Trying to access static members on an instance will result in undefined or an error
console.log(myInstance.myStaticProperty); // Output: undefined
// myInstance.myStaticMethod(); // TypeError: myInstance.myStaticMethod is not a function