import { ApiProperty } from "@nestjs/swagger";

class Timeseries {
    @ApiProperty()
    timebucket: Date;

    @ApiProperty({description: "measures value based on measure query provided"})
    value: number;
    
    constructor(timebucket: Date, value: number) {
        this.timebucket = timebucket;
        this.value = value;
    }
}

export default Timeseries;