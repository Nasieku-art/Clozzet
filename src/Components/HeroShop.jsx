import {Search} from "lucide-react";
import {ChevronDown} from "lucide-react"
import CollectionShop from "./Collectionshop";

function HeroShop() {
  return (
    <div className="flex justify-center items-center w-full">
    <div className="flex justify-center w-full max-w-2xl mt-4 border border-teal-400 rounded-full px-4 py-2">
    
<search><Search /></search>

      <span className="flex-1 ml-2 text-sm text-gray-400">Search Products and categories</span>

      <div className="w-px h-5 bg-gray-300 mx-3 shrink-0" />

      <div className="flex items-center gap-1 shrink-0">
        
        <span className="text-sm text-gray-600 font-medium">Filter Category</span>
       <search><ChevronDown /></search>

      </div>
</div>
    </div>
  )
  
  }
export default HeroShop;
