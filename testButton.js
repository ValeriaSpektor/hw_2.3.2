class Button {
    constructor(width, height) {
      this.props = {
        type: 'button',
        color: 'blue',
        width: width,
        height: height,
      };
    }
  
    onClick() {
      console.log(this.props);
    }
  }
  
  function testButton() {
    
    const myButton = new Button(100, 80);
  
    console.log(myButton.props);
  }
  
    testButton();