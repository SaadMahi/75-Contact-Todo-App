// Post data
export const postDataToFirebase = async (formObject) => {
  try {
    const response = await fetch(
      'https://todo-react-app-saad-default-rtdb.firebaseio.com/users.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log('Data posted successfully:', responseData);
    // Handle the response if needed
    return responseData; // You can return the response data if needed
  } catch (error) {
    console.error('Error posting data:', error);
    throw error; // You can handle the error as needed
  }
};
