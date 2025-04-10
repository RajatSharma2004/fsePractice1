const takenUsernames = ["rajat", "raman", "ram10", "shaurya"];

    // Function to simulate an API call with a delay
    function mockApiCheck(username) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const isTaken = takenUsernames.includes(username.toLowerCase());
          resolve({ available: !isTaken });
        }, 500); // Simulate network delay of 500ms
      }); 
    }

    // Function to check username availability
    async function checkUsername() {
      const username = document.getElementById("username").value.
      
      trim();
      const resultDiv = document.getElementById("result");

      // Clear result if input is empty
      if (!username) {
        resultDiv.textContent = "";
        resultDiv.className = "";
        return;
      }

      // Minimum length check (optional)
      if (username.length < 3) {
        resultDiv.textContent = "Username must be at least 3 characters.";
        resultDiv.className = "taken";
        return;
      }

      // Simulate AJAX call to check availability
      resultDiv.textContent = "Checking...";
      resultDiv.className = "";

      try {
        const response = await mockApiCheck(username);
        if (response.available) {
          resultDiv.textContent = `'${username}' is available!`;
          resultDiv.className = "available";
        } else {
          resultDiv.textContent = `'${username}' is already taken.`;
          resultDiv.className = "taken";
        }
      } catch (error) {
        resultDiv.textContent = "Error checking username.";
        resultDiv.className = "taken";
        console.error(error);
      }
    }