// saveUserToDB.js
const saveUserToDB = async ({ uid, name, email, image }) => {
  const newUser = {
    uid,
    name,
    email,
    image,
    role: "user", // default role
  };

  console.log("Saving user to DB:", newUser);

  try {
    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    const result = await res.json();
    console.log("User saved response:", result);
  } catch (err) {
    console.error("❌ Failed to save user to DB:", err);
  }
};

export default saveUserToDB;
