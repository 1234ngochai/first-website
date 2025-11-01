import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

type Props = {
  text?: string;
}

function ComponentA(props: Props) {
  console.log("props", props);
  return <button type="button" onClick={() => alert(`clicked ${props.text}`)}>{props.text}</button>
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    Hello world
    {[...Array(10)].map((_, idx) => (
      <ComponentA text={`Click me ${idx + 1}`} />
    ))}
    {/* <App /> */}
  </StrictMode>,
)
