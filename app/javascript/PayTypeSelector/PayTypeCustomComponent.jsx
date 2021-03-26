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
      <label htmlFor="order_routing_number">Routing #</label>
      <input
        type="password"
        name="order[routing_number]"
        id="order_routing_number"
      />
    </div>
    <div className="field">
      <label htmlFor="order_account_number">Account #</label>
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
      <label htmlFor="order_credit_card_number">CC #</label>
      <input
        type="password"
        name="order[credit_card_number]"
        id="order_credit_card_number"
      />
    </div>
    <div className="field">
      <label htmlFor="order_expiration_date">Expiry</label>
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
    <label htmlFor="order_po_number">PO #</label>
    <input
      type="password"
      name="order[po_number]"
      id="order_po_number"
    />
  </div>
)

export default PayTypeCustomComponent