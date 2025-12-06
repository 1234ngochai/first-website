import "./Header.css"

type Props = {
   title?: string; //Title
}

function Header({title}: Props){
    return(
        <h2 className="header">
          {title}
        </h2>
    )
}
export default Header