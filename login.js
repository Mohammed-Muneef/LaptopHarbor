async function fetchUsers() {
  try {
    const response = await fetch("users.json"); // Replace with your JSON data URL
    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.statusText}`);
    }
    const jsonData = await response.json();
    const users = jsonData.users;
    //   console.log(users)
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    // Handle errors appropriately (e.g., display an error message to the user)
  }
}

document
  .getElementById("myForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(this);

    // Access form data using formData.get('fieldName')
    const email = formData.get("email");
    const password = formData.get("password");

    // Validate form data (optional)
    // ... (implement validation logic if needed)

    try {
      const users = await fetchUsers();
      //   console.log(users)

      // Check if user credentials match any existing user in the fetched data
      const matchingUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (matchingUser) {
        console.log("Login successful!");
        sessionStorage.setItem("loggedIn", true);
        window.location.href = "index.html";
        // Potentially redirect to a logged-in user page or perform other actions
      } else {
        console.log("Invalid login credentials.");
        // Display an appropriate error message to the user
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle errors appropriately (e.g., display a generic error message)
    }
  });
