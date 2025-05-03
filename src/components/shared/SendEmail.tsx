const SendEmailButton = ({ emails }: { emails: string }) => {
  const handleClick = () => {
    const email = emails;
    const subject = "Inquiry About Property";
    const body = "Hello,.";
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-primary w-full px-4 py-2 rounded-md text-white"
    >
      Send Email
    </button>
  );
};

export default SendEmailButton;
