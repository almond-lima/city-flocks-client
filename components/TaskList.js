import React from 'react';
import {
	Container,
	Header,
	Text,
	List,
	ListItem,
	Title,
	Subtitle,
	Right,
	Icon
} from 'native-base';
import DIMENSIONS from '../constants/Layout';

const listItemStyle = {
	flexDirection: 'row',
	justifyContent: 'space-between'
};

const taskScoreStyle = {
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'flex-end',
	width: DIMENSIONS.window.width * 0.4
};

const completedItemStyle = {
	textDecorationLine: 'line-through'
};

const headerStyle = {
	flexDirection: 'column',
	alignItems: 'center',
	marginTop: 24,
	zIndex: 2
};

const highlight = '#eb10b7';
const gray = '#999';

const TaskList = props => {
	const { event, teamTasks } = props;
	return event ? (
		<Container>
			<Header style={headerStyle}>
				<Title>Tasks</Title>
				<Subtitle>Event: {event.name}</Subtitle>
			</Header>
			<List avatar style={{zIndex: 2}}>
				{
					(teamTasks.length > 0) && teamTasks.map(task => {
						const completed = task.completed;
						let iconName = `checkbox-${completed ? 'marked' : 'blank'}-outline`;
						let iconColor = completed ? highlight : gray;

						return (
						<ListItem key={task.taskId} style={listItemStyle}>
							<Text style={{width: DIMENSIONS.window.width * 0.6}}>
								{task.description}
							</Text>
							<Right style={taskScoreStyle}>
								<Text note>{`${task.points} pts`}</Text>
								<Icon
									style={{color: iconColor}}
									type="MaterialCommunityIcons"
									name={iconName} />
							</Right>
						</ListItem>);
					})
				}

				<ListItem style={listItemStyle}>
					<Text style={{textAlign: 'right'}}>
						TOTAL POINTS:
					</Text>
					<Right style={taskScoreStyle}>
						<Text>190 pts</Text>
					</Right>
				</ListItem>
			</List>
		</Container>
	) : null;
};

export default TaskList;
