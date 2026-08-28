type NavLink = {
  id: string
  title: string
  href?: string
  target?: string
}

const navLinks: NavLink[] = [
  {
    id: "cocktails",
    title: "Cocktails",
    href: "#cocktails",
  },
  {
    id: "about",
    title: "About Us",
    href: "#about",
  },
  {
    id: "art",
    title: "The Art",
    href: "#art",
  },
  {
    id: "menu",
    title: "Menu",
    href: "#menu",
  },
  {
    id: "contact",
    title: "Contact",
    href: "#contact",
  },
]

type Cocktail = {
  name: string
  country: string
  detail: string
  price: string
}

const cocktailLists: Cocktail[] = [
  {
    name: "Chapel Hill Shiraz",
    country: "AU",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Caten Malbee",
    country: "AU",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Rhino Pale Ale",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Irish Guinness",
    country: "IE",
    detail: "600 ml",
    price: "$29",
  },
]

type MockTail = {
  name: string
  country: string
  detail: string
  price: string
}

const mockTailLists: MockTail[] = [
  {
    name: "Tropical Bloom",
    country: "US",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Passionfruit Mint",
    country: "US",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Citrus Glow",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Lavender Fizz",
    country: "IE",
    detail: "600 ml",
    price: "$29",
  },
]

type Profile = {
  imgPath: string
}

const profileLists: Profile[] = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
]

type Feature = {
  title: string
  description: string
}
const featureLists: Feature[] = [
  {
    title: "Perfectly balanced blends",
    description:
      "We carefully balance each ingredient to create the perfect flavor profile.",
  },
  {
    title: "Garnished to perfection",
    description:
      "Each cocktail is garnished with fresh, seasonal ingredients for a visual treat.",
  },
  {
    title: "Ice-cold every time",
    description:
      "Our drinks are served on the rocks, ensuring they're always perfectly chilled.",
  },
  {
    title: "Expertly shaken & stirred",
    description:
      "Our bartenders are trained in the art of mixing to create the best cocktails.",
  },
]

type Good = {
  title: string
  description: string
}
const goodLists: Good[] = [
  {
    title: "Handpicked ingredients",
    description: "We source only the finest ingredients for our cocktails.",
  },
  {
    title: "Signature techniques",
    description:
      "Our bartenders use time-tested methods to create the perfect drink.",
  },
  {
    title: "Bartending artistry in action",
    description:
      "Each cocktail is a work of art, crafted with precision and care.",
  },
  {
    title: "Freshly muddled flavors",
    description: "We muddle our ingredients fresh daily for the best taste.",
  },
]

type StoreInfo = {
  heading: string
  address: string
  contact: {
    phone: string
    email: string
  }
}
const storeInfo: StoreInfo = {
  heading: "Where to Find Us",
  address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
  contact: {
    phone: "(555) 987-6543",
    email: "hello@jsmcocktail.com",
  },
}

type OpeningHour = {
  day: string
  time: string
}
const openingHours: OpeningHour[] = [
  { day: "Mon-Thu", time: "11:00am - 12am" },
  { day: "Fri", time: "11:00am - 2am" },
  { day: "Sat", time: "9:00am - 2am" },
  { day: "Sun", time: "9:00am - 1am" },
]

type Social = {
  name: string
  icon: string
  url: string
}
const socials: Social[] = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
]

type Slider = {
  id: number
  name: string
  image: string
  title: string
  description: string
}
const sliderLists: Slider[] = [
  {
    id: 1,
    name: "Classic Mojito",
    image: "/images/drink1.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    id: 2,
    name: "Raspberry Mojito",
    image: "/images/drink2.png",
    title: "A Zesty Classic That Never Fails",
    description:
      "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
  },
  {
    id: 3,
    name: "Violet Breeze",
    image: "/images/drink3.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    id: 4,
    name: "Curacao Mojito",
    image: "/images/drink4.png",
    title: "Crafted With Care, Poured With Love",
    description:
      "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
  },
]

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  sliderLists,
}

export type {
  NavLink,
  Cocktail,
  MockTail,
  Profile,
  Feature,
  Good,
  StoreInfo,
  OpeningHour,
  Social,
  Slider,
}
