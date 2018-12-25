import React from "react";
import classes from "./Checkout.module.css";

import WalletSection from "./components/WalletSection/WalletSection";
import CardSection from "./components/CardSection/CardSection";
import OrderSummery from "./components/OrderSummery/OrderSummery";
import NetBankingSection from "./components/NetBankingSection/NetBankingSection";

class Checkout extends React.Component {
  render() {
    return (
      <section className={classes.Checkout}>
        <div className={classes.CheckoutBackdrop} />
        <div className={classes.CheckoutWrapper}>
          <div className={classes.Payment}>
            <p className={classes.PaymentTitle}>Select a Payment Method</p>
            <div className={classes.PaymentWallet}>
              <div className="checkout__payment__wallet__selection">Wallet</div>
              <WalletSection />
            </div>

            <div className="checkout__payment__cards">
              <div className="checkout__payment__cards__selection">
                Credit/Debit Cards
              </div>
              <CardSection />
            </div>

            <div className="checkout__payment__netbanking">
              <div className="checkout__payment__cards__selection">
                Net Banking
              </div>
              <NetBankingSection />
            </div>

            <div className="checkout__payment__netbanking">Pay Later</div>

            <div className="checkout__payment__promocode">
              <p className={classes.PaymentTitle}>Promo Code</p>
              <div className="checkout__payment__promocode__input__box">
                <input
                  type="text"
                  className={classes.PromocodeInput}
                  placeholder="Enter Promo Code"
                />
                <button className={classes.PromocodeApply}>Apply</button>
              </div>
            </div>
          </div>

          <OrderSummery />
        </div>
      </section>
    );
  }
}

export default Checkout;
