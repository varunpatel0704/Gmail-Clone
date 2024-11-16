import logo from "../../assets/logo_gmail.png";
import menu from '../../assets/menu.svg';
import settings from "../../assets/settings.svg";
import apps from '../../assets/apps.svg';
import help from '../../assets/help.svg';
import "./TopBar.css";
import SearchBar from "../SearchBar/SearchBar";

export function TopBarButton({
  onClick,
  src,
  alt,
  className='top-bar-icon',
}: {
  onClick:()=>unknown;
  src: string;
  alt: string;
  className: string;
}) {
  return (
    <button onClick={onClick} className="top-bar-button">
      <img
        src={src}
        alt={alt}
        className={className}
      />
    </button>
  );
}

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-left">        
        <TopBarButton onClick={()=>null} src={menu} alt="menu icon" className="menu-icon top-bar-icon"/>        
        <img src={logo} alt="Gmail Logo" className="gmail-logo" />
      </div>

      <div className="top-bar-mid"> 
        <div className="search-bar">
          <SearchBar/>  
        </div>  

        <div>
          <TopBarButton onClick={()=>null} src={help} alt='help-icon' className="help-icon top-bar-icon" />

          <TopBarButton onClick={()=>null} src={settings} alt='settings-icon' className="settings-icon top-bar-icon" />
        </div>
      </div>

      <div className="top-bar-right">        
        <TopBarButton onClick={()=>null} src={apps} alt='apps-icon' className="apps-icon top-bar-icon" />
        <TopBarButton onClick={()=>null} src={help} alt='profile-icon' className="profile-icon top-bar-icon" />
                       
      </div>
    </div>
  );
}

export default TopBar;
