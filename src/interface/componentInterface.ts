interface Component {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    city: string
  },
  phone: number,
  website: string,
  company: {
    name: string
  }
}

export default Component;