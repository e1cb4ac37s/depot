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
        <label htmlFor="order_pay_type">{I18n.t('orders.form.pay_type')}</label>
        <select name="order[pay_type]" id="order_pay_type" onChange={onPayTypeSelected}>
          <option value="">{I18n.t('orders.form.pay_prompt_html')}</option>
          <option value="Check">{I18n.t('orders.form.pay_types.check')}</option>
          <option value="Credit Card">{I18n.t('orders.form.pay_types.credit_card')}</option>
          <option value="Purchase Order">{I18n.t('orders.form.pay_types.purchase_order')}</option>
        </select>
      </div>
      <PayTypeCustomComponent selectedPayType={selectedPayType} />
    </>
  )
}

export default PayTypeSelector