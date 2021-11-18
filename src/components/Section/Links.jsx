import './Links.css'
import Linkcard from '../Linkcard'
const Links = () => {
  return (
    <div className="Links">
      <Linkcard
        link={'https://milkywayapp.xyz/'}
        gamename={'Milkyway'}
        imageLink={'./assets/milkyway.png'}
      />
      <Linkcard
        link={'http://firekirin.xyz:8580/index.html'}
        gamename={'Fire-Kirin'}
        imageLink={'./assets/firekirin.png'}
      />
      <Linkcard
        link={'http://orionstars.vip:8580/index.html'}
        gamename={'Orionstars'}
        imageLink={'./assets/orionstars.png'}
      />
      <Linkcard
        link={'https://www.vpower777.com/#/download/index'}
        gamename={'Vpower777 Games'}
        imageLink={'./assets/vpower.png'}
      />
      <Linkcard
        link={'https://www.oceanking99.net/'}
        gamename={'X-King/Ocean-King Games'}
        imageLink={'./assets/xking.png'}
      />
      <Linkcard
        link={'https://byhotgame.pog.mobi/web-mobile/?v=1038'}
        gamename={'Pog'}
        imageLink={'./assets/pog.png'}
      />
      <Linkcard
        link={'http://dl.juwaonline.com/'}
        gamename={'Juwa'}
        imageLink={'./assets/juwa.png'}
      />
      <Linkcard
        link={'http://toucholuck.cc:8580/index.html'}
        gamename={'Touch-O-Luck'}
        imageLink={'./assets/touchOluck.png'}
      />
    </div>
  )
}

export default Links
