import { Topic } from './topic';

export interface Category {
	id:number;
	title:string;
	topics:Topic[];
}