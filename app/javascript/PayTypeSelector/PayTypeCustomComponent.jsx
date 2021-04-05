import React from 'react'

const PayTypeCustomComponent = ({selectedPayType}) => {
  switch (selectedPayType) {
    case 'Credit Card':
      return <CreditCardPayType />
    case 'Check':
      return <CheckPayType />
    case 'Purchase Order':
      return <PurchaseOrderPayType />
    default:
      return null
  }
}

const CheckPayType = () => (
  <>
    <div className="field">
      <label htmlFor="order_routing_number">{I18n.t('orders.form.check_pay_type.routing_number')}</label>
      <input
        type="password"
        name="order[routing_number]"
        id="order_routing_number"
      />
    </div>
    <div className="field">
      <label htmlFor="order_account_number">{I18n.t('orders.form.check_pay_type.account_number')}</label>
      <input
        type="text"
        name="order[account_number]"
        id="order_account_number"
      />
    </div>
  </>
)

const CreditCardPayType = () => (
  <>
    <div className="field">
      <label htmlFor="order_credit_card_number">{I18n.t('orders.form.credit_card_pay_type.cc_number')}</label>
      <input
        type="password"
        name="order[credit_card_number]"
        id="order_credit_card_number"
      />
    </div>
    <div className="field">
      <label htmlFor="order_expiration_date">{I18n.t('orders.form.credit_card_pay_type.expiration_date')}</label>
      <input
        type="text"
        name="order[expiration_date]"
        id="order_expiration_date"
        size="9"
        placeholder="e.g. 03/19"
      />
    </div>
  </>
)

const PurchaseOrderPayType = () => (
  <div className="field">
    <label htmlFor="order_po_number">{I18n.t('orders.form.purchase_order_pay_type.po_number')}</label>
    <input
      type="password"
      name="order[po_number]"
      id="order_po_number"
    />
  </div>
)

export default PayTypeCustomComponent