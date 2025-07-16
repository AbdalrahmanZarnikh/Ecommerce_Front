import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/yourFormID', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setStatus('تم إرسال الرسالة بنجاح!');
      form.reset();
    } else {
      setStatus('حدث خطأ أثناء الإرسال. حاول مرة أخرى.');
    }
  };

  return (
    <div className="bg-white py-12 px-6 max-w-3xl mx-auto text-right">
      <h2 className="text-2xl font-bold mb-6">اتصل بنا</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="الاسم"
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <textarea
          name="message"
          placeholder="اكتب رسالتك هنا..."
          required
          className="w-full border border-gray-300 rounded px-4 py-2 h-32"
        />
        <button
          type="submit"
          className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          إرسال
        </button>
      </form>
      {status && <p className="mt-4 text-green-600">{status}</p>}
    </div>
  );
};

export default Contact;
