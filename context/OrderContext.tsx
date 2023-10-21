'use client';

import { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';
import toast from 'react-hot-toast';

// Define the order type with a quantity field
interface Order {
  item: string;
  quantity: number;
}

// Define the context state and actions
interface OrderContextState {
  orders: Order[];
}

// Actions
type OrderAction =
  | { type: 'ADD_ORDER'; order: Order }
  | { type: 'DELETE_ORDER'; order: Order }
  | { type: 'CLEAR_ORDERS' };

// Initial state
const initialState: OrderContextState = {
  orders: [],
};

// Create the context
const OrderContext = createContext<{ state: OrderContextState; dispatch: Dispatch<OrderAction> } | undefined>(undefined);

// Define a reducer for handling state changes
const orderReducer = (state: OrderContextState, action: OrderAction): OrderContextState => {
  switch (action.type) {
    case 'ADD_ORDER':
      const existingOrder = state.orders.find((order) => order.item === action.order.item);
      if (existingOrder) {
        // If the order already exists, increase the quantity
        existingOrder.quantity += 1;
        toast.success(`تعداد ${action.order.item} افزایش یافت.`)
        return { ...state, orders: [...state.orders] };
      } else {
        // If it's a new order, add it to the list
        toast.success(`${action.order.item} به سبد خرید اضافه شد.`)
        return { ...state, orders: [...state.orders, action.order] };
      }

      case 'DELETE_ORDER':
        // Find the index of the order to delete
        const orderIndex = state.orders.findIndex((order) => order.item === action.order.item);
  
        if (orderIndex !== -1) {
          const updatedOrders = [...state.orders];
  
          if (state.orders[orderIndex].quantity > 1) {
            // If the quantity is more than 1, decrease it
            toast(`تعداد ${action.order.item} کاهش یافت.`)
            state.orders[orderIndex].quantity -= 1;
          } else {
            // If the quantity is 1, remove the item
            toast(`${action.order.item} از سبد حذف شد.`)
            updatedOrders.splice(orderIndex, 1);
          }
  
          return { ...state, orders: updatedOrders };
        }
  
        return state;

    case 'CLEAR_ORDERS':
        toast("سبد خرید حذف شد.")
      return { ...state, orders: [] };
    default:
      return state;
  }
};

// OrderProvider component to wrap your app
export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return <OrderContext.Provider value={{ state, dispatch }}>{children}</OrderContext.Provider>;
};

// Custom hook for accessing the context
export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
