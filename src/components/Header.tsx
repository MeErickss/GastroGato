import { useState } from 'react';
import { Cat, Menu, User, X } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  onShopClick: () => void;
  onAboutClick: () => void;
  onBlogClick: () => void;
  onLoginClick: () => void;
}

export default function Header({ onMenuClick, onShopClick, onAboutClick, onBlogClick, onLoginClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const runMobileAction = (action: () => void) => {
    setIsMobileMenuOpen(false);
    action();
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b-2 border-brand-ink px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => runMobileAction(() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
        >
          <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-brand-ink border-2 border-brand-ink shadow-[2px_2px_0px_#2D241E]">
            <Cat size={20} strokeWidth={2.5} />
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-brand-ink uppercase">
            Gastro<span className="text-brand-orange">Gato</span>
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {['Menu', 'Blog', 'Sobre'].map((item) => (
            <button
              key={item}
              onClick={item === 'Menu' ? onMenuClick : item === 'Blog' ? onBlogClick : onAboutClick}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-ink/60 hover:text-brand-orange transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={onLoginClick}
            className="p-3 border-2 border-brand-ink rounded-full hover:bg-brand-orange transition-all shadow-[4px_4px_0px_#2D241E] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            aria-label="Abrir login"
          >
            <User size={18} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="md:hidden p-3 border-2 border-brand-ink rounded-full hover:bg-brand-orange transition-all"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden max-w-7xl mx-auto mt-4 border-2 border-brand-ink rounded-[1.5rem] bg-brand-cream shadow-[8px_8px_0px_#2D241E] overflow-hidden">
          {[
            { label: 'Menu', action: onMenuClick },
            { label: 'Gato Shop', action: onShopClick },
            { label: 'Blog', action: onBlogClick },
            { label: 'Sobre', action: onAboutClick },
            { label: 'Login', action: onLoginClick },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => runMobileAction(item.action)}
              className="w-full px-6 py-5 text-left text-[11px] font-black uppercase tracking-[0.25em] text-brand-ink border-b-2 border-brand-ink last:border-b-0 hover:bg-brand-orange transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
