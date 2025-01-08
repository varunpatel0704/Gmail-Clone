import youtube from '../../assets/youtube.svg';
import styles from "./AppDrawer.module.css";

function App({src, label, width}:{src:string; width?:number; label:string}){
  return (
    <div className={styles.app}>
      <div className={styles.appIcon}>
        <img src={src} alt="" width={width} className={styles.icon}/>
      </div>
      <p className={styles.appLabel}>
        {label}
      </p>
    </div>
  )
}

function AppDrawer() {
  return (    
    
      <div className={styles.content}>
        <div>
          <App src={youtube} label="YouTube"/>        
        </div>
        <div>
          <App src={youtube} label="YouTube"/>        
        </div>
        <div>
          <App src={youtube} label="YouTube"/>        
        </div>
        <div>
          <App src={youtube} label="YouTube"/>        
        </div>
        <div>
          <App src={youtube} label="YouTube"/>        
        </div>
        <div>
          <App src={youtube} label="YouTube"/>        
        </div>
        <div>
          <App src={youtube} label="YouTube"/>        
        </div>
        <div>
          <App src={youtube} label="YouTube"/>        
        </div>
        <div>
          <App src={youtube} label="YouTube"/>        
        </div>
        <div>
          <App src={youtube} label="YouTube"/>        
        </div>
        <div>
          <App src={youtube} label="YouTube"/>        
        </div>
        <div>
          <App src={youtube} label="YouTube"/>        
        </div>
        <div>
          <App src={youtube} label="YouTube"/>        
        </div>
        <div>
          <App src={youtube} label="YouTube"/>        
        </div>
        <div>
          <App src={youtube} label="YouTube"/>        
        </div>
        <div>
          <App src={youtube} label="YouTube"/>        
        </div>
        <div>
          <App src={youtube} label="YouTube"/>        
        </div>
        <div>
          <App src={youtube} label="YouTube"/>        
        </div>
        <div>
          <App src={youtube} label="YouTube"/>        
        </div>
        <div>
          <App src={youtube} label="YouTube"/>        
        </div>
      </div>
    
  );
}

export default AppDrawer;
