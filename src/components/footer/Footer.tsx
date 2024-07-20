import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 dark:text-white p-3 border-t dark:border-t-gray-700">
      <div className="container flex flex-col gap-4 lg:flex-row items-start lg:items-center justify-between">
        <span>Copyright © {new Date().getFullYear()} Mauly dotDev | All rights reserved.</span>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
