// **POLYGLOW CREATIONS Supabase Config**
const SUPABASE_URL = 'https://hpxvilhhfsirxchgdnip.supabase.co'; 
const SUPABASE_KEY = 'sb_publishable_mpH1La3O0PtQ97P9ydB-dg_d_MU9xY1'; // Dashboard se copy karke yahan lagayein

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Button ko "Sending..." mode par dalna
        const submitBtn = form.querySelector('button');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Form se data lena
        const formData = {
            name: document.querySelector('input[placeholder="Enter your full name"]').value,
            email: document.querySelector('input[placeholder="Enter your email address"]').value,
            interest: document.querySelector('select').value,
            message: document.querySelector('textarea').value
        };

        try {
            // Data insertion into 'inquiries' table
            const { error } = await supabaseClient
                .from('inquiries')
                .insert([formData]);

            if (error) throw error;

            // ✅ SUCCESS DIALOG BOX
            Swal.fire({
                title: 'Success!',
                text: 'Your message has been delivered successfully to POLYGLOW CREATIONS.',
                icon: 'success',
                confirmButtonColor: '#5c4033', // Aapki theme ka brown color
                confirmButtonText: 'Great!'
            });

            form.reset(); // Form khali kar dena

        } catch (err) {
            console.error(err);

            // ❌ ERROR DIALOG BOX
            Swal.fire({
                title: 'Oops...',
                text: 'Something went wrong! Please try again or check your connection.',
                icon: 'error',
                confirmButtonColor: '#d33'
            });

        } finally {
            // Button ko wapis normal karna
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }
    });
});