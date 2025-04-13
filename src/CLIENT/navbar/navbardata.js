const navbarTitle = 'Bookism - Your Bookstore'

const navbarImage = `/book-min.png`

const navbarLinks = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Books',
    url: '/books',
  },
  {
    name: 'About Us',
    url: '/about',
  },
]

const navbarLinksNotAuthenticated = [
  {
    name: 'Login',
    url: '/login',
  },
]

const navbarLinksIsAuthenticated = [
  {
    name: 'Profile',
    url: '/profile',
  },
]

export default {
  navbarLinks,
  navbarTitle,
  navbarImage,
  navbarLinksNotAuthenticated,
  navbarLinksIsAuthenticated,
}