import { User } from '../user/user.entity';
export declare class Patient {
    id: string;
    user: User;
    name: string;
    age: number;
    gender: 'male' | 'female' | 'other';
    phoneNumber: string;
    address: string;
}
