export class WeatherConditions {
    text: string;
    icon: string;
    code: number;

    constructor(data: any) {
        if (data) {
            this.text = data.text;
            this.icon = data.icon;
            this.code = data.code;
        }
        else {
            this.text = '';
            this.icon = '';
            this.code = 0;
        }
    }
}
