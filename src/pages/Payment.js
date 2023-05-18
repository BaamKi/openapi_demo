import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Button } from 'react-bootstrap'

const Payment = () => {


  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api-test.eximbay.com/v1/javascriptSDK.js";
    script.id ="sdkDomain"
    document.head.appendChild(script);  
  }, []);

  ///   결제 준비 요청 URL
  let readyUrl = "https://api-test.eximbay.com/v1/payments/ready"
  
  const readyBody = { "readybody": "" };


  ///   헤더 값, Postman : Headers 값
  const Headers = {
    headers: {       
      "Content-Type": 'application/json',
      "Authorization": 'Basic dGVzdF9DMkZBMUY1ODQ4OUMxNTg0MTk5Qjo='
    }
  };

  /// fgkey
  const [fgkey, setFgkey] = useState("")
  /// domain
  const domain = "TEST"

  const domainValueHandler = (e) => {
      console.log(e.target.value);
      if(e.target.value ==="TEST")
      {
        const script = document.createElement("script");
        script.src = "https://api-test.eximbay.com/v1/javascriptSDK.js";
        script.id ="sdkDomain"
        document.head.appendChild(script);  
        console.log(script.src)
  
      }else if(e.target.value === "REAL")
      {
        const script = document.createElement("script");
        script.src = "https://api.eximbay.com/v1/javascriptSDK.js";
        script.id ="sdkDomain"
        document.head.appendChild(script);  
        console.log(script.src)
      }

  }

  const [payment, setPayment] = useState(() => ({
    transaction_type: "PAYMENT",
    order_id: "KOBE_TEST",
    currency: "USD",
    amount: "1",
    lang: "EN",
  }))

  const paymentValueHandler = (e) => {
    setPayment(
      {
        ...payment,
        [e.target.name]: e.target.value
      }
    )
  }

  const [merchant, setMerchant] = useState(() => ({
    mid: "3474153615"
  }))

  const merchantValueHandler = (e) => {
    setMerchant(
      {
        ...merchant,
        [e.target.name]: e.target.value
      }
    )
  }

  const [url, setUrl] = useState(() => ({
    return_url: "https://secureapi.test.eximbay.com/paytest/demo/returnurl.jsp",
    status_url: "https://secureapi.test.eximbay.com/paytest/demo/status.jsp"
  }))

  const urlValueHandler = (e) => {
    setUrl(
      {
        ...url,
        [e.target.name]: e.target.value
      }
    )
  }

  const [buyer, setBuyer] = useState(() => ({
    name: "kobe",
    email: "kobe123@eximbay.com"
  }))

  const buyerValueHandler = (e) => {
    setBuyer(
      {
        ...buyer,
        [e.target.name]: e.target.value
      }
    )
  }

  const [tax, setTax] = useState(() => ({

  }))

  const taxValueHandler = (e) => {
    setTax(
      {
        ...tax,
        [e.target.name]: e.target.value
      }
    )
  }

  const [other_param, setOther_param] = useState(() => ({
    param1: "param1",
    param2: "param2"
  }))

  const paramValueHandler = (e) => {
    setOther_param(
      {
        ...other_param,
        [e.target.name]: e.target.value
      }
    )
  }

  const [product, setProduct] = useState(() => ([{
    name: "test_product",
    quantity: "1",
    unit_price: "500",
    link: "www.kopenmarket.com"
  }]))

  const productValueHandler = (e) => {
    setProduct(
      {
        ...product,
        [e.target.name]: e.target.value
      }
    )
  }

  const [surcharge, setSurcharge] = useState(() => ([{

  }]))

  const surchargeValueHandler = (e) => {
    setSurcharge(
      {
        ...surcharge,
        [e.target.name]: e.target.value
      }
    )
  }

  const [settings, setSettings] = useState(() => ({

  }))

  const settingsValueHandler = (e) => {
    setSettings(
      {
        ...settings,
        [e.target.name]: e.target.value
      }
    )
  }

  /// 결제 준비, Postman : Send
  const ready = () => {

    const readyObject = {
      payment,
      merchant,
      url,
      buyer,
      tax,
      other_param,
      product,
      surcharge,
      settings
    }

    Axios.post(readyUrl, readyObject, Headers)   // Axios를 통해 앞서 설정한 Url, confirmBody, Headers설정을 받아서 Post 요청 진행
      .then((res) => {
        setFgkey(() => res.data.fgkey)          // res는 axios 요청 이후 엑심베이에서 응답 주는 값, res.data.fgkey는 결제 준비 응닶 fgkey 값  
        // fgkey = res.data.fgkey;
      })
      .catch(err => {
        console.log(JSON.stringify(readyBody, null, 2))           // 에러 나면 에러 출력
        console.log(err.response.data.message);
      });
  }

  // const test = () =>
  // {
  //   console.log(Headers);
  //   var serverDomain = document.getElementById("sdkDomain");
    
  //   if(domain ==="TEST")
  //   {
  //     serverDomain.src ="https://api-test.eximbay.com/v1/javascriptSDK.js"
  //     readyUrl ="https://api-test.eximbay.com/v1/payments/ready"
  //     // console.log("테스트 입니다. :" + serverDomain.src + "readyURL" + readyUrl)
  //     console.log("readyURL" + readyUrl)

  //   }else if(domain === "REAL")
  //   {
  //     serverDomain.src ="https://api.eximbay.com/v1/javascriptSDK.js"
  //     readyUrl ="https://api.eximbay.com/v1/payments/ready"
  //     console.log("readyURL" + readyUrl)
  //   }

  //   console.log(serverDomain)
  //   location.reload();
  //   // const domain = document.getElementById("sdkDomain");
  //   // console.log(domain.src)
  // }




  /// 결제 준비, Postman : Send
  const callSDK = () => {
    ready()
    // 엑심베이 SDK를 불러오기 위한 eslint-disable-next-line 설정
    // eslint-disable-next-line
    EXIMBAY.request_pay(
      {
        fgkey,
        payment,
        merchant,
        url,
        buyer,
        tax,
        other_param,
        product,
        surcharge,
        settings
      }
    );
  }


  return (

      <div className="main">
        <div className="form">
          <br />
          <h2 className="title">결제</h2><br />
          <Button style={{ marginRight: "10px" }} onClick={ready}>fgkey 생성</Button>
          <Button onClick={callSDK}>SDK 호출</Button><br /><br />
          {/* <Button onClick={test}>test</Button><br /><br /> */}
          {/* <Button onClick={payment}>결제</Button><br /><br/> */}

          <div className="form-class">

            {/** ------------- TEST or REAL ------------ **/}

          <select className="form-select" name='domain' onChange={domainValueHandler} >
                <option value="TEST">TEST</option>
                <option value="REAL">REAL</option>
                
          </select>


            {/** ------------- fgkey ------------ **/}

            <label htmlFor="exampleFormControlInput1" className="form-label" id="fgkey">fgkey : {fgkey}</label>

            {/** ------------- Payment ------------ **/}
            <div className="accordion mb-2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingPayment">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePayment" aria-expanded="true" aria-controls="collapsePayment">
                    payment
                  </button>
                </h2>
                <div id="collapsePayment" className="accordion-collapse collapse show" aria-labelledby="headingPayment" data-bs-parent="#accordionPayment">
                  <div className="accordion-body">
                    {/** transaction_type **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">transaction_type</label>
                      <input type="text" className="form-control" name='transaction_type' onChange={paymentValueHandler} value={payment.transaction_type || ""} />
                    </div>

                    {/** order_id **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">order_id</label>
                      <input type="text" className="form-control" name='order_id' onChange={paymentValueHandler} value={payment.order_id || ""} />
                    </div>

                    {/** currency **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">currency</label>
                      <input type="text" className="form-control" name='currency' onChange={paymentValueHandler} value={payment.currency || ""} />
                    </div>

                    {/** amount **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">amount</label>
                      <input type="text" className="form-control" name='amount' onChange={paymentValueHandler} value={payment.amount || ""} />
                    </div>

                    {/** lang **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">lang</label>
                      <input type="text" className="form-control" name='lang' onChange={paymentValueHandler} value={payment.lang || ""} />
                    </div>

                    {/** payment_method **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" >payment_method</label>
                      <input type="text" className="form-control" name='payment_method' onChange={paymentValueHandler} value={payment.payment_method || ""} />
                    </div>

                    {/** multi_payment_method 필수 X **/}

                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" >multi_payment_method</label>
                      <input type="text" className="form-control" name='multi_payment_method' onChange={paymentValueHandler} value={payment.multi_payment_method || ""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/** ------------- merchant ------------ **/}
            <div className="accordion mb-2" >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingMerchant">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMerchant" aria-expanded="true" aria-controls="collapseMerchant">
                    merchant
                  </button>
                </h2>
                <div id="collapseMerchant" className="accordion-collapse collapse show" aria-labelledby="headingMerchant" data-bs-parent="#accordionMerchant">
                  <div className="accordion-body">

                    {/** mid **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">mid</label>
                      <input type="text" className="form-control" name='transaction_type' onChange={merchantValueHandler} value={merchant.mid || ""} />
                    </div>

                    {/** shop **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">shop</label>
                      <input type="text" className="form-control" name='shop' onChange={merchantValueHandler} value={merchant.shop || ""} />
                    </div>

                    {/** partner_code **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">partner_code</label>
                      <input type="text" className="form-control" name='partner_code' onChange={merchantValueHandler} value={merchant.partner_code || ""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/** ------------- Url ------------ **/}
            <div className="accordion mb-2" >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingUrl">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUrl" aria-expanded="true" aria-controls="collapseUrl">
                    url
                  </button>
                </h2>
                <div id="collapseUrl" className="accordion-collapse collapse show" aria-labelledby="headingUrl" data-bs-parent="#accordionUrl">
                  <div className="accordion-body">
                    {/** return_url **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">return_url</label>
                      <input type="text" className="form-control" name='return_url' onChange={urlValueHandler} value={url.return_url || ""} />
                    </div>
                    {/** status_url **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">status_url</label>
                      <input type="text" className="form-control" name='status_url' onChange={urlValueHandler} value={url.status_url || ""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion mb-2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingBuyer">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBuyer" aria-expanded="true" aria-controls="collapseBuyer">
                    buyer
                  </button>
                </h2>
                <div id="collapseBuyer" className="accordion-collapse collapse show" aria-labelledby="headingBuyer" data-bs-parent="#accordionBuyer">
                  <div className="accordion-body">

                    {/** name **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">name</label>
                      <input type="text" className="form-control" name='name' onChange={buyerValueHandler} value={buyer.name || ""} />
                    </div>
                    {/** phone_number 필수 X **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">phone_number</label>
                      <input type="text" className="form-control" name='phone_number' onChange={buyerValueHandler} value={buyer.phone_number || ""} />
                    </div>
                    {/** email **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">email</label>
                      <input type="text" className="form-control" name='name' onChange={buyerValueHandler} value={buyer.email || ""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/** ------------- tax ------------ **/}
            <div className="accordion mb-2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTax">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTax" aria-expanded="false" aria-controls="collapseTax">
                    tax
                  </button>
                </h2>
                <div id="collapseTax" className="accordion-collapse collapse " aria-labelledby="headingTax" data-bs-parent="#accordionTax">
                  <div className="accordion-body">
                    {/** amount_tax_free **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" >amount_tax_free</label>
                      <input type="text" className="form-control" name='amount_tax_free' onChange={taxValueHandler} value={tax.amount_tax_free || ""} />
                    </div>

                    {/** amount_taxable **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" >amount_taxable</label>
                      <input type="text" className="form-control" name='amount_taxable' onChange={taxValueHandler} value={tax.amount_taxable || ""} />
                    </div>

                    {/** amount_vat **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" >amount_vat</label>
                      <input type="text" className="form-control" name='amount_vat' onChange={taxValueHandler} value={tax.amount_vat || ""} />
                    </div>

                    {/** amount_service_fee **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" >amount_service_fee</label>
                      <input type="text" className="form-control" name='amount_service_fee' onChange={taxValueHandler} value={tax.amount_service_fee || ""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/** ------------- other_param ------------ **/}
            <div className="accordion mb-2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingParam">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseParam" aria-expanded="false" aria-controls="collapseParam">
                    other_param
                  </button>
                </h2>
                <div id="collapseParam" className="accordion-collapse collapse" aria-labelledby="headingProduct" data-bs-parent="#accordionParam">
                  <div className="accordion-body">
                    {/** amount_tax_free **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">param1</label>
                      <input type="text" className="form-control" name='param1' onChange={paramValueHandler} value={other_param.param1 || ""} />
                    </div>

                    {/** amount_tax_free **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">param2</label>
                      <input type="text" className="form-control" name='param2' onChange={paramValueHandler} value={other_param.param2 || ""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/** ------------- product ------------ **/}
            <div className="accordion mb-2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingProduct">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProduct" aria-expanded="true" aria-controls="collapseProduct">
                    product
                  </button>
                </h2>
                <div id="collapseProduct" className="accordion-collapse collapse show" aria-labelledby="headingTax" data-bs-parent="#accordionProduct">
                  <div className="accordion-body">
                    {/** product.name **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">name</label>
                      <input type="text" className="form-control" name='name' onChange={productValueHandler} value={product.name || ""} />
                    </div>

                    {/** product.quantity **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">quantity</label>
                      <input type="text" className="form-control" name='quantity' onChange={productValueHandler} value={product.quantity || ""} />
                    </div>

                    {/** product.unit_price **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">unit_price</label>
                      <input type="text" className="form-control" name='unit_price' onChange={productValueHandler} value={product.unit_price || ""} />
                    </div>

                    {/** product.link **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">link</label>
                      <input type="text" className="form-control" name='link' onChange={productValueHandler} value={product.link || ""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/** ------------- surcharge ------------ **/}
            <div className="accordion mb-2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSurcharge">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSurcharge" aria-expanded="false" aria-controls="collapseSurcharge">
                    surcharge
                  </button>
                </h2>
                <div id="collapseSurcharge" className="accordion-collapse collapse" aria-labelledby="headingSurcharge" data-bs-parent="#accordionSurcharge">
                  <div className="accordion-body">
                    {/** surcharge.name **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">name</label>
                      <input type="text" className="form-control" name='name' onChange={surchargeValueHandler} value={surcharge.name || ""} />
                    </div>

                    {/** surcharge.quantity **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">quantity</label>
                      <input type="text" className="form-control" name='quantity' onChange={surchargeValueHandler} value={surcharge.quantity || ""} />
                    </div>

                    {/** surcharge.unit_price **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">unit_price</label>
                      <input type="text" className="form-control" name='unit_price' onChange={surchargeValueHandler} value={surcharge.unit_price || ""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/** ------------- settings ------------ **/}
            <div className="accordion mb-2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSettings">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSettings" aria-expanded="false" aria-controls="collapseSettings">
                    settings
                  </button>
                </h2>
                <div id="collapseSettings" className="accordion-collapse collapse" aria-labelledby="headingSettings" data-bs-parent="#accordionSettings">
                  <div className="accordion-body">
                    {/** display_type **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">display_type</label>
                      <input type="text" className="form-control" name='display_type' onChange={settingsValueHandler} value={settings.display_type || ""} />
                    </div>

                    {/** autoclose **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">autoclose</label>
                      <input type="text" className="form-control" name='autoclose' onChange={settingsValueHandler} value={settings.autoclose || ""} />
                    </div>

                    {/** site_foreign_currency **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">site_foreign_currency</label>
                      <input type="text" className="form-control" name='site_foreign_currency' onChange={settingsValueHandler} value={settings.site_foreign_currency || ""} />
                    </div>


                    {/** call_from_app **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">call_from_app</label>
                      <input type="text" className="form-control" name='call_from_app' onChange={settingsValueHandler} value={settings.call_from_app || ""} />
                    </div>

                    {/** call_from_scheme **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">call_from_scheme</label>
                      <input type="text" className="form-control" name='call_from_scheme' onChange={settingsValueHandler} value={settings.call_from_scheme || ""} />
                    </div>

                    {/** issuer_country **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">issuer_country</label>
                      <input type="text" className="form-control" name='issuer_country' onChange={settingsValueHandler} value={settings.issuer_country || ""} />
                    </div>

                    {/** ostype **/}
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label" id="essential">ostype</label>
                      <input type="text" className="form-control" name='ostype' onChange={settingsValueHandler} value={settings.ostype || ""} />
                    </div>
                  </div>
                </div>
              </div>
            </div><br />
          </div>


        </div>
        <div className="preview">

          {/** other_param **/}

          <label id="objectName" type="button" data-bs-toggle="collapse" data-bs-target="#otherCollapse" aria-expanded="false" aria-controls="collapseExample">
            ▼ SHOW JSON FORMAT
          </label><br /><br />

          <div className="collapse" id="otherCollapse">
            <div className="json_preview">
              <pre>
                {JSON.stringify({
                  fgkey,
                  payment,
                  merchant,
                  url,
                  buyer,
                  tax,
                  other_param,
                  product,
                  surcharge,
                  settings
                }, null, 2)}<br /><br /><br /><br />
              </pre>
            </div>
          </div>
        </div>
      </div>
  
  )
}
export default Payment