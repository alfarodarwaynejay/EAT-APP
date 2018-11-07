import React from 'react';
import Modal from 'react-awesome-modal';

class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			news: 'ENTER NEWS HERE: ',
			newsVisibility: false
		}
	}

	setNews = (event) => {
		this.setState({news: event.target.value});
		console.log(this.state.news);

	}

	toggleNewsVisibility = () => {
		this.setState({newsVisibility: !this.state.newsVisibility});
	}

	render() {
		return (
			<div className='w-80'>
				<Modal
					visible={this.state.newsVisibility}
					effect={'fadeInUp'}
					width={'80%'}
				>
					<h2>---CONFIRM DATABASE UDATE---</h2>
					<h1 className='w-80 center'><span className='red'>INSERTING: </span>{this.state.news}</h1>
					<div className='flex flex-wrap'>
						<button
							className='center link f6 f4-ns b grow pa3
									   mv2 mh4 bg-orange br-pill hover-bg-red 
									   grow shadow-5 pointer' 
					      	onClick={() => this.toggleNewsVisibility()}
				      	>
				      		CONFIRM
				      	</button>
				      	<button
							className='center link f6 f4-ns b grow pa3
									   mv2 mh4 bg-orange br-pill hover-bg-red 
									   grow shadow-5 pointer' 
					      	onClick={() => { 
					      		this.toggleNewsVisibility();
					      		this.setState({news: ''});
					      	}}
				      	>
				      		CANCEL
				      	</button>
					</div>
				</Modal>
				<div 
					className='center pa3 bg-washed-blue br4 mt0 mb4 shadow-5' 
					style={{background:'rgb(228, 241, 254)'}}
				>
					<h1 className='f4-l f4m f4-ns'>Manage News</h1>
				</div>
				<div className='db pa2 shadow-5  ma5 br4 bg-green center'>
					<h1>Adding News to Database </h1>
					<textarea 
						className='f6 f4-ns b pa3 ma3 ba b--green bg-lightest-blue br3'
						type='text'
						onChange={ this.setNews }
						defaultValue={this.state.news}
					/>
				</div>
				<h1 
						className='f3 f4-ns grow pv3 ph5 w-50 center mv2 mh4 bg-red br-pill grow shadow-5 pointer' 
				      	onClick={() => this.toggleNewsVisibility()}
				      	>
				      	SUBMIT
				</h1>
			</div>
		);

	}
}

export default News;