export const initialStores = [
  { id: 1, name: 'Alpha Groceries', address: '123 Market St', ratings: [5,4], ownerId: 101 },
  { id: 2, name: 'Beta Bakery', address: '45 Baker Rd', ratings: [3,4], ownerId: 102 },
  { id: 3, name: 'Gamma Gadgets', address: '9 Tech Park', ratings: [], ownerId: 103 },
]

export const initialUsers = [
  { id: 1, name: 'Alice Admin', email: 'admin@example.com', address: 'HQ', role: 'admin', password: 'Admin@123' },
  { id: 2, name: 'Bob Buyer', email: 'user@example.com', address: 'Home', role: 'user', password: 'User@1234' },
  { id: 101, name: 'Owner One', email: 'owner1@example.com', address: 'Shop 1', role: 'owner', password: 'Owner@123' },
]

export function average(arr) {
  if (!arr || arr.length === 0) return null
  return (arr.reduce((a,b)=>a+b,0) / arr.length).toFixed(2)
}
