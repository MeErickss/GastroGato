import { Recipe } from '../types';
import { Clock, ChefHat, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
}

export default function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
      onClick={() => onClick(recipe)}
    >
      <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-2 border-brand-ink mb-6 editorial-shadow transition-all group-hover:shadow-[12px_12px_0px_#FFB347]">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute top-6 right-6 w-12 h-12 bg-white border-2 border-brand-ink rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight size={20} />
        </div>
      </div>
      
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-2 block">{recipe.category}</span>
      <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 leading-tight group-hover:text-brand-orange transition-colors">{recipe.title}</h3>
      
      <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-brand-ink/40">
        <div className="flex items-center gap-2"><Clock size={14} /> {recipe.prepTime}</div>
        <div className="flex items-center gap-2"><ChefHat size={14} /> {recipe.difficulty}</div>
      </div>
    </motion.div>
  );
}