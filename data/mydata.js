const data = {
    categories: [
      { id: 1, name: "Vitamini" },
      { id: 2, name: "Prehlada" },
      { id: 3, name: "Imunitet" },
      { id: 4, name: "Srce" },
      { id: 5, name: "Probava" },
      { id: 6, name: "Alergije" },
      { id: 7, name: "Njega lica" },
      { id: 8, name: "Njega tijela" },
      { id: 9, name: "Detoks" },
      { id: 10, name: "Dodatci prehrani" }
    ],
    products: [
      { id: 1, name: "Vitamin A", categoryId: 1, image: "/images/p1.jpg" },
      { id: 2, name: "Vitamin B12", categoryId: 1, image: "/images/p1.jpg" },
      { id: 3, name: "Vitamin C", categoryId: 1, image: "/images/p1.jpg" },
      { id: 4, name: "Cink", categoryId: 1, image: "/images/p1.jpg" },
      { id: 5, name: "Magnezij", categoryId: 1, image: "/images/p1.jpg" },
      { id: 6, name: "Propolis", categoryId: 2, image: "/images/p2.jpg" },
      { id: 7, name: "Sprej za grlo", categoryId: 2, image: "/images/p2.jpg" },
      { id: 8, name: "Sprej za nos", categoryId: 2, image: "/images/p2.jpg" },
      { id: 9, name: "Sirup", categoryId: 2, image: "/images/p1.jpg" },
      { id: 10, name: "Tablete za bolove", categoryId: 2, image: "/images/p1.jpg" },
      { id: 11, name: "Beta glukan", categoryId: 3, image: "/images/p1.jpg" },
      { id: 12, name: "Immuno kompleks", categoryId: 3, image: "/images/p1.jpg" },
      { id: 13, name: "Imunoglukan", categoryId: 3, image: "/images/p1.jpg" },
      { id: 14, name: "L-lizin", categoryId: 3, image: "/images/p1.jpg"},
      { id: 15, name: "Lekolid", categoryId: 3, image: "/images/p1.jpg" },
      { id: 16, name: "Cardiomix kapsule", categoryId: 4, image: "/images/p1.jpg" },
      { id: 17, name: "Ulje jetre bakalara", categoryId: 4, image: "/images/p2.jpg" },
      { id: 18, name: "Glogove kapi", categoryId: 4, image: "/images/p2.jpg" },
      { id: 19, name: "Omega 3 kapsule", categoryId: 4, image: "/images/p1.jpg" },
      { id: 20, name: "Riblje ulje", categoryId: 4, image: "/images/p2.jpg" },
      { id: 21, name: "Probifast kapsule", categoryId: 5, image: "/images/p1.jpg" },
      { id: 22, name: "Bulardi", categoryId: 5, image: "/images/p1.jpg" },
      { id: 23, name: "Flobian kapsule", categoryId: 5, image: "/images/p1.jpg" },
      { id: 24, name: "Enterobiotik", categoryId: 5, image: "/images/p1.jpg" },
      { id: 25, name: "Enterobiotik forte", categoryId: 5, image: "/images/p1.jpg" },
      { id: 26, name: "Ulje crnog kima", categoryId: 6, image: "/images/p2.jpg" },
      { id: 27, name: "Crni kim kapsule", categoryId: 6, image: "/images/p1.jpg" },
      { id: 28, name: "Quercetin kompleks", categoryId: 6, image: "/images/p1.jpg" },
      { id: 29, name: "Astaksatin", categoryId: 6, image: "/images/p1.jpg" },
      { id: 30, name: "Allergy sprej", categoryId: 6, image: "/images/p2.jpg" },
      { id: 31, name: "Gel za pranje", categoryId: 7, image: "/images/p2.jpg" },
      { id: 32, name: "Ulje za pranje", categoryId: 7, image: "/images/p2.jpg" },
      { id: 33, name: "Maska za lice", categoryId: 7, image: "/images/p2.jpg" },
      { id: 34, name: "Hidratani serum za lice", categoryId: 7, image: "/images/p2.jpg" },
      { id: 35, name: "SPF50+ za lice", categoryId: 7, image: "/images/p2.jpg" },
      { id: 36, name: "Sindet sapun", categoryId: 8, image: "/images/p2.jpg" },
      { id: 37, name: "Serum za tijelo", categoryId: 8, image: "/images/p2.jpg" },
      { id: 38, name: "Šampon", categoryId: 8, image:"/images/p2.jpg" },
      { id: 39, name: "Mast za obnovu kože", categoryId: 8, image: "/images/p2.jpg" },
      { id: 40, name: "Hidratantni losion", categoryId: 8, image: "/images/p2.jpg" },
      { id: 41, name: "Sikavica kapsule", categoryId: 9, image: "/images/p1.jpg" },
      { id: 42, name: "Tinktura maslačka", categoryId: 9, image: "/images/p2.jpg" },
      { id: 43, name: "Matični sok aronija", categoryId: 9, image: "/images/p2.jpg" },
      { id: 44, name: "Detoksacija kapsule", categoryId: 9, image: "/images/p1.jpg" },
      { id: 45, name: "Detoksacija čaj", categoryId: 9, image: "/images/p1.jpg" },
      { id: 46, name: "Kurkuma kapsule", categoryId: 10, image: "/images/p1.jpg" },
      { id: 47, name: "Ginko biloba", categoryId: 10, image: "/images/p1.jpg" },
      { id: 48, name: "Kolagen shot", categoryId: 10, image: "/images/p1.jpg" },
      { id: 49, name: "Magnezij citrat", categoryId: 10, image: "/images/p1.jpg" },
      { id: 50, name: "Beta karoten", categoryId: 10, image: "/images/p1.jpg" }
    ]
  };
  
  function getCategories() {
    return data.categories;
  }
  
  function getAllProducts() {
    return data.products;
  }
  
  function getProductsByCategory(categoryId) {
    return data.products.filter(product => product.categoryId === categoryId);
  }

  
  
  module.exports = {
    getCategories,
    getAllProducts,
    getProductsByCategory
  };
  
  