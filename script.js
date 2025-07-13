 function addStudent(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const course = document.getElementById('course').value;
      const email = document.getElementById('email').value;

      const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
      const newRow = table.insertRow();

      newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${course}</td>
        <td>${email}</td>
        <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
      `;

      document.getElementById('studentForm').reset();
      const checkboxes = document.querySelectorAll('.todo-list input[type="checkbox"]');
      checkboxes.forEach(cb => cb.checked = false);
    }

    function deleteRow(button) {
      const row = button.parentNode.parentNode;
      row.remove();
    }

    function checkAllFilled() {
      const checkboxes = document.querySelectorAll('.todo-list input[type="checkbox"]');
      const allChecked = Array.from(checkboxes).every(cb => cb.checked);
      if (allChecked) {
        alert("✅ All tasks checked! You can now submit the form.");
      }
    }