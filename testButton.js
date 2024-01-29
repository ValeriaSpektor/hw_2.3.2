class Button {
    constructor(width, height, type, color) {
      this.props = {
        width,
        height,
        type,
        color,
      };
    }
  
    onClick() {
      console.log(this.props);
    }
  }
  
  function testButton() {

    const referenceButton = new Button(100, 50, 'button', 'green');
  
    
    const testButton = new Button(100, 50, 'button', 'green');
  
    for (const prop in referenceButton.props) {
      if (referenceButton.props[prop] !== testButton.props[prop]) {
        console.error(`Property ${prop} does not match.`);
      }
    }
  
    console.log('Test passed successfully!');
  }
  
  testButton();