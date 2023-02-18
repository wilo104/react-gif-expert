import { useState } from "react";
import { AddCategory,GifGrid  } from "./components";
export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);
    const onAddCategory = (newcategory)=>{
       //console.log(newcategory);
        if(categories.includes(newcategory)) return
       setcategories([newcategory,...categories ])
       // categories.push('Valorant');
          
    }
 
  return (
    <> 
    {/* titulo */}
      <h1> GifExpertApp</h1>
        <AddCategory 
          onNewCategory={onAddCategory}
        />

        {/* Liistado de Gif */}
            {categories.map(category =>
               (
                   
                       <GifGrid 
                       key={category}
                       category={category}
                       />
                )
                   
            )}
            {/* <li>ABC</li> */}



        {/* Gif Item */}

    </>
   
  )
}
