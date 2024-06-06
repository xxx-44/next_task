import Link from 'next/link';
import { FaPen } from 'react-icons/fa';

interface TaskEditButtonProps {
	id: string;
}

const TaskEditButton: React.FC<TaskEditButtonProps> = ({ id }) => {
	return (
		<Link href={`/edit/${id}`}>
			<FaPen className='text-gray-500 hover:text-black text-lg cursor-pointer' />
		</Link>
	);
};

export default TaskEditButton;
