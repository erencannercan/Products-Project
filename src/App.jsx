import { useState} from "react";
import "./App.css"

export const App = () => {
  const [products, setProducts] = useState();
  const [category, setCategories] = useState("all");


  const productList = [
    {
      id: 1,
      title: "Iphone 15",
      category: "Elektronik",
      price: 100000,
      stock: 20,
    },
    {
      id: 2,
      title: "Iphone 14",
      category: "Elektronik",
      price: 70000,
      stock: 20,
    },
    {
      id: 3,
      title: "Saat",
      category: "Aksesuar",
      price: 3450,
      stock: 4,

    },
    {
      id: 4,
      title: "Ayakkabı",
      category: "Tekstil",
      price: 4250,
      stock: 23,
    },
    {
      id: 5,
      title: "RedBull",
      category: "Gıda",
      stock: 20,
      price: 200,
    },
    {
      id: 6,
      title: "Macbook Air M2",
      category: "Elektronik",
      price: 50000,
      stock: 18,
    },
    {
      id: 7,
      title: "Krampon",
      category: "Spor",
      price: 7000,
      stock: 7,
    },
    {
      id: 8,
      title: "Çanta",
      category: "Aksesuar",
      price: 1500,
      stock: 32,
    },
    {
      id: 9,
      title: "Su",
      category: "Gıda",
      price: 23,
      stock: 20,
    },
    {
      id: 10,
      title: "Şarj Aleti",
      category: "Elektronik",
      price: 400,
      stock: 20,
    },
    {
      id: 11,
      title: "Sandalye",
      category: "Mobilya",
      price: 400,
      stock: 32,
    },
    {
      id: 12,
      title: "Masa",
      category: "Mobilya",
      price: 3000,
      stock: 5,
    },
    {
      id: 13,
      title: "Berjer",
      category: "Mobilya",
      price: 2300,
      stock: 2,
    },
    {
      id: 14,
      title: "CeraVe Köpüren Temizleyici",
      category: "Kişisel Bakım",
      price: 400,
      stock: 12,
    },
    {
      id: 15,
      title: "La Roche Posay Güneş Kremi",
      category: "Kişisel Bakım",
      price: 400,
      stock: 13,
    },
    {
      id: 16,
      title: "Islak Mendil",
      category: "Ev Gereçleri",
      price: 90,
      stock: 12,
    },
    {
      id: 17,
      title: "Çamaşır Deterjanı",
      category: "Ev Gereçleri",
      price: 260,
      stock: 21,
    },
    {
      id: 18,
      title: "Peçete",
      category: "Ev Gereçleri",
      price: 90,
      stock: 52,
    },
    {
      id: 19,
      title: "Az -Hakan Günay",
      category: "Kırtasiye",
      price: 70,
      stock: 51,
    },
    {
      id: 20,
      title: "Anayurt Oteli -Yusuf Atılgan",
      category: "Kırtasiye",
      price: 120,
      stock: 34,
    },

  ];

  const filterCategorys = productList.filter( x =>  {
    if(category === "all") return x
    return x.category === category
    }
  )
  
  let renderProducts = filterCategorys.map(x => {
    return (
    <li className="listItem" key={x.id}>
      <h4 className="title">Ürün: {x.title}</h4>
      <span className="category">Kategori: {x.category} </span>
      <span className="price">Fiyat: {x.price}$ </span>
      <span className="stock">Stok: {x.stock }</span>
      <button className="addBacket">Sepete Ekle</button>
    </li>
    )
  });
  
  const oneCategories = [];
  productList.forEach(products => {
    if(oneCategories.includes(products.category)) return
    oneCategories.push(products.category)
  })
  

  function changeCategories(e) {
    setCategories(e.target.innerText)
  }

  const renderCategory = oneCategories.map(x => {
    return <li key={x} onClick={changeCategories}>{x}</li>
  })

  return (
    <div className="container">
      <h1 className="pageTitle">Products</h1>
      
      <div style={{ display: "flex", gap: "1em"}}>
      {renderCategory}
      </div>
      <ul className="list">
        {renderProducts}
      </ul>
    </div>
  )

  
}


