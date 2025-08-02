const Footer = () => {
  return (
    <footer className="bg-charcoal-blue text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-light-blue-grey">Facebook</a>
          <a href="#" className="hover:text-light-blue-grey">Twitter</a>
          <a href="#" className="hover:text-light-blue-grey">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
