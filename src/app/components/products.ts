export interface IProduct {
  id?: string;
  category?: string;
  name: string;
  src: string;
}


export const products = [
  {id:'1', category:"food", name:"Pizza", src:"/food/pizza.jpg"},
  {id:'2', category:"food", name:"Burger", src:"/food/burger.jpg"},
  {id:'3', category:"food", name:"Taco", src:"/food/taco.jpg"},
  {id:'4', category:"drink", name:"Cola", src:"/drink/cola.jpg"},
  {id:'5', category:"drink", name:"Pepsi", src:"/drink/pepsi.jpg"},
  {id:'6', category:"drink", name:"Sprite", src:"/drink/sprite.jpg"},
  {id:'7', category:"other", name:"Doritos", src:"/other/doritos.jpg"},
  {id:'8', category:"other", name:"Chocolate", src:"/other/chocolate.jpg"},
  {id:'9', category:"other", name:"Cake", src:"/other/cake.jpg"},
 
]

export const category: string[] = ['food', 'drink', 'other'];