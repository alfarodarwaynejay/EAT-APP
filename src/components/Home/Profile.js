import React from 'react';
import { connect } from 'react-redux';
import Webcam from 'react-webcam';
import Modal from 'react-awesome-modal';
import Headline from '../utilities/Headline.js'
import ButtonMaker from '../utilities/ButtonMaker.js';
import Card from '../utilities/Card.js';

import { 
	setImageSrc,
	toggleCamVisibility,
	profileReset,
	setProfilePix
} from '../../redux/actions.js';

const mapStateToProps = state => {
	return {
		user_id: state.setHomeState.user_id,
		imgSrc: state.setProfileState.imageSrc,
		camVisible: state.setProfileState.camVisible,
		
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setImgSrc: src => dispatch(setImageSrc(src)),
		camVisibility: bool => dispatch(toggleCamVisibility(!bool)),
		sendProfile: value => dispatch(setProfilePix(value)),
		resetProdile: () => dispatch(profileReset())
	};
};

class Profile extends React.Component {
	componentDidMount() {
		//this.props.resetProfile()
	}

	setRef = webcam => {
		this.webcam = webcam;
	}

	render() {
		const { 
			imgSrc,
			camVisible,
			user_id,
			setImgSrc,
			camVisibility,
			sendProfile
		} = this.props;

		return (
			<div>
				<Headline text='Set Profile Photo' />
				<div className='center w-70'>
					<Card 
						jsx={
							<div className='center dib w-80'>
								<Modal
							      visible={camVisible}
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
									      		setImgSrc(this.webcam.getScreenshot());
									      		camVisibility(camVisible);
									      	}} 
									    />
								    </div>
							    </Modal>

								<img 
									className='br5 shadow-5 w-90' 
									src={imgSrc || 'https://via.placeholder.com/250'} 
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
						onClick={() => camVisibility(camVisible)} 
						className='f5 f4-ns w-50 bg-orange pa3' 
					/>	
		      	
					<ButtonMaker 
						style={{width: '450px'}}
						text='SAVE PHOTO' 
						onClick={() => {
							let value = { user_id: user_id, img_src: imgSrc };
							sendProfile(value);
							console.log(value);
						}} 
						className='f5 f4-ns w-50 bg-orange pa3' 
					/>	
		      	</div>
			</div>
		)
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Profile);














