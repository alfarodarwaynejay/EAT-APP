import React from 'react';
import Webcam from 'react-webcam';
import Modal from 'react-awesome-modal';
import Headline from '../utilities/Headline.js'
import ButtonMaker from '../utilities/ButtonMaker.js';
import Card from '../utilities/Card.js';



class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imageSrc: '',
			camVisible: false
			
		}
	}

	setRef = webcam => {
		this.webcam = webcam;
	}

	capture = () => {
		this.setState({ imageSrc: this.webcam.getScreenshot()})
	}

	toggleCamVisibility = () => {
		this.setState({ camVisible: !this.state.camVisible });
	}

	render() {
		return (
			<div>
				<Headline text='Set Profile Photo' />
				<div className='center w-70'>
					<Card 
						jsx={
							<div className='center dib w-80'>
								<Modal
							      visible={this.state.camVisible}
							      effect={'fadeInUp'}
							      width={'50%'}
							    >
							    	<div className='center w-90'>
								    	<Webcam 
											videoConstraints={{facingMode: 'user'}}
											audio={false}
											width={250}
											height={250}
											screenshotFormat='image/jpeg'
											screenshotQuality={1}
											ref={this.setRef}
										/>
									</div>
							      	<div className='center'>
								        <ButtonMaker 
									     	text='CAPTURE'
									      	style={{width: '250px'}}
									      	className='f6 f5-ns grow pv3 bg-orange' 
									      	onClick={() => {
									      		this.capture();
									      		this.toggleCamVisibility();
									      	}} 
									    />
								    </div>
							    </Modal>

								<img 
									className='br5 shadow-5 w-90' 
									src={this.state.imageSrc || 'https://via.placeholder.com/250'} 
									alt='captured'
									width='250'
									height='250'
								/>
								<h1 className='f5 f4-ns center w-80'>Capture photo will show here</h1>
							</div>
						}
					/>
				</div>

				<div className='center flex-wrap w-70 pv3'>
	      		
		      		<ButtonMaker 
						style={{width: '450px'}}
						text='TAKE PHOTO' 
						onClick={() => this.toggleCamVisibility()} 
						className='f5 f4-ns w-50 bg-orange pa3' 
					/>	
		      	
					<ButtonMaker 
						style={{width: '450px'}}
						text='SAVE PHOTO' 
						onClick={() => {}} 
						className='f5 f4-ns w-50 bg-orange pa3' 
					/>	
		      	</div>
			</div>
		)
	}
}



export default Profile;














