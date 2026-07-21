'use server';

export async function handleContactForm(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Input Validation
  if (!name || !email || !message) {
    return { success: false, error: 'Please fill all fields.' };
  }

  try {
    // Yahan backend par aapka data mil chuka hai.
    // Aap yahan prisma query chala sakte hain, database mein save kar sakte hain, ya email service call kar sakte hain.
    console.log("Backend Received Form Data:", { name, email, message });

    // Success response send karte hain client ko
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Something went wrong on the server.' };
  }
}
