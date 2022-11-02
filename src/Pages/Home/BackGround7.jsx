import './BackGround.css';
import {Images} from './Components';
import zoom from "../../Asset/Icon/zoom.png";
import beat from "../../Asset/Icon/beats bill.png";
import google from "../../Asset/Icon/google photo.png";
import microsoft from "../../Asset/Icon/microsoft.png";
import pepsi from "../../Asset/Icon/pepsi.png";
import planet from "../../Asset/Icon/planet earth.png";
import telegram from "../../Asset/Icon/telegram.png";
import game from "../../Asset/Icon/game center.png";


const BackGround7 = () => {
    return (
        <>
            <div className="partner">
                <h1 className="heading1">Đối tác của Codic</h1>
                <div className="partner-list">
                    <Images dataAos="fade-down" dataAosDuration="1000" src={zoom} alt="Đối tác">
                        <br />Zoom Group
                    </Images>
                    <Images dataAos="fade-down" dataAosDuration="1300" src={beat} alt="Đối tác">
                        <br />Beats Bill
                    </Images>
                    <Images dataAos="fade-down" dataAosDuration="1600" src={google} alt="Đối tác">
                        <br />Photo Gallery
                    </Images>
                    <Images dataAos="fade-down" dataAosDuration="1900" src={microsoft} alt="Đối tác">
                        <br />Microsoft
                    </Images>
                    <Images dataAos="fade-down" dataAosDuration="2200" src={pepsi} alt="Đối tác">
                        <br />Pepsi
                    </Images>
                    <Images dataAos="fade-down" dataAosDuration="2500" src={planet} alt="Đối tác">
                        <br />Planet Earth
                    </Images>
                    <Images dataAos="fade-down" dataAosDuration="2700" src={telegram} alt="Đối tác">
                        <br />Telegram
                    </Images>
                    <Images dataAos="fade-down" dataAosDuration="3000" src={game} alt="Đối tác">
                        <br />Game Center
                    </Images>
                </div>
            </div>
        </>
    );
};

export default BackGround7;