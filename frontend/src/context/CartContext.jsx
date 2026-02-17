import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext(null)

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) => i.productId === action.payload.productId && i.size === action.payload.size
      )
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i === existing ? { ...i, quantity: i.quantity + (action.payload.quantity || 1) } : i
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }],
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.productId === action.payload.productId && i.size === action.payload.size)
        ),
      }
    case 'UPDATE_QUANTITY': {
      const { productId, size, quantity } = action.payload
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((i) => !(i.productId === productId && i.size === size)),
        }
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.productId === productId && i.size === size ? { ...i, quantity } : i
        ),
      }
    }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    default:
      return state
  }
}

const initialState = { items: [] }

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product, size, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size,
        quantity,
      },
    })
  }

  const removeFromCart = (productId, size) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, size } })
  }

  const updateQuantity = (productId, size, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, size, quantity } })
  }

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  const cartTotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const cartCount = state.items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
