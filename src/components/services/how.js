import React from 'react';
import Span from '../elements/span';
import Button from '../button/button';
import Section from './section';
import Title from './title';

const How = () => (
	<Section background="buttermilk">
		<div>
			<Title>How I do it</Title>
			<p>
				<Span size={{small: '20px', medium: '27px'}}>Communication and code.</Span>
				<br/><br/>
				I work with people to realise possible approaches to ideas that meet or exceed goals and expectations. From prototypes, words or visuals I will proceed to bring these ideas to life by forming great websites and applications which once complete will recieve my continued help to manage, support and grow.
			</p>
			<Button href="mailto:mail@danwebb.co">Work With Me</Button>
		</div>
	</Section>
);

export default How;
