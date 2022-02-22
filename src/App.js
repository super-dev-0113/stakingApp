import { useState } from 'react';
import './App.css';


function App() {
  const [active, setActive] = useState(false)

  const toggleHeader = () => {
    setActive(!active)
  }

  return (
    <div className="App">
      <header className={`header ${active?'active':''}`} id="header">
        <div className="content">
            <div className="header-toggle-con _sp">
                <div className={`header-toggle _sp ${active?'active':''}`} id="header_toggle" onClick={toggleHeader}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="header-menu-con">
                <ul id="menu_list" className={`menu-lists ${active?'active':''}`}>
                    <li>
                        <a href="#">home
                            <div className="hover-effect">
                            
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">medium
                            <div className="hover-effect">
                            
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">story
                            <div className="hover-effect">
                            
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">whitepaper
                            <div className="hover-effect">
                            
                            </div>
                        </a>
                    </li>
                    <li className="header-logo">
                        <a href="#"><img className="logo-img" src="./image/SA_TCG_NFT_logo.png" alt=""/></a>
                    </li>
                    <li>
                        <a href="#" className="active">expeditions
                            <div className="hover-effect">
                            
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">faq
                            <div className="hover-effect">
                            
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">social
                            <div className="hover-effect">
                            
                            </div>
                        </a>
                    </li>
                    <li className="_pc">
                        <button className="main-btn">connect</button>
                    </li>
                </ul>
                <div className="header-connect-btn _sp">
                    <button className="main-btn">connect</button>
                </div>
            </div>
        </div>
    </header>
    <main className="main">
        <section className="sec1">
            <div className="content">
                <div className="sec1-header">
                    <div className="main-title">
                        expeditions
                    </div>
                    <div className="total-count">
                        <div className="count-text">
                            total<br />
                            $SA
                        </div>
                        <div className="count-num">
                            0
                        </div>
                    </div>
                </div>
                <div className="sec1-btn-con">
                    <button className="main-btn">
                        connect
                    </button>
                </div>
            </div>
        </section>
    </main>
    <footer className="footer">
        <div className="content">
            <div className="copyright">
                COPYRIGHT © 2021. SACRED AMULETS. ALL RIGHTS RESERVED.
            </div>
            <div className="social">
                <ul>
                    <li>
                        <a href="#"><img src="./image/social/twitter.svg" alt=""/></a>
                    </li>
                    <li>
                        <a href="#"><img src="./image/social/discord.svg" alt=""/></a>
                    </li>
                    <li>
                        <a href="#"><img src="./image/social/instagram.svg" alt=""/></a>
                    </li>
                    <li>
                        <a href="#"><img src="./image/social/telegram.svg" alt=""/></a>
                    </li>
                    <li>
                        <a href="#"><img src="./image/social/youtube.svg" alt=""/></a>
                    </li>
                </ul>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
