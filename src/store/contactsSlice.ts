import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Contact = {
  id: string
  fullName: string
  email: string
  phone: string
}

type ContactFormData = Omit<Contact, 'id'>

type ContactsState = {
  contacts: Contact[]
}

const initialState: ContactsState = {
  contacts: [
    {
      id: '1',
      fullName: 'Ana Beatriz Souza',
      email: 'ana.souza@email.com',
      phone: '(85) 99999-1234'
    },
    {
      id: '2',
      fullName: 'Carlos Henrique Lima',
      email: 'carlos.lima@email.com',
      phone: '(85) 98888-5678'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action: PayloadAction<Contact>) => {
        state.contacts.unshift(action.payload)
      },
      prepare: (contact: ContactFormData) => ({
        payload: {
          id: crypto.randomUUID(),
          ...contact
        }
      })
    },
    removeContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      )
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.contacts[contactIndex] = action.payload
      }
    }
  }
})

export const { addContact, removeContact, editContact } = contactsSlice.actions
export default contactsSlice.reducer
