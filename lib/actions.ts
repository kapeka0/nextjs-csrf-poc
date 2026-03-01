"use server";

export const createUser = async (data: { name: string }) => {
  console.log("Creating user with name:", data.name);
  // Simulate a delay for demonstration purposes
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Here you would typically interact with your database to create the user
  console.log("User created successfully!");
  return { success: true, message: "User created successfully!" };
};
