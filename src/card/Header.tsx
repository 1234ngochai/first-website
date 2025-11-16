import "./Header.css"

type Title = {
   text?: string;
}

function Header(title: Title){
    return(
        <h2 className="header">
          {title.text}
        </h2>
    )
}
export default Header