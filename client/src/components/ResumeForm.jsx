const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/resume', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      const result = await response.json();
      console.log('Resume saved successfully:', result);
    } else {
      console.error('Failed to save resume');
    }
  } catch (error) {
    console.error('Error saving resume:', error);
  }
};