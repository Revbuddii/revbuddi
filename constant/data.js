import { Icon } from "../constant/icons";
export const reviews = [
    {
      id: "rev_1",
      user: {
        id: "usr_1",
        name: "Makinde Olaitan",
        profilePicture: Icon.user,
        isVerified: true
      },
      review: {
        id: "rvw_1",
        productName: "Samsung S25 Ultra",
        rating: 5,
        content: `I've upgraded from the S24 Ultra to the S25 Ultra and it's a massive leap! The new 200MP primary camera delivers insane detail and low-light performance. Powered by a faster 5nm processor, it handles demanding tasks with ease. The 6.8-inch Dynamic AMOLED display is stunning, with brighter colors and a smoother 120Hz refresh rate. Battery life has also seen a significant boost, easily lasting over a day and a half. A must-have upgrade if you're due for one!`,
        createdAt: new Date().toISOString()
      },
      product: {
        id: "prod_1",
        name: "Samsung",
        icons: [Icon.andriod, Icon.andriodNew],
        category: "Smartphones"
      },
      engagement: {
        likes: 200,
        dislikes: 400,
        comments: 50
      }
    },
    {
      id: "rev_2",
      user: {
        id: "usr_2",
        name: "Okeowo Abiodun",
        profilePicture: Icon.user,
        isVerified: true
      },
      review: {
        id: "rvw_2",
        productName: "Samsung S25 Ultra",
        rating: 5,
        content: `I've upgraded from the S24 Ultra to the S25 Ultra and it's a massive leap! The new 200MP primary camera delivers insane detail and low-light performance. Powered by a faster 5nm processor, it handles demanding tasks with ease. The 6.8-inch Dynamic AMOLED display is stunning, with brighter colors and a smoother 120Hz refresh rate. Battery life has also seen a significant boost, easily lasting over a day and a half. A must-have upgrade if you're due for one!`,
        createdAt: new Date().toISOString()
      },
      product: {
        id: "prod_1",
        name: "Samsung",
        icons: [Icon.andriod, Icon.andriodNew],
        category: "Smartphones"
      },
      engagement: {
        likes: 0,
        dislikes: 0,
        comments: 0
      }
    }
  ];


  export const reviewHelpers = {

    getReviewsByProduct: (productId) => {
      return reviews.filter(review => review.product.id === productId);
    },
  

    getReviewsByUser: (userId) => {
      return reviews.filter(review => review.user.id === userId);
    },

    getAverageRating: (productId) => {
      const productReviews = reviews.filter(review => review.product.id === productId);
      const totalRating = productReviews.reduce((sum, review) => sum + review.review.rating, 0);
      return productReviews.length ? totalRating / productReviews.length : 0;
    }}

    export const formatDate = (dateString) => {
        const date = new Date(dateString);
        
        if (isNaN(date.getTime())) {
          return 'Invalid date';
        }
    
        const options = { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric'
        };
      
        return date.toLocaleDateString('en-US', options);
      };