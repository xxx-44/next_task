import mongoose from 'mongoose';

export const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI || '');
	} catch (error) {
		console.log('DB eroor');
		throw new Error();
	}
};
