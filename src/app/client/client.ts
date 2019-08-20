import { Technology } from './technology';

export interface Client {
    name: string;
    jobTitle: string;
    when: string;
    summary: string;
    projectStyle: string;
    testTech: string[];
    technologies: Technology[];
}
