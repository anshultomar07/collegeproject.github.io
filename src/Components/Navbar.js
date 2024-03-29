import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useLocation } from 'react-router-dom';


function Navbar() {

  const location = useLocation();
  const isHomePage = location.pathname === '/';


  return (
    <section class="navbar-dark bg-dark header">
       <div class="container">
          <div class="row">
           <div class="col-sm-12"> 
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand text-white" href="/">AJKM Content Writer</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">

                  <li class="nav-item">
                    <a class="nav-link " href="/">Home<span class="sr-only">(current)</span></a>
                  </li>

                  {isHomePage && <li class="nav-item ">
                    <a class="nav-link " href="#about">About<span class="sr-only">(current)</span></a>
                  </li>}
                  {/* <li class="nav-item">
                    <a class="nav-link" href="#destinations">Destinations<span class="sr-only">(current)</span></a>
                  </li> */}
                  
                  {/* <li class="nav-item">
                    <a class="nav-link " href="#services">Services<span class="sr-only">(current)</span></a>
                  </li> */}
              
                  {/* <li class="nav-item">
                    <a class="nav-link " href="/speech">Speech<span class="sr-only">(current)</span></a>
                  </li> */}

                  {location.pathname === '/tts3' && <li class="nav-item">
                    <a class="nav-link " href="/tts">Text to Speech<span class="sr-only">(current)</span></a>
                  </li>}

                  {/* <li class="nav-item">
                    <a class="nav-link " href="/tts2">TTS2<span class="sr-only">(current)</span></a>
                  </li> */}

                  {location.pathname === '/tts' && <li class="nav-item">
                    <a class="nav-link " href="/tts3">Speech to Text<span class="sr-only">(current)</span></a>
                  </li>}

                  <li class="nav-item">
                  <a class="nav-link" href="http://localhost:3000/" target='_blank'>Content Generator<span class="sr-only">(current)</span></a>
                  </li>
                  {isHomePage && <li class="nav-item dropdown">
                  <a class="nav-link" href="#FAQ">FAQ<span class="sr-only">(current)</span></a>
                  </li>}
                  
                  {/* <li class="nav-item">
                    <a class="nav-link " href="/test">Test<span class="sr-only">(current)</span></a>
                  </li> */}

                </ul>
                
              </div>
             </nav>
            </div>
          </div>
        </div>
    </section> 
  );
}

export default Navbar;
