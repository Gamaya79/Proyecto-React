const products = [
      {
        precio: '$ 1200', 
        nombre: "Mate Artesanal",
        categoria: "Los Chicos del Barrio",
        imagen: "../assets/Imagen1.jpg",
        id: 0,
      },
      {
        precio: '$ 1200', 
        nombre: "Mate Artesanal",
        categoria: "Guitarra Criolla",
        imagen: "../assets/Imagen2.jpg",
        id: 1,
      },
      {
        precio: '$ 1200',
        nombre: "Mate Artesanal",
        categoria: "Mike Wazowski",
        imagen: "../assets/Imagen3.jpg",
        id: 2,
      },
      {
        precio: '$ 1200',
        nombre: "Mate Artesanal",
        categoria: "Bob Esponja",
        imagen: "../assets/Imagen4.jpg",
        id: 3,
      },
      {
        precio: '$ 1200',
        nombre: "Mate Artesanal",
        categoria: "Garfield",
        imagen: "../assets/Imagen5.jpg",
        id: 4,
      },
      {
        precio: '$ 1200',
        nombre: "Mate Artesanal",
        categoria: "Joaquín Sabina",
        imagen: "../assets/Imagen6.jpg",
        id: 5,
      },
      {
        precio: '$ 1200',
        nombre: "Mate Artesanal",
        categoria: "El Rey León",
        imagen: "../assets/Imagen7.jpg",
        id: 6,
      },
      {
        precio: '$ 1200',
        nombre: "Mate Artesanal",
        categoria: "Lilo & Stitch",
        imagen: "../assets/Imagen8.jpg",
        id: 7,
      },
    ];

export const getProducts = () =>
      new Promise ((res, rej) => {
            setTimeout(() => {
                  res(products);
            },2000);
      });