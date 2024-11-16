import star from '../../assets/star.svg';
import clock from '../../assets/clock.svg'
import add from '../../assets/add.svg';
import compose from '../../assets/compose.svg';
import inbox from '../../assets/inbox.svg';
import send from '../../assets/send.svg';
import arrowDown from '../../assets/arrow_down.svg';
function SideBar() {
  return (
    <main>
      <ul>
        <li><img src={compose} alt="" /></li>
        <li><img src={inbox} alt="" /></li>
        <li><img src={star} alt="" /></li>
        <li><img src={clock} alt="" /></li>
        <li><img src={send} alt="" /></li>
        <li><img src={arrowDown} alt="" /></li>
        <li><img src={add} alt="" /></li>
      </ul>
    </main>
  )
}

export default SideBar