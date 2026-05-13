import { motion } from 'motion/react';
import { useState, useMemo } from 'react';
import Header from './components/Header';
import RecipeCard from './components/RecipeCard';
import Modal from './components/Modal';
import { RECIPES } from './data/recipes';
import { Recipe } from './types';
import { Cat, ArrowRight, Instagram, Twitter, Youtube, Clock, ChefHat } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('Tudo');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  
  const [showLogin, setShowLogin] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showCareers, setShowCareers] = useState(false);
  const [showPress, setShowPress] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState<{ [key: string]: number }>({});
  const [cartCount, setCartCount] = useState(0);

  const filteredRecipes = useMemo(() => {
    if (selectedCategory === 'Tudo') return RECIPES;
    return RECIPES.filter(r => r.category === selectedCategory);
  }, [selectedCategory]);

  const scrollToRecipes = () => document.getElementById('recipes')?.scrollIntoView({ behavior: 'smooth' });

  const handleApply = (position: string) => {
    alert(`FORMULÁRIO DE CANDIDATURA PARA: ${position.toUpperCase()}\n\nIniciando interface de envio de currículo...`);
  };

  const startDownload = (type: string) => {
    setDownloadProgress(prev => ({ ...prev, [type]: 0 }));
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        const next = (prev[type] || 0) + 10;
        if (next >= 100) {
          clearInterval(interval);
          alert(`Download do ${type} concluído com sucesso!`);
          return { ...prev, [type]: 100 };
        }
        return { ...prev, [type]: next };
      });
    }, 200);
  };

  const addToCart = () => {
    setCartCount(prev => prev + 1);
    alert('Item adicionado ao seu kit de ferramentas GastroGato!');
  };

  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-orange selection:text-brand-ink">
      <Header 
        onMenuClick={scrollToRecipes}
        onAboutClick={() => setShowAbout(true)}
        onBlogClick={() => setShowBlog(true)}
        onLoginClick={() => setShowLogin(true)}
      />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-12 pb-24 md:pt-24 md:pb-40 overflow-hidden border-b-2 border-brand-ink">
          <div className="absolute top-0 right-0 text-[18vw] font-black opacity-[0.03] -rotate-12 select-none uppercase tracking-tighter leading-none pointer-events-none">
            SAVOR
          </div>
          
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 border-2 border-brand-ink rounded-full text-brand-ink text-[10px] font-black uppercase tracking-[0.3em] mb-10 bg-brand-orange shadow-[4px_4px_0px_#2D241E]">
                <Cat size={16} strokeWidth={2.5} /> Haute Cuisine Felina
              </div>
              <h2 className="text-7xl md:text-[120px] font-black text-brand-ink leading-[0.8] mb-10 tracking-tighter uppercase font-sans">
                A Arte <br /> 
                <span className="text-brand-orange italic font-normal font-serif lowercase">do Bem</span> <br />
                Comer.
              </h2>
              <p className="text-xl md:text-2xl text-brand-ink leading-relaxed max-w-lg mb-12 italic opacity-80 border-l-4 border-brand-orange pl-6">
                "Receitas humanas elevadas pela precisão e elegância instintiva do GastroGato."
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button 
                  onClick={scrollToRecipes}
                  className="w-full sm:w-auto px-10 py-5 bg-brand-ink text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-brand-orange hover:text-brand-ink transition-all border-2 border-brand-ink shadow-[8px_8px_0px_#FFB347]"
                >
                  Explorar Menu
                </button>
                <button 
                  onClick={() => setShowAbout(true)}
                  className="w-full sm:w-auto px-10 py-5 border-2 border-brand-ink rounded-full font-black uppercase tracking-widest text-xs hover:bg-brand-ink hover:text-white transition-all"
                >
                  Sobre Nós
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative p-4 md:p-8"
            >
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border-4 border-brand-ink shadow-[24px_24px_0px_#FFB347] z-10 bg-brand-muted cursor-pointer group"
                   onClick={() => setSelectedRecipe(RECIPES[0])}
              >
                <img 
                   src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800"
                  alt="Gato Laranja Gourmet"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-brand-ink/80 via-brand-ink/40 to-transparent">
                  <span className="px-4 py-1 bg-brand-orange text-brand-ink rounded-full text-[10px] font-black uppercase tracking-widest inline-block mb-4 border border-brand-ink">Prato do Dia</span>
                  <p className="text-3xl font-black text-white uppercase tracking-tight font-serif leading-none">Tartare de Salmão Bigodes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recipes Grid */}
        <section id="recipes" className="py-24 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-brand-orange mb-4">Galeria de Sabores</h3>
                <h2 className="text-5xl md:text-7xl font-black text-brand-ink leading-tight uppercase tracking-tighter">O <span className="italic font-normal text-brand-orange">Menu</span> Sazonal</h2>
              </div>
              <div className="flex items-center gap-3 overflow-x-auto pb-4 custom-scrollbar">
                {['Tudo', 'Marítimo', 'Aves', 'Snacks', 'Doces'].map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all border-2 ${
                      selectedCategory === cat ? 'bg-brand-ink text-white border-brand-ink' : 'bg-transparent border-brand-ink/10 hover:border-brand-ink'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} onClick={setSelectedRecipe} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Login Modal */}
      <Modal isOpen={showLogin} onClose={() => setShowLogin(false)}>
        <div className="max-w-md mx-auto text-center py-10">
          <Cat size={48} className="mx-auto mb-6 text-brand-orange" />
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Bem-vindo</h2>
          <p className="text-brand-ink/60 mb-10 italic">"Faça login para salvar suas receitas favoritas."</p>
          <div className="space-y-4">
            <input type="email" placeholder="E-mail" className="w-full px-6 py-4 bg-white border-2 border-brand-ink rounded-full focus:editorial-shadow outline-none transition-all uppercase text-[10px] font-black tracking-widest" />
            <input type="password" placeholder="Senha" className="w-full px-6 py-4 bg-white border-2 border-brand-ink rounded-full focus:editorial-shadow outline-none transition-all uppercase text-[10px] font-black tracking-widest" />
            <button className="w-full py-4 bg-brand-ink text-white rounded-full font-black uppercase tracking-widest text-xs border-2 border-brand-ink shadow-[4px_4px_0px_#FFB347] mt-4">
              Entrar Agora
            </button>
          </div>
        </div>
      </Modal>

      {/* About Modal */}
      <Modal isOpen={showAbout} onClose={() => setShowAbout(false)}>
        <div className="max-w-2xl mx-auto py-10">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 italic text-brand-orange">Sobre Nós</h2>
          <div className="space-y-6 text-lg leading-relaxed text-brand-ink/80">
            <p>O <strong>GastroGato</strong> nasceu da paixão por dois mundos: a alta gastronomia e o mistério felino.</p>
            <p>Acreditamos que a cozinha é um lugar de elegância e curiosidade. Nossas receitas são desenvolvidas por chefs que observam a precisão e a seletividade dos gatos, trazendo pratos que encantam tanto o paladar quanto o olhar.</p>
            <div className="grid grid-cols-2 gap-8 py-10">
              <div className="p-8 border-2 border-brand-ink rounded-[2rem] editorial-shadow bg-brand-orange/5">
                <span className="text-4xl block mb-4">🐾</span>
                <h4 className="font-black uppercase tracking-widest text-xs mb-2">Missão</h4>
                <p className="text-sm italic opacity-70">Trazer a sofisticação felina para a mesa humana.</p>
              </div>
              <div className="p-8 border-2 border-brand-ink rounded-[2rem] editorial-shadow bg-brand-orange/5">
                <span className="text-4xl block mb-4">✨</span>
                <h4 className="font-black uppercase tracking-widest text-xs mb-2">Visão</h4>
                <p className="text-sm italic opacity-70">Ser a referência mundial em lifestyle gastronômico temático.</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Blog Modal */}
      <Modal isOpen={showBlog} onClose={() => setShowBlog(false)}>
        <div className="max-w-3xl mx-auto py-10">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-12">Miau-<span className="text-brand-orange italic font-normal lowercase">Blog</span></h2>
          <div className="space-y-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="group cursor-pointer border-b border-brand-ink/10 pb-12">
                <span className="text-[10px] font-black text-brand-orange uppercase tracking-[.3em] mb-4 block">12 Maio, 2026</span>
                <h3 className="text-3xl font-black uppercase tracking-tight group-hover:text-brand-orange transition-colors mb-4">O segredo do tempero que faz qualquer Maine Coon ronronar</h3>
                <p className="text-brand-ink/60 line-clamp-2 italic leading-relaxed mb-6">"Neste artigo exploramos as ervas permitidas e como o aroma influencia no apetite e no humor dos nossos amigos de quatro patas..."</p>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.2em] underline decoration-2 underline-offset-4">Ler artigo completo</button>
              </div>
            ))}
          </div>
        </div>
      </Modal>

      {/* Privacy Modal */}
      <Modal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)}>
        <div className="max-w-2xl mx-auto py-10">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">Política de <span className="text-brand-orange italic font-normal lowercase">Privacidade</span></h2>
          <div className="prose prose-brand text-brand-ink/80">
            <p className="mb-6">Sua privacidade é fundamental para nós. No GastroGato, tratamos seus dados com a mesma delicadeza que um gato trata seu filhote.</p>
            <h4 className="text-lg font-black uppercase mb-4">Que dados coletamos?</h4>
            <p className="mb-6">Apenas o estritamente necessário para melhorar sua experiência gastronômica e salvar suas receitas favoritas.</p>
            <p className="italic text-sm">Última atualização: Maio de 2026</p>
          </div>
        </div>
      </Modal>

      {/* Terms Modal */}
      <Modal isOpen={showTerms} onClose={() => setShowTerms(false)}>
        <div className="max-w-2xl mx-auto py-10">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">Termos de <span className="text-brand-orange italic font-normal lowercase">Uso</span></h2>
          <div className="prose prose-brand text-brand-ink/80">
            <p className="mb-6">Ao acessar o GastroGato, você concorda em respeitar nossa culinária e não compartilhar nossas receitas secretas sem os devidos créditos.</p>
            <h4 className="text-lg font-black uppercase mb-4">Uso de Conteúdo</h4>
            <p className="mb-6">Todo o conteúdo visual e textual é propriedade do GastroGato Studio. A reprodução não autorizada resultará em uma "chicotada" digital.</p>
          </div>
        </div>
      </Modal>

      {/* Careers Modal */}
      <Modal isOpen={showCareers} onClose={() => setShowCareers(false)}>
        <div className="max-w-2xl mx-auto py-10">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Trabalhe <span className="text-brand-orange italic font-normal lowercase">conosco</span></h2>
          <p className="text-brand-ink/60 italic mb-10">Faça parte da nossa brigada de elite.</p>
          <div className="space-y-8">
            {[
              { title: 'Chef de Partida', desc: 'Experiência em cozinha contemporânea e empratamento.' },
              { title: 'Sommelier de Bebidas', desc: 'Especialista em bebidas cremosas e texturas aveludadas.' }
            ].map((job, i) => (
              <div key={i} className="p-8 border-2 border-brand-ink rounded-[2rem] hover:editorial-shadow transition-all group bg-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h4 className="text-xl font-black uppercase mb-1 group-hover:text-brand-orange transition-colors">{job.title}</h4>
                    <p className="text-sm italic opacity-60">{job.desc}</p>
                  </div>
                  <button 
                    onClick={() => handleApply(job.title)}
                    className="text-[10px] font-black uppercase tracking-widest bg-brand-ink text-white px-8 py-3 rounded-full hover:bg-brand-orange hover:text-brand-ink transition-all shadow-[4px_4px_0px_#FFB347]"
                  >
                    Enviar Currículo
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-10 bg-brand-orange/10 rounded-[2.5rem] border-2 border-dashed border-brand-ink/20 text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] mb-4">Inscrição Rápida</p>
            <div className="flex gap-4">
              <input type="text" placeholder="SEU MELHOR E-MAIL" className="flex-1 px-6 py-4 rounded-full border-2 border-brand-ink outline-none text-[10px] font-black tracking-widest" />
              <button className="px-10 py-4 bg-brand-ink text-white rounded-full font-black text-[10px] uppercase tracking-widest">OK</button>
            </div>
          </div>
        </div>
      </Modal>

      {/* Press Modal */}
      <Modal isOpen={showPress} onClose={() => setShowPress(false)}>
        <div className="max-w-2xl mx-auto py-10 text-center md:text-left">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Sala de <span className="text-brand-orange italic font-normal lowercase">Imprensa</span></h2>
          <p className="text-xl italic text-brand-ink/60 mb-12 leading-relaxed">"O GastroGato redefine o conceito de lifestyle gourmet" — Daily Meow</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['Media Kit', 'Banco de Imagens'].map((type) => (
              <div key={type} className="relative group">
                <button 
                  onClick={() => startDownload(type)}
                  disabled={downloadProgress[type] !== undefined && downloadProgress[type] < 100}
                  className="w-full p-8 border-2 border-brand-ink rounded-[2rem] flex flex-col items-center gap-6 group hover:bg-brand-ink hover:text-white transition-all disabled:opacity-50"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-orange/20 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                     <ArrowRight size={24} className="rotate-90" />
                  </div>
                  <span className="font-black uppercase tracking-widest text-xs">{type}</span>
                </button>
                {downloadProgress[type] !== undefined && downloadProgress[type] < 100 && (
                  <div className="absolute inset-0 bg-brand-cream/80 rounded-[2.5rem] flex flex-col items-center justify-center p-8 z-10">
                    <div className="w-full h-2 bg-brand-ink/10 rounded-full overflow-hidden mb-4">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${downloadProgress[type]}%` }}
                        className="h-full bg-brand-orange" 
                      />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest animate-pulse">Baixando... {downloadProgress[type]}%</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Modal>

      {/* Contacts Modal */}
      <Modal isOpen={showContacts} onClose={() => setShowContacts(false)}>
        <div className="max-w-md mx-auto py-10 text-center">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">Contato</h2>
          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-brand-orange mb-1">E-mail</p>
              <p className="text-xl font-medium">ola@gastrogato.com</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-brand-orange mb-1">Telefone</p>
              <p className="text-xl font-medium">+55 (41) 9999-9999</p>
            </div>
            <div className="pt-8">
              <button className="w-full py-4 border-2 border-brand-ink bg-brand-ink text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-brand-orange hover:text-brand-ink transition-all">Enviar Mensagem</button>
            </div>
          </div>
        </div>
      </Modal>

      {/* Shop Modal */}
      <Modal isOpen={showShop} onClose={() => setShowShop(false)}>
        <div className="max-w-4xl mx-auto py-10">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-12">Gato <span className="text-brand-orange italic font-normal lowercase">Shop</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Colher Medidora Gato', price: 'R$ 89', img: 'https://images.unsplash.com/photo-1591261730799-ee4e6c2d16d7?auto=format&fit=crop&q=80&w=400' },
              { name: 'Espátula de Silicat', price: 'R$ 65', img: 'https://images.unsplash.com/photo-1591544415303-3ca6b7725941?auto=format&fit=crop&q=80&w=400' },
              { name: 'Avental Bigodes', price: 'R$ 145', img: 'https://images.unsplash.com/photo-1583947411586-302a632e8d8d?auto=format&fit=crop&q=80&w=400' }
            ].map((p, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] border-2 border-brand-ink rounded-[2rem] overflow-hidden mb-4 group-hover:editorial-shadow transition-all relative">
                   <img src={p.img} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                   <div className="absolute inset-0 bg-brand-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                     <button 
                       onClick={(e) => { e.stopPropagation(); addToCart(); }}
                       className="px-8 py-3 bg-brand-orange text-brand-ink rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-brand-ink"
                     >
                       Adicionar ao Kit
                     </button>
                   </div>
                </div>
                <h4 className="font-black uppercase tracking-tight text-lg mb-1">{p.name}</h4>
                <p className="text-brand-orange font-black text-sm">{p.price}</p>
              </div>
            ))}
          </div>
          {cartCount > 0 && (
            <div className="mt-16 p-8 border-2 border-brand-ink rounded-full bg-brand-orange text-center shadow-[8px_8px_0px_#2D241E]">
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Carrinho: {cartCount} itens selecionados</span>
            </div>
          )}
        </div>
      </Modal>

      {/* Recipe Modal */}
      <Modal isOpen={!!selectedRecipe} onClose={() => setSelectedRecipe(null)}>
        {selectedRecipe && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border-2 border-brand-ink mb-8 editorial-shadow">
                <img src={selectedRecipe.image} alt={selectedRecipe.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em]">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-brand-orange" />
                  <span>{selectedRecipe.prepTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChefHat size={16} className="text-brand-orange" />
                  <span>{selectedRecipe.difficulty}</span>
                </div>
              </div>
            </div>
            <div>
              <span className="text-brand-orange text-xs font-black uppercase tracking-[0.3em] mb-4 block">{selectedRecipe.category}</span>
              <h2 className="text-5xl font-black text-brand-ink uppercase tracking-tighter leading-none mb-8">{selectedRecipe.title}</h2>
              <p className="text-xl italic text-brand-ink/70 mb-12 leading-relaxed">"{selectedRecipe.description}"</p>
              
              <div className="space-y-12">
                <div className="border-t-2 border-brand-ink/10 pt-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6">Ingredientes</h4>
                  <ul className="space-y-4">
                    {selectedRecipe.ingredients.map((ing, i) => (
                      <li key={i} className="flex items-center gap-4 text-brand-ink/80 font-medium">
                        <div className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t-2 border-brand-ink/10 pt-10">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-brand-ink/40">Modo de Preparo</h4>
                  <div className="space-y-0 relative">
                    <div className="absolute left-6 top-8 bottom-8 w-1 bg-brand-ink/5" />
                    {selectedRecipe.steps.map((step, i) => (
                      <div key={i} className="flex gap-10 pb-12 last:pb-0 relative group">
                        <div className="w-12 h-12 rounded-full border-2 border-brand-ink bg-brand-cream flex items-center justify-center z-10 shrink-0 group-hover:bg-brand-orange group-hover:editorial-shadow transition-all">
                          <span className="text-xs font-black">{i+1}</span>
                        </div>
                        <div className="flex-1 pt-2">
                          <p className="text-brand-ink/80 leading-relaxed font-medium">
                            <span className="font-black text-brand-orange group-hover:text-brand-ink transition-colors block mb-1">Passo {i+1}</span>
                            {step}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedRecipe.tips.length > 0 && (
                  <div className="bg-brand-orange/5 rounded-[2rem] p-8 border-2 border-brand-orange/20">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-brand-orange">Dicas do Chef</h4>
                    <ul className="space-y-3">
                      {selectedRecipe.tips.map((tip, i) => (
                        <li key={i} className="text-sm font-bold text-brand-ink/70 italic italic">- {tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Footer */}
      <footer className="bg-brand-cream border-t-2 border-brand-ink py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-brand-ink border-2 border-brand-ink shadow-[2px_2px_0px_#2D241E]">
                <Cat size={20} strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl font-black tracking-tighter text-brand-ink uppercase font-sans">
                Gastro<span className="text-brand-orange">Gato</span>
              </h2>
            </div>
            <p className="text-brand-ink/50 text-xl italic max-w-sm mb-10 leading-relaxed">
              Elevando a culinária felina a um nível de sofisticação nunca antes ronronado.
            </p>
            <div className="flex gap-5">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 border-2 border-brand-ink rounded-full flex items-center justify-center text-brand-ink hover:bg-brand-orange hover:editorial-shadow transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-ink mb-10">Explorar</h4>
            <ul className="space-y-6 text-[11px] font-bold uppercase tracking-widest text-brand-ink/40">
              <li><button onClick={() => { setSelectedCategory('Tudo'); scrollToRecipes(); }} className="hover:text-brand-orange transition-colors">Receitas</button></li>
              <li><button onClick={() => setShowShop(true)} className="hover:text-brand-orange transition-colors">Gato Shop</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-ink mb-10">Escritório</h4>
            <ul className="space-y-6 text-[11px] font-bold uppercase tracking-widest text-brand-ink/40">
              <li><button onClick={() => setShowPress(true)} className="hover:text-brand-orange transition-colors">Imprensa</button></li>
              <li><button onClick={() => setShowCareers(true)} className="hover:text-brand-orange transition-colors">Carreiras</button></li>
              <li><button onClick={() => setShowContacts(true)} className="hover:text-brand-orange transition-colors">Contato</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-24 pt-10 border-t border-brand-ink/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-ink/30">
            © 2026 GASTROGATO. TODOS OS DIREITOS RESERVADOS.
          </div>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-brand-ink/30">
            <button onClick={() => setShowPrivacy(true)} className="hover:text-brand-ink">PRIVACIDADE</button>
            <button onClick={() => setShowTerms(true)} className="hover:text-brand-ink">TERMOS</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
