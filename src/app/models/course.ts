export class Course {
    title: string = '';
    tag: string = '';
    sumary: string = '';
    description: string = '';
    level: number = 0;
    duration: number = 0;
    classes: number;
    views: number;

    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}
