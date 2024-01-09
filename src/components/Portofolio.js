import logo from './photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Portofolio() {
  return (
    <div>
    <nav class="custom-navbar" data-spy="affix" data-offset-top="20">
        <div class="container">
            <a class="logo" href="#">Moh.Aril</a>         
            <ul class="nav">
                <li class="item">
                    <a class="link" href="#home">Home</a>
                </li>
                <li class="item">
                    <a class="link" href="#about">About</a>
                </li>
                <li class="item">
                    <a class="link" href="#portfolio">Portfolio</a>
                </li>
                <li class="item">
                    <a class="link" href="#testmonial">Testmonial</a>
                </li>
                <li class="item">
                    <a class="link" href="#blog">Blog</a>
                </li>
                <li class="item">
                    <a class="link" href="#contact">Contact</a>
                </li>
                <li class="item ml-md-3">
                    <a href="components.html" class="btn btn-primary">Components</a>
                </li>
            </ul>
            <a href="javascript:void(0)" id="nav-toggle" class="hamburger hamburger--elastic">
                <div class="hamburger-box">
                  <div class="hamburger-inner"></div>
                </div>
            </a>
        </div>          
    </nav>

    
    <header id="home" class="header">
        <div class="overlay"></div>
        <div class="header-content container">
            <h1 class="header-title">
                <div className='Animated-text'>
                <span class="up">HI!</span>
                <span class="down">Nama saya Moh.Aril</span>
                </div>
            </h1>
            <p class="header-subtitle">XII RPL 2 (08)</p>            

            {/* <button class="btn btn-primary">Visit My Works</button> */}
        </div>              
    </header>

    <section class="section pt-0" id="about">
        <div class="container text-center">
            <div class="about">
                <div class="about-img-holder">
                    <img src={logo} class="about-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                </div>
                <div class="about-caption">
                    <p class="section-subtitle">Siapakah Aku ?</p>
                    <h2 class="section-title mb-3">Tentang Saya</h2>
                    <p>
                         Hai!Nama saya Moh.Aril,saya siswa di SMKN 6 Jember dengan jurusan Rekayasa Perangkat Lunak.Saya bertempat tinggal di Gambirono.
                         <hr />
                         <b>Pendidikan</b>
                         <ul>
                            <li>SDN Gambirono 03</li>
                            <li>MTsN 4 Jember</li>
                            <li>SMKN 6 Jember</li>
                         </ul>
                    </p>
                    {/* <button class="btn-rounded btn btn-outline-primary mt-4">Download CV</button> */}
                </div>              
            </div>
        </div>
    </section> 

    <div class="container">
        <footer class="footer">       
            <p class="mb-0">Copyright <script>document.write(new Date().getFullYear())</script> &copy; <a href="#">Moh.Aril</a></p>
            <div class="social-links text-right m-auto ml-sm-auto">
                <a href="javascript:void(0)" class="link"><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                <a href="javascript:void(0)" class="link"><i><FontAwesomeIcon icon={faWhatsapp} /></i></a>
                <a href="javascript:void(0)" class="link"><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                <a href="https://www.instagram.com/bigar.oke/" target='_blank' class="link"><i><FontAwesomeIcon icon={faInstagram} /></i></a>
            </div>
        </footer>
    </div> 
    </div>
  );
}

export default Portofolio;
