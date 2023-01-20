import React from "react";
import "./header.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';
import { Link } from "react-router-dom";


function Header(){
    
    return (
        <div>
            <div className="header container mt-3 mb-3">
                <div className="row head align-items-center">
                    {/* EasyB2B logo */}
                    <div className="col-auto">
                        <img src="assets/logo2.png" className="head-logo"/>
                    </div>
                    {/* Search bar */}
                    <div className="col-6 search-bar align-items-center">
                        <div className="row mt-1">
                            <input className="col-11" type="text" placeholder="O que você está procurando?" id="search-bar" />
                            <button className="col-1 search-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
                            </button>     
                        </div>
                    </div>
                    {/* User profile */}
                    <div className="col-auto">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-5 space-fix">
                                <img src="assets/perfil.png" className="profile-pic rounded-circle text-right"/>
                            </div>
                            <div className="col-7">
                                <p className="username">Olá, Usuário</p>
                                <div className="d-flex align-items-center my-account-login">
                                    <p>minha conta</p>  
                                </div>
                            </div>  
                        </div>
                    </div>
                    {/* User branch */}
                    <div className="col-auto">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-3 location-fix">
                                <img src="assets/icons/location-dot-solid.svg" className="location-icon"/>
                            </div>
                            <div className="col-9">
                                <p className="m-0 branch-name">RAIA 021</p>
                            </div>
                        </div>
                    </div>
                    {/* Cart info */}
                    <div className="col-auto d-inline-block">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="cart-dropdown" align="end">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-4 px-1">
                                        <img src="assets/icons/cart-shopping-solid.svg" className="cart-icon" />
                                        <div className="badge">
                                            <span className="badge-value">1</span>
                                        </div>
                                    </div>
                                    <div className="col-8 p-0">
                                        <div>
                                            <p className="cart-total mb-0">TOTAL: R$ <span>7.235,00</span></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <p className="cart-balance mb-0">SALDO: R$ <span>9.000,00</span></p> 
                                        </div>
                                    </div>      
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="drop-menu p-0">
                                <div>
                                    <div className="cart-dropdown-header">
                                        <h3>Meu carrinho</h3>
                                        <p>Saldo: R$630.00</p>
                                    </div>
                                    <div className="cart-dropdown-products">
                                        <div className="cart-product d-flex justify-content-center mb-2">
                                            <div className="cart-product-img">
                                                <img src="assets/produto_0.png"/>
                                            </div>
                                            <div className="cart-product-name px-1">
                                                <label className="d-inline-block">BOBINA PARA CALCULADORA</label>
                                                <span>Quantidade: 3</span>
                                                <p>R$128,20</p>
                                            </div>
                                            <div className="cart-product-delete d-grid align-content-center px-1">
                                                <button><img src="assets/icons/close.svg" /></button>
                                            </div>
                                        </div>
                                        <div className="cart-product d-flex justify-content-center mb-2">
                                            <div className="cart-product-img">
                                                <img src="assets/produto1.jpg"/>
                                            </div>
                                            <div className="cart-product-name px-1">
                                                <label className="d-inline-block">BOBINA PARA CALCULADORA</label>
                                                <span>Quantidade: 3</span>
                                                <p>R$128,20</p>
                                            </div>
                                            <div className="cart-product-delete d-grid align-content-center px-1">
                                                <button><img src="assets/icons/close.svg" /></button>
                                            </div>
                                        </div>
                                        <div className="cart-product d-flex justify-content-center mb-2">
                                            <div className="cart-product-img">
                                                <img src="assets/produto2.jpg"/>
                                            </div>
                                            <div className="cart-product-name px-1">
                                                <label className="d-inline-block">BOBINA PARA CALCULADORA</label>
                                                <span>Quantidade: 3</span>
                                                <p>R$128,20</p>
                                            </div>
                                            <div className="cart-product-delete d-grid align-content-center px-1">
                                                <button><img src="assets/icons/close.svg" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-dropdown-total">
                                        <div className="d-flex align-items-center">
                                            <p className="d-block">Total</p>
                                            <p className="d-block">R$7.230,00</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-around mt-2">
                                            <Link to="/Checkout" className="btn-cart-link"><button className="btn-finish w-100">Finalizar</button></Link>
                                            <button className="btn-basket">Editar cesta</button>
                                        </div>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>

            {/* Menu navbar */}
            <div className="header menu py-2 px-5">
                <div className="row">
                    <div className="col-1">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-3">
                                <img src="assets/icons/align-right-solid.svg" className="filter-icon" />
                            </div>
                            <div className="col-9">
                                <p className="filter m-0">Filtro</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-11 white align-self-center">
                        <div className="row align-items-center justify-content-center menu-item">
                            <div className="col-auto">COMPRE POR DEPARTAMENTO</div>
                            <div className="col text-center">Produtos</div>
                            <div className="col text-center">Item de Menu</div>
                            <div className="col text-center">Item de Menu</div>
                            <div className="col text-center">Item de Menu</div>
                            <div className="col text-center">Item de Menu</div>
                            <div className="col text-center">Item de Menu</div>
                            <div className="col text-center">Item de Menu</div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Floating lateral carts */}
            <div className="d-grid floating-carts">
                <CDropdown variant="btn-group" direction="dropstart" className="mb-1" autoClose={false}>
                    <CDropdownToggle className="btn-cart1">
                        <img src="assets/icons/cart-shopping-white.svg" className="float-img"/>
                        <p className="cart-title">Pedido 1</p>
                    </CDropdownToggle>
                    <CDropdownMenu className="drop-float-menu">
                        <CDropdownItem className="floating-cart-menu d-flex justify-content-around">
                            <div className="cart-float-img">
                                <img src="assets/produto_0.png" />
                            </div>
                            <div className="cart-float-info">
                                <div className="cart-float-info1">
                                    <p className="mb-0 p-0">NOME DO PRODUTO ESCOLHIDO FORNECEDOR 1</p>
                                    <span>(COD.234252) 
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-regular.svg" />
                                    </span>
                                    <form className="mt-2">
                                        <select className="form-select">
                                            <option>Forma de pagamento</option>
                                            <option>Crédito</option>
                                            <option>Débito</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="cart-float-info2">
                                    <p>Escolha um fornecedor abaixo e confirme</p>
                                </div>
                                <div className="cart-float-info3">
                                    <div>
                                        <ul className="float-cart-tabs">
                                            <li>
                                                <div className="d-flex h-100 align-items-center justify-content-center">
                                                    <div className="text-center form-check mx-1">
                                                        <input type="checkbox" className="form-check-input" />
                                                    </div>
                                                    <div className="tabs-info h-100 flex-grow-1 d-grid align-items-center">
                                                        <p className="m-0 p-0">Nome fornecedor 1</p>
                                                        <p className="tab-price m-0 p-0">R$375,20</p>
                                                        <p className="m-0 p-0">Frete: R$12,00</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex h-100 align-items-center justify-content-center">
                                                    <div className="text-center form-check mx-1">
                                                        <input type="checkbox" className="form-check-input" />
                                                    </div>
                                                    <div className="tabs-info h-100 flex-grow-1 d-grid align-items-center">
                                                        <p className="m-0 p-0">Nome fornecedor 2</p>
                                                        <p className="tab-price m-0 p-0">R$375,20</p>
                                                        <p className="m-0 p-0">Frete: R$12,00</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex h-100 align-items-center justify-content-center">
                                                    <div className="text-center form-check mx-1">
                                                        <input type="checkbox" className="form-check-input" />
                                                    </div>
                                                    <div className="tabs-info h-100 flex-grow-1 d-grid align-items-center">
                                                        <p className="m-0 p-0">Nome fornecedor 3</p>
                                                        <p className="tab-price m-0 p-0">R$375,20</p>
                                                        <p className="m-0 p-0">Frete: R$12,00</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="tab-selected d-flex justify-content-center align-items-center">
                                            <div className="text-center h-auto">
                                                <p>Vendido e entregue por <span>fornecedor 1</span></p>
                                                <h3 className="mt-2 mb-1">R$453,65</h3>
                                                <p>8x de R$56,70 sem juros</p>
                                                <button className="mt-3 pl-2 pr-2"><img src="assets/icons/cart-shopping-white.svg" /> CONFIRMAR FORNECEDOR</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>

                <CDropdown variant="btn-group" direction="dropstart" className="mb-1" autoClose={false}>
                    <CDropdownToggle className="btn-cart2">
                        <img src="assets/icons/cart-shopping-white.svg" className="float-img"/>
                        <p className="cart-title">Pedido 2</p>
                    </CDropdownToggle>
                    <CDropdownMenu className="drop-float-menu2">
                        <CDropdownItem className="floating-cart-menu">
                            <div className="row text-center mb-5">
                                <h5 className="p-0 m-0 mt-1">
                                    <span className="order1">PEDIDO 1: </span>
                                    <span className="order2">9 PRODUTOS NO CARRINHO</span>
                                </h5>
                                <button className="btn-more-details">+DETALHES</button>
                            </div>
                            <div className="row float-cart-table pt-3">
                                <div className="table-cel col-12 col-md-3 m-0 p-0">
                                    <div className="d-grid justify-content-center align-items-center align-content-center cel00">
                                        <p className="cel00-p m-0 p-0">Filtrar por:</p>
                                        <p className="m-0 p-0">Forma de pagmento <img src="assets/arrow-down.svg"/></p>
                                    </div>
                                    <div className="cel0"><span>Pagamento</span></div>
                                    <div className="cel0"><span>Tempo de entrega</span></div>
                                    <div className="cel0"><span>Pedido mínimo</span></div>
                                    <div className="cel0"><span>Avaliação</span></div>
                                    <div className="cel05"></div>
                                </div>
                                <div className="table-cel col-md-3 m-0 p-0">
                                    <div className="cel10 d-grid justify-content-center align-items-center">
                                        <p className="m-0 p-0">NOME DO FORNECEDOR 1</p>
                                        <p className="m-0 p-0 cel10-price">
                                            <span className="pricers">R$  </span>
                                            <span>224,20</span>
                                        </p>
                                    </div>
                                    <div className="cel11"></div>
                                    <div className="cel1">
                                        <p className="m-0 p-0">Até 6 Vezes</p>
                                        <span>sem juros</span>
                                    </div>
                                    <div className="cel1">
                                        <p className="m-0 p-0">6 dias úteis</p>
                                        <span>Sedex 10</span>
                                    </div>
                                    <div className="cel1 d-flex justify-content-evenly">
                                        <div className="bar">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <img src="assets/icons/question-solid.svg" className="question-svg"/>
                                    </div>
                                    <div className="cel1 d-flex justify-content-center cel1-stars">
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-regular.svg" />
                                    </div>
                                    <div className="cel16">
                                        <button className="btn-buy"><img src="assets/icons/cart-shopping-white.svg"/>COMPRAR</button>
                                    </div>
                                </div>
                                <div className="table-cel col-md-3 m-0 p-0">
                                    <div className="cel10 d-grid justify-content-center align-items-center">
                                        <p className="m-0 p-0">NOME DO FORNECEDOR 2</p>
                                        <p className="m-0 p-0 cel10-price">
                                            <span className="pricers">R$  </span>
                                            <span>331,58</span>
                                        </p>
                                    </div>
                                    <div className="cel11"></div>
                                    <div className="cel1">
                                        <p className="m-0 p-0">Até 8 Vezes</p>
                                        <span>sem juros</span>
                                    </div>
                                    <div className="cel1">
                                        <p className="m-0 p-0">12 dias úteis</p>
                                        <span>PAC</span>
                                    </div>
                                    <div className="cel1 d-flex justify-content-evenly">
                                        <div className="bar">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <img src="assets/icons/question-solid.svg" className="question-svg"/>
                                    </div>
                                    <div className="cel1 d-flex justify-content-center cel1-stars">
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-regular.svg" />
                                    </div>
                                    <div className="cel16">
                                        <button className="btn-buy"><img src="assets/icons/cart-shopping-white.svg"/>COMPRAR</button>
                                    </div>
                                </div>
                                <div className="table-cel col-md-3 m-0 p-0 c-active">
                                    <div className="cel10 d-grid justify-content-center align-items-center">
                                        <p className="m-0 p-0">NOME DO FORNECEDOR 3</p>
                                        <p className="m-0 p-0 cel10-price">
                                            <span className="pricers">R$  </span>
                                            <span>221,88</span>
                                        </p>
                                    </div>
                                    <div className="cel11"></div>
                                    <div className="cel1">
                                        <p className="m-0 p-0 white">Até 10 Vezes</p>
                                        <span className="white">com juros</span>
                                    </div>
                                    <div className="cel1">
                                        <p className="m-0 p-0 white">5 dias úteis</p>
                                        <span className="white">Sedex</span>
                                    </div>
                                    <div className="cel1 d-flex justify-content-evenly">
                                        <div className="bar">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <img src="assets/icons/question-solid.svg" className="question-svg"/>
                                    </div>
                                    <div className="cel1 d-flex justify-content-center cel1-stars">
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-regular.svg" />
                                    </div>
                                    <div className="cel16">
                                        <button className="btn-buy-select"><img src="assets/icons/cart-shopping-white.svg"/>COMPRAR</button>
                                    </div>
                                </div>
                            </div>
                        </CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>

                <CDropdown variant="btn-group" direction="dropstart" className="mb-1">
                    <CDropdownToggle>
                        <img src="assets/icons/cart-shopping-white.svg" className="float-img"/>
                        <p className="cart-title">Pedido 3</p>
                    </CDropdownToggle>
                </CDropdown>
            </div>
        </div>
    )
}


export default Header