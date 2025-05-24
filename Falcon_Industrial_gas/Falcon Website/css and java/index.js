// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
  
    if (form) {
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
  
        const formData = new FormData(form);
        const data = {};
  
        formData.forEach((value, key) => {
          data[key] = value;
        });
  
        // ⚠️ Placeholder: Backend endpoint needed to process the form
        try {
          const response = await fetch("https://example.com/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
  
          if (response.ok) {
            alert("Thank you for contacting us! We'll get back to you soon.");
            form.reset();
          } else {
            alert("Something went wrong. Please try again.");
          }
        } catch (error) {
          console.error("Form submission failed:", error);
          alert("Failed to send your message. Please check your connection.");
        }
      });
    }
  });
  