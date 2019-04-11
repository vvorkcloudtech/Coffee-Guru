import React from 'react';

class Login extends React.Component{

  render(){
  
  return(

  <div>
  <section id="contact">
			<div class="section-content">
				<h1 class="section-header">Get in <span class="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with us</span></h1>
				<h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
			</div>
			<div class="contact-section">
			<div class="container">
			<div className="row">
			<div className="col-md-6">
			
				<form>
					<div class="col-md-12 form-line">
			  			<div class="form-group">
			  				<label for="exampleInputUsername">Your name</label>
					    	<input type="text" class="form-control" id="" placeholder=" Enter Name" />
				  		</div>
				  		<div class="form-group">
					    	<label for="exampleInputEmail">Email Address</label>
					    	<input type="email" class="form-control" id="exampleInputEmail" placeholder=" Enter Email id" />
					  	</div>	
					  	<div class="form-group">
					    	<label for="telephone">Mobile No.</label>
					    	<input type="tel" class="form-control" id="telephone" placeholder=" Enter 10-digit mobile no." />
			  			</div>
			  		</div>
			  		<div class="col-md-12">
			  			<div class="form-group">
			  				<label for ="description"> Message</label>
			  			 	<textarea  class="form-control" id="description" placeholder="Enter Your Message"></textarea>
			  			</div>
			  			<div>

			  				<button type="button" class="btn btn-default submit"><i class="fa fa-paper-plane" aria-hidden="true"></i>  Send Message</button>
			  			</div>
			  			
					</div>
				</form>
				</div>
				<div className="col-md-6">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108819.85494633624!2d74.22934346618167!3d31.53458242171145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919067467f75687%3A0xe29c8fb3d74b59bb!2sCoffee+Planet!5e0!3m2!1sen!2s!4v1554792342674!5m2!1sen!2s" width="600" height="450"  allowfullscreen></iframe>
				</div>
			</div>
            </div>
			</div>
		</section>
  </div>

  )
  }
  }

export default Login;