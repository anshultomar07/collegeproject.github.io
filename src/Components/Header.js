import React from 'react';

function Header() {
  return (
    // <div className='home'>
    //   <h1>Home</h1>
    // </div>

    <div>
         <section class="">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-100" src="https://i.imgur.com/jrWrcA6.jpg" alt="First slide" style={{ height: "auto" }} />
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100" src="https://i.imgur.com/dDrA5ox.jpg" alt="Second slide" style={{ height: "auto" }} />
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100" src="https://i.imgur.com/VHU8lJY.jpg" alt="Third slide" style={{ height: "auto" }} />
                  </div>
               </div>
            </div>
         </section>
    </div>
  );
}

export default Header;