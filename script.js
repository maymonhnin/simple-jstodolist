      // *** 5 *** Reuseable Function for adding delete icons to each list
      // Create a "Delete" button
      function addDeleteIcon() {
        var deleteButton = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        deleteButton.className = "close";
        deleteButton.appendChild(txt);
        deleteButton.innerHTML = '<i class="fa fa-trash"></i>'; //adding custom icon as js dom
        return deleteButton;
      }

      // *** 7 **** Reuseable Function for adding edit icons to each list
      // Create an "Edit" button
      function addEditIcon() {
        var editButton = document.createElement("SPAN");
        var editIcon = document.createTextNode("✎");
        editButton.className = "edit";
        editButton.appendChild(editIcon);
        editButton.onclick = function () {
          editTask(this); // function reusing for editing each list
        };
        return editButton;
      }

      // *** 8 *** Reuseable Function for editing each list
      // Function to edit a task
      function editTask(element) {
        var listItem = element.parentElement;
        var taskText = listItem.firstChild.nodeValue.trim(); // Get the text content of the task

        // Prompt the user for the updated task text
        var updatedTask = prompt("Edit task:", taskText);

        // Update the task if the user entered new text
        if (updatedTask !== null && updatedTask !== "") {
          listItem.firstChild.nodeValue = updatedTask;
        }
      }

      // **** 2 **** Create a "close" button and append it to each list item
      var myNodelist = document.getElementsByTagName("li");
      var i;
      for (i = 0; i < myNodelist.length; i++) {
        // var span = document.createElement("span");
        // var txt = document.createTextNode("\u00D7");
        // span.className = "close";
        // span.appendChild(txt);
        // span.innerHTML = '<i class="fa fa-trash"></i>';

        deleteButton = addDeleteIcon(); //Function reusing for adding delete icons to each list
        editButton = addEditIcon(); //Function reusing for adding edit icons to each list

        myNodelist[i].appendChild(editButton);
        myNodelist[i].appendChild(deleteButton);
      }

      // *** 6 *** Reuseable Function for deleting each list
      function addFunctionToDeleteIcon() {
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
            return div;
          };
        }
      }

      // **** 3 **** Click on a close button to hide the current list item
      var close = document.getElementsByClassName("close");
      // for (i = 0; i < close.length; i++) {
      //   close[i].onclick = function () {
      //     var div = this.parentElement;
      //     div.style.display = "none";
      //   };
      // }
      addFunctionToDeleteIcon(); // Function reusing for deleting each list

      // **** 4 **** Add a "checked" symbol when clicking on a list item
      var list = document.querySelector("ul");
      list.addEventListener(
        "click",
        function (ev) {
          if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
          }
        },
        false
      );

      // **** 1 **** Create a new list item when clicking on the "Add" button
      /*
        <input type="text" id="myInput" placeholder="Title..." />
      <span onclick="newElement()" class="addBtn">Add</span>
      */
      function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var text = document.createTextNode(inputValue);
        li.appendChild(text);

        // ** checking whether is inputValue null **
        if (inputValue === "") {
          alert("You must write something!");
        } else {
          document.getElementById("myUL").appendChild(li);
        }

        // ** to clear data from input text box **
        document.getElementById("myInput").value = "";

        // ** to delete list in each list **
        // var span = document.createElement("span");
        // var txt = document.createTextNode("\u00D7");
        // span.className = "close";
        // span.innerHTML = '<i class="fa fa-trash"></i>';
        // span.appendChild(txt);

        deleteButton = addDeleteIcon(); //Function reusing for adding delete icons to each list
        editButton = addEditIcon(); //Function reusing for adding edit icons to each list

        li.appendChild(editButton);
        li.appendChild(deleteButton);

        // for (i = 0; i < close.length; i++) {
        //   close[i].onclick = function () {
        //     var div = this.parentElement;
        //     div.style.display = "none";
        //   };
        // }

        addFunctionToDeleteIcon(); // Function reusing for deleting each list
      }
