 const previousOperationText = document.querySelector("#previous-operation");
 const currentOperationText = document.querySelector("#current-operation");
 const buttons = document.querySelectorAll("#buttons-container button");

 class Calculator{
   constructor(previousOperationText, currentOperationText){
      this.previousOperationText = previousOperationText;
      this.currentOperationText = currentOperationText;
      this.currentOperation = "";
   }
   //add digit to calculator screen
   addDigit(digit){
      // check if current operation already has a dot
      if (digit === "." && this.currentOperationText.innerText.includes(".")) {
         return
      }
      this.currentOperation = digit;
      this.updateScreen();
   }

   // Process all calculator operations

   processOperation(operation){
      
      // Get current and previous values
      let operationsValue;
      const prvious = +this.previousOperationText.innerText;
      const current = +this.currentOperationText.innerText;

      switch (operation) {
         case "+":
            operationsValue = previous + current;
            this.updateScreen(operationsValue, operation, current, previous);
            break;
      
         default:
            return;
      }

   }
   // Change values of the calculator screen
   updateScreen(operationsValue = null, 
      operation = null, 
      current = null, 
      previous = null
      ){

      console.log(operationsValue, operation, current, previous)
      
      this.currentOperationText.innerText += this.currentOperation;
   }
 }
const calc = new Calculator (previousOperationText, currentOperationText);
 buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
         const value = e.target.innerText;

        if (+value >= 0 || value === ".") {
         calc.addDigit(value);
        } else {
         calc.processOperation(value);
        }
    });
 });