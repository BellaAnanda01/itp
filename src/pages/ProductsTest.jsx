import React, {useState, useEffect} from 'react'
import { FundraiseProducts } from '../data'
import { Link } from 'react-router-dom'
import background from '../assets/background4.png'

const Products = () => {
    const [productQuantities, setProductQuantities] = useState({});

    useEffect(() => {
      const storedQuantities = localStorage.getItem('productQuantities');
      if (storedQuantities) {
        setProductQuantities(JSON.parse(storedQuantities));
      }
    }, []);
    
    const calculateTotalPrice = () => {
        return FundraiseProducts.reduce((total, product) => {
          const quantity = productQuantities[product.code] || 0;
          return total + quantity * product.price;
        }, 0);
    };

    const calculateTotalItem = () => {
        return FundraiseProducts.reduce((total, product) => {
          const quantity = productQuantities[product.code] || 0;
          return total + quantity;
        }, 0);
    };

    const changeHandle = (productCode, e) => {
        const newQuantities = { ...productQuantities, [productCode]: parseInt(e.target.value, 10) };
        setProductQuantities(newQuantities);
        localStorage.setItem('productQuantities', JSON.stringify(newQuantities));
    };

    const handleIncrement = (productCode, e) => {
        e.preventDefault()
        const newQuantities = { ...productQuantities };
        newQuantities[productCode] = (newQuantities[productCode] || 0) + 1;
        setProductQuantities(newQuantities);
        localStorage.setItem('productQuantities', JSON.stringify(newQuantities));
    };
    
    const handleDecrement = (productCode, e) => {
        e.preventDefault()
        const newQuantities = { ...productQuantities };
        newQuantities[productCode] = Math.max((newQuantities[productCode] || 0) - 1, 0);
        setProductQuantities(newQuantities);
        localStorage.setItem('productQuantities', JSON.stringify(newQuantities));
    };

    const totalPrice = calculateTotalPrice();
    const totalItem = calculateTotalItem();

    let bundle = FundraiseProducts.filter((element) => element.category === "Bundle")
    let satuan = FundraiseProducts.filter((element) => element.category === "Satuan")

    function formatRupiah(money) {
      return new Intl.NumberFormat('id-ID',
        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 } // diletakkan dalam object
      ).format(money);
   }

    return (
        <div>
          <div style={{backgroundImage: `url(${background})`, backgroundAttachment: "fixed", backgroundSize: 'cover', backgroundPosition: "center center", minHeight: "100vh"}}>
          <p style={{
            padding: "20px", margin: 0, fontFamily: 'Sniglet, cursive', letterSpacing: '0.03em', fontSize: "30px"
            }}
            >Our Products</p>
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
              <div key={product.code} style={{
                backgroundColor: "#EBEEEF", borderRadius: "35px", padding: "10px", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: "column"
              }}>
                <label>
                  <img src={`${product.img}`} className="md:w-[28vw] lg:w-[20vw] "/>
                  <p style={{
                    fontFamily: "Chewy, cursive", fontSize: "24px", letterSpacing: "0.05em", margin: "5px"
                  }}>{product.name}</p>
                  <p style={{
                    fontFamily: 'Sniglet, cursive',
                    letterSpacing: '0.03em',
                    fontSize: "15px", margin: 0, marginLeft: "5px"
                  }}>{product.description}</p>
                  <p style={{
                    fontFamily: 'Sniglet, cursive',
                    letterSpacing: '0.03em',
                    fontSize: "20px",
                    fontWeight: 500,
                    margin: 0,
                    margin: "4px 0 10px 5px"
                  }}>{formatRupiah(product.price)}</p>
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
                    }} onClick={(e) => handleDecrement(product.code, e)}>-</button>
                    <input
                      type='number'
                      name={product.code}
                      value={productQuantities[product.code] || 0}
                      onChange={(e) => changeHandle(product.code, e)}
                      style={{
                        width: "30px", 
                        textAlign: "center",
                        backgroundColor: "#EBEEEF",
                        border: "none",
                        color: "black",
                        fontFamily: 'Sniglet, cursive',
                        fontSize: "15px"
                      }}
                      disabled
                    />
                    <button style={{
                      backgroundColor: "white",
                      padding: "1px 15px",
                      border: "none",
                      borderRadius: "10px",
                      color: "black",
                      fontFamily: 'Sniglet, cursive',
                      fontSize: "15px",
                      cursor: "pointer"
                    }} onClick={(e) => handleIncrement(product.code, e)}>+</button>
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
              <div key={product.code} style={{
                backgroundColor: "#EBEEEF", borderRadius: "35px", padding: "10px", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: "column"
              }}>
                <label>
                  <img src={`${product.img}`} className="md:w-[28vw] lg:w-[20vw] "/>
                  <p style={{
                    fontFamily: "Chewy, cursive", fontSize: "24px", letterSpacing: "0.05em", margin: "5px"
                  }}>{product.name}</p>
                  <p style={{
                    fontFamily: 'Sniglet, cursive',
                    letterSpacing: '0.03em',
                    fontSize: "15px", margin: 0, marginLeft: "5px"
                  }}>{product.description}</p>
                  <p style={{
                    fontFamily: 'Sniglet, cursive',
                    letterSpacing: '0.03em',
                    fontSize: "20px",
                    fontWeight: 500,
                    margin: 0,
                    margin: "4px 0 10px 5px"
                  }}>{formatRupiah(product.price)}</p>
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
                    }} onClick={(e) => handleDecrement(product.code, e)}>-</button>
                    <input
                      type='number'
                      name={product.code}
                      value={productQuantities[product.code] || 0}
                      onChange={(e) => changeHandle(product.code, e)}
                      style={{
                        width: "30px", 
                        textAlign: "center",
                        backgroundColor: "#EBEEEF",
                        border: "none",
                        color: "black",
                        fontFamily: 'Sniglet, cursive',
                        fontSize: "15px"
                      }}
                      disabled
                    />
                    <button style={{
                      backgroundColor: "white",
                      padding: "1px 15px",
                      border: "none",
                      borderRadius: "10px",
                      color: "black",
                      fontFamily: 'Sniglet, cursive',
                      fontSize: "15px",
                      cursor: "pointer"
                    }} onClick={(e) => handleIncrement(product.code, e)}>+</button>
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
            padding: "20px",
            paddingRight: "30px",
            textAlign: "right",
            lineHeight: "35px"
          }}>
            <div className="totalPrice"><span style={{display: "none"}}>Total Item:{totalItem}</span>Total Price: {formatRupiah(totalPrice)}</div>
            <Link to={`/checkout2`}><button style={{
              padding: "2px 30px",
              fontFamily: 'Sniglet, cursive',
              fontSize: "17px",
              border: "none",
              backgroundColor: "#ABCCED",
              cursor: "pointer"
            }}>Check Out</button></Link>
          </div>
          </div>
        </div>
    );
}

export default Products