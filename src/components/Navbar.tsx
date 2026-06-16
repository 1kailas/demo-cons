import { useState } from 'react';
import { Menu, X, User, LogOut, Settings, ClipboardList, Shield, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

export default function Navbar({ currentSection, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const menuItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  // Extracted user details from the Wix session metadata
  const user = {
    name: 'Kailasnath T',
    email: '00kailas000@gmail.com',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocIj6bSHOfApHJUfCbrEAb1hOFJzdJx3A49UDZJ7Bou3YqYS7wE=s96-c',
    initials: 'KT'
  };

  const handleNavClick = (item: string) => {
    onNavigate(item.toLowerCase());
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-slate-900 bg-[#080808]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand & Logo */}
        <div 
          onClick={() => onNavigate('home')} 
          className="flex cursor-pointer items-center space-x-3 group"
          id="nav-logo"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded bg-[#FF3E00] opacity-30 group-hover:opacity-50 transition-opacity blur-sm"></div>
            {/* Real Logo source fallbacks beautifully */}
            <div className="relative flex h-10 w-24 items-center justify-center rounded bg-[#080808] border border-slate-800 p-1">
              <span className="font-display font-black text-[#FF3E00] text-sm tracking-widest text-center leading-none italic">
                RAINBOW
                <span className="block text-[8px] text-white tracking-[0.2em] font-sans font-bold">HIFABS</span>
              </span>
            </div>
          </div>
          <div className="hidden sm:block">
            <span className="block font-display text-base font-black uppercase text-white tracking-tight group-hover:text-[#FF3E00] transition-colors leading-none italic">
              Rainbow Hifabs
            </span>
            <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider font-medium">Quality Construction & Fabricators</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => {
            const isActive = currentSection === item.toLowerCase();
            return (
              <button
                key={item}
                id={`nav-${item.toLowerCase()}`}
                onClick={() => handleNavClick(item)}
                className={`relative px-4 py-2 text-xs uppercase tracking-[0.2em] font-bold transition-all ${
                  isActive ? 'text-[#FF3E00] font-black italic' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-2 right-2 h-1 bg-[#FF3E00]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* User Session Bar */}
        <div className="flex items-center space-x-4">
          {!isLoggedOut ? (
            <div className="relative" id="user-menu-container">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center space-x-2 rounded-lg border-2 border-slate-900 bg-slate-950 p-1 pr-3 hover:bg-slate-900 transition-all text-left"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback if avatar fails loading
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                  className="h-7 w-7 rounded-sm bg-[#FF3E00] border-2 border-[#FF3E00] object-cover"
                />
                <span className="hidden leading-tight lg:block">
                  <span className="block text-xs font-black text-white">{user.name}</span>
                  <span className="block text-[8px] text-[#FF3E00] uppercase font-mono tracking-wider font-bold">Verified Account</span>
                </span>
                <ChevronDown className="h-3 w-3 text-slate-400 group-hover:text-white" />
              </button>

              {/* User Dropdown Portal */}
              <AnimatePresence>
                {userDropdownOpen && (
                  <>
                    {/* Dark backdrop element */}
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setUserDropdownOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-64 origin-top-right rounded border-2 border-slate-900 bg-[#080808] p-2 shadow-2xl z-20"
                    >
                      <div className="border-b-2 border-slate-900 p-3">
                        <p className="font-display font-black uppercase italic text-white text-sm">{user.name}</p>
                        <p className="text-xs text-slate-400 break-all font-mono">{user.email}</p>
                        <span className="mt-2 inline-flex items-center rounded bg-slate-950 border border-[#FF3E00]/30 px-2 py-0.5 text-[9px] font-bold text-[#FF3E00] uppercase tracking-wider font-mono">
                          <Shield className="mr-1 h-2.5 w-2.5" />
                          Authenticated User
                        </span>
                      </div>
                      <div className="py-1">
                        <button
                          onClick={() => {
                            setUserDropdownOpen(false);
                            alert('Opening simulated Account Settings panel for ' + user.name);
                          }}
                          className="flex w-full items-center px-3 py-2 text-xs uppercase tracking-wider font-bold text-slate-300 hover:bg-slate-900 hover:text-white transition-colors"
                        >
                          <Settings className="mr-2 h-4.5 w-4.5 text-[#FF3E00]" />
                          Account Settings
                        </button>
                        <button
                          onClick={() => {
                            setUserDropdownOpen(false);
                            alert('Opening simulated past Orders panel for custom Aluminum Windows orders');
                          }}
                          className="flex w-full items-center px-3 py-2 text-xs uppercase tracking-wider font-bold text-slate-300 hover:bg-slate-900 hover:text-white transition-colors"
                        >
                          <ClipboardList className="mr-2 h-4.5 w-4.5 text-[#FF3E00]" />
                          My Orders
                        </button>
                      </div>
                      <div className="border-t-2 border-slate-900 pt-1 mt-1">
                        <button
                          onClick={() => {
                            setIsLoggedOut(true);
                            setUserDropdownOpen(false);
                          }}
                          className="flex w-full items-center px-3 py-2 text-xs uppercase tracking-wider font-bold text-red-500 hover:bg-red-500/10 hover:text-red-400 transition-colors"
                        >
                          <LogOut className="mr-2 h-4.5 w-4.5" />
                          Log Out
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <button
              onClick={() => setIsLoggedOut(false)}
              className="inline-flex items-center space-x-1.5 rounded bg-[#FF3E00] px-4 py-2 text-xs font-black uppercase text-white hover:bg-[#e03200] transition-all font-display tracking-wider cursor-pointer"
            >
              <User className="h-3.5 w-3.5" />
              <span>Sign In</span>
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded border-2 border-slate-900 bg-slate-950 p-2 text-slate-300 hover:bg-slate-900 hover:text-white md:hidden"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t-2 border-slate-900 bg-[#080808] md:hidden overflow-hidden"
          >
            <div className="space-y-1 px-4 py-3">
              {menuItems.map((item) => {
                const isActive = currentSection === item.toLowerCase();
                return (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`block w-full px-3 py-2.5 text-left text-xs uppercase tracking-[0.2em] font-black transition-all ${
                      isActive 
                        ? 'bg-slate-900 text-[#FF3E00] border-l-4 border-[#FF3E00] italic' 
                        : 'text-slate-350 hover:bg-slate-900/50 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
