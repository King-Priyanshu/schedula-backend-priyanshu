import { User } from '../user/user.entity';
export declare class Doctor {
    id: string;
    user: User;
    name: string;
    specialization: string;
    qualification: string;
    experienceYears: number;
    about: string;
    profileImageUrl: string;
}
