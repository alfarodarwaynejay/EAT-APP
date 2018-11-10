import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-awesome-modal';
import Headline from '../../utilities/Headline.js'
import ButtonMaker from '../../utilities/ButtonMaker.js'

import { 
	setNewsText,
	setNewsVisible,
	submitNews
} from '../../../redux/actions.js';

const mapStateToProps = state => {
	return {
		news: state.setNewsState.news,
		newsVisibility: state.setNewsState.newsVisibility,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		setNews: value => dispatch(setNewsText(value)),
		toggleNewsVisibility: visible => dispatch(setNewsVisible(!visible))

	}
}

class News extends React.Component {

	render() {
		const { news, newsVisibility, setNews, toggleNewsVisibility } = this.props;

		return (
			<div className='w-80'>
				<Modal
					visible={newsVisibility}
					effect={'fadeInUp'}
					width={'80%'}
				>
					<h2>---CONFIRM DATABASE UDATE---</h2>
					<h1 className='w-80 center'><span className='red'>INSERTING: </span>{news}</h1>
					<div className='center flex flex-wrap w-80 justify-between'>
						
				      	<ButtonMaker 
				      		text='CONFIRM' 
				      		onClick={() => {
				      			toggleNewsVisibility(newsVisibility);
				      			console.log(news);
				      		}} 
				      		className='b link f6 f4-ns grow pa3 bg-orange hover-bg-red' 
				      	/>
				      	
				      	<ButtonMaker 
				      		text='CANCEL' 
				      		onClick={() => { 
					      		toggleNewsVisibility(newsVisibility);
					      		setNews('');
					      	}} 
				      		className='b link f6 f4-ns grow pa3 bg-orange hover-bg-red' 
				      	/>
					</div>
				</Modal>
				<Headline text='Manage News' />
				<div className='db pa2 shadow-5  ma5 br4 bg-green center'>
					<h1>Add News to Database </h1>
					<textarea 
						className='f6 f4-ns b pa3 ma3 ba b--green bg-lightest-blue br3 w-80'
						type='text'
						onChange={ (event) => setNews(event.target.value) }
						placeholder='ENTER NEWS HERE:'
						value={news}
					/>
				</div>
				<ButtonMaker 
		      		text='SUBMIT' 
		      		onClick={() => toggleNewsVisibility(newsVisibility)} 
		      		className='f3 f4-ns pv3 ph5 w-50 bg-red' 
		      	/>
			</div>
		);

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(News);