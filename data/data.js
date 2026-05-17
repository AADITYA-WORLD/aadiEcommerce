let products = [
  
  { 
    id: 1,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    name: "Bag",
    price:{
      current_price: 10.00,
      original_price: 20.00,
    },
    category:"books",
    reviews: {
      rating: 4.6,
      count: 1100
    }
  },

  {
    id: 2,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    name: "Shoes",
    category:"clothing",
    price:{
      current_price: 15.00,
      original_price: 25.00,
    },
    reviews: {
      rating: 4.8,
      count: 1200
    }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    name: "Bicycle",
    category:"vehicles",
    price:{
      current_price: 20.00,
      original_price: 30.00,
    },
    reviews: {
      rating: 4.4,
      count: 900
    }
  },
  {
    id: 4,    
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    name: "Bag",
    category:"books",
    price:{
      current_price: 25.00,
      original_price: 35.00,
    },
    reviews: {
      rating: 4.5,
      count: 2000
    }
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    name: "Car",
    category:"vehicles",
    price:{
      current_price: 30.00,
      original_price: 40.00,
    },
    reviews: {
      rating: 4.1,
      count: 100
    }
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    name: "Lipstick",
    category:"makeup",
    price:{
      current_price: 35.00,
      original_price: 45.00,
    },
    reviews: {
      rating: 4.3,
      count: 580
    }
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    name: "Camera",
    category:"electronics",
    price:{
      current_price: 40.00,
      original_price: 50.00,
    },
    reviews: {
      rating: 4.8,
      count: 1500
    }
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    name: "Headphones",
    category:"electronics",
    price:{
      current_price: 45.00,
      original_price: 55.00,
    },
    reviews: {
      rating: 4.6,
      count: 250
    }
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    name: "Shoes",
    category:"clothing",
    price:{
      current_price: 50.00,
      original_price: 60.00,
    },
    reviews: {
      rating: 4.2,
      count: 53
    }
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    name: "Perfume",
    category:"makeup",
    price:{
      current_price: 55.00,
      original_price: 65.00,
    },
    reviews: {
      rating: 4.2,
      count: 123
    }
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Bottle",
    category:"home",
    price:{
      current_price: 60.00,
      original_price: 70.00,
    },
    reviews: {
      rating: 4.5,
      count: 400
    }
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Sun Glasses",
    category:"clothing",
    price:{
      current_price: 65.00,
      original_price: 75.00,
    },
    reviews: {
      rating: 4.9,
      count: 1000
    }
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Shoes",
    category:"clothing",
    price:{
      current_price: 70.00,
      original_price: 80.00,
    },
    reviews: {
      rating: 4.7,
      count: 500
    }
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Headphones",
    category:"electronics",
    price:{
      current_price: 75.00,
      original_price: 85.00,
    },
    reviews: {
      rating: 4.5,
      count: 200
    }
  }
  
]