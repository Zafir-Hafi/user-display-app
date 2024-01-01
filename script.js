
//this small project is for my github portfolio

//user display app 

function App() {
    this.users = ["Alice", "Bob", "Charlie"];
  
    this.displayUsers = function() {
      const appDiv = document.getElementById("app");
      this.users.forEach(function(name, index) {
        appDiv.innerHTML += `<p>User ${index + 1}: ${name}</p>`;
      });
    };
  }
  
  const myApp = new App();
  myApp.displayUsers();
  