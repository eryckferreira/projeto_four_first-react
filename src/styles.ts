import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    font-family: Inter, 'Segoe UI', Arial, sans-serif;
    color: #172033;
    background:
      linear-gradient(135deg, rgba(20, 132, 142, 0.16), transparent 34%),
      linear-gradient(225deg, rgba(234, 88, 12, 0.12), transparent 38%),
      #f7f8fb;
  }

  button,
  input {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`

export const AppShell = styled.main`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 32px 16px;

  @media (max-width: 720px) {
    place-items: start center;
    padding: 16px;
  }
`

export const Panel = styled.section`
  width: min(920px, 100%);
  padding: 32px;
  border: 1px solid #dfe5ee;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 24px 60px rgba(23, 32, 51, 0.13);

  @media (max-width: 720px) {
    padding: 20px;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 28px;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const Eyebrow = styled.p`
  margin: 0 0 8px;
  color: #14848e;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const Title = styled.h1`
  max-width: 560px;
  margin: 0;
  color: #111827;
  font-size: clamp(2rem, 5vw, 3.8rem);
  line-height: 1;
  letter-spacing: 0;
`

export const Counter = styled.div`
  min-width: 170px;
  display: grid;
  gap: 8px;
  padding: 14px;
  border: 1px solid #e3e9f2;
  border-radius: 8px;
  background: #f8fafc;
  color: #64748b;

  strong {
    display: block;
    color: #111827;
    font-size: 2rem;
    line-height: 1;
  }
`

export const Form = styled.form`
  display: grid;
  gap: 16px;
  margin-bottom: 24px;
`

export const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

export const Field = styled.label`
  display: grid;
  gap: 8px;
  color: #334155;
  font-weight: 700;
`

export const Input = styled.input`
  width: 100%;
  min-width: 0;
  height: 46px;
  padding: 0 14px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  color: #111827;
  background: #ffffff;
  outline: none;

  &:focus {
    border-color: #14848e;
    box-shadow: 0 0 0 4px rgba(20, 132, 142, 0.14);
  }
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
`

export const Button = styled.button`
  min-height: 42px;
  padding: 0 18px;
  border: 0;
  border-radius: 8px;
  color: #ffffff;
  background: #14848e;
  font-weight: 800;
`

export const SecondaryButton = styled(Button)`
  color: #475569;
  background: #edf2f7;
`

export const ContactList = styled.ul`
  display: grid;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
`

export const ContactItem = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  align-items: center;
  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #ffffff;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const ContactInfo = styled.div`
  min-width: 0;
`

export const ContactName = styled.strong`
  display: block;
  margin-bottom: 8px;
  color: #111827;
  font-size: 1.05rem;
  overflow-wrap: anywhere;
`

export const ContactMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 14px;
  color: #64748b;
  overflow-wrap: anywhere;
`

export const ItemActions = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 640px) {
    justify-content: flex-end;
  }
`

export const DangerButton = styled(SecondaryButton)`
  color: #b91c1c;
  background: #fee2e2;
`

export const EmptyState = styled.div`
  padding: 28px;
  border: 1px dashed #cbd5e1;
  border-radius: 8px;
  text-align: center;
  background: #f8fafc;

  h2 {
    margin: 0 0 8px;
    color: #111827;
    font-size: 1.15rem;
  }

  p {
    margin: 0;
    color: #64748b;
  }
`
