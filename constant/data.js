import {
  User,
  Settings,
  Home,
  Trophy,
  ClipboardList,
  ShieldCheck,
  GraduationCap,
  BookOpen,
  BarChart2,
  Tags,
  Star,
  SaveAll,
  FileStack,
  Award,
  ShieldAlert,
  Settings2,
  HelpCircle,
  UserCircle,
  VerifiedIcon,
  ShieldClose,
  ChartBarDecreasing
} from "lucide-react";
import { Icon } from "../constant/icons";
export const pageTitles = {
  "/dashboard": "Dashboard",
  "/dashboard/saved-review": "Saved Reviews",
  "/dashboard/my-reviews": "My Reviews",
  "/dashboard/chart": "Revbuddi Charts",
  "/dashboard/leadersboard": "LeadersBoard",
  "/dashboard/management": "Review Management",
  "/dashboard/safety": "Trust & Safety Hub",
  "/dashboard/education": "Educational Shortcuts",
  "/dashboard/settings": "Settings",
  "/dashboard/settings/dashboard/profile": "Profile",
  "/dashboard/settings/dashboard/guidelines": "Guidelines",
  "/dashboard/settings/support": "Support",
};
export const categoryData = [
  {
    category: "Technology",
    items: [
      { title: "Smartphones", image: Icon.andriod },
      { title: "Laptops", image: Icon.andriod },
      { title: "Cameras", image: Icon.andriod },
      { title: "Drones", image: Icon.andriod },
    ],
  },
  {
    category: "Food and Dining",
    items: [
      { title: "Restaurants", image: Icon.andriod },
      { title: "Food Deliveries", image: Icon.andriod },
      { title: "Cafés", image: Icon.andriodNew },
      { title: "Drones", image: Icon.andriod },
    ],
  },
];
export const sidebarNavItems = [
  { icon: Home, label: "Home", href: "/dashboard" },
  { icon: SaveAll, label: "Saved Review", href: "/dashboard/saved-review" },
  { icon: FileStack, label: "My Reviews", href: "/dashboard/my-reviews" },
  { icon: Award, label: "LeadersBoard", href: "/dashboard/leadersboard" },
  {
    icon: ClipboardList,
    label: "Review Management",
    href: "/dashboard/management",
  },
  { icon: ShieldAlert, label: "Trust & Safety Hub", href: "/dashboard/safety" },
  {
    icon: GraduationCap,
    label: "Educational Shortcuts",
    href: "/dashboard/education",
  },
  { icon: BarChart2, label: "Charts", href: "/dashboard/charts" },
  { icon: Tags, label: "Category", href: "/dashboard/category" },
  { icon: Settings2, label: "Settings", href: "/dashboard/settings" },
  {
    icon: BookOpen,
    label: "Guidelines",
    href: "/dashboard/settings/dashboard/guidelines",
  },
  { icon: HelpCircle, label: "Support", href: "/dashboard/settings/support" },
  {
    icon: UserCircle,
    label: "Profile",
    href: "/dashboard/settings/dashboard/profile",
  },
];



export const HomeIcons = [
  { url: "/", logo: Icon.home, label: "Home" },
  { url: "/dashboard/chart", logo: Icon.chart, label: "Chart" },
  { url: "/notification", logo: Icon.bells, label: "Notifications" },
  { url: "/briefcase", logo: Icon.briefcase, label: "Briefcase" },
  { url: "/category", logo: Icon.category, label: "Category" },
];

export const reviews = [
  {
    id: "rev_1",
    user: {
      id: "usr_1",
      name: "Makinde Olaitan",
      profilePicture: Icon.user,
      isVerified: true,
    },
    review: {
      id: "rvw_1",
      productName: "Samsung S25 Ultra",
      rating: 5,
      content: `I've upgraded from the S24 Ultra to the S25 Ultra and it's a massive leap! The new 200MP primary camera delivers insane detail and low-light performance. Powered by a faster 5nm processor, it handles demanding tasks with ease. The 6.8-inch Dynamic AMOLED display is stunning, with brighter colors and a smoother 120Hz refresh rate. Battery life has also seen a significant boost, easily lasting over a day and a half. A must-have upgrade if you're due for one!`,
      createdAt: new Date().toISOString(),
    },
    product: {
      id: "prod_1",
      name: "Samsung",
      icons: [Icon.andriod, Icon.andriodNew],
      category: "Smartphones",
    },
    engagement: {
      likes: 200,
      dislikes: 400,
      comments: 50,
    },
  },
  {
    id: "rev_2",
    user: {
      id: "usr_2",
      name: "Okeowo Abiodun",
      profilePicture: Icon.user,
      isVerified: true,
    },
    review: {
      id: "rvw_2",
      productName: "Samsung S25 Ultra",
      rating: 5,
      content: `I've upgraded from the S24 Ultra to the S25 Ultra and it's a massive leap! The new 200MP primary camera delivers insane detail and low-light performance. Powered by a faster 5nm processor, it handles demanding tasks with ease. The 6.8-inch Dynamic AMOLED display is stunning, with brighter colors and a smoother 120Hz refresh rate. Battery life has also seen a significant boost, easily lasting over a day and a half. A must-have upgrade if you're due for one!`,
      createdAt: new Date().toISOString(),
    },
    product: {
      id: "prod_1",
      name: "Samsung",
      icons: [Icon.andriod, Icon.andriodNew],
      category: "Smartphones",
    },
    engagement: {
      likes: 0,
      dislikes: 0,
      comments: 0,
    },
  },
];

export const reviewHelpers = {
  getReviewsByProduct: (productId) => {
    return reviews.filter((review) => review.product.id === productId);
  },

  getReviewsByUser: (userId) => {
    return reviews.filter((review) => review.user.id === userId);
  },

  getAverageRating: (productId) => {
    const productReviews = reviews.filter(
      (review) => review.product.id === productId
    );
    const totalRating = productReviews.reduce(
      (sum, review) => sum + review.review.rating,
      0
    );
    return productReviews.length ? totalRating / productReviews.length : 0;
  },
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
};

export const featuresData = [
  {
    icon: <VerifiedIcon className="w-6 h-6 text-primary" />,
    title: "Submit Verified Reviews",
    description: "Share genuine feedback with ease and authenticity.",
  },
  {
    icon: <ShieldClose className="w-6 h-6 text-primary" />,
    title: "Protect Your Identity",
    description: "We ensure your data stays safe and secure.",
  },
  {
    icon: <ChartBarDecreasing className="w-6 h-6 text-primary" />,
    title: "Track Insights",
    description: "Gain meaningful insights from reviews and data.",
  },
];


export const imageSources = {
  search: Icon.neon,
  analytics:Icon.neon,
  tracking: Icon.neon
};

export const steps = [
  {
    number: "01",
    title: "Search for a product or entity",
    description: "Effortlessly locate businesses, products, or services with our powerful search feature tailored to deliver accurate and relevant results.",
    image: imageSources.search,
    imagePosition: "left"
  },
  {
    number: "02",
    title: "Leave a detailed review",
    description: "Provide your insights by submitting detailed reviews, complete with ratings, comments, and optional proof to ensure authenticity",
    image: imageSources.analytics,
    imagePosition: "right"
  },
  {
    number: "03",
    title: "Track your submissions",
    description: "Track your reviews and reports to stay involved, helping to build a reliable platform that fosters transparency and trust.",
    image: imageSources.tracking,
    imagePosition: "left"
  }
];