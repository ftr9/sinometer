import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__info footer__info1">
        <div className="footer__info-header">CashOut Info</div>
        <p>Normal Cashout at 50$ (Minimum)</p>
        <p>
          If Match Given then redemable at (4X) i.e 4 times the match. ( Match
          -> 20$ then Redemable at 80$ )
        </p>
      </div>
      <div className="footer__Stick"></div>
      <div className="footer__info footer__info2">
        <div className="footer__info-header">Referal Bonus</div>
        <p>
          5$ bonus will be given if the referal plays more than 3 matched of
          (greater than 50$ total)
        </p>
      </div>
    </div>
  )
}

export default Footer
