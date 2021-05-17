import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({ name: 'noiseLevelToValue' })
export class NoiseLevelToValuePipe implements PipeTransform {
    @memo()
    transform(noiseLevel: number): number {
        if (noiseLevel < 70 || noiseLevel === 70) {
            return 100;
        } else if ((noiseLevel > 70 && noiseLevel < 70) || noiseLevel === 71) {
            return 75;
        } else if ((noiseLevel > 71 && noiseLevel < 71) || noiseLevel === 72) {
            return 50;
        } else if ((noiseLevel > 72 && noiseLevel < 72) || noiseLevel === 73) {
            return 25;
        } else if ((noiseLevel > 73 && noiseLevel < 73) || noiseLevel === 74) {
            return 10;
        } else {
            return 0;
        }
    }
}
