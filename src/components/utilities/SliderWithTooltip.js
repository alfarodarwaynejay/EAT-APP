import React from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

const showPercent = (value) => `${value}%`;
const WithTooltip = createSliderWithTooltip(Slider);

const SliderWithTooltip = ({ onChange }) => {
	
	return (
		<WithTooltip
			tipFormatter={showPercent}
	        defaultValue={75}
	        min={50}
	        max={100}
	        trackStyle={{ backgroundColor: '#357EDD', height: 10 }}
	        handleStyle={{
	          borderColor: '#AAAAAA',
	          height: 28,
	          width: 28,
	          marginLeft: -14,
	          marginTop: -9,
	          backgroundColor: '#F4F4F4',
	        }}
	        railStyle={{ backgroundColor: '#FF4136', height: 10 }}
	        onChange={onChange}
        />
    );
}

export default SliderWithTooltip;