import { FormEvent, useState } from 'react'
import {
  addContact,
  Contact,
  editContact,
  removeContact
} from './store/contactsSlice'
import { useAppDispatch, useAppSelector } from './store/hooks'
import {
  Actions,
  AppShell,
  Button,
  ContactInfo,
  ContactItem,
  ContactList,
  ContactMeta,
  ContactName,
  Counter,
  DangerButton,
  EmptyState,
  Eyebrow,
  Field,
  FieldGrid,
  Form,
  GlobalStyle,
  Header,
  Input,
  ItemActions,
  Panel,
  SecondaryButton,
  Title
} from './styles'

type ContactForm = {
  fullName: string
  email: string
  phone: string
}

const emptyForm: ContactForm = {
  fullName: '',
  email: '',
  phone: ''
}

function App() {
  const dispatch = useAppDispatch()
  const contacts = useAppSelector((state) => state.contacts.contacts)
  const [form, setForm] = useState<ContactForm>(emptyForm)
  const [editingContactId, setEditingContactId] = useState<string | null>(null)

  const isEditing = editingContactId !== null

  function updateField(field: keyof ContactForm, value: string) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value
    }))
  }

  function resetForm() {
    setForm(emptyForm)
    setEditingContactId(null)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const contactData = {
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim()
    }

    if (!contactData.fullName || !contactData.email || !contactData.phone) {
      return
    }

    if (editingContactId) {
      dispatch(
        editContact({
          id: editingContactId,
          ...contactData
        })
      )
    } else {
      dispatch(addContact(contactData))
    }

    resetForm()
  }

  function handleEdit(contact: Contact) {
    setEditingContactId(contact.id)
    setForm({
      fullName: contact.fullName,
      email: contact.email,
      phone: contact.phone
    })
  }

  function handleRemove(contactId: string) {
    dispatch(removeContact(contactId))

    if (editingContactId === contactId) {
      resetForm()
    }
  }

  return (
    <>
      <GlobalStyle />
      <AppShell>
        <Panel aria-labelledby="page-title">
          <Header>
            <div>
              <Eyebrow>Lista de contatos</Eyebrow>
              <Title id="page-title">Gerencie seus contatos</Title>
            </div>

            <Counter aria-label="Resumo dos contatos">
              <strong>{contacts.length}</strong>
              {contacts.length === 1
                ? 'contato cadastrado'
                : 'contatos cadastrados'}
            </Counter>
          </Header>

          <Form onSubmit={handleSubmit}>
            <FieldGrid>
              <Field htmlFor="fullName">
                Nome completo
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Ex.: Maria Clara Alves"
                  value={form.fullName}
                  onChange={(event) =>
                    updateField('fullName', event.target.value)
                  }
                  required
                />
              </Field>

              <Field htmlFor="email">
                E-mail
                <Input
                  id="email"
                  type="email"
                  placeholder="maria@email.com"
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  required
                />
              </Field>

              <Field htmlFor="phone">
                Telefone
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={form.phone}
                  onChange={(event) => updateField('phone', event.target.value)}
                  required
                />
              </Field>
            </FieldGrid>

            <Actions>
              {isEditing && (
                <SecondaryButton type="button" onClick={resetForm}>
                  Cancelar
                </SecondaryButton>
              )}
              <Button type="submit">
                {isEditing ? 'Salvar alterações' : 'Adicionar contato'}
              </Button>
            </Actions>
          </Form>

          {contacts.length > 0 ? (
            <ContactList aria-label="Contatos cadastrados">
              {contacts.map((contact) => (
                <ContactItem key={contact.id}>
                  <ContactInfo>
                    <ContactName>{contact.fullName}</ContactName>
                    <ContactMeta>
                      <span>{contact.email}</span>
                      <span>{contact.phone}</span>
                    </ContactMeta>
                  </ContactInfo>

                  <ItemActions>
                    <SecondaryButton
                      type="button"
                      onClick={() => handleEdit(contact)}
                    >
                      Editar
                    </SecondaryButton>
                    <DangerButton
                      type="button"
                      onClick={() => handleRemove(contact.id)}
                    >
                      Remover
                    </DangerButton>
                  </ItemActions>
                </ContactItem>
              ))}
            </ContactList>
          ) : (
            <EmptyState>
              <h2>Nenhum contato cadastrado.</h2>
              <p>Use o formulário acima para adicionar o primeiro contato.</p>
            </EmptyState>
          )}
        </Panel>
      </AppShell>
    </>
  )
}

export default App
