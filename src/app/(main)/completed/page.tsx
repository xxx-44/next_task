import TaskCard from '@/component/TaskCard/TaskCard';
import { TaskDocument } from '@/models/task';
import React from 'react';

const getCompletedTasks = async (): Promise<TaskDocument[]> => {
	const response = await fetch(`${process.env.API_URL}/tasks/completed`, { cache: 'no-store' });
	if (response.status !== 200) {
		throw new Error();
	}

	const data = await response.json();
	return data.tasks as TaskDocument[];
};

const page = async () => {
	const completedTasks = await getCompletedTasks();

	return (
		<div className='text-gray-800 p-8 h-full overflow-y-auto pb-24'>
			<header className='flex justify-between items-center'>
				<h1 className='text-2xl font-bold items-center'>Completed Tasks</h1>
			</header>
			<div className='mt-8 flex flex-wrap gap-4'>
				{completedTasks.map((task) => (
					<TaskCard key={task._id} task={task} />
				))}
			</div>
		</div>
	);
};

export default page;
export const config = { runtime: 'edge' };
