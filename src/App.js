import React from 'react';
import './style/:style.css'

function App() {
  return (
    <div className="portfolio">
        <img src="http://pluspng.com/img-png/sri-ganesh-hd-png--1600.png"></img>
        <p className="ganpati">गणपति ए नमः</p>
        <div className="container">
          <div className="row">
           <div className="col-lg-3 col-md-12 col-sm-12 personal-info">
             <img className="photo" src="https://i.ibb.co/gMRNGZk/17757489-1068322496605972-2558204878873258258-n.jpg" data-toggle="modal" data-target=".bd-example-modal-lg"></img>
             <h5>Rahul Mishra</h5>
             <p>25 years (14/07/1994)</p>
             <p>(Senior Industrial Engineer)</p>
             <p>Oppo mobiles</p>
          </div>
          <div className="info-content col-lg-9 col-md-12 col-sm-12" style={{color:"white"}}>
            <h4>Personal Information</h4>
            <div>
            <table class="table"  style={{color:"white",alignContent:"center"}}>
                    <tbody>
                      <tr>
                        <td>Father's Name:</td>
                        <td>Kapileshwar Mishra</td>
                      </tr>
                      {/* <tr>
                        <td>Grand Father's Name:</td>
                        <td>Shri. Durganand Mishra</td>
                      </tr> */}
                      <tr>
                        <td>Mother's name:</td>
                        <td>Renu Mishra</td>
                      </tr>
                      <tr>
                        <td>Height:</td>
                        <td>5'9''</td>
                      </tr>
                      <tr>
                        <td>Weight:</td>
                        <td>75kg</td>
                      </tr>
                      <tr>
                        <td>Mool:</td>
                        <td>Sodarpuriya</td>
                      </tr>

                      <tr>
                        <td>Mool Gram:</td>
                        <td>Sarisav</td>
                      </tr>

                      <tr>
                        <td>Dera:</td>
                        <td>Ayachi Mishra</td>
                      </tr>
                      
                      <tr>
                        <td>Gotra:</td>
                        <td>Shandilya</td>
                      </tr>
                    </tbody>
                  </table>
            </div>
          </div>
          </div>


        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-12"  style={{color:"white",marginTop:"50px"}}>
            <h4>Education Qualification</h4>
            <div>
            <table class="table"  style={{color:"white"}}>
                    <tbody>
                      <tr>
                        <td>Matriculation:</td>
                        <td>9.4 CGPA(CBSE)</td>
                      </tr>
                      <tr>
                        <td> intermediate:</td>
                        <td>88%(CBSE)</td>
                      </tr>
                      <tr>
                        <td>B.tech(Maechanical):</td>
                        <td>9.0 CGPA (Amity University)</td>
                      </tr>
                    </tbody>
                  </table>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-12"  style={{color:"white",marginTop:"50px"}}>
            <h4>Father's Introduction</h4>
            <div>
            <table class="table"  style={{color:"white"}}>
                    <tbody>
                      <tr>
                        <td>Name:</td>
                        <td>kapileshwar Mishra</td>
                      </tr>
                      <tr>
                        <td> Date of birth:</td>
                        <td>04/02/1968</td>
                      </tr>
                      <tr>
                        <td>Qualification:</td>
                        <td>M.com from L.N.M.U</td>
                      </tr>
                      <tr>
                        <td>job:</td>
                        <td>Accounts manager in MMC Pvt. Ltd. </td>
                      </tr>
                    </tbody>
                  </table>
            </div>
          </div>
        </div>


      <div className="row">
        <div className="col-lg-6 col-sm-12 col-md-12"  style={{color:"white",marginTop:"50px"}}>
          <h4>Mother's Introduction</h4>
          <div>
          <table class="table"  style={{color:"white"}}>
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>Renu Mishra</td>
                    </tr>
                    <tr>
                      <td> Work:</td>
                      <td>Housewife</td>
                    </tr>
                    <tr>
                      <td>Qualification:</td>
                      <td>Matriculation</td>
                    </tr>
                  </tbody>
                </table>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-12"  style={{color:"white",marginTop:"50px"}}>
          <h4>Brother's Introduction</h4>
          <div>
          <table class="table"  style={{color:"white"}}>
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>Babloo Mishra</td>
                    </tr>
                    <tr>
                      <td> Date of birth:</td>
                      <td>01/01/1998</td>
                    </tr>
                    <tr>
                      <td>Qualification:</td>
                      <td>B.tech (CSE)</td>
                    </tr>
                    <tr>
                      <td>job:</td>
                      <td>(Tcs, Capegemini ,To The New)</td>
                    </tr>
                  </tbody>
                </table>
          </div>
        </div>
      </div>




      <div className="row">
        <div className="col-lg-6 col-sm-12 col-md-12"  style={{color:"white",marginTop:"50px"}}>
          <h4>Sister's Introduction</h4>
          <div>
          <table class="table"  style={{color:"white"}}>
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>Jyoti Jha</td>
                    </tr>
                    <tr>
                      <td> Work:</td>
                      <td>Deputy Branch manager (ICICI Bank)</td>
                    </tr>
                    {/* <tr>
                      <td>Qualification:</td>
                      <td>B.com from Delhi University</td>
                    </tr> */}
                    <tr>
                      <td>Marital Status:</td>
                      <td>Married</td>
                    </tr>
                  </tbody>
                </table>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-12"  style={{color:"white",marginTop:"50px"}}>
          <h4>Brother in law Introduction</h4>
          <div>
          <table class="table"  style={{color:"white"}}>
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>Suraj jha</td>
                    </tr>
                    <tr>
                      <td> Date of birth:</td>
                      <td>23/09/1988</td>
                    </tr>
                    <tr>
                      <td>Work:</td>
                      <td>Business(Arch System)</td>
                    </tr>
                  </tbody>
                </table>
          </div>
        </div>
      </div>



      <div className="row">
        <div className="col-lg-6 col-sm-12 col-md-12"  style={{color:"white",marginTop:"50px"}}>
          <h4>Grandfather's Introduction(Father's side):</h4>
          <div>
          <table class="table"  style={{color:"white"}}>
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>Shri. Durganand Mishra</td>
                    </tr>
                    <tr>
                      <td> Age:</td>
                      <td>86 years</td>
                    </tr>
                    {/* <tr>
                      <td>Qualification:</td>
                      <td>B.com from Delhi University</td>
                    </tr> */}
                    <tr>
                      <td>job:</td>
                      <td>Retired gov. employee from last 26 years</td>
                    </tr>
                  </tbody>
                </table>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-12"  style={{color:"white",marginTop:"50px"}}>
          <h4>Uncle's Introduction</h4>
          <div>
          <table class="table"  style={{color:"white"}}>
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>Shri. Kameshwar Mishra</td>
                    </tr>
                    <tr>
                      <td> Age:</td>
                      <td>60 years</td>
                    </tr>
                    <tr>
                      <td>Qualification:</td>
                      <td>Matriculation</td>
                    </tr>
                  </tbody>
                </table>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 col-sm-12 col-md-12"  style={{color:"white",marginTop:"50px"}}>
          <h4>Grandfather's Introduction(Mother's side):</h4>
          <div>
          <table class="table"  style={{color:"white"}}>
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>Late. Shri. Shiv Shankar Jha</td>
                    </tr>
                    <tr>
                      <td> Qualification:</td>
                      <td>B.com</td>
                    </tr>
                    {/* <tr>
                      <td>Qualification:</td>
                      <td>B.com from Delhi University</td>
                    </tr> */}
                    <tr>
                      <td>Worked as:</td>
                      <td>Bank Manager in Jharkhand</td>
                    </tr>
                    <tr>
                      <td>
                        Mool:
                      </td>
                      <td>
                      Pujilwar Malangia
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Gotra:
                      </td>
                      <td>
                        Katyani
                      </td>
                    </tr>
                  </tbody>
                </table>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-12"  style={{color:"white",marginTop:"50px"}}>
          <h4>Maternal Uncle's Introduction (MAMA)</h4>
          <div>
          <table class="table"  style={{color:"white"}}>
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>Mr. Sanjay Jha</td>
                    </tr>
                    <tr>
                      <td>Qualification:</td>
                      <td>Bachelor of Arts</td>
                    </tr>
                    <tr>
                      <td>job:</td>
                      <td>Senior clerk in health department (Jharkhand Government)</td>
                    </tr>
                  </tbody>
                </table>
          </div>
        </div>
      </div>
    </div>
      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100 h-100" src="https://scontent.fluh2-1.fna.fbcdn.net/v/t1.0-9/17757489_1068322496605972_2558204878873258258_n.jpg?_nc_cat=100&_nc_oc=AQlTvf4fdjrvsoUK-vCdlCCLe72-KquO4QXNfXsLMpToDPUfJseur-_Nn1kO_0g3GO0&_nc_ht=scontent.fluh2-1.fna&oh=9734b99c7bef66ef4a3470227d30ca74&oe=5DEB2A8B" alt="First slide"/>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block h-100 w-100" src="https://scontent.fluh2-1.fna.fbcdn.net/v/t1.0-9/50436398_1723462137758668_2737086497718009856_n.jpg?_nc_cat=102&_nc_oc=AQmQOFTeFYhaLeQn__TB9v9XWcNt0WuTaNrzZ_1Y1IjsMTN3dIozulHHrUNdGPsjM-w&_nc_ht=scontent.fluh2-1.fna&oh=332d97fd44c561bf223576b540bd0ffb&oe=5DA462DA" alt="Second slide"/>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block h-100 w-100" src="https://scontent.fluh2-1.fna.fbcdn.net/v/t1.0-9/50628555_1722111454560403_7591973153790754816_n.jpg?_nc_cat=108&_nc_oc=AQnbrK7u3Q1eHyJ9plVEPlaTOYG39FM3PkgJGqQEGxPsJ5ZjgnBkBvs0_djhhKBm0ek&_nc_ht=scontent.fluh2-1.fna&oh=a1e5d71b102cfd1550de858c334bd1c7&oe=5DAFBCF9" alt="Third slide"/>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 h-100" src="https://scontent.fluh2-1.fna.fbcdn.net/v/t1.0-9/50661321_1721694901268725_4651950160006348800_n.jpg?_nc_cat=102&_nc_oc=AQnWZkXvc1GNv6nGth4NT1vc0uQB_vFmIPNNybJAtBPRK7UEfo2vnwMxCCAJM1M275s&_nc_ht=scontent.fluh2-1.fna&oh=ec5bb803461925c18c058752711c790f&oe=5DA75F1C" alt="Fourth slide"/>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block h-100 w-100" src="https://scontent.fluh2-1.fna.fbcdn.net/v/t1.0-9/50734578_1722111377893744_2161292521907421184_n.jpg?_nc_cat=104&_nc_oc=AQlSYSH7CxrSgVIIufROisMmbtF4DeTW08BSTBBBeyu8GRzHMMGWUU-7YoILmzMSKGU&_nc_ht=scontent.fluh2-1.fna&oh=4673d5ec0d846cd58e79de06943299ce&oe=5DA9EFA1" alt="Third slide"/>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
        </div>
      </div>      
    </div>
  );
}

export default App;
