import React from 'react';
import './content.css';


function Content() {
   return (
      <div>
         {/* Header */}
         {/* <section class="">
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
         </section> */}

         <section class="bg-light" id="about">
            <div class="container">
               <div class="row">
                  <div class="col-sm-12 col-md-12">
                     <h3 class="text-center mt-4 text-secondary">Know about us</h3>
                  </div>
               </div>
               <div class="row">
                  <p class="mt-4 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                     sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                     like Aldus PageMaker including versions of Lorem Ipsum</p>
               </div>
            </div>
         {/* </section> */}


         {/* <section class="bg-light mt-5" id="services"> */}
            <div class="container">
               <div class="row text-center">
                  <div class="col-sm-12 col-md-12 mb-4">
                     <h3 class="text-center mt-4 text-secondary">Our Services</h3>
                  </div>
                  <div class="col-md-4">
                     <div class="testimonial mb-5">
                        <div class="avatar mx-auto">
                           <a href='/tts2'><img src="https://i.imgur.com/V4JVlwn.jpg" class="rounded-circle z-depth-1 img-fluid hover_to_zoom" /></a>
                        </div>
                        <h4 class="font-weight-bold dark-grey-text mt-4">Text to Speech</h4>
                        <h6 class="font-weight-bold blue-text my-3">Converter</h6>
                        <p class="font-weight-normal dark-grey-text">
                           This free text to speech Converter will convert the text provided by you into a voice so that you could listen to the text.</p>
                     </div>
                  </div>

                  <div class="col-md-4">
                     <div class="testimonial mb-5">
                        <div class="avatar mx-auto">
                           <a href='/speech'><img src="https://i.imgur.com/w8txiz1.jpg" class="rounded-circle z-depth-1 img-fluid hover_to_zoom" /></a>
                        </div>
                        <h4 class="font-weight-bold dark-grey-text mt-4">Speech to Text</h4>
                        <h6 class="font-weight-bold blue-text my-3">Converter</h6>
                        <p class="font-weight-normal dark-grey-text">This free speech to text Converter will convert the speech provided by you into text.</p>
                     </div>

                  </div>
                  <div class="col-md-4">
                     <div class="testimonial mb-5">
                        <div class="avatar mx-auto ">
                           <a href='#paragraph-generator'><img src="https://i.imgur.com/fP9uXkv.jpg" class="rounded-circle z-depth-1 img-fluid hover_to_zoom" /></a>
                        </div>
                        <h4 class="font-weight-bold dark-grey-text mt-4">Paragraph</h4>
                        <h6 class="font-weight-bold blue-text my-3">Generator</h6>
                        <p class="font-weight-normal dark-grey-text">
                           This free Paragraph Generator will generate complete paragraphs according to the instructions provided by you, so that you can quickly build unique content.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>




         <section class="" id="destinations">
            <div class="container">
               <div class="row">
                  <div class="col-sm-12 col-md-12">
                     {/* <h3 class="text-center mt-4 text-secondary">Favourite Destinations</h3> */}
                  </div>
               </div>
               <div class="row">
                  <div class="col-sm-12 mb-5">
                     <div class="card mt-4 ">
                        {/* <img class="card-img-top" src="https://images.pexels.com/photos/256467/pexels-photo-256467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
                        <div class="card-body">
                           <h4 class="card-title" id='paragraph-generator'>Paragraph Generator</h4>
                           <div class="card_main">
                              <div class="overlap-group26">
                                 <div class="rectangle-20">
                                    <div class="meta-description valign-text-middle var1 font-weight-bolder">Blog title</div>
                                    <textarea class="write-a-descrip-ntext-to-the-ai1 Blogtitle" placeholder="Input Blog title"></textarea>
                                 </div>
                              </div>
                              <div class="overlap-group26">
                                 <div class="rectangle-20">
                                    <div class="meta-description valign-text-middle var1 font-weight-bolder">Blog meta description</div>
                                    <textarea class="write-a-descrip-ntext-to-the-ai1 Blogmetadescription" placeholder="Input Blog meta description"></textarea>
                                 </div>
                              </div>
                              <div class="overlap-group26">
                                 <div class="rectangle-20">
                                    <div class="meta-description valign-text-middle var1 font-weight-bolder">Header</div>
                                    <textarea class="write-a-descrip-ntext-to-the-ai1 Header" placeholder="Input Header"></textarea>
                                 </div>
                              </div>
                              <div>
                                 {/* *********************************************************************** */}
                                 <div class="templatekeyword">
                                    <div class="textInfo valign-text-middle var1 font-weight-bolder">Keywords</div>
                                    <div class="tag-container" id="tag-container">
                                       <input id="templateKeywordInput" placeholder="Enter ↵" />
                                       {/* <img src="../images/aiseo-symble.png" id="ocAiseoLogo" class="ocAiseoLogo" /> */}
                                    </div>
                                 </div>
                                 {/* *********************************************************************** */}

                              </div>
                              <div class="templateSliderAndSelect">
                                 {/* <select class="templateVerients">
                                    <option value="1">1 Variant</option>
                                    <option value="2">2 Variants</option>
                                 </select> */}
                                 {/* <div class="tempGenSlider">
                                    <div class="range-slider">
                                       <input id="aiseo-generate-size" type="range" min="1" max="3" step="1" value="2" name="size" />
                                       <div class="range-labels">
                                          <div class="range-label">Short</div>
                                          <div class="range-label">Medium</div>
                                          <div class="range-label">Long</div>
                                       </div>
                                    </div>
                                 </div> */}
                                 {/* <div class="setting_icon">
                                    <button data-tooltip="Output and creativity settings" class="overview_gear_btn">
                                       <ion-icon name="settings" role="img" class="md hydrated pointer-events-none" aria-label="settings"></ion-icon>
                                    </button>
                                 </div> */}
                              </div>
                              <div class="create_div selectBtnCont" style={{ "text-align": "center" }}>

                                 <button class="btn btn-primary temp_generate">Generate
                                    {/* <div class="spinner-border spinner-border-sm display-none" id="spinner_template" role="status" >
                                    </div> */}
                                 </button>
                                 {/* <svg>
                                    <use xlink:href="#select-arrow-down"></use>
                                 </svg> */}
                              </div>
                              {/* <div class="generateTmpTextDiv display-block">
                                 <textarea class="outputTextArea" id="outputTextArea"></textarea>
                                 <button class="gtCopyToEditor" data-tooltip="Copy" id="gtCopyToEditor" title="Copy">
                                    <img class="copy-outline ion-icon" src="../img/copy-outline.svg" alt="" srcset="" />
                                 </button>
                              </div>
                              <div class="generateTmpTextDiv generateTmpTextDivTwo display-block">
                                 <textarea class="outputTextArea" id="outputTextArea2"></textarea>
                                 <button class="gtCopyToEditor" data-tooltip="Copy" id="gtCopyToEditor2" title="Copy">
                                    <img class="copy-outline ion-icon" src="../img/copy-outline.svg" alt="" srcset="" />
                                 </button>
                              </div> */}
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-12 mb-5">
                     <div class="card mt-4 hover_to_zoom">
                        <img class="card-img-top" src="https://images.pexels.com/photos/256467/pexels-photo-256467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div class="card-body">
                           <h4 class="card-title text-secondary">Stop Wasting Your Time and Money While Writing Paragraphs</h4>
                           <p class="card-text text-secondary">
                              <p>Do you ever feel like you're wasting your time writing paragraphs? Well, with our AI paragraph generator, that will no longer be a problem. Using our easy-to-use interface, you can quickly create paragraphs that are perfect for your needs.</p>

                              <p>Whether you're writing a business proposal, an essay, or anything else, our AI paragraph generator will help you to get the text you need without all the hassle. Simply input the information you need, and our paragraph generator will take care of the rest.</p>

                              <p>We understand that you have other things to do, and that's why we have made our interface as simple as possible. You won't have to spend hours trying to figure out how to use our paragraph generator. Simply enter the information you need, and our AI paragraph generator will take care of the rest.</p>

                              <p>Stop wasting your time and money by writing paragraphs the old way. With our AI paragraph generator, you'll be able to create paragraphs that are both unique and effective in no time at all. Check out our AISEO paragraph generator today!</p>
                           </p>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-12 mb-5 hover_to_zoom">
                     <div class="card mt-4">
                        <img class="card-img-top" src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div class="card-body">
                           <h4 class="card-title text-secondary">Overcome Writers' Block in 5 Seconds!</h4>
                           <p class="card-text text-secondary">
                              <p>If you've ever felt like you can't think of anything to write, you may have experienced writer's block. Writer's block is a condition often associated with stress, in which a person feels unable to think of what to write or how to continue writing.</p>

                              <p>Are you a writer that struggles to find the right words? Are you stuck on a certain paragraph and can't seem to get it out of your head? Don't worry; our AISEO Paragraph Generator is here to help.</p>

                              <p>With just a few simple steps, our Paragraph Generator will take your unfinished paragraph and turn it into a professional and well-written piece. Our smart Paragraph Generator is fast and easy to use, so you won't have to spend hours trying to write a perfect sentence.</p>

                              <p>Our Paragraph Generator is the perfect tool for anyone that wants to improve their writing skills. Whether you're a student that needs to fill up an essay or a business person that needs to write a report, our Paragraph Generator will help you get the job done in no time.</p>

                              <p>Check out AISEO Paragraph Generator today and start overcoming writers' block in seconds!</p>

                              <p>How many words can the AISEO Paragraph Generator Generate </p>
                           </p>
                        </div>
                        {/* <div class="card-footer">
                           <a href="#" class="btn btn-primary">Find Out More!</a>
                        </div> */}
                     </div>
                  </div>
                  <div class="col-sm-12 mb-5 hover_to_zoom">
                     <div class="card mt-4">
                        <img class="card-img-top" src="https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div class="card-body">
                           <h4 class="card-title text-secondary">Turn a Sentence into a Paragraph</h4>
                           <p class="card-text text-secondary">
                              <p>Looking to create a beautiful and informative paragraph? Look no further than AISEO's Paragraph Generator. This tool is perfect for creating long, detailed paragraphs that will capture your audience's attention.</p>

                              <p>With the Paragraph Generator, you can easily turn a sentence into a detailed and informative paragraph. This tool is simple to use and easy to navigate, making it perfect for anyone who wants to create a beautiful and informative paragraph.</p>

                              <p>With the Paragraph Generator, you can easily create a paragraph that will capture your audience's attention. With this tool, you can easily create a paragraph that will be sure to impress your readers. Try our free paragraph generator today and start creating beautiful and informative paragraphs that will capture your audience's attention.</p>
                           </p>
                        </div>
                        {/* <div class="card-footer">
                           <a href="#" class="btn btn-primary">Find Out More!</a>
                        </div> */}
                     </div>
                  </div>
               </div>
            </div>
         </section>


         <section class="" id="FAQ">
            <div class="container">
               <div class="col-sm-12 col-md-12 mb-4">
                  <h3 class="text-center text-secondary mt-4">Frequently Asked Questions</h3>
               </div>
               <div class="accordion" id="accordionExample">
                  <div class="card">
                     <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                           <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              What is a paragraph generator?
                           </button>
                        </h2>
                     </div>

                     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                           <p>Paragraph generators are a type of content writing tool that allows you to create compelling and quality paragraphs quickly. These paragraphs are usually designed to be used in blogs, articles, and other types of content.</p>

                           <p>Paragraph generators are very useful tools that allow you to quickly create compelling paragraphs. These paragraphs are created using a few simple steps. This allows you to create quality content that is both informative and easy to read.</p>

                           <p>Paragraph generators are a great way to quickly create compelling paragraphs. These paragraphs can be used for many different purposes. For example, they can be used to create an introduction to a blog or article, to create a marketing campaign, or to create a persuasive business proposal.</p>

                           <p>As a paragraph generator, AISEO is one of the most powerful and efficient tools available online. It allows you to quickly create compelling paragraphs that are well-written and easy to understand.</p>
                        </div>
                     </div>
                  </div>
                  <div class="card">
                     <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                           <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              How Does a Paragraph Generator Work?
                           </button>
                        </h2>
                     </div>
                     <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                           <p>An AI paragraph generator is a computer program that can generate a paragraph of text in response to a given prompt. The program uses a set of algorithms to determine what words to use and how to arrange them in order to create a coherent sentence.</p>

                           <p>The easiest way to understand how a paragraph generator works is to look at the tools available on its interface. The first step in an interface is to choose a topic. Once you choose a topic, you can quickly create an engaging and intriguing paragraph that is perfect for that particular topic.</p>

                           <p>Once you have chosen a topic and a subtopic, you can choose from a range of different paragraphs, including the first sentence, the second sentence, the third sentence, and so on.</p>
                        </div>
                     </div>
                  </div>
                  <div class="card">
                     <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                           <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              What should I do once I have generated ideas?
                           </button>
                        </h2>
                     </div>
                     <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                           Once you have used a paragraph generator to generate ideas, you can then use those ideas as a starting point for further research or writing.

                           You can also share the generated paragraphs with others to get their feedback on your ideas. If you are using the paragraph generator for academic purposes, make sure to cite the tool in your essay.
                        </div>
                     </div>
                  </div>
                  <div class="card">
                     <div class="card-header" id="headingFour">
                        <h2 class="mb-0">
                           <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                              How Does an AI Paragraph Generator Save Time?
                           </button>
                        </h2>
                     </div>
                     <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body">
                           <p>An AI paragraph generator can save you a lot of time. You don't have to write an entire paragraph by hand. Instead, you just enter the prompt, and the AI paragraph generator will create a paragraph for you.</p>

                           <p>The AI paragraph generator is able to determine the most suitable sentence structure to use in order to create a coherent paragraph. This means that you can be confident that the paragraph you create will be well-written and informative. You can also use an AI paragraph generator to create more than one paragraph. You can use the AI paragraph generator to create paragraphs on any topic. This means that you don't have to worry about topic selection.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         
         <br />
         
      </div>
   );
}


export default Content;