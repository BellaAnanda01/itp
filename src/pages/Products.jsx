import React, { useEffect, useState } from 'react'
import { FundraiseProducts } from '../data'
import { Link } from 'react-router-dom'
import background from '../assets/background4.png'
import ViewDetail from '../components/ViewDetail'

const Products = () => {
  let [viewDetail, setViewDetail] = useState(false);
  let [theCode, setTheCode] = useState();
  let bundle = FundraiseProducts.filter((element) => element.Category === "Bundle")
  let satuan = FundraiseProducts.filter((element) => element.Category === "Items")

  useEffect(() => {
    window.scrollTo({top: 0, left: 0});
  }, []);
  
  const getDetail = (e, code) => {
    e.preventDefault();
    setTheCode(code)
    setViewDetail(true)
  }

  function formatRupiah(money) {
    return new Intl.NumberFormat('id-ID',
      { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
    ).format(money);
  }

  function getBeli(code) {
    let merch = JSON.parse(localStorage.getItem("merch"));
    if(merch === null) {
      return "Beli"
    } else {
      if(merch[code]) {
        let quantity = 0;
        for (let index = 0; index < merch[code].length; index++) {
          const element = merch[code][index];
          quantity+= element.quantity
        }
        return `${quantity} item`
      } else {
        return "Beli"
      }
    }
  }

  function getTotalPrice() {
    let merch = JSON.parse(localStorage.getItem("merch"));
    if(merch === null) {
      return formatRupiah(0)
    } else {
      let allPrices = [];
      for (const key in merch) {
        if (merch.hasOwnProperty(key)) {
          const items = merch[key];
          for (const item of items) {
            if (item.price) {
              allPrices.push(item.price);
            }
          }
        }
      }

      const totalSum = allPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      return formatRupiah(totalSum)
    }
  }

  return (
    <div>
      <div style={{backgroundImage: `url(${background})`, backgroundAttachment: "fixed", backgroundSize: 'cover', backgroundPosition: "center center", minHeight: "100vh"}}>
          <p style={{
            padding: "20px", margin: 0, fontFamily: 'Sniglet, cursive', letterSpacing: '0.03em', fontSize: "30px"
            }}
            >Our Products (pembelian merch sudah ditutup)</p>
          <form>
            <div style={{marginBottom: "20px"}}>
              <div style={{
                width: "100vw",
                backgroundColor: "#E9E3D7",
                padding: "3px 0"
              }}>
                <p style={{
                  paddingLeft: "20px", margin: 0, fontFamily: "Chewy, cursive", fontSize: "20px", letterSpacing: "0.05em"
                }}>Bundle</p>
              </div>
              <div style={{display: "flex", justifyContent: "center"}}>
              <div style={{marginTop: "20px", display: "grid"}} className='lg:grid-cols-[22vw_22vw_22vw_22vw] md:gap-[1vw] gap-[30px] md:grid-cols-[30vw_30vw] sm:grid-cols-[40vw_40vw] grid-cols-[70vw]'>
            {bundle.map((product) => (
              <div key={product.Code} style={{
                backgroundColor: "#EBEEEF", borderRadius: "35px", padding: "10px", display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: "column"
              }}>
                <label>
                  <div>
                    <img src={product.Picture} alt="" className="md:w-[28vw] lg:w-[20vw] "/>
                    <p style={{
                      fontFamily: "Chewy, cursive", fontSize: "24px", letterSpacing: "0.05em", margin: "5px"
                    }}>{product.Name}</p>
                    <p style={{
                      fontFamily: 'Sniglet, cursive',
                      letterSpacing: '0.03em',
                      fontSize: "15px", margin: 0, marginLeft: "5px"
                    }}>{product.Desc}</p>
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'Sniglet, cursive',
                      letterSpacing: '0.03em',
                      fontSize: "20px",
                      fontWeight: 500,
                      margin: "4px 0 10px 5px"
                    }}>{formatRupiah(product.Price)}</p>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <button style={{
                        backgroundColor: "white",
                        padding: "1px 15px",
                        border: "none",
                        borderRadius: "10px",
                        color: "black",
                        fontFamily: 'Sniglet, cursive',
                        fontSize: "15px",
                        cursor: "pointer"
                      }} onClick={e => {getDetail(e, product.Code)}}>{getBeli(product.Code)}</button>
                    </div>
                  </div>
                </label>
              </div>
            ))}
            </div>
            </div>
            </div>
            <div style={{marginBottom: "20px"}}>
              <div style={{
                width: "100vw",
                backgroundColor: "#E9E3D7",
                padding: "3px 0"
              }}>
                <p style={{
                  paddingLeft: "20px", margin: 0, fontFamily: "Chewy, cursive", fontSize: "20px", letterSpacing: "0.05em"
                }}>Satuan</p>
              </div>
              <div style={{display: "flex", justifyContent: "center"}}>
              <div style={{marginTop: "20px", display: "grid"}} className='lg:grid-cols-[22vw_22vw_22vw_22vw] md:gap-[1vw] gap-[30px] md:grid-cols-[30vw_30vw] sm:grid-cols-[40vw_40vw] grid-cols-[70vw]'>
              {satuan.map((product) => (
              <div key={product.Code} style={{
                backgroundColor: "#EBEEEF", borderRadius: "35px", padding: "10px", display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: "column"
              }}>
                <label>
                  <div>
                    <img src={product.Picture} alt="" className="md:w-[28vw] lg:w-[20vw] "/>
                    <p style={{
                      fontFamily: "Chewy, cursive", fontSize: "24px", letterSpacing: "0.05em", margin: "5px"
                    }}>{product.Name}</p>
                    <p style={{
                      fontFamily: 'Sniglet, cursive',
                      letterSpacing: '0.03em',
                      fontSize: "15px", margin: 0, marginLeft: "5px"
                    }}>{product.Desc}</p>
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'Sniglet, cursive',
                      letterSpacing: '0.03em',
                      fontSize: "20px",
                      fontWeight: 500,
                      margin: "4px 0 10px 5px"
                    }}>{formatRupiah(product.Price)}</p>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <button style={{
                        backgroundColor: "white",
                        padding: "1px 15px",
                        border: "none",
                        borderRadius: "10px",
                        color: "black",
                        fontFamily: 'Sniglet, cursive',
                        fontSize: "15px",
                        cursor: "pointer"
                      }} onClick={e => {getDetail(e, product.Code)}}>{getBeli(product.Code)}</button>
                    </div>
                  </div>
                </label>
              </div>
            ))}
            </div>
            </div>
            </div>
          </form>
          <div style={{
            backgroundColor: "#E9E3D7",
            padding: "20px",
            fontFamily: 'Sniglet, cursive',
            fontSize: "17px",
            paddingRight: "30px",
            textAlign: "right",
            lineHeight: "35px"
          }}>
            <div className="totalPrice">Total Price: {getTotalPrice()}</div>
            <Link to={`/checkout`}><button style={{
              padding: "2px 30px",
              fontFamily: 'Sniglet, cursive',
              fontSize: "17px",
              border: "none",
              backgroundColor: "#ABCCED",
              cursor: "pointer"
            }}>Check Out</button></Link>
          </div>
        </div>
        {viewDetail && <ViewDetail code={theCode} viewDetail={viewDetail} setViewDetail={setViewDetail}/>}
    </div>
  )
}

export default Products
