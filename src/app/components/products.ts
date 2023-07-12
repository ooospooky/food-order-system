export interface IProduct {
  id?: string;
  category?: string;
  name: string;
  src: string;
  price?: number;
}


export const products = [
  {id:'1', category:"food", name:"Pizza", src:"/food/pizza.jpg", price:199},
  {id:'2', category:"food", name:"Burger", src:"/food/burger.jpg", price:99},
  {id:'3', category:"food", name:"Taco", src:"/food/taco.jpg", price:129},
  {id:'4', category:"drink", name:"Cola", src:"/drink/cola.jpg", price:35},
  {id:'5', category:"drink", name:"Pepsi", src:"/drink/pepsi.jpg", price:29},
  {id:'6', category:"drink", name:"Sprite", src:"/drink/sprite.jpg", price:30},
  {id:'7', category:"other", name:"Doritos", src:"/other/doritos.jpg", price:35},
  {id:'8', category:"other", name:"Chocolate", src:"/other/chocolate.jpg", price:20},
  {id:'9', category:"other", name:"Cake", src:"/other/cake.jpg", price:40},
 
]

export const category: string[] = ['food', 'drink', 'other'];