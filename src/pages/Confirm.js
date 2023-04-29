import React from 'react'
import { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';




const Confirm = () => {

  https://code.jquery.com/jquery-1.12.4.min.js

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api-test.eximbay.com/v1/javascriptSDK.js";
    script.async = true;
    document.body.appendChild(script);


    const script1 = document.createElement("script");
    script1.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    script1.async = true;
    document.body.appendChild(script1);

  });

  
  const [paymentObject, setPaymentObject] = useState({
    "fgkey": "1B5FD4B1E6DA47DC5E64D704319CC5874F1CF90C97464BC43DC04DAD7644F333",
    "payment": {
      "transaction_type": "PAYMENT",
      "order_id": "123123",
      "currency": "KRW",
      "amount": "1000",
      "lang": "EN"
    },
    "merchant": {
      "mid": "2B0AF30BE0"
    },
    "buyer": {
      "name": "samuel",
      "email": "samuel@ssg.com"
    },
    "url": {
      "return_url": "https://secureapi.test.eximbay.com/paytest/demo/returnurl.jsp",
      "status_url": "https://secureapi.test.eximbay.com/paytest/demo/status.jsp"
    }
  });



  const payment = () =>
  {
    EXIMBAY.request_pay(
      paymentObject
    );
    console.log("hello");
  }






  return (
    
      <div className="main">
        <div className="form">

          <h2 className="title">결제 준비</h2>
          <b>POST</b>/v1/payments/ready
          <div className="form-className">
            <div className="form-floating">
              <input type="hidden" className="form-control" v-model="paymentObject.fgkey" placeholder="fgkey"/>
                <label for="floatingInput">fgkey</label>
            </div>

            <div className="form-floating">
              <select className="form-select" v-model="paymentObject.payment.transaction_type">
                <option value="PAYMENT" selected>PAYMENT</option>
                <option value="READY">READY</option>
                <option value="CONFIRM">CONFRIM</option>
              </select>
              <label for="floatingInput">txnType</label>
            </div>


            <div className="form-floating">
              <select className="form-select" v-model="paymentObject.payment.currency">
                <option value="KRW" selected>KRW</option>
                <option value="USD">USD</option>
                <option value="MYR">MYR</option>
              </select>
              <label for="floatingInput">Currency</label>
            </div>

            <div className="form-floating">
              <input type="text" className="form-control" v-model="paymentObject.payment.amount" placeholder="amount" />
              <label for="floatingInput">amount</label>
            </div>


            <div className="form-floating">
              <select className="form-select" v-model="paymentObject.payment.lang">
                <option value="EN" selected>EN</option>
                <option value="KR">KR</option>
              </select>
              <label for="floatingInput">Lang</label>
            </div>

            <div className="form-floating">
              <input type="text" className="form-control" v-model="paymentObject.merchant.mid" placeholder="mid" />
              <label for="floatingInput">mid</label>
            </div>

            <div className="form-floating">
              <input type="text" className="form-control" v-model="paymentObject.buyer.name" placeholder="order_id" />
              <label for="floatingInput">order_id</label>
            </div>


            <div className="form-floating">
              <input type="email" className="form-control" v-model="paymentObject.buyer.email" placeholder="email" />
              <label for="floatingInput">email</label>
            </div>

            <div className="form-floating">
              <input type="text" className="form-control" v-model="paymentObject.url.return_url" placeholder="return_url" />
              <label for="floatingInput">return_url</label>
            </div>

            <div className="form-floating">
              <input type="text" className="form-control" v-model="paymentObject.url.status_url" placeholder="status_url" />
              <label for="floatingInput">status_url</label>
            </div>

          <Button onClick={payment}>HELLO</Button>
          </div>
        </div>
        </div>
      
      )
}

      export default Confirm