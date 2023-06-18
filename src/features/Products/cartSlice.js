import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
	name: 'cart',
	initialState: {
		cartItems: [],
		totalCartQuantity: 0,
		totalCartAmount: '',
		arrCart: [],
		arrCartCheck: [],
		jumlahCek: 0,
		pay: 'NoPayment',
		address: ''
	},
	reducers: {
		addToCart: (state, action) => {
			// get index
			const itemIndex = state.cartItems.findIndex((item) => item.id == action.payload.id)

			// add to cart
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += 1
				state.cartItems[itemIndex].stok -= 1
				state.arrCart[itemIndex].total = state.cartItems[itemIndex].price * state.cartItems[itemIndex].cartQuantity

				// operasi cart
				let total = 0
				state.arrCart.forEach((item) => {
					total += item.total
				})

				let strNum = total.toString().split('')
				let str = []
				for (let i = 0; i < strNum.length; i++) {
					if (strNum.length === 10) {
						if (i === 8) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 9) {
						if (i === 7) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 8) {
						if (i === 6) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 7) {
						if (i === 5) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 6) {
						if (i === 4) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 5) {
						if (i === 3) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 4) {
						if (i === 2) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 3) {
						if (i === 1) {
							str.push('.')
						}
						str.push(strNum[i])
					}
				}
				state.totalCartAmount = str.join('')
			} else {
				const cloneProduct = { ...action.payload, cartQuantity: 1, stok: action.payload.stok - 1, isCheck: true }
				state.cartItems.push(cloneProduct)
				state.arrCart.push({
					id: cloneProduct.id,
					total: cloneProduct.price * cloneProduct.cartQuantity,
				})
			}

			// operasi hitung total
			let total = 0
			state.arrCart.forEach((item) => {
				total += item.total
			})

			let strNum = total.toString().split('')
			let str = []
			for (let i = 0; i < strNum.length; i++) {
				if (strNum.length === 10) {
					if (i === 8) {
						str.push('.')
					}
					str.push(strNum[i])
				}
				if (strNum.length === 9) {
					if (i === 7) {
						str.push('.')
					}
					str.push(strNum[i])
				}
				if (strNum.length === 8) {
					if (i === 6) {
						str.push('.')
					}
					str.push(strNum[i])
				}
				if (strNum.length === 7) {
					if (i === 5) {
						str.push('.')
					}
					str.push(strNum[i])
				}
				if (strNum.length === 6) {
					if (i === 4) {
						str.push('.')
					}
					str.push(strNum[i])
				}
				if (strNum.length === 5) {
					if (i === 3) {
						str.push('.')
					}
					str.push(strNum[i])
				}
				if (strNum.length === 4) {
					if (i === 2) {
						str.push('.')
					}
					str.push(strNum[i])
				}
				if (strNum.length === 3) {
					if (i === 1) {
						str.push('.')
					}
					str.push(strNum[i])
				}
			}
			state.totalCartAmount = str.join('')

			state.totalCartQuantity = state.cartItems.length
			state.jumlahCek = state.arrCartCheck.length
		},
		minusCart: (state, action) => {
			const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
			const itemIndexCheck = state.arrCartCheck.findIndex((item) => item.id === action.payload.id)

			if (state.cartItems[itemIndex].stok < state.cartItems[itemIndex].initialStok && state.cartItems[itemIndex].cartQuantity > 1) {
				state.cartItems[itemIndex].stok += 1
			}
			if (state.cartItems[itemIndex].cartQuantity > 1) {
				state.cartItems[itemIndex].cartQuantity -= 1
			}
			state.arrCart[itemIndex].total = state.cartItems[itemIndex].price * state.cartItems[itemIndex].cartQuantity
			if(itemIndexCheck >= 0) {
				state.arrCartCheck[itemIndexCheck].total = state.cartItems[itemIndex].price * state.cartItems[itemIndex].cartQuantity
			}
			
			if(state.arrCart.length === state.arrCartCheck.length) {
				let total = 0
				state.arrCart.forEach((item) => {
					total += item.total
				})

				let strNum = total.toString().split('')
				let str = []
				for (let i = 0; i < strNum.length; i++) {
					if (strNum.length === 10) {
						if (i === 8) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 9) {
						if (i === 7) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 8) {
						if (i === 6) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 7) {
						if (i === 5) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 6) {
						if (i === 4) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 5) {
						if (i === 3) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 4) {
						if (i === 2) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 3) {
						if (i === 1) {
							str.push('.')
						}
						str.push(strNum[i])
					}
				}
				state.totalCartAmount = str.join('')
			} else {
				let total = 0
				state.arrCartCheck.forEach((item) => {
					total += item.total
				})

				let strNum = total.toString().split('')
				let str = []
				for (let i = 0; i < strNum.length; i++) {
					if (strNum.length === 10) {
						if (i === 8) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 9) {
						if (i === 7) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 8) {
						if (i === 6) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 7) {
						if (i === 5) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 6) {
						if (i === 4) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 5) {
						if (i === 3) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 4) {
						if (i === 2) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 3) {
						if (i === 1) {
							str.push('.')
						}
						str.push(strNum[i])
					}
				}
				state.totalCartAmount = str.join('')
			}
			
		},
		plusCart: (state, action) => {
			const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
			const itemIndexCheck = state.arrCartCheck.findIndex((item) => item.id === action.payload.id)

			if (state.cartItems[itemIndex].stok > 0) {
				state.cartItems[itemIndex].stok -= 1
				state.cartItems[itemIndex].cartQuantity += 1
				state.arrCart[itemIndex].total = state.cartItems[itemIndex].price * state.cartItems[itemIndex].cartQuantity
				if(itemIndexCheck >= 0) {
					state.arrCartCheck[itemIndexCheck].total = state.cartItems[itemIndex].price * state.cartItems[itemIndex].cartQuantity
				}

				if(state.arrCart.length === state.arrCartCheck.length) {
					let total = 0
					state.arrCart.forEach((item) => {
						total += item.total
					})
	
					let strNum = total.toString().split('')
					let str = []
					for (let i = 0; i < strNum.length; i++) {
						if (strNum.length === 10) {
							if (i === 8) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 9) {
							if (i === 7) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 8) {
							if (i === 6) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 7) {
							if (i === 5) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 6) {
							if (i === 4) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 5) {
							if (i === 3) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 4) {
							if (i === 2) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 3) {
							if (i === 1) {
								str.push('.')
							}
							str.push(strNum[i])
						}
					}
					state.totalCartAmount = str.join('')
				} else {
					let total = 0
					state.arrCartCheck.forEach((item) => {
						total += item.total
					})
	
					let strNum = total.toString().split('')
					let str = []
					for (let i = 0; i < strNum.length; i++) {
						if (strNum.length === 10) {
							if (i === 8) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 9) {
							if (i === 7) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 8) {
							if (i === 6) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 7) {
							if (i === 5) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 6) {
							if (i === 4) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 5) {
							if (i === 3) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 4) {
							if (i === 2) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 3) {
							if (i === 1) {
								str.push('.')
							}
							str.push(strNum[i])
						}
					}
					state.totalCartAmount = str.join('')
				}
			}
		},
		deleteProduct: (state, action) => {
			state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
			state.arrCart = state.arrCart.filter((item) => item.id !== action.payload.id)
			state.arrCartCheck = state.arrCartCheck.filter((item) => item.id !== action.payload.id)
			state.totalCartQuantity = state.cartItems.length

			if(state.arrCart.length === state.arrCartCheck.length) {
				let total = 0
				state.arrCart.forEach((item) => {
					total += item.total
				})

				let strNum = total.toString().split('')
				let str = []
				for (let i = 0; i < strNum.length; i++) {
					if (strNum.length === 10) {
						if (i === 8) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 9) {
						if (i === 7) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 8) {
						if (i === 6) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 7) {
						if (i === 5) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 6) {
						if (i === 4) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 5) {
						if (i === 3) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 4) {
						if (i === 2) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 3) {
						if (i === 1) {
							str.push('.')
						}
						str.push(strNum[i])
					}
				}
				state.totalCartAmount = str.join('')
			} else {
				let total = 0
				state.arrCartCheck.forEach((item) => {
					total += item.total
				})

				let strNum = total.toString().split('')
				let str = []
				for (let i = 0; i < strNum.length; i++) {
					if (strNum.length === 10) {
						if (i === 8) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 9) {
						if (i === 7) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 8) {
						if (i === 6) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 7) {
						if (i === 5) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 6) {
						if (i === 4) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 5) {
						if (i === 3) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 4) {
						if (i === 2) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 3) {
						if (i === 1) {
							str.push('.')
						}
						str.push(strNum[i])
					}
				}
				state.totalCartAmount = str.join('')
			}

			state.jumlahCek = state.arrCartCheck.length
		},
		checkout: (state) => {
			if (state.cartItems.length > 0  && state.arrCartCheck.length > 0) {
				state.cartItems = state.cartItems.filter(item => item.isCheck != true)
				let newArr4 = []
				state.cartItems.forEach(item => {
					newArr4.push({
						id: item.id,
						total: item.price * item.cartQuantity,
					})
				})
				state.arrCart = newArr4
				state.totalCartQuantity = state.cartItems.length

				let newArr = []
				let newArr2 = []
				newArr = state.cartItems.filter(item => item.isCheck == true)
				newArr.forEach((item) => {
					newArr2.push({
						id: item.id,
						total: item.price * item.cartQuantity,
					})
				})
				state.arrCartCheck = newArr2
				
				if(state.arrCart.length === state.arrCartCheck.length) {
					let total = 0
					state.arrCart.forEach((item) => {
						total += item.total
					})
	
					let strNum = total.toString().split('')
					let str = []
					for (let i = 0; i < strNum.length; i++) {
						if (strNum.length === 10) {
							if (i === 8) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 9) {
							if (i === 7) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 8) {
							if (i === 6) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 7) {
							if (i === 5) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 6) {
							if (i === 4) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 5) {
							if (i === 3) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 4) {
							if (i === 2) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 3) {
							if (i === 1) {
								str.push('.')
							}
							str.push(strNum[i])
						}
					}
					state.totalCartAmount = str.join('')
				} else {
					let total = 0
					state.arrCartCheck.forEach((item) => {
						total += item.total
					})
	
					let strNum = total.toString().split('')
					let str = []
					for (let i = 0; i < strNum.length; i++) {
						if (strNum.length === 10) {
							if (i === 8) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 9) {
							if (i === 7) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 8) {
							if (i === 6) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 7) {
							if (i === 5) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 6) {
							if (i === 4) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 5) {
							if (i === 3) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 4) {
							if (i === 2) {
								str.push('.')
							}
							str.push(strNum[i])
						}
						if (strNum.length === 3) {
							if (i === 1) {
								str.push('.')
							}
							str.push(strNum[i])
						}
					}
					state.totalCartAmount = str.join('')
				}
			}

			state.jumlahCek = state.arrCartCheck.length
		},
		changeIsCheck: (state, action) => {
			if(action.payload != null) {
				const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.product.id)
				state.cartItems[itemIndex].isCheck = action.payload.isCheckCart
			}

			let newArr = []
			let newArr2 = []
			newArr = state.cartItems.filter(item => item.isCheck == true)
			newArr.forEach((item) => {
				newArr2.push({
					id: item.id,
					total: item.price * item.cartQuantity,
				})
			})
			state.arrCartCheck = newArr2

			if(state.arrCart.length === state.arrCartCheck.length) {
				let total = 0
				state.arrCart.forEach((item) => {
					total += item.total
				})

				let strNum = total.toString().split('')
				let str = []
				for (let i = 0; i < strNum.length; i++) {
					if (strNum.length === 10) {
						if (i === 8) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 9) {
						if (i === 7) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 8) {
						if (i === 6) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 7) {
						if (i === 5) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 6) {
						if (i === 4) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 5) {
						if (i === 3) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 4) {
						if (i === 2) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 3) {
						if (i === 1) {
							str.push('.')
						}
						str.push(strNum[i])
					}
				}
				state.totalCartAmount = str.join('')
			} else {
				let total = 0
				state.arrCartCheck.forEach((item) => {
					total += item.total
				})

				let strNum = total.toString().split('')
				let str = []
				for (let i = 0; i < strNum.length; i++) {
					if (strNum.length === 10) {
						if (i === 8) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 9) {
						if (i === 7) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 8) {
						if (i === 6) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 7) {
						if (i === 5) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 6) {
						if (i === 4) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 5) {
						if (i === 3) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 4) {
						if (i === 2) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 3) {
						if (i === 1) {
							str.push('.')
						}
						str.push(strNum[i])
					}
				}
				state.totalCartAmount = str.join('')
			}

			state.jumlahCek = state.arrCartCheck.length
		},
		selectAll: (state) => {
			for(let i = 0; i < state.cartItems.length; i++) {
				state.cartItems[i].isCheck = true
			}

			let newArr = []
			let newArr2 = []
			newArr = state.cartItems.filter(item => item.isCheck == true)
			newArr.forEach((item) => {
				newArr2.push({
					id: item.id,
					total: item.price * item.cartQuantity,
				})
			})
			state.arrCartCheck = newArr2

			if(state.arrCart.length === state.arrCartCheck.length) {
				let total = 0
				state.arrCart.forEach((item) => {
					total += item.total
				})

				let strNum = total.toString().split('')
				let str = []
				for (let i = 0; i < strNum.length; i++) {
					if (strNum.length === 10) {
						if (i === 8) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 9) {
						if (i === 7) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 8) {
						if (i === 6) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 7) {
						if (i === 5) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 6) {
						if (i === 4) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 5) {
						if (i === 3) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 4) {
						if (i === 2) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 3) {
						if (i === 1) {
							str.push('.')
						}
						str.push(strNum[i])
					}
				}
				state.totalCartAmount = str.join('')
			} else {
				let total = 0
				state.arrCartCheck.forEach((item) => {
					total += item.total
				})

				let strNum = total.toString().split('')
				let str = []
				for (let i = 0; i < strNum.length; i++) {
					if (strNum.length === 10) {
						if (i === 8) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 9) {
						if (i === 7) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 8) {
						if (i === 6) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 7) {
						if (i === 5) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 6) {
						if (i === 4) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 5) {
						if (i === 3) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 4) {
						if (i === 2) {
							str.push('.')
						}
						str.push(strNum[i])
					}
					if (strNum.length === 3) {
						if (i === 1) {
							str.push('.')
						}
						str.push(strNum[i])
					}
				}
				state.totalCartAmount = str.join('')
			}

			state.jumlahCek = state.arrCartCheck.length
		},
		changePay: (state, action) => {
			state.pay = action.payload
		},
		changeAddress: (state, action) => {
			state.address = action.payload
		}
	},
})

export const { addToCart, minusCart, plusCart, deleteProduct, checkout, changeIsCheck, selectAll, changePay, changeAddress } = CartSlice.actions
export default CartSlice.reducer
