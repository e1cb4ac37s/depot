import React, { useState } from 'react'

import PayTypeCustomComponent from './PayTypeCustomComponent'

const PayTypeSelector = () => {
  const [selectedPayType, setSelectedPayType] = useState('')
  const onPayTypeSelected = e => {
    setSelectedPayType(e.target.value)
  }

  return (
    <>
      <div className="field">
        <label htmlFor="order_pay_type">Pay type</label>
        <select name="order[pay_type]" id="order_pay_type" onChange={onPayTypeSelected}>
          <option value="">Select a payment method</option>
          <option value="Check">Check</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Purchase Order">Purchase Order</option>
        </select>
      </div>
      <PayTypeCustomComponent selectedPayType={selectedPayType} />
    </>
  )
}

export default PayTypeSelector