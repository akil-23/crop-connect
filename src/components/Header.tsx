
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plant, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center gap-2">
          <Plant className="h-8 w-8 text-crop-green-600" />
          <span className="font-heading font-bold text-xl md:text-2xl text-crop-green-800">Crop Connect</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-crop-green-600 transition-colors font-medium">Home</Link>
          <Link to="/disease-detection" className="text-gray-700 hover:text-crop-green-600 transition-colors font-medium">Disease Detection</Link>
          <Link to="/recommendations" className="text-gray-700 hover:text-crop-green-600 transition-colors font-medium">Recommendations</Link>
          <Link to="/progress" className="text-gray-700 hover:text-crop-green-600 transition-colors font-medium">Progress</Link>
        </nav>

        {/* Right side items */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="icon" className="text-gray-600">
            <Search className="h-5 w-5" />
          </Button>
          <Button className="bg-crop-green-600 hover:bg-crop-green-700">Sign In</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            <Link to="/" className="py-3 border-b border-gray-100 text-gray-700" onClick={toggleMenu}>Home</Link>
            <Link to="/disease-detection" className="py-3 border-b border-gray-100 text-gray-700" onClick={toggleMenu}>Disease Detection</Link>
            <Link to="/recommendations" className="py-3 border-b border-gray-100 text-gray-700" onClick={toggleMenu}>Recommendations</Link>
            <Link to="/progress" className="py-3 border-b border-gray-100 text-gray-700" onClick={toggleMenu}>Progress</Link>
            <div className="flex justify-between items-center py-3">
              <Button variant="outline" size="icon" className="text-gray-600">
                <Search className="h-5 w-5" />
              </Button>
              <Button className="bg-crop-green-600 hover:bg-crop-green-700">Sign In</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
