"use client";

const whatsappNumber = "254716680579";

const whatsappMessage =
  "Hello Teddy, I found your portfolio and I'm interested in your services.";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Teddy Otieno on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#20bd5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#08090b] sm:h-16 sm:w-16"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-current sm:h-8 sm:w-8"
        aria-hidden="true"
      >
        <path d="M19.11 17.23c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.98 2.62 1.11 2.8c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
        <path d="M16.02 3.2c-7.08 0-12.84 5.76-12.84 12.84 0 2.26.59 4.46 1.72 6.4L3.08 28.8l6.51-1.71a12.77 12.77 0 0 0 6.43 1.73h.01c7.08 0 12.84-5.76 12.84-12.84S23.1 3.2 16.02 3.2zm0 23.48h-.01a10.61 10.61 0 0 1-5.41-1.48l-.39-.23-3.86 1.01 1.03-3.76-.25-.39a10.61 10.61 0 1 1 8.89 4.85zm5.82-7.95c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1.01 1.24-.18.21-.37.24-.68.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.57-1.87-1.76-2.18-.18-.32-.02-.49.14-.65.14-.14.32-.37.47-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.7-.97-2.33-.25-.61-.51-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.37 4.75.75.32 1.33.51 1.79.65.75.24 1.43.21 1.97.13.6-.09 1.88-.77 2.15-1.51.26-.74.26-1.37.18-1.51-.08-.13-.29-.21-.61-.37z" />
      </svg>

      <span className="sr-only">Chat with Teddy on WhatsApp</span>
    </a>
  );
}