"use client";

export default function WhatsAppButton() {
    const phone = "27837932095";

    const url = `https://wa.me/${phone}`;

    return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        >
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-5 w-5 fill-white"
            >
                <path d="M16 2.9C8.8 2.9 3 8.7 3 15.9c0 2.5.7 4.8 2 6.8L3 29l6.5-1.9c1.9 1.1 4 1.7 6.2 1.7 7.2 0 13-5.8 13-13S23.2 2.9 16 2.9zm0 23.7c-2 0-4-.6-5.6-1.6l-.4-.2-3.9 1.1 1.1-3.8-.3-.4c-1.1-1.7-1.7-3.6-1.7-5.6 0-5.9 4.8-10.7 10.7-10.7S26.7 10 26.7 15.9 21.9 26.6 16 26.6zm5.9-7.9c-.3-.2-1.8-.9-2-1s-.4-.2-.6.2-.7 1-1 1.2-.5.2-.8.1c-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.6-1.5-.8-2.1-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.4s1.1 2.7 1.3 2.9c.2.2 2.2 3.4 5.4 4.8.8.4 1.5.6 2 .7.8.3 1.5.3 2 .2.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
            </svg>

            <span className="hidden sm:inline text-sm font-semibold">
                WhatsApp
            </span>
        </a>
    );
}