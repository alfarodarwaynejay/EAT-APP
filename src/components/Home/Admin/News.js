import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-awesome-modal';
import Headline from '../../utilities/Headline.js'
import ButtonMaker from '../../utilities/ButtonMaker.js'

import { 
	setNewsText,
	setNewsVisible,
	onSubmitNews,
	resetSubmitNews,
	setHomeDisplay,
	setAdminRoute
} from '../../../redux/actions.js';

const mapStateToProps = state => {
	return {
		news: state.setNewsState.news,
		newsVisibility: state.setNewsState.newsVisibility,
		submitNews: state.setNewsState.submitNews,
		submitSuccess: state.setNewsState.submitNewsSuccess,
		submitError: state.setNewsState.submitNewsError,
		submitPending: state.setNewsState.submitIsPending

	};
}

const mapDispatchToProps = dispatch => {
	return {
		setNews: value => dispatch(setNewsText(value)),
		toggleNewsVisibility: visible => dispatch(setNewsVisible(!visible)),
		onNewsSubmit: news => dispatch(onSubmitNews(news)),
		submitNewsReset: () => dispatch(resetSubmitNews()),
		goHome: route => dispatch(setHomeDisplay(route)),
		goAdmin: route => dispatch(setAdminRoute(route))
	}
}

class News extends React.Component {

	componentWillUnmount() {
		this.props.submitNewsReset();
	}

	render() {
		const { 
			submitNews, 
			newsVisibility, 
			setNews, 
			toggleNewsVisibility, 
			onNewsSubmit,
			submitPending,
			submitError,
			submitSuccess,
			goHome,
			goAdmin
		} = this.props;

		return (
			<div className='w-80'>
				<Modal //this modal will always show while fetching to server
		          visible={submitPending}
		          effect={'fadeInUp'}
		          width={'50%'}
		        >
		          <h1 className='red f4 f3-ns'>SUBMITTING NEWS TO SERVER...</h1>
		        </Modal>

		        <Modal //if wrong login this modal will show
		          visible={!!submitError || !!submitSuccess}
		          effect={'fadeInUp'}
		          width={'50%'}
		        >
		          <h1 className='red f4 f3-ns'>
		          	{
		          		(!!submitError ?
		          		'SOMETHING WENT WRONG WHILE UPDATING SERVER'
		          		: 'NEWS UPDATE SUCCESSFUL')
		          	}
		          </h1>
		          
		              <ButtonMaker 
		                text='HOME'
		                className='link f6 f4-ns bg-orange hover-bg-red pa3 w-80' 
		                onClick={() => goHome('defaultHome')} 
		              />
		              <ButtonMaker 
		                text='ADMIN'
		                className='link f6 f4-ns bg-orange hover-bg-red pa3 w-80' 
		                onClick={() => goAdmin('adminHome')} 
		              />
		        </Modal>

				<Modal
					visible={newsVisibility}
					effect={'fadeInUp'}
					width={'80%'}
				>
					<h2>---CONFIRM DATABASE UDATE---</h2>
					<h1 className='w-80 center'><span className='red'>INSERTING: </span>{submitNews}</h1>
					<div className='center flex flex-wrap w-50'>
						
				      	<ButtonMaker 
				      		text='CONFIRM' 
				      		onClick={() => {
				      			toggleNewsVisibility(newsVisibility);
				      			onNewsSubmit(submitNews);
				      			console.log(submitNews);
				      		}} 
				      		className='b link f6 f4-ns grow pa3 bg-orange hover-bg-red' 
				      	/>
				      	<div className='mh5'></div>
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
						value={submitNews}
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