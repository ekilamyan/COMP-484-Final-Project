export class WeatherLocation {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    localtime: string;

    constructor(data: any) {
        if (data) {
            this.name = data.text;
            this.region = data.icon;
            if (data.code == "United States of America") {
                this.country = "USA";
            }
            else if (data.code == "United Arab Emirates") {
                this.country = "UAE";
            }
            else if (data.code == "United Kingdom") {
                this.country = "UK";
            }
            else {
                this.country = data.code;
            }
            this.lat = data.lat;
            this.lon = data.lon;
            this.localtime = data.localtime;
        } else {
            this.name = '';
            this.region = '';
            this.country = '';
            this.lat = 0;
            this.lon = 0;
            this.localtime = '';
        }
    }
}